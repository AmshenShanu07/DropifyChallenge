
import * as THREE from 'three'
import { useLayoutEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import gsap from 'gsap';

type GLTFResult = GLTF & {
  nodes: {
    Mesh_body008: THREE.Mesh
    Mesh_body008_1: THREE.Mesh
    Mesh_body008_2: THREE.Mesh
    Mesh_body008_3: THREE.Mesh
    Mesh_body008_4: THREE.Mesh
    Mesh_body008_5: THREE.Mesh
    Mesh_wheel_frontLeft036: THREE.Mesh
    Mesh_wheel_frontLeft036_1: THREE.Mesh
    Mesh_wheel_frontLeft037: THREE.Mesh
    Mesh_wheel_frontLeft037_1: THREE.Mesh
    Mesh_wheel_frontLeft038: THREE.Mesh
    Mesh_wheel_frontLeft038_1: THREE.Mesh
    Mesh_wheel_frontLeft039: THREE.Mesh
    Mesh_wheel_frontLeft039_1: THREE.Mesh
    Mesh_wheel_frontLeft040: THREE.Mesh
    Mesh_wheel_frontLeft040_1: THREE.Mesh
    Mesh_body009: THREE.Mesh
    Mesh_body009_1: THREE.Mesh
    Mesh_body009_2: THREE.Mesh
    Mesh_body009_3: THREE.Mesh
    Mesh_body009_4: THREE.Mesh
    Mesh_body009_5: THREE.Mesh
    Mesh_wheel_frontLeft041: THREE.Mesh
    Mesh_wheel_frontLeft041_1: THREE.Mesh
    Mesh_wheel_frontLeft042: THREE.Mesh
    Mesh_wheel_frontLeft042_1: THREE.Mesh
    Mesh_wheel_frontLeft043: THREE.Mesh
    Mesh_wheel_frontLeft043_1: THREE.Mesh
    Mesh_wheel_frontLeft044: THREE.Mesh
    Mesh_wheel_frontLeft044_1: THREE.Mesh
    Mesh_wheel_frontLeft045: THREE.Mesh
    Mesh_wheel_frontLeft045_1: THREE.Mesh
    Mesh_body007: THREE.Mesh
    Mesh_body007_1: THREE.Mesh
    Mesh_body007_2: THREE.Mesh
    Mesh_body007_3: THREE.Mesh
    Mesh_body007_4: THREE.Mesh
    Mesh_body007_5: THREE.Mesh
    Mesh_wheel_frontLeft031: THREE.Mesh
    Mesh_wheel_frontLeft031_1: THREE.Mesh
    Mesh_wheel_frontLeft032: THREE.Mesh
    Mesh_wheel_frontLeft032_1: THREE.Mesh
    Mesh_wheel_frontLeft033: THREE.Mesh
    Mesh_wheel_frontLeft033_1: THREE.Mesh
    Mesh_wheel_frontLeft034: THREE.Mesh
    Mesh_wheel_frontLeft034_1: THREE.Mesh
    Mesh_wheel_frontLeft035: THREE.Mesh
    Mesh_wheel_frontLeft035_1: THREE.Mesh
    Mesh_body006: THREE.Mesh
    Mesh_body006_1: THREE.Mesh
    Mesh_body006_2: THREE.Mesh
    Mesh_body006_3: THREE.Mesh
    Mesh_body006_4: THREE.Mesh
    Mesh_body006_5: THREE.Mesh
    Mesh_wheel_frontLeft026: THREE.Mesh
    Mesh_wheel_frontLeft026_1: THREE.Mesh
    Mesh_wheel_frontLeft027: THREE.Mesh
    Mesh_wheel_frontLeft027_1: THREE.Mesh
    Mesh_wheel_frontLeft028: THREE.Mesh
    Mesh_wheel_frontLeft028_1: THREE.Mesh
    Mesh_wheel_frontLeft029: THREE.Mesh
    Mesh_wheel_frontLeft029_1: THREE.Mesh
    Mesh_wheel_frontLeft030: THREE.Mesh
    Mesh_wheel_frontLeft030_1: THREE.Mesh
    Mesh_body005: THREE.Mesh
    Mesh_body005_1: THREE.Mesh
    Mesh_body005_2: THREE.Mesh
    Mesh_body005_3: THREE.Mesh
    Mesh_body005_4: THREE.Mesh
    Mesh_body005_5: THREE.Mesh
    Mesh_wheel_frontLeft021: THREE.Mesh
    Mesh_wheel_frontLeft021_1: THREE.Mesh
    Mesh_wheel_frontLeft022: THREE.Mesh
    Mesh_wheel_frontLeft022_1: THREE.Mesh
    Mesh_wheel_frontLeft023: THREE.Mesh
    Mesh_wheel_frontLeft023_1: THREE.Mesh
    Mesh_wheel_frontLeft024: THREE.Mesh
    Mesh_wheel_frontLeft024_1: THREE.Mesh
    Mesh_wheel_frontLeft025: THREE.Mesh
    Mesh_wheel_frontLeft025_1: THREE.Mesh
    Plane: THREE.Mesh
    Cube: THREE.Mesh
    Cube001: THREE.Mesh
    Cube002: THREE.Mesh
    Cube004: THREE.Mesh
    Cube005: THREE.Mesh
    Cube006: THREE.Mesh
    Cube007: THREE.Mesh
    Cube008: THREE.Mesh
    Cube009: THREE.Mesh
    Cube010: THREE.Mesh
  }
  materials: {
    ['plastic.001']: THREE.MeshStandardMaterial
    Cyan: THREE.MeshStandardMaterial
    ['_defaultMat.021']: THREE.MeshStandardMaterial
    ['window.021']: THREE.MeshStandardMaterial
    lightBack: THREE.MeshStandardMaterial
    lightFront: THREE.MeshStandardMaterial
    carTire: THREE.MeshStandardMaterial
    DarkGreen: THREE.MeshStandardMaterial
    Pink: THREE.MeshStandardMaterial
    Violet: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    white: THREE.MeshStandardMaterial
  }
}

// type ActionName = 'Cube.003Action' | 'cyanCar.002Action' | 'greenCar.001Action' | 'pinkCar.001Action' | 'violetCar.001Action'
// type GLTFActions = Record<ActionName, THREE.AnimationClip>

export function Banner(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF('banner.glb') as GLTFResult
  const { actions } = useAnimations<THREE.AnimationClip>(animations, group)

  useLayoutEffect(() => {
    
    const ctx = gsap.context(() => {
      if (!group.current) return;
      
      actions['Cube.003Action']?.play();
      actions['cyanCar.002Action']?.play();
      actions['greenCar.001Action']?.play();
      actions['pinkCar.001Action']?.play();
      actions['violetCar.001Action']?.play();
      
      gsap
      .to(group.current.position, {
        delay: 2,
        duration: 3,
        x: -0.5,
        y: -0.09,
      })

      gsap
      .to(group.current.position, {
        delay: 2,
        duration: 3,
        z: 0.7,
      })
      
      gsap
      .to(group.current.rotation, {
        delay: 2.5,
        duration: 3,
        x: 0.05,
      })

    });

    return () => ctx.revert();
    
  },[])

  return (
    <group ref={group} {...props} rotation-x={Math.PI * 0.5} dispose={null}>
      <group name="Scene">
        <group name="cyanCar001" position={[1.471, 0.526, -0.433]} scale={0.096}>
          <group name="suv007">
            <group name="body007" position={[0, -3.359, 0]}>
              <mesh name="Mesh_body008" geometry={nodes.Mesh_body008.geometry} material={materials['plastic.001']} />
              <mesh name="Mesh_body008_1" geometry={nodes.Mesh_body008_1.geometry} material={materials.Cyan} />
              <mesh name="Mesh_body008_2" geometry={nodes.Mesh_body008_2.geometry} material={materials['_defaultMat.021']} />
              <mesh name="Mesh_body008_3" geometry={nodes.Mesh_body008_3.geometry} material={materials['window.021']} />
              <mesh name="Mesh_body008_4" geometry={nodes.Mesh_body008_4.geometry} material={materials.lightBack} />
              <mesh name="Mesh_body008_5" geometry={nodes.Mesh_body008_5.geometry} material={materials.lightFront} />
              <group name="wheel_back007" scale={-1}>
                <mesh name="Mesh_wheel_frontLeft036" geometry={nodes.Mesh_wheel_frontLeft036.geometry} material={materials.carTire} />
                <mesh name="Mesh_wheel_frontLeft036_1" geometry={nodes.Mesh_wheel_frontLeft036_1.geometry} material={materials['_defaultMat.021']} />
              </group>
            </group>
            <group name="wheel_backLeft007" position={[0, -3.359, 0]} scale={-1}>
              <mesh name="Mesh_wheel_frontLeft037" geometry={nodes.Mesh_wheel_frontLeft037.geometry} material={materials.carTire} />
              <mesh name="Mesh_wheel_frontLeft037_1" geometry={nodes.Mesh_wheel_frontLeft037_1.geometry} material={materials['_defaultMat.021']} />
            </group>
            <group name="wheel_backRight007" position={[0, -3.359, 0]}>
              <mesh name="Mesh_wheel_frontLeft038" geometry={nodes.Mesh_wheel_frontLeft038.geometry} material={materials.carTire} />
              <mesh name="Mesh_wheel_frontLeft038_1" geometry={nodes.Mesh_wheel_frontLeft038_1.geometry} material={materials['_defaultMat.021']} />
            </group>
            <group name="wheel_frontLeft007" position={[0, -3.359, 0]} scale={-1}>
              <mesh name="Mesh_wheel_frontLeft039" geometry={nodes.Mesh_wheel_frontLeft039.geometry} material={materials.carTire} />
              <mesh name="Mesh_wheel_frontLeft039_1" geometry={nodes.Mesh_wheel_frontLeft039_1.geometry} material={materials['_defaultMat.021']} />
            </group>
            <group name="wheel_frontRight007" position={[0, -3.359, 0]}>
              <mesh name="Mesh_wheel_frontLeft040" geometry={nodes.Mesh_wheel_frontLeft040.geometry} material={materials.carTire} />
              <mesh name="Mesh_wheel_frontLeft040_1" geometry={nodes.Mesh_wheel_frontLeft040_1.geometry} material={materials['_defaultMat.021']} />
            </group>
          </group>
        </group>
        <group name="cyanCar002" position={[-0.587, 0, 0.208]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.096}>
          <group name="suv008">
            <group name="body008">
              <mesh name="Mesh_body009" geometry={nodes.Mesh_body009.geometry} material={materials['plastic.001']} />
              <mesh name="Mesh_body009_1" geometry={nodes.Mesh_body009_1.geometry} material={materials.Cyan} />
              <mesh name="Mesh_body009_2" geometry={nodes.Mesh_body009_2.geometry} material={materials['_defaultMat.021']} />
              <mesh name="Mesh_body009_3" geometry={nodes.Mesh_body009_3.geometry} material={materials['window.021']} />
              <mesh name="Mesh_body009_4" geometry={nodes.Mesh_body009_4.geometry} material={materials.lightBack} />
              <mesh name="Mesh_body009_5" geometry={nodes.Mesh_body009_5.geometry} material={materials.lightFront} />
              <group name="wheel_back008" scale={-1}>
                <mesh name="Mesh_wheel_frontLeft041" geometry={nodes.Mesh_wheel_frontLeft041.geometry} material={materials.carTire} />
                <mesh name="Mesh_wheel_frontLeft041_1" geometry={nodes.Mesh_wheel_frontLeft041_1.geometry} material={materials['_defaultMat.021']} />
              </group>
            </group>
            <group name="wheel_backLeft008" scale={-1}>
              <mesh name="Mesh_wheel_frontLeft042" geometry={nodes.Mesh_wheel_frontLeft042.geometry} material={materials.carTire} />
              <mesh name="Mesh_wheel_frontLeft042_1" geometry={nodes.Mesh_wheel_frontLeft042_1.geometry} material={materials['_defaultMat.021']} />
            </group>
            <group name="wheel_backRight008">
              <mesh name="Mesh_wheel_frontLeft043" geometry={nodes.Mesh_wheel_frontLeft043.geometry} material={materials.carTire} />
              <mesh name="Mesh_wheel_frontLeft043_1" geometry={nodes.Mesh_wheel_frontLeft043_1.geometry} material={materials['_defaultMat.021']} />
            </group>
            <group name="wheel_frontLeft008" scale={-1}>
              <mesh name="Mesh_wheel_frontLeft044" geometry={nodes.Mesh_wheel_frontLeft044.geometry} material={materials.carTire} />
              <mesh name="Mesh_wheel_frontLeft044_1" geometry={nodes.Mesh_wheel_frontLeft044_1.geometry} material={materials['_defaultMat.021']} />
            </group>
            <group name="wheel_frontRight008">
              <mesh name="Mesh_wheel_frontLeft045" geometry={nodes.Mesh_wheel_frontLeft045.geometry} material={materials.carTire} />
              <mesh name="Mesh_wheel_frontLeft045_1" geometry={nodes.Mesh_wheel_frontLeft045_1.geometry} material={materials['_defaultMat.021']} />
            </group>
          </group>
        </group>
        <group name="greenCar001" position={[-0.8, 0, 0.218]} scale={0.096}>
          <group name="suv006">
            <group name="body006">
              <mesh name="Mesh_body007" geometry={nodes.Mesh_body007.geometry} material={materials['plastic.001']} />
              <mesh name="Mesh_body007_1" geometry={nodes.Mesh_body007_1.geometry} material={materials.DarkGreen} />
              <mesh name="Mesh_body007_2" geometry={nodes.Mesh_body007_2.geometry} material={materials['_defaultMat.021']} />
              <mesh name="Mesh_body007_3" geometry={nodes.Mesh_body007_3.geometry} material={materials['window.021']} />
              <mesh name="Mesh_body007_4" geometry={nodes.Mesh_body007_4.geometry} material={materials.lightBack} />
              <mesh name="Mesh_body007_5" geometry={nodes.Mesh_body007_5.geometry} material={materials.lightFront} />
              <group name="wheel_back006" scale={-1}>
                <mesh name="Mesh_wheel_frontLeft031" geometry={nodes.Mesh_wheel_frontLeft031.geometry} material={materials.carTire} />
                <mesh name="Mesh_wheel_frontLeft031_1" geometry={nodes.Mesh_wheel_frontLeft031_1.geometry} material={materials['_defaultMat.021']} />
              </group>
            </group>
            <group name="wheel_backLeft006" scale={-1}>
              <mesh name="Mesh_wheel_frontLeft032" geometry={nodes.Mesh_wheel_frontLeft032.geometry} material={materials.carTire} />
              <mesh name="Mesh_wheel_frontLeft032_1" geometry={nodes.Mesh_wheel_frontLeft032_1.geometry} material={materials['_defaultMat.021']} />
            </group>
            <group name="wheel_backRight006">
              <mesh name="Mesh_wheel_frontLeft033" geometry={nodes.Mesh_wheel_frontLeft033.geometry} material={materials.carTire} />
              <mesh name="Mesh_wheel_frontLeft033_1" geometry={nodes.Mesh_wheel_frontLeft033_1.geometry} material={materials['_defaultMat.021']} />
            </group>
            <group name="wheel_frontLeft006" scale={-1}>
              <mesh name="Mesh_wheel_frontLeft034" geometry={nodes.Mesh_wheel_frontLeft034.geometry} material={materials.carTire} />
              <mesh name="Mesh_wheel_frontLeft034_1" geometry={nodes.Mesh_wheel_frontLeft034_1.geometry} material={materials['_defaultMat.021']} />
            </group>
            <group name="wheel_frontRight006">
              <mesh name="Mesh_wheel_frontLeft035" geometry={nodes.Mesh_wheel_frontLeft035.geometry} material={materials.carTire} />
              <mesh name="Mesh_wheel_frontLeft035_1" geometry={nodes.Mesh_wheel_frontLeft035_1.geometry} material={materials['_defaultMat.021']} />
            </group>
          </group>
        </group>
        <group name="pinkCar001" position={[0.179, 0, -0.645]} scale={0.096}>
          <group name="suv005">
            <group name="body005">
              <mesh name="Mesh_body006" geometry={nodes.Mesh_body006.geometry} material={materials['plastic.001']} />
              <mesh name="Mesh_body006_1" geometry={nodes.Mesh_body006_1.geometry} material={materials.Pink} />
              <mesh name="Mesh_body006_2" geometry={nodes.Mesh_body006_2.geometry} material={materials['_defaultMat.021']} />
              <mesh name="Mesh_body006_3" geometry={nodes.Mesh_body006_3.geometry} material={materials['window.021']} />
              <mesh name="Mesh_body006_4" geometry={nodes.Mesh_body006_4.geometry} material={materials.lightBack} />
              <mesh name="Mesh_body006_5" geometry={nodes.Mesh_body006_5.geometry} material={materials.lightFront} />
              <group name="wheel_back005" scale={-1}>
                <mesh name="Mesh_wheel_frontLeft026" geometry={nodes.Mesh_wheel_frontLeft026.geometry} material={materials.carTire} />
                <mesh name="Mesh_wheel_frontLeft026_1" geometry={nodes.Mesh_wheel_frontLeft026_1.geometry} material={materials['_defaultMat.021']} />
              </group>
            </group>
            <group name="wheel_backLeft005" scale={-1}>
              <mesh name="Mesh_wheel_frontLeft027" geometry={nodes.Mesh_wheel_frontLeft027.geometry} material={materials.carTire} />
              <mesh name="Mesh_wheel_frontLeft027_1" geometry={nodes.Mesh_wheel_frontLeft027_1.geometry} material={materials['_defaultMat.021']} />
            </group>
            <group name="wheel_backRight005">
              <mesh name="Mesh_wheel_frontLeft028" geometry={nodes.Mesh_wheel_frontLeft028.geometry} material={materials.carTire} />
              <mesh name="Mesh_wheel_frontLeft028_1" geometry={nodes.Mesh_wheel_frontLeft028_1.geometry} material={materials['_defaultMat.021']} />
            </group>
            <group name="wheel_frontLeft005" scale={-1}>
              <mesh name="Mesh_wheel_frontLeft029" geometry={nodes.Mesh_wheel_frontLeft029.geometry} material={materials.carTire} />
              <mesh name="Mesh_wheel_frontLeft029_1" geometry={nodes.Mesh_wheel_frontLeft029_1.geometry} material={materials['_defaultMat.021']} />
            </group>
            <group name="wheel_frontRight005">
              <mesh name="Mesh_wheel_frontLeft030" geometry={nodes.Mesh_wheel_frontLeft030.geometry} material={materials.carTire} />
              <mesh name="Mesh_wheel_frontLeft030_1" geometry={nodes.Mesh_wheel_frontLeft030_1.geometry} material={materials['_defaultMat.021']} />
            </group>
          </group>
        </group>
        <group name="violetCar001" position={[1.26, 0, 0.711]} rotation={[0, -Math.PI / 2, 0]} scale={0.096}>
          <group name="suv004">
            <group name="body004">
              <mesh name="Mesh_body005" geometry={nodes.Mesh_body005.geometry} material={materials['plastic.001']} />
              <mesh name="Mesh_body005_1" geometry={nodes.Mesh_body005_1.geometry} material={materials.Violet} />
              <mesh name="Mesh_body005_2" geometry={nodes.Mesh_body005_2.geometry} material={materials['_defaultMat.021']} />
              <mesh name="Mesh_body005_3" geometry={nodes.Mesh_body005_3.geometry} material={materials['window.021']} />
              <mesh name="Mesh_body005_4" geometry={nodes.Mesh_body005_4.geometry} material={materials.lightBack} />
              <mesh name="Mesh_body005_5" geometry={nodes.Mesh_body005_5.geometry} material={materials.lightFront} />
              <group name="wheel_back004" scale={-1}>
                <mesh name="Mesh_wheel_frontLeft021" geometry={nodes.Mesh_wheel_frontLeft021.geometry} material={materials.carTire} />
                <mesh name="Mesh_wheel_frontLeft021_1" geometry={nodes.Mesh_wheel_frontLeft021_1.geometry} material={materials['_defaultMat.021']} />
              </group>
            </group>
            <group name="wheel_backLeft004" scale={-1}>
              <mesh name="Mesh_wheel_frontLeft022" geometry={nodes.Mesh_wheel_frontLeft022.geometry} material={materials.carTire} />
              <mesh name="Mesh_wheel_frontLeft022_1" geometry={nodes.Mesh_wheel_frontLeft022_1.geometry} material={materials['_defaultMat.021']} />
            </group>
            <group name="wheel_backRight004">
              <mesh name="Mesh_wheel_frontLeft023" geometry={nodes.Mesh_wheel_frontLeft023.geometry} material={materials.carTire} />
              <mesh name="Mesh_wheel_frontLeft023_1" geometry={nodes.Mesh_wheel_frontLeft023_1.geometry} material={materials['_defaultMat.021']} />
            </group>
            <group name="wheel_frontLeft004" scale={-1}>
              <mesh name="Mesh_wheel_frontLeft024" geometry={nodes.Mesh_wheel_frontLeft024.geometry} material={materials.carTire} />
              <mesh name="Mesh_wheel_frontLeft024_1" geometry={nodes.Mesh_wheel_frontLeft024_1.geometry} material={materials['_defaultMat.021']} />
            </group>
            <group name="wheel_frontRight004">
              <mesh name="Mesh_wheel_frontLeft025" geometry={nodes.Mesh_wheel_frontLeft025.geometry} material={materials.carTire} />
              <mesh name="Mesh_wheel_frontLeft025_1" geometry={nodes.Mesh_wheel_frontLeft025_1.geometry} material={materials['_defaultMat.021']} />
            </group>
          </group>
        </group>
        <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials['Material.001']} />
        <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials.white} />
        <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials.white} />
        <mesh name="Cube002" geometry={nodes.Cube002.geometry} material={materials.white} />
        <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials.Violet} position={[0.93, 0, 0.597]} scale={0.282} />
        <mesh name="Cube005" geometry={nodes.Cube005.geometry} material={materials.DarkGreen} position={[0.75, 0, 0.519]} rotation={[0, -0.381, 0]} scale={[0.493, 0.282, 0.282]} />
        <mesh name="Cube006" geometry={nodes.Cube006.geometry} material={materials.Cyan} position={[-0.597, 0, 0.552]} rotation={[0, 0.315, 0]} scale={0.214} />
        <mesh name="Cube007" geometry={nodes.Cube007.geometry} material={materials.Cyan} position={[-0.756, 0, 0.638]} rotation={[0, -0.413, 0]} scale={0.214} />
        {/* <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={nodes.Cube008.material} scale={0.407} /> */}
        <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials.Pink} position={[0.918, 0, -0.559]} scale={0.282} />
        <mesh name="Cube010" geometry={nodes.Cube010.geometry} material={materials.Cyan} position={[0.713, 0, -0.473]} rotation={[0, -0.44, 0]} scale={[0.631, 0.282, 0.282]} />
      </group>
    </group>
  )
}

useGLTF.preload('banner.glb')
