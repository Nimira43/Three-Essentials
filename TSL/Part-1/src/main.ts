import './style.css'
import * as THREE from 'three/webgpu'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { color } from 'three/tsl'

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

const material = new THREE.NodeMaterial()
material.fragmentNode = color('#ff4500')

const mesh = new THREE.Mesh(
  new THREE.PlaneGeometry(),
  material
)
scene.add(mesh)

function animate() {
  controls.update()
  renderer.render(scene, camera)
}

animate()
