import * as THREE from 'three'

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene()
const aspect = window.innerWidth / window.innerHeight

const camera = new THREE.PerspectiveCamera(30, aspect)
camera.position.set(6, 3, 8)
camera.lookAt(new THREE.Vector3())

let geometry = new THREE.BoxGeometry(1, 1, 1 / 3)
const material = new THREE.MeshPhongMaterial({color: 'red'})

let plate

plate = new THREE.Mesh(geometry, material)
plate.position.x = -1
scene.add(plate)

plate = new THREE.Mesh(geometry, material)
plate.position.x = 1
scene.add(plate)

geometry = new THREE.BoxGeometry(3, 1, 1 / 3)

plate = new THREE.Mesh(geometry, material)
plate.position.y = 1
scene.add(plate)

plate = new THREE.Mesh(geometry, material)
plate.position.y = -1
scene.add(plate)

const light = new THREE.PointLight()
light.position.set(1, 2, 1)
scene.add(light)
renderer.render(scene, camera)