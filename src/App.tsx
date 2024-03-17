import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import Home from './Components/Home'

const App = () => {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 3], fov: 30 }} >
        <ambientLight intensity={2} position={[0,2,0]} />
        <Experience/>
      </Canvas>
      <Home/>
    </>
  )
}

export default App