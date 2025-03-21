import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const clock = new THREE.Clock()
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
)
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(devicePixelRatio)
renderer.toneMapping = THREE.NeutralToneMapping
renderer.toneMappingExposure = 1.5
document.body.appendChild(renderer.domElement)

const cubeTextureLoader = new THREE.CubeTextureLoader()
cubeTextureLoader.setPath('/')
const environmentMap = await cubeTextureLoader.loadAsync([
  'px.png',
  'nx.png',
  'py.png',
  'ny.png',
  'pz.png',
  'nz.png'
])