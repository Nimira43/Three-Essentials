import './style.css'
import * as THREE from 'three/webgpu'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { abs, Fn, If, positionLocal, rotateUV, time, vec2 } from 'three/tsl'

// import { color } from 'three/tsl'
// import { texture, convertColorSpace } from 'three/tsl'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  10
)
camera.position.z = 1

const renderer = new THREE.WebGPURenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
renderer.setAnimationLoop(animate)

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

const main = Fn(() => {
  const p = positionLocal.toVar()
  p.assign(rotateUV(p.xy, time, vec2())) 

  If(abs(p.x).greaterThan(0.45), () => {
    // @ts-ignore
    p.z = 1
  })
  If(abs(p.y).greaterThan(0.45), () => {
    // @ts-ignore
    p.z = 1
  })
  return p
})

const material = new THREE.NodeMaterial()

// Example 1 
// material.fragmentNode = color('#ff4500')

// Example 2
// material.fragmentNode = convertColorSpace(
//   texture(new THREE.TextureLoader().load('/billy.png')),
//   THREE.SRGBColorSpace,
//   THREE.LinearSRGBColorSpace
// )

// Example 3 and 5
// material.fragmentNode = positionLocal

// Example 4
material.fragmentNode = main()

const mesh = new THREE.Mesh(
  new THREE.PlaneGeometry(),
  
  // Example 5 
  // new THREE.BoxGeometry(),
  material
)
scene.add(mesh)

renderer.debug.getShaderAsync(
  scene,
  camera,
  mesh
).then((e) => {
  console.log(e.vertexShader)
  console.log(e.fragmentShader)
})

function animate() {
  controls.update()
  renderer.render(scene, camera)
}


