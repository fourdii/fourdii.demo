import * as THREE from 'three'
import React, { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { MeshReflectorMaterial, Text, useTexture, useGLTF, OrbitControls, Environment, Reflector } from '@react-three/drei'
// import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Overlay from './Overlay'
import url from './f1.mp4'
import carModelUrl from './f1.glb'
import styled from "styled-components";
import tw from "twin.macro";
// import { Controls, PlayState, Timeline, Tween } from 'react-gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Timeline } from "gsap/gsap-core";
import gsap from "gsap";
import './style.css';
 import C1 from './C1.png';
 import C2 from './C2.png';
 import C3 from './C3.png';
 import C4 from './C4.png';
 import C5 from './C5.png';


gsap.registerPlugin(ScrollTrigger);

// const TopSectionContainer = styled.div`
//   ${tw`
//   w-screen
//   h-full
//   overflow-y-scroll
//   overflow-x-hidden
//   relative  
//   m-0
//   `};
// `;


function CarModel(props) {
  const { scene } = useGLTF(carModelUrl)
  return <primitive object={scene} {...props} />
}

function Cylinder({ clicked, ...props }) {

  // const [video] = useState(() => {
  //   const vid = document.createElement("video");
  //   vid.src = url;
  //   vid.crossOrigin = "Anonymous";
  //   vid.loop = true;
  //   vid.muted = true;
  //   vid.play();
  //   return vid;
  // });

  const [c1, c2, c3, c4, c5] = useTexture([C1, C2, C3, C4, C5]);

  
  // useEffect(() => void (clicked && video.play()), [video, clicked])
  return (
<>
    <mesh rotation={[0,0,0]} >
      <cylinderGeometry args={[4, 4, 2, 60, 10, true, 0, 2 * Math.PI / 5]} />
      <meshBasicMaterial attachArray="material" side={THREE.DoubleSide} map={c1}>
        {/* <videoTexture wrapS={THREE.RepeatWrapping}  wrapT={THREE.RepeatWrapping} repeat={[5,1]} attach="map" args={[video]} />        */}
      </meshBasicMaterial>
      </mesh>

    <mesh rotation={[0, 2 * Math.PI / 5, 0 ]}>
      <cylinderGeometry args={[4, 4, 2, 60, 10, true, 0, 2 * Math.PI / 5]}  />
      <meshBasicMaterial attachArray="material" side={THREE.DoubleSide} map={c2}>
        {/* <videoTexture wrapS={THREE.RepeatWrapping}  wrapT={THREE.RepeatWrapping} repeat={[5,1]} attach="map" args={[video]} />        */}
      </meshBasicMaterial>
      </mesh>

<mesh rotation={[0, 4 * Math.PI / 5, 0]} >
      <cylinderGeometry args={[4, 4, 2, 60, 10, true, 0, 2 * Math.PI / 5]}  />
      <meshBasicMaterial attachArray="material" side={THREE.DoubleSide} map={c3}>
        {/* <videoTexture wrapS={THREE.RepeatWrapping}  wrapT={THREE.RepeatWrapping} repeat={[5,1]} attach="map" args={[video]} />        */}
      </meshBasicMaterial>
      </mesh>

<mesh rotation={[0, 6 * Math.PI / 5, 0]} >
      <cylinderGeometry args={[4, 4, 2, 60, 10, true, 0, 2 * Math.PI / 5]}/>
      <meshBasicMaterial attachArray="material" side={THREE.DoubleSide}  map={c4}>
        {/* <videoTexture wrapS={THREE.RepeatWrapping}  wrapT={THREE.RepeatWrapping} repeat={[5,1]} attach="map" args={[video]} />        */}
      </meshBasicMaterial>
      </mesh>

<mesh rotation={[0, 8 * Math.PI / 5, 0]}>
      <cylinderGeometry args={[4, 4, 2, 60, 10, true, 0, 2 * Math.PI / 5]}   />
      <meshBasicMaterial attachArray="material" side={THREE.DoubleSide} map={c5}>
        {/* <videoTexture wrapS={THREE.RepeatWrapping}  wrapT={THREE.RepeatWrapping} repeat={[5,1]} attach="map" args={[video]} />        */}
      </meshBasicMaterial>
    </mesh>
    </>
  )
}

// function Intro({ start, set }) {
//   const [vec] = useState(() => new THREE.Vector3())
//   useEffect(() => setTimeout(() => set(true), 500), [])
//   return useFrame((state) => {
//     if (start) {
//       // state.camera.position.lerp(vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14), 0.05)
//       // state.camera.lookAt(0, 0, 0)
//     }
//   })
// }

function AnimationWrapper() {
  const { scene, camera } = useThree();
  const tl = React.useRef();

  React.useEffect(() => {
    scene.rotation.set(0, 0, 0);
    camera.position.set(0, 3, 30);
    camera.rotation.set(0, 0, 0);

    let animateCameraIn = gsap
      .timeline({
        defaults: {
          ease: "expo",
        },
      });

    animateCameraIn.to(camera.position, { x: 0, y: 1, z:11, duration:3})

    let animateModelIn = gsap
    .timeline({
      defaults: {
        ease: "expo",
      },
    });

    animateModelIn.to(scene.rotation, { y: 6.3, duration:3})


    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section-two",
          start: "top top",
          endTrigger: ".section-five",
          end: "bottom bottom",
          scrub: 1
        }
      })      
      .to(scene.rotation, { y: 12.6})
      // .to(camera.position, { x: -0.1 })
      // .to(scene.rotation, { z: 1.6 })
      // .to(scene.rotation, { z: 0.02, y: 3.1 }, "simultaneously")
      // .to(camera.position, { x: 0.16 }, "simultaneously");
  }, []);

  return null;
}


export function TopSection() {
  const [clicked, setClicked] = useState(false)
  const [ready, setReady] = useState(false)
  const store = { clicked, setClicked, ready, setReady }

  return (
 
    <>
      <Canvas 
        style={{
          width: "100vw",
          height: "100vh",
          zIndex: 40,
          position: "fixed"
        }}
      gl={{ alpha: false }} dpr={[1, 1.5]} camera={{ fov: 45, position: [0, 0, 0] }}>
        <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0} enableDamping={false} enablePan={false} enableZoom={false}/>
        <color attach="background" args={['#191920']} />
        <fog attach="fog" args={['#191920', 0, 15]} />
        <Environment preset="city" />
        <group position={[0, 0, 0]}>
        <CarModel rotation={[0, Math.PI -2, 0]} position={[-2, -1, 5]}  scale={[0.26, 0.26, 0.26]} />
          <Cylinder {...store}  />
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={40}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#101010"
              metalness={0.5}
            />
          </mesh>
        </group>
        <AnimationWrapper />
        {/* <Intro start={ready && clicked} set={setReady} /> */}
      </Canvas>
      <Overlay {...store} /> 
      <section className="section-one"></section>
      <section className="section-two"></section>
      <section className="section-three"></section>
      <section className="section-four"></section>
      <section className="section-five"></section>
      </>
  )
}


