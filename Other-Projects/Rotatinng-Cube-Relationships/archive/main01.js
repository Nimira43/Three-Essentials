import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.set(0, 0, 10)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// const geometry = new THREE.BoxGeometry(4, 7, 8)
// const geometry = new THREE.SphereGeometry(7, 9, 38)
// const geometry = new THREE.PlaneGeometry(12, 5, 21, 17)
// const geometry = new THREE.CylinderGeometry(2, 7, 9, 17, 9, 8)
// const geometry = new THREE.CircleGeometry(7, 17, 36, 5)

const geometry = new THREE.PlaneGeometry(4, 2, 6, 6)
const material = new THREE.MeshBasicMaterial({
  color: 0xff4500,
  wireframe: true
})

const plane = new THREE.Mesh(geometry, material)
plane.position.set(2, 3, 4)
scene.add(plane)

const cubeGeometry = new THREE.BoxGeometry(2, 2, 2)
const cube = new THREE.Mesh(cubeGeometry, material)
scene.add(cube)

const sphereGeometry = new THREE.SphereGeometry(1, 6, 2)
const sphere = new THREE.Mesh(sphereGeometry, material)
sphere.position.set(-2, 3, 4)
scene.add(sphere)

renderer.render(scene, camera)

function animate() {
  requestAnimationFrame(animate)
  
  plane.rotation.x += 0.01
  plane.rotation.y += 0.01
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  sphere.rotation.x += 0.01
  sphere.rotation.y += 0.01
  
  renderer.render(scene, camera)
}

animate()


