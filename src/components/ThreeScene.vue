<template>
  <div class="three-container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const canvas = ref(null)
let scene, camera, renderer, stars, nebulae, shootingStars = []
let lastShootingStarTime = 0

onMounted(() => {
  // 初始化场景 - 深空黑色背景
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x050508)

  // 初始化相机
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 1

  // 初始化渲染器
  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // 创建主星空
  createStars()

  // 创建星云背景
  createNebulae()

  // 创建流星系统
  createShootingStarSystem()

  // 窗口大小调整监听
  window.addEventListener('resize', handleResize)

  // 开始动画循环
  animate()
})

function createStars() {
  // 远景星星（稀疏、暗淡）
  const farStarGeometry = new THREE.BufferGeometry()
  const farStarCount = 1200
  const farPositions = new Float32Array(farStarCount * 3)
  const farSizes = new Float32Array(farStarCount)
  const farOpacities = new Float32Array(farStarCount)
  const farColors = new Float32Array(farStarCount * 3)

  // 近景星星（密集、明亮）
  const nearStarGeometry = new THREE.BufferGeometry()
  const nearStarCount = 400
  const nearPositions = new Float32Array(nearStarCount * 3)
  const nearSizes = new Float32Array(nearStarCount)
  const nearOpacities = new Float32Array(nearStarCount)
  const nearColors = new Float32Array(nearStarCount * 3)

  const colorPalette = [
    new THREE.Color(0xffffff),
    new THREE.Color(0xffffee),
    new THREE.Color(0xeef0ff),
    new THREE.Color(0xddeeff)
  ]

  // 生成远景星星
  for (let i = 0; i < farStarCount; i++) {
    const i3 = i * 3
    const radius = 150 + Math.random() * 350
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)

    farPositions[i3] = radius * Math.sin(phi) * Math.cos(theta)
    farPositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    farPositions[i3 + 2] = radius * Math.cos(phi)
    farSizes[i] = 0.3 + Math.random() * 0.8
    farOpacities[i] = 0.2 + Math.random() * 0.5
    const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
    farColors[i3] = color.r
    farColors[i3 + 1] = color.g
    farColors[i3 + 2] = color.b
  }

  // 生成近景星星
  for (let i = 0; i < nearStarCount; i++) {
    const i3 = i * 3
    const radius = 50 + Math.random() * 100
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)

    nearPositions[i3] = radius * Math.sin(phi) * Math.cos(theta)
    nearPositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    nearPositions[i3 + 2] = radius * Math.cos(phi)
    nearSizes[i] = 0.8 + Math.random() * 1.5
    nearOpacities[i] = 0.4 + Math.random() * 0.6
    const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
    nearColors[i3] = color.r
    nearColors[i3 + 1] = color.g
    nearColors[i3 + 2] = color.b
  }

  farStarGeometry.setAttribute('position', new THREE.BufferAttribute(farPositions, 3))
  farStarGeometry.setAttribute('size', new THREE.BufferAttribute(farSizes, 1))
  farStarGeometry.setAttribute('opacity', new THREE.BufferAttribute(farOpacities, 1))
  farStarGeometry.setAttribute('color', new THREE.BufferAttribute(farColors, 3))

  nearStarGeometry.setAttribute('position', new THREE.BufferAttribute(nearPositions, 3))
  nearStarGeometry.setAttribute('size', new THREE.BufferAttribute(nearSizes, 1))
  nearStarGeometry.setAttribute('opacity', new THREE.BufferAttribute(nearOpacities, 1))
  nearStarGeometry.setAttribute('color', new THREE.BufferAttribute(nearColors, 3))

  // 星星着色器
  const starShaderMaterial = (sizeMultiplier = 1) => new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 }
    },
    vertexShader: `
      attribute float size;
      attribute float opacity;
      attribute vec3 color;
      varying float vOpacity;
      varying vec3 vColor;
      varying vec3 vPosition;
      uniform float uTime;
      void main() {
        vOpacity = opacity;
        vColor = color;
        vPosition = position;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * ${sizeMultiplier.toFixed(1)} * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform float uTime;
      varying float vOpacity;
      varying vec3 vColor;
      varying vec3 vPosition;
      void main() {
        vec2 center = gl_PointCoord - vec2(0.5);
        float dist = length(center);
        if (dist > 0.5) discard;

        float twinkle = sin(uTime * 2.0 + vPosition.x * 0.1) * 0.1 + 0.9;
        float glow = 1.0 - smoothstep(0.0, 0.5, dist);
        glow = pow(glow, 1.2);
        float alpha = vOpacity * twinkle * glow;

        gl_FragColor = vec4(vColor, alpha);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  })

  // 创建星星组
  const farStars = new THREE.Points(farStarGeometry, starShaderMaterial(1))
  const nearStars = new THREE.Points(nearStarGeometry, starShaderMaterial(1.2))

  stars = new THREE.Group()
  stars.add(farStars)
  stars.add(nearStars)
  stars.userData = { farStars, nearStars }

  scene.add(stars)
}

function createNebulae() {
  nebulae = new THREE.Group()

  const nebulaColors = [
    { color: 0x1a0a2e, opacity: 0.3 },
    { color: 0x0a1a2e, opacity: 0.25 },
    { color: 0x2e0a1a, opacity: 0.2 }
  ]

  nebulaColors.forEach((config, index) => {
    const nebulaGeometry = new THREE.PlaneGeometry(500, 500, 32, 32)
    const positions = nebulaGeometry.attributes.position
    for (let i = 0; i < positions.count; i++) {
      positions.setZ(i, (Math.random() - 0.5) * 50)
    }
    positions.needsUpdate = true

    const nebulaMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(config.color) },
        uOpacity: { value: config.opacity },
        uTime: { value: 0 }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform float uTime;
        void main() {
          vUv = uv;
          vPosition = position;
          vec3 pos = position;
          pos.z += sin(uTime * 0.2 + position.x * 0.02) * 5.0;
          pos.z += cos(uTime * 0.15 + position.y * 0.02) * 5.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uOpacity;
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vPosition;

        float noise(vec2 p) {
          return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
        }

        float smoothNoise(vec2 p) {
          vec2 f = fract(p);
          vec2 i = floor(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(noise(i), noise(i + vec2(1, 0)), f.x),
            mix(noise(i + vec2(0, 1)), noise(i + vec2(1, 1)), f.x),
            f.y
          );
        }

        float fbm(vec2 p) {
          float value = 0.0;
          float amplitude = 0.5;
          for (int i = 0; i < 4; i++) {
            value += amplitude * smoothNoise(p);
            p *= 2.0;
            amplitude *= 0.5;
          }
          return value;
        }

        void main() {
          vec2 center = vUv - vec2(0.5);
          float dist = length(center);
          float mask = 1.0 - smoothstep(0.3, 0.5, dist);
          vec2 noiseCoord = vUv * 3.0 + vec2(uTime * 0.01);
          float n = fbm(noiseCoord);
          float alpha = mask * uOpacity * n;
          gl_FragColor = vec4(uColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide
    })

    const nebula = new THREE.Mesh(nebulaGeometry, nebulaMaterial)
    nebula.position.z = -100 - index * 50
    nebula.rotation.z = (index * Math.PI) / 4
    nebula.userData = { material: nebulaMaterial }
    nebulae.add(nebula)
  })

  scene.add(nebulae)
}

function createShootingStarSystem() {
  const createShootingStar = () => {
    const length = 20 + Math.random() * 30
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(6)
    const colors = new Float32Array(6)

    positions[0] = 0
    positions[1] = 0
    positions[2] = 0
    colors[0] = 1
    colors[1] = 1
    colors[2] = 1

    positions[3] = length
    positions[4] = -length * 0.8
    positions[5] = 0
    colors[3] = 0.6
    colors[4] = 0.8
    colors[5] = 1

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uOpacity: { value: 0 }
      },
      vertexShader: `
        attribute vec3 color;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vColor = color;
          vAlpha = 1.0 - position.x / 50.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uOpacity;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          float alpha = uOpacity * vAlpha;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })

    const line = new THREE.Line(geometry, material)
    line.userData = {
      speed: 2 + Math.random() * 3,
      active: false,
      opacity: 0,
      material: material
    }

    return line
  }

  for (let i = 0; i < 3; i++) {
    const star = createShootingStar()
    shootingStars.push(star)
    scene.add(star)
  }
}

const handleResize = () => {
  if (camera && renderer) {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
}

let lastTime = 0
const animate = (time = 0) => {
  requestAnimationFrame(animate)

  const deltaTime = time - lastTime
  lastTime = time
  const elapsedTime = time * 0.001

  if (stars) {
    stars.rotation.y += 0.0001
    stars.rotation.x += 0.00005
    stars.userData.farStars.material.uniforms.uTime.value = elapsedTime
    stars.userData.nearStars.material.uniforms.uTime.value = elapsedTime * 1.5
  }

  if (nebulae) {
    nebulae.children.forEach((nebula, index) => {
      nebula.rotation.z += 0.00005 * (index + 1)
      nebula.userData.material.uniforms.uTime.value = elapsedTime * 0.3
    })
  }

  updateShootingStars(elapsedTime)

  renderer.render(scene, camera)
}

function updateShootingStars(time) {
  if (!lastShootingStarTime) lastShootingStarTime = time

  if (time - lastShootingStarTime > 3 + Math.random() * 5) {
    const inactive = shootingStars.find(s => !s.userData.active)
    if (inactive) {
      activateShootingStar(inactive, time)
      lastShootingStarTime = time
    }
  }

  shootingStars.forEach(star => {
    if (star.userData.active) {
      const progress = time - star.userData.startTime

      if (progress < 0.5) {
        star.userData.material.uniforms.uOpacity.value = Math.sin(progress * Math.PI * 2)
        star.userData.material.uniforms.uOpacity.needsUpdate = true
      } else if (progress > 1.5) {
        const fadeOut = 1.0 - (progress - 1.5) / 0.5
        if (fadeOut <= 0) {
          star.userData.active = false
          star.userData.material.uniforms.uOpacity.value = 0
          return
        }
        star.userData.material.uniforms.uOpacity.value = fadeOut
        star.userData.material.uniforms.uOpacity.needsUpdate = true
      } else {
        star.userData.material.uniforms.uOpacity.value = 1
      }

      star.position.x += star.userData.speed
      star.position.y -= star.userData.speed * 0.8
      star.position.z = Math.sin(time * 2) * 50
      star.rotation.z = -0.785 + Math.sin(time * 3) * 0.1
    }
  })
}

function activateShootingStar(star, time) {
  star.userData.active = true
  star.userData.startTime = time
  const angle = (Math.random() * Math.PI) / 4 - Math.PI / 8
  const startRadius = 200 + Math.random() * 300
  const x = startRadius * Math.cos(angle)
  const y = startRadius * Math.sin(angle)

  star.position.set(-x, y, -150)
  star.rotation.z = -0.785
  star.userData.speed = 2 + Math.random() * 3
}

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (renderer) {
    renderer.dispose()
  }
})
</script>

<style scoped>
.three-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
