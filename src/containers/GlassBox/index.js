import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Environment, useGLTF, useTexture } from '@react-three/drei'
import url from './pill2.glb'
import url2 from './adams_place_bridge_1k.hdr'
import carModelUrl from '../TopSection/f1.glb'


function CarModel(props) {
  const { scene } = useGLTF(carModelUrl)
  return <primitive object={scene} {...props} />
}


function Model({ color, roughness, transmission, thickness, ...props }) {
  const ref = useRef(null)

    const [active, setActive] = useState(false);
    useFrame((state, delta) => {
      if (!active) {
        ref.current.rotation.y += 0.01;
        
      }
    });
 
  const { nodes } = useGLTF(url)
  return (
    <group ref={ref} {...props}>
      <CarModel
        position={[0, 0.5, 0]}
        rotation={[0, 0, 3.1]}
        scale={[0.7, 0.7, 0.7]}
      />
      <mesh
        onClick={(event) => setActive(!active)}
        geometry={nodes.Cube.geometry}
        scale={[2, 1.5, 3]}
      >
        <meshPhysicalMaterial
          color={0xffffff}
          metalness={0}
          roughness={0}
          transmission={0.9}
          envMapIntensity={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transparent={true}
          opacity={0.5}
          reflectivity={0.5}
          refractionRatio={0.985}
          ior={1.5}
          thickness={0.1}
          side={THREE.FrontSide}
        />

        {/* <meshPhysicalMaterial
          color={color}
          transmission={transmission}
          roughness={roughness}
          thickness={thickness}
        /> */}
      </mesh>
    </group>
  );
}

function Box() {
 
  return (
    <group >
      <directionalLight position={[0, -1, 0]} intensity={0.2} />
      <Model color="white" transmission={0.9} thickness={0.1} roughness={0} position={[0, 0, 0]} rotation={[Math.PI, 0, 0]} />
    </group>
  )
}

export function GlassBox() {
  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        zIndex: 40,
        position: "fixed",
      }}
    >
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, -10]} intensity={0.5} castShadow />
      <Box />
      <Environment files={url2} />
    </Canvas>
  );
}