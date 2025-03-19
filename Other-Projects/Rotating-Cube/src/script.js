import * as THREE from 'three'

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setAnimationLoop(drawFrame)
document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene()
const aspect = window.innerWidth / window.innerHeight

const camera = new THREE.PerspectiveCamera(30, aspect)
camera.position.set(3, 3, 8)
camera.lookAt(new THREE.Vector3())

const geometry = new THREE.BoxGeometry(1/3, 1/3, 1/3)
const material = new THREE.MeshPhongMaterial()
const cube = new THREE.Mesh(geometry, material)
cube.position.set(1, 1, -1)
scene.add(cube)

const light = new THREE.DirectionalLight()
light.position.set(3, 4, 5)
scene.add(light)

const light2 = new THREE.DirectionalLight()
light2.position.set(-4, -25, -6)
scene.add(light2)

function drawFrame() {
  scene.rotation.y += 0.005
  scene.rotation.x += 0.009
  renderer.render(scene, camera)
}

