export default function Box(props) {
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshBasicMaterial color={0xff4500} wireframe />
    </mesh>
  )
}