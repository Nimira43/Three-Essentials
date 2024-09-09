import { Canvas } from '@react-three/fiber'
import Polyhedron from './Polyhedron'
import * as THREE from 'three'
import { Stats, OrbitControls } from '@react-three/drei'

export default function App() {
  const polyhedron = [
    new THREE.BoxGeometry(),
    new THREE.SphereGeometry(0.785398),
    new THREE.DodecahedronGeometry(0.785398),
  ]

  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <Polyhedron position={[-0.75, -0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[0.75, -0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[-0.75, 0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[0.75, 0.75, 0]} polyhedron={polyhedron} />
      <OrbitControls />
      <axesHelper args={[5]} />
      <gridHelper args={[20, 20, 0xffd700, '#87ceeb']} />
      <gridHelper rotation-x={Math.PI / 4} />
      <gridHelper rotation={[Math.PI / 4, 0, 0]} />
      <Stats />
    </Canvas>
  )
}