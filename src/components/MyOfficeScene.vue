<template>
  <div class="three-container" ref="divDomRef"></div>
</template>
<script setup>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { onMounted, ref, watch } from 'vue'
import { useThemeState } from '@/store'
import gsap from 'gsap'
// import GUI from 'lil-gui'
/*==================== 初始化场景 ====================*/
const scene = new THREE.Scene()
/*==================== 创建一个渲染器 ====================*/
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true
})
renderer.useLegacyLights = true
renderer.outputEncoding = THREE.SRGBColorSpace
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(300, 300) // 初始大小
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
/*==================== 加载模型 ====================*/
let chair = null
let screen = null
// 引用DOM元素
const divDomRef = ref(null)
// 设置椅子旋转
const chairAnimate = () => {
  gsap.to(chair.rotation, {
    y: 0.7,
    duration: 10,
    ease: 'power1.inOut',
    repeat: -1,
    yoyo: true
  })
}
// mac屏幕播放视频
const setScreen = () => {
  const video = document.createElement('video')
  video.src = import.meta.env.BASE_URL + '3D/火影.mp4'
  video.muted = true
  video.playsInline = true
  video.autoplay = true
  video.loop = true
  video.play()
  const videoTexture = new THREE.VideoTexture(video)
  videoTexture.minFilter = THREE.NearestFilter
  videoTexture.magFilter = THREE.NearestFilter
  videoTexture.generateMipmaps = false
  videoTexture.encoding = THREE.SRGBColorSpace
  screen.material = new THREE.MeshStandardMaterial({
    map: videoTexture
  })
}
// 加载glb模型
const gltfLoader = new GLTFLoader()
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath(import.meta.env.BASE_URL + 'draco/')
dracoLoader.setDecoderConfig({ type: 'js' })
gltfLoader.setDRACOLoader(dracoLoader)
gltfLoader.load(
  import.meta.env.BASE_URL + '3D/officeScene.glb',
  (glb) => {
    console.log('模型加载成功', glb.scene)
    glb.scene.scale.set(1.8, 1.8, 1.8)
    glb.scene.position.y = -1.5
    // 获取椅子和电脑屏幕用于添加动画
    glb.scene.children.forEach((item) => {
      item.castShadow = true
      item.receiveShadow = true
      if (item.name === 'Chair') {
        chair = item
      } else if (item.name === 'mac-screen') {
        screen = item
      }
    })
    chairAnimate()
    setScreen()
    scene.add(glb.scene)
    renderer.render(scene, camera)
  },
  (progress) => {
    console.log('加载进度:', (progress.loaded / progress.total) * 100 + '%')
  },
  (error) => {
    console.error('模型加载失败:', error)
    // 创建一个简单的立方体作为替代
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
    renderer.render(scene, camera)
  }
)
/*==================== 创建相机 ====================*/
// const camera = new THREE.PerspectiveCamera(45, 1, 1, 1000)
const camera = new THREE.OrthographicCamera(-10, 10, 10, -10, 0.1, 1000)
//设置相机位置
camera.position.set(-9.72, 5.27, -2.25)
//设置相机方向
camera.lookAt(0, 0, 0)
/*==================== 创建灯光 ====================*/
// 环境光
const ambient = new THREE.AmbientLight(0xffffff, 0.5)
ambient.intensity = 3
scene.add(ambient)
// 太阳光
const sunLight = new THREE.DirectionalLight(0xffffff)
sunLight.intensity = 3
sunLight.castShadow = true
sunLight.shadow.camera.far = 20
sunLight.shadow.mapSize.set(2048, 2048)
sunLight.shadow.normalBias = 0.05
sunLight.position.set(-1.5, 7, 3)
scene.add(sunLight)
// 台灯光
const pointLight = new THREE.PointLight(0xffffff)
pointLight.castShadow = true
pointLight.position.set(0.7, 4, -2.3)
pointLight.shadow.camera.far = 20
pointLight.shadow.mapSize.set(2048, 2048)
pointLight.shadow.normalBias = 0.05
// const pointlightHelper = new THREE.PointLightHelper(pointLight,0.2)
// scene.add(pointlightHelper)
scene.add(pointLight)
// 调试器
// const gui = new GUI()
// const obj = {
//   ambitentColor: { r: 255, g: 255, b: 255 },
//   sunLightColor: { r: 255, g: 255, b: 255 },
//   pointLightColor: { r: 255, g: 255, b: 255 },
//   ambientIntensity: 3,
//   sunLightIntensity: 3,
//   pointLightIntensity: 3
// }
// gui.addColor(obj, 'ambitentColor').onChange(() => {
//   ambient.color.copy(obj.ambitentColor)
//   console.log('ambitentColor', obj.ambitentColor)
// })
// gui.addColor(obj, 'sunLightColor').onChange(() => {
//   sunLight.color.copy(obj.sunLightColor)
//   console.log('sunLightColor', obj.sunLightColor)
// })
// gui.addColor(obj, 'pointLightColor').onChange(() => {
//   pointLight.color.copy(obj.pointLightColor)
//   console.log('pointLightColor', obj.pointLightColor)
// })
// gui.add(obj, 'ambientIntensity', 0, 10).onChange(() => {
//   ambient.intensity = obj.ambientIntensity
// })
// gui.add(obj, 'sunLightIntensity', 0, 10).onChange(() => {
//   sunLight.intensity = obj.sunLightIntensity
// })
// gui.add(obj, 'pointLightIntensity', 0, 10).onChange(() => {
//   pointLight.intensity = obj.pointLightIntensity
// })
/*==================== 初始化相机以及render尺寸 ====================*/
const size = {
  width: 0,
  height: 0,
  aspect: 1,
  frustrum: 10,
  pixelRatio: Math.min(window.devicePixelRatio, 2)
}
const initSize = () => {
  if (!divDomRef.value) return

  // 获取父元素的尺寸
  const parentWidth = divDomRef.value.offsetWidth
  const parentHeight = divDomRef.value.offsetHeight

  // 限制canvas大小，确保不会超过父元素
  size.width = Math.min(parentWidth, 300) // 限制最大宽度为300px
  size.height = Math.min(parentHeight, 300) // 限制最大高度为300px

  // 保持宽高比
  if (size.width / size.height > 1) {
    size.width = size.height
  } else {
    size.height = size.width
  }

  size.aspect = size.width / size.height
  size.pixelRatio = Math.min(window.devicePixelRatio, 2)

  // 更新相机参数
  camera.left = (-size.aspect * size.frustrum) / 2
  camera.right = (size.aspect * size.frustrum) / 2
  camera.top = size.frustrum / 2
  camera.bottom = -size.frustrum / 2
  camera.updateProjectionMatrix()

  // 设置渲染器大小
  renderer.setSize(size.width, size.height)
  renderer.setPixelRatio(size.pixelRatio)
}
/*==================== 控制器 ====================*/
const controls = new OrbitControls(camera, renderer.domElement)
controls.maxAzimuthAngle = -1
controls.minAzimuthAngle = Math.PI * 1.2
controls.maxPolarAngle = Math.PI / 3 //控制器垂直方向最大旋转角度（理解为逆时针旋转角度）
controls.minPolarAngle = Math.PI / 6 //控制器垂直方向最大小旋转角度（理解为顺时针旋转角度）
controls.enableZoom = false
/*==================== 动画 ====================*/
const animate = () => {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
/*==================== 切换主题 ====================*/
const theme = useThemeState().theme
const switchTheme = () => {
  if (theme.value === 'light') {
    gsap.to(sunLight, {
      intensity: 2.5
    })
    gsap.to(ambient, {
      intensity: 1.66
    })
    gsap.to(pointLight, {
      intensity: 0
    })
    gsap.to(ambient.color, {
      r: 1,
      g: 1,
      b: 1
    })
  } else {
    gsap.to(sunLight, {
      intensity: 0
    })
    gsap.to(ambient, {
      intensity: 2
    })
    gsap.to(pointLight, {
      intensity: 6
    })
    gsap.to(ambient.color, {
      b: 0.9568627450980393,
      g: 0.24313725490196078,
      r: 0.3607843137254902
    })
  }
}
watch(theme, () => {
  switchTheme()
})
onMounted(() => {
  // 确保DOM元素已经渲染
  setTimeout(() => {
    if (!divDomRef.value) return

    initSize()
    animate()
    switchTheme()
    divDomRef.value.appendChild(renderer.domElement)
  }, 100)
})
</script>

<style lang="scss" scoped>
.three-container {
  width: 100%;
  height: 100%;
}
</style>
