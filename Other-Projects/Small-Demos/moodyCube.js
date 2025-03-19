import * as THREE from 'three'

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene()
const aspect = window.innerWidth / window.innerHeight

const camera = new THREE.PerspectiveCamera(30, aspect)
camera.position.set(3, 3, 8)
camera.lookAt(new THREE.Vector3())

const geometry = new THREE.BoxGeometry(2, 2, 2)
const material = new THREE.MeshPhongMaterial()

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

const light = new THREE.PointLight()
light.position.set(2, 2, 3)
scene.add(light)
renderer.render(scene, camera)