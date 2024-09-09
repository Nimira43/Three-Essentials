import { Canvas } from '@react-three/fiber'
import { Stats, PointerLockControls } from '@react-three/drei'

export default function App() {
  return (
    <Canvas>
      <mesh>
        <boxGeometry args={[100, 10, 100, 100, 10, 100]} />
        <meshBasicMaterial wireframe color={'lime'} />
      </mesh>
      <PointerLockControls />
      <Stats />
    </Canvas>
  )
}