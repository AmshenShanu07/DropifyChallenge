import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import Home from './Components/Home'
import { Suspense } from 'react'
import { Loader } from '@react-three/drei'

const App = () => {
  return (
    <Suspense fallback={false}>
      <Canvas shadows camera={{ position: [0, 0, 3], fov: 30 }} >
        <ambientLight intensity={2} position={[0,2,0]} />
        <Experience/>
      </Canvas>
      <Loader/>
      <Home/>
    </Suspense>
  )
}

export default App