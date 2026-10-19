import * as THREE from 'three'

const RADIUS = 1.48
const radians = THREE.MathUtils.degToRad

function coordinate(longitude, latitude, radius = RADIUS) {
  const lat = radians(latitude)
  const lon = radians(longitude)
  return new THREE.Vector3(
    radius * Math.cos(lat) * Math.cos(lon),
    radius * Math.sin(lat),
    -radius * Math.cos(lat) * Math.sin(lon)
  )
}

function createLandTexture(data, palette) {
  const canvas = document.createElement('canvas')
  canvas.width = 2048
  canvas.height = 1024
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  const mask = document.createElement('canvas')
  mask.width = canvas.width
  mask.height = canvas.height
  const maskCtx = mask.getContext('2d', { willReadFrequently: true })
  maskCtx.fillStyle = '#ffffff'
  for (const feature of data.features) {
    const polygons =
      feature.geometry.type === 'Polygon'
        ? [feature.geometry.coordinates]
        : feature.geometry.coordinates
    for (const polygon of polygons) {
      maskCtx.beginPath()
      for (const ring of polygon) {
        ring.forEach(([lon, lat], index) => {
          const x = ((lon + 180) / 360) * canvas.width
          const y = ((90 - lat) / 180) * canvas.height
          if (index === 0) maskCtx.moveTo(x, y)
          else maskCtx.lineTo(x, y)
        })
        maskCtx.closePath()
      }
      maskCtx.fill('evenodd')
    }
  }
  // Recolor the opaque mask separately, retaining transparent oceans.
  const gradient = maskCtx.createLinearGradient(0, 0, 0, mask.height)
  gradient.addColorStop(0, palette.getPropertyValue('--globe-land-high').trim())
  gradient.addColorStop(0.45, palette.getPropertyValue('--globe-land-mid').trim())
  gradient.addColorStop(1, palette.getPropertyValue('--globe-land-low').trim())
  maskCtx.globalCompositeOperation = 'source-in'
  maskCtx.fillStyle = gradient
  maskCtx.fillRect(0, 0, mask.width, mask.height)
  ctx.fillStyle = palette.getPropertyValue('--globe-ocean').trim()
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(mask, 0, 0)
  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  return { texture, mask: maskCtx.getImageData(0, 0, mask.width, mask.height) }
}

function themedMaterial(Material, colorToken, options = {}) {
  const material = new Material(options)
  material.userData.colorToken = colorToken
  return material
}

function line(points, colorToken, opacity = 0.2) {
  return new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(points),
    themedMaterial(THREE.LineBasicMaterial, colorToken, { transparent: true, opacity })
  )
}

export async function createGlobeScene({
  canvas,
  stage,
  container,
  signal,
  motionEnabled,
  onUnavailable
}) {
  const response = await fetch(`${import.meta.env.BASE_URL}geo/land-110m.json`, { signal })
  if (!response.ok) throw new Error('Globe land geometry is unavailable')
  const data = await response.json()
  signal.throwIfAborted()

  const scene = new THREE.Scene()
  let renderer
  let resizeObserver
  let visibilityObserver
  let frame = 0
  let disposed = false
  let unavailable = false
  let moving = motionEnabled
  let visible = true
  let lastTime = 0
  let elapsed = 0
  let dragging = false
  let activePointer = null
  let pointerX = 0
  let pointerY = 0
  let appliedTheme = null
  let focusTarget = null
  let focusElapsed = 0
  const focusStart = new THREE.Quaternion()
  const listeners = []
  const listen = (target, event, handler, options) => {
    target.addEventListener(event, handler, options)
    listeners.push(() => target.removeEventListener(event, handler, options))
  }
  const dispose = () => {
    if (disposed) return
    disposed = true
    cancelAnimationFrame(frame)
    resizeObserver?.disconnect()
    visibilityObserver?.disconnect()
    listeners.forEach((remove) => remove())
    const textures = new Set()
    const geometries = new Set()
    const materials = new Set()
    scene.traverse((object) => {
      if (object.geometry) geometries.add(object.geometry)
      for (const material of [].concat(object.material || [])) {
        materials.add(material)
        for (const value of Object.values(material)) {
          if (value?.isTexture) textures.add(value)
        }
      }
    })
    textures.forEach((texture) => texture.dispose())
    geometries.forEach((geometry) => geometry.dispose())
    materials.forEach((material) => material.dispose())
    renderer?.dispose()
  }

  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'low-power'
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.setClearColor(0x000000, 0)
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 40)
    camera.position.set(0, 0.13, 6.6)
    camera.lookAt(0, 0, 0)
    const ambient = new THREE.AmbientLight(0xb4d2b0, 1.3)
    scene.add(ambient)
    const sun = new THREE.DirectionalLight(0xe5efd2, 2.8)
    sun.position.set(-3, 4, 5)
    scene.add(sun)
    const rim = new THREE.DirectionalLight(0x4eaa8b, 1.8)
    rim.position.set(3, -1, -3)
    scene.add(rim)

    const world = new THREE.Group()
    world.rotation.set(0.12, radians(155), -0.16)
    scene.add(world)
    const { texture, mask } = createLandTexture(data, getComputedStyle(container))
    texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 4)
    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(RADIUS, 80, 64),
      new THREE.MeshPhongMaterial({ map: texture, shininess: 14, specular: 0x365f48 })
    )
    world.add(earth)

    const grid = new THREE.Group()
    for (let lat = -60; lat <= 60; lat += 30) {
      grid.add(
        line(
          Array.from({ length: 181 }, (_, index) =>
            coordinate(index * 2 - 180, lat, RADIUS + 0.005)
          ),
          '--globe-grid',
          0.1
        )
      )
    }
    for (let lon = -180; lon < 180; lon += 30) {
      grid.add(
        line(
          Array.from({ length: 91 }, (_, index) => coordinate(lon, index * 2 - 90, RADIUS + 0.005)),
          '--globe-grid',
          0.1
        )
      )
    }
    world.add(grid)

    const positions = []
    for (let lat = -58; lat < 82; lat += 2.1) {
      const spacing = 2.1 / Math.cos(radians(lat))
      for (let lon = -180; lon < 180; lon += spacing) {
        const x = Math.min(mask.width - 1, Math.floor(((lon + 180) / 360) * mask.width))
        const y = Math.min(mask.height - 1, Math.floor(((90 - lat) / 180) * mask.height))
        if (mask.data[(y * mask.width + x) * 4 + 3] > 128)
          coordinate(lon, lat, RADIUS + 0.009).toArray(positions, positions.length)
      }
    }
    const dots = new THREE.BufferGeometry()
    dots.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    world.add(
      new THREE.Points(
        dots,
        themedMaterial(THREE.PointsMaterial, '--globe-dot', {
          size: 0.012,
          transparent: true,
          opacity: 0.48
        })
      )
    )

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(RADIUS * 1.025, 64, 48),
      new THREE.ShaderMaterial({
        uniforms: { color: { value: new THREE.Color(0x91c59a) } },
        vertexShader: `varying vec3 vNormal; varying vec3 vView;
          void main() { vec4 p = modelViewMatrix * vec4(position, 1.0);
          vNormal = normalize(normalMatrix * normal); vView = normalize(-p.xyz);
          gl_Position = projectionMatrix * p; }`,
        fragmentShader: `uniform vec3 color; varying vec3 vNormal; varying vec3 vView;
          void main() { float glow = pow(1.0 - max(dot(normalize(vNormal), normalize(vView)), 0.0), 3.8);
          gl_FragColor = vec4(color, glow * 0.42); }`,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      })
    )
    scene.add(atmosphere)

    const visitor = new THREE.Group()
    visitor.visible = false
    world.add(visitor)
    const beacon = new THREE.Mesh(
      new THREE.SphereGeometry(0.036, 12, 12),
      themedMaterial(THREE.MeshBasicMaterial, '--globe-marker')
    )
    visitor.add(beacon)
    const pulse = new THREE.Mesh(
      new THREE.RingGeometry(0.05, 0.058, 40),
      themedMaterial(THREE.MeshBasicMaterial, '--globe-route', {
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide,
        depthWrite: false
      })
    )
    visitor.add(pulse)

    const orbit = new THREE.Group()
    orbit.rotation.set(1.05, 0.2, -0.3)
    const orbitRadius = 2.02
    orbit.add(
      line(
        Array.from(
          { length: 181 },
          (_, i) =>
            new THREE.Vector3(
              Math.cos((i / 180) * Math.PI * 2) * orbitRadius,
              Math.sin((i / 180) * Math.PI * 2) * orbitRadius,
              0
            )
        ),
        '--globe-ring',
        0.22
      )
    )
    const satellite = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.043),
      themedMaterial(THREE.MeshBasicMaterial, '--globe-marker')
    )
    orbit.add(satellite)
    scene.add(orbit)

    function render() {
      if (!disposed && !unavailable && visible && !document.hidden) renderer.render(scene, camera)
    }
    function setLocation({ longitude, latitude }, animated = true) {
      if (disposed || unavailable || !Number.isFinite(longitude) || !Number.isFinite(latitude))
        return
      if (longitude < -180 || longitude > 180 || latitude < -90 || latitude > 90) return
      const point = coordinate(longitude, latitude, RADIUS + 0.018)
      beacon.position.copy(point)
      pulse.position.copy(point.clone().multiplyScalar(1.004))
      pulse.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), point.clone().normalize())
      pulse.scale.setScalar(1)
      pulse.material.opacity = 0.65
      visitor.visible = true
      // Rotate longitude toward the camera, then tilt latitude to the equator of the view.
      const target = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(radians(latitude), radians(-90 - longitude), 0)
      )
      focusElapsed = 0
      focusStart.copy(world.quaternion)
      if (animated) focusTarget = target
      else {
        focusTarget = null
        world.quaternion.copy(target)
      }
      sync()
    }
    function setTheme() {
      if (disposed || unavailable) return
      const nextTheme = document.documentElement.dataset.portfolioTheme || 'dark'
      if (appliedTheme === nextTheme) return
      const palette = getComputedStyle(container)
      if (appliedTheme !== null) {
        const previousTexture = earth.material.map
        const { texture: nextTexture } = createLandTexture(data, palette)
        nextTexture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 4)
        earth.material.map = nextTexture
        previousTexture.dispose()
      }
      scene.traverse((object) => {
        const material = object.material
        if (material?.userData.colorToken) {
          material.color.set(palette.getPropertyValue(material.userData.colorToken).trim())
        }
      })
      atmosphere.material.uniforms.color.value.set(palette.getPropertyValue('--globe-glow').trim())
      const light = nextTheme === 'light'
      atmosphere.material.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending
      atmosphere.material.needsUpdate = true
      ambient.intensity = light ? 1.6 : 1.3
      sun.intensity = light ? 2 : 2.8
      appliedTheme = nextTheme
      render()
    }
    function animate(time) {
      frame = 0
      if (disposed || unavailable || (!moving && !focusTarget) || !visible || document.hidden)
        return
      const delta = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 0
      lastTime = time
      if (focusTarget) {
        focusElapsed = Math.min(focusElapsed + delta / 1.1, 1)
        world.quaternion.slerpQuaternions(focusStart, focusTarget, 1 - (1 - focusElapsed) ** 3)
        if (focusElapsed === 1) focusTarget = null
      } else if (moving && !dragging) world.rotation.y += delta * 0.045
      if (moving) {
        elapsed += delta
        pulse.scale.setScalar(1 + ((elapsed * 0.42) % 1) * 2)
        pulse.material.opacity = 0.65 * (1 - ((elapsed * 0.42) % 1))
        satellite.position.set(
          Math.cos(elapsed * 0.22) * orbitRadius,
          Math.sin(elapsed * 0.22) * orbitRadius,
          0
        )
      }
      render()
      if (moving || focusTarget) frame = requestAnimationFrame(animate)
    }
    function sync() {
      cancelAnimationFrame(frame)
      frame = 0
      lastTime = 0
      if (disposed || unavailable) return
      render()
      if ((moving || focusTarget) && visible && !document.hidden)
        frame = requestAnimationFrame(animate)
    }
    const resize = () => {
      const { width, height } = stage.getBoundingClientRect()
      if (!width || !height) return
      camera.aspect = width / height
      // Keep orbit and sphere visible in both wide and narrow stages.
      camera.position.z = Math.max(6.6, 4.8 / camera.aspect)
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
      render()
    }
    satellite.position.set(orbitRadius, 0, 0)
    listen(stage, 'pointerdown', (event) => {
      if (event.button !== 0 || activePointer !== null) return
      focusTarget = null
      dragging = true
      activePointer = event.pointerId
      pointerX = event.clientX
      pointerY = event.clientY
      stage.setPointerCapture(event.pointerId)
      stage.classList.add('is-dragging')
    })
    listen(stage, 'pointermove', (event) => {
      if (!dragging || event.pointerId !== activePointer) return
      world.rotation.y += (event.clientX - pointerX) * 0.006
      world.rotation.x = THREE.MathUtils.clamp(
        world.rotation.x + (event.clientY - pointerY) * 0.004,
        -Math.PI / 2,
        Math.PI / 2
      )
      pointerX = event.clientX
      pointerY = event.clientY
      render()
    })
    const endDrag = (event) => {
      if (event.pointerId !== activePointer) return
      dragging = false
      activePointer = null
      stage.classList.remove('is-dragging')
      if (stage.hasPointerCapture(event.pointerId)) stage.releasePointerCapture(event.pointerId)
    }
    listen(stage, 'pointerup', endDrag)
    listen(stage, 'pointercancel', endDrag)
    listen(stage, 'lostpointercapture', endDrag)
    listen(stage, 'keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return
      event.preventDefault()
      focusTarget = null
      if (event.key === 'ArrowLeft') world.rotation.y -= 0.12
      if (event.key === 'ArrowRight') world.rotation.y += 0.12
      if (event.key === 'ArrowUp')
        world.rotation.x = Math.max(-Math.PI / 2, world.rotation.x - 0.08)
      if (event.key === 'ArrowDown')
        world.rotation.x = Math.min(Math.PI / 2, world.rotation.x + 0.08)
      render()
    })
    listen(canvas, 'webglcontextlost', (event) => {
      event.preventDefault()
      unavailable = true
      cancelAnimationFrame(frame)
      onUnavailable()
    })
    listen(document, 'visibilitychange', sync)
    resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(stage)
    visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        sync()
      },
      { threshold: 0 }
    )
    visibilityObserver.observe(container)
    setTheme()
    resize()
    sync()
    return {
      dispose,
      setTheme,
      setLocation,
      setMotion(enabled) {
        moving = enabled
        sync()
      }
    }
  } catch (error) {
    dispose()
    throw error
  }
}
