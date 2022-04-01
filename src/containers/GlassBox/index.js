import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Environment, useGLTF, useTexture, OrbitControls } from '@react-three/drei'
import url from './pill2.glb'
import url2 from './adams_place_bridge_1k.hdr'
import carModelUrl from '../TopSection/f1.glb'
import url3 from './empty_warehouse_01_2k.hdr'
import { LayerMaterial, Depth, Noise } from 'lamina'




function CarModel(props) {
  const { scene } = useGLTF(carModelUrl)
  return <primitive castShadow={true}  object={scene} {...props} />
  
}


export const Model = () => {
  const ref = useRef(null)

    //const [active, setActive] = useState(false);
    // useFrame((state, delta) => {
    //   if (!active) {
    //     ref.current.rotation.y += 0.01;
    //   }
    // });

    const { nodes } = useGLTF(url);
    console.log(nodes);


  return (
    <group
    scale={[0.6, 0.6, 0.6]}
    position={[0, -1, 0]}

    ref={ref} >
      <CarModel
        position={[0, 1, 0]}
        rotation={[1.5, 0.3, 0]}
        scale={[0.4, 0.4, 0.4]}
      />
      <mesh      
      receiveShadow
        geometry={nodes.ChamferBox001.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
      >
        <meshPhysicalMaterial
          color={0xffffff}
          metalness={0.1}
          roughness={0.05}
          transmission={1}
          envMapIntensity={1.5}
          clearcoat={0.5}
          clearcoatRoughness={0.1}
          transparent={true}
          opacity={0.15}
          reflectivity={0.5}
          refractionRatio={0.8}
          ior={0.5}
          thickness={0.1}
          normalScale={0.3}
          clearcoatNormalScale={0.2}          
          side={THREE.DoubleSide}
          depthTest={true}
          depthWrite={true}
        />      
      </mesh>
      <mesh
      receiveShadow
        geometry={nodes.Cylinder001.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
              >
         <meshPhysicalMaterial
          color={0xffffff}
          metalness={0}
          roughness={0.05}
          transmission={1}
          envMapIntensity={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transparent={true}
          opacity={0.5}
          reflectivity={0.5}
          refractionRatio={0.985}
          ior={1}
          thickness={0.5}
          normalScale={0.3}
          clearcoatNormalScale={0.2}          
          side={THREE.DoubleSide}
          depthTest={true}
          depthWrite={true}
        />      
      </mesh>
      <mesh
      receiveShadow
        geometry={nodes.Cylinder002.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
              >
         <meshPhysicalMaterial
          color={0xffffff}
          metalness={0}
          roughness={0.05}
          transmission={1}
          envMapIntensity={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transparent={true}
          opacity={0.5}
          reflectivity={0.5}
          refractionRatio={0.985}
          ior={1}
          thickness={0.5}
          normalScale={0.3}
          clearcoatNormalScale={0.2}          
          side={THREE.DoubleSide}
          depthTest={true}
          depthWrite={true}
        />       
      </mesh>
      <mesh
      receiveShadow
        geometry={nodes.Object001.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
              >
         <meshPhysicalMaterial
          color={0xffffff}
          metalness={0}
          roughness={0.05}
          transmission={1}
          envMapIntensity={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transparent={true}
          opacity={0.5}
          reflectivity={0.5}
          refractionRatio={0.985}
          ior={1}
          thickness={0.5}
          normalScale={0.3}
          clearcoatNormalScale={0.2}          
          side={THREE.DoubleSide}
          depthTest={true}
          depthWrite={true}
        />        
      </mesh>
      <mesh
      receiveShadow
        geometry={nodes.Object004.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
              >
        <meshPhysicalMaterial
          color={0xffffff}
          metalness={0}
          roughness={0.05}
          transmission={1}
          envMapIntensity={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transparent={true}
          opacity={0.5}
          reflectivity={0.5}
          refractionRatio={0.985}
          ior={1}
          thickness={0.5}
          normalScale={0.3}
          clearcoatNormalScale={0.2}          
          side={THREE.DoubleSide}
          depthTest={true}
          depthWrite={true}
        />          
      </mesh>
      <mesh
      receiveShadow
        geometry={nodes.Object005.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
              >
        <meshPhysicalMaterial
          color={0xffffff}
          metalness={0}
          roughness={0.05}
          transmission={1}
          envMapIntensity={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transparent={true}
          opacity={0.5}
          reflectivity={0.5}
          refractionRatio={0.985}
          ior={1}
          thickness={0.5}
          normalScale={0.3}
          clearcoatNormalScale={0.2}          
          side={THREE.DoubleSide}
          depthTest={true}
          depthWrite={true}
        />           
      </mesh>
      <mesh
      receiveShadow
        geometry={nodes.Object006.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
              >
         <meshPhysicalMaterial
          color={0xffffff}
          metalness={0}
          roughness={0.05}
          transmission={1}
          envMapIntensity={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transparent={true}
          opacity={0.5}
          reflectivity={0.5}
          refractionRatio={0.985}
          ior={1}
          thickness={0.5}
          normalScale={0.3}
          clearcoatNormalScale={0.2}          
          side={THREE.DoubleSide}
          depthTest={true}
          depthWrite={true}
        />          
      </mesh>
      <mesh
      receiveShadow
        geometry={nodes.Object008.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
              >
        <meshPhysicalMaterial
          color={0xffffff}
          metalness={0}
          roughness={0.05}
          transmission={1}
          envMapIntensity={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transparent={true}
          opacity={0.5}
          reflectivity={0.5}
          refractionRatio={0.985}
          ior={1}
          thickness={0.5}
          normalScale={0.3}
          clearcoatNormalScale={0.2}          
          side={THREE.DoubleSide}
          depthTest={true}
          depthWrite={true}
        />         
      </mesh>
    </group>
  );
}

 function Box() {
 
  return (
    <group >
      <Model  />
    </group>
  )
}

export function GlassBox() {
  return (
    <Canvas
    shadowMap
      style={{
        width: "100vw",
        height: "100vh",
        zIndex: 40,
        position: "fixed",
      }}
    >
        <color attach="background" args={["#000000"]} />
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={-Math.PI / 2}
          enableDamping={true}
          enablePan={true}
          enableZoom={true}
        />
              {/* <directionalLight position={[0, -1, 0]} intensity={0.2} />
      <ambientLight intensity={1} />
      <ambientLight intensity={1} /> */}

      <spotLight intensity={1} position={[0, 0, 3]} angle={0.2} penumbra={1} castShadow />    
        {/* <directionalLight position={[10, 10, -10]} intensity={0.5} castShadow /> */}
      <Box />
      <Environment files={url3} />
    </Canvas>
  );
}