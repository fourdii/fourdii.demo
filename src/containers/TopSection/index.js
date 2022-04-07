import * as THREE from "three";
import React, {
  Suspense,
  useEffect,
  useLayoutEffect,
  useState,
  useRef,
} from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  Html,
  useProgress,
  MeshReflectorMaterial,
  Text,
  useTexture,
  useGLTF,
  OrbitControls,
  Environment,
  Reflector,
  Stats,
  RoundedBox,
  PerspectiveCamera
} from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
// import Overlay from "./Overlay";
import carModelUrl from "./f1.glb";
import car1 from "./car1.glb";
import car2 from "./car2.glb";
import car3 from "./car3.glb";
import floorTexUri from "./floor.jpeg";

import styled from "styled-components";
import tw from "twin.macro";
// import { Controls, PlayState, Timeline, Tween } from 'react-gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import { Timeline } from "gsap/gsap-core";
import gsap from "gsap";
import "./style.css";
import C1 from "./C1.jpg";
import C2 from "./C2.jpg";
import V1 from "./V1.mp4";


import glassBoxURL from "./glassBox.glb";
import envMapURL from "./empty_warehouse_01_2k.hdr";
import texture1 from "./texture_1.jpg";
import { proxy, useSnapshot, subscribe } from "valtio";
import { MeshStandardMaterial } from "three";
// import { Physics, usePlane } from '@react-three/cannon'

gsap.registerPlugin(ScrollTrigger);

const params = {
  color: 0xffffff,
  transmission: 1,
  opacity: 0.3,
  metalness: 0,
  roughness: 0,
  ior: 1.5,
  thickness: 0.01,
  specularIntensity: 1,
  specularColor: 0xffffff,
  lightIntensity: 1,
  exposure: 1,
  reflectivity: 1,
  envMapIntensity: 0.8,
};

const leftState = proxy({
  count: 0,
});

const rightState = proxy({
  count: 0,
});

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

const Car = (props) => {
  const { scene } = useGLTF(carModelUrl);
  return <primitive object={scene} {...props} />;
};

const CarModel1 = (props) => {
  const { scene } = useGLTF(car1);
  return <primitive object={scene} {...props} />;
};

const CarModel2 = (props) => {
  const { scene } = useGLTF(car2);
  return <primitive object={scene} {...props} />;
};

const CarModel3 = (props) => {
  const { scene } = useGLTF(car3);
  return <primitive object={scene} {...props} />;
};

const Cylinder = ({ clicked, ...props }) => {
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = V1;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  const [c1, c2] = useTexture([C1, C2]);

  c1.wrapS = THREE.RepeatWrapping;
  c1.repeat.x = -1;
  c2.wrapS = THREE.RepeatWrapping;
  c2.repeat.x = -1;

  const state = {
    radius: 16,
    height: 15,
  };
  // c3.wrapS = THREE.RepeatWrapping;
  // c3.repeat.x = -1;
  // c4.wrapS = THREE.RepeatWrapping;
  // c4.repeat.x = -1;
  // c5.wrapS = THREE.RepeatWrapping;
  // c5.repeat.x = -1;

  // useEffect(() => void (clicked && video.play()), [video, clicked])
  return (
    <group position={[0, 7.5, 0]}>
      <mesh rotation={[0, 0, 0]} position={[0, 0, 0]}>
        <cylinderGeometry
          args={[
            state.radius,
            state.radius,
            state.height,
            60,
            10,
            true,
            0,
            (2 * Math.PI) / 3,
          ]}
        />
        <meshBasicMaterial
          attachArray="material"
          side={THREE.BackSide}
          map={c1}
        ></meshBasicMaterial>
      </mesh>

      <mesh rotation={[0, (2 * Math.PI) / 3, 0]} position={[0, 0, 0]}>
        <cylinderGeometry
          args={[
            state.radius,
            state.radius,
            state.height,
            60,
            10,
            true,
            0,
            (2 * Math.PI) / 3,
          ]}
        />
        <meshBasicMaterial
          attachArray="material"
          side={THREE.BackSide}
          // map={c2}
        >
          <videoTexture attach="map" args={[video]} />
        </meshBasicMaterial>
      </mesh>

      <mesh rotation={[0, (4 * Math.PI) / 3, 0]} position={[0, 0, 0]}>
        <cylinderGeometry
          args={[
            state.radius,
            state.radius,
            state.height,
            60,
            10,
            true,
            0,
            (2 * Math.PI) / 3,
          ]}
        />
        <meshBasicMaterial
          attachArray="material"
          side={THREE.BackSide}
          map={c2}
        ></meshBasicMaterial>
      </mesh>
    </group>
  );
};

const AnimationWrapper = () => {
  const { scene, camera } = useThree();
  // const tl = React.useRef();

  React.useEffect(() => {
    scene.rotation.set(0, 1.4, 0);
    camera.position.set(0, 0, 0);

    // let spherical = new THREE.Spherical(0, Math.PI, 0);
    // spherical.makeSafe();
    // camera.position.setFromSpherical(spherical);

    let animateModelIn = gsap.timeline({
      defaults: {
        ease: "power2",
      },
    });

    animateModelIn.to(scene.rotation, { y: 6.28, duration: 5, delay: 0.5 });

    // tl.current = gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: ".section-two",
    //       start: "top top",
    //       endTrigger: ".section-five",
    //       end: "bottom bottom",
    //       scrub: 1
    //     }
    //   })
    //   .to(scene.rotation, { y: 12.6})
    // .to(camera.position, { x: -0.1 })
    // .to(scene.rotation, { z: 1.6 })
    // .to(scene.rotation, { z: 0.02, y: 3.1 }, "simultaneously")
    // .to(camera.position, { x: 0.16 }, "simultaneously");
  }, []);

  return null;
};

const SpinCylinderLeft = () => {
  const { scene } = useThree();
  let animateModelIn = gsap.timeline({
    defaults: {
      ease: "power2",
    },
  });

  const spin = () => {
    console.log("spin left");

    animateModelIn.to(scene.rotation, {
      y: scene.rotation.y - 2.1,
      duration: 2,
    });
  };

  React.useEffect(() => {
    subscribe(leftState, () => spin());
  }, []);

  return null;
};

const SpinCylinderRight = () => {
  const { scene } = useThree();
  let animateModelIn = gsap.timeline({
    defaults: {
      ease: "power2",
    },
  });

  const spin = () => {
    console.log("spin right");

    animateModelIn.to(scene.rotation, {
      y: scene.rotation.y + 2.1,
      duration: 2,
    });
  };

  React.useEffect(() => {
    subscribe(rightState, () => spin());
  }, []);

  return null;
};

const GlassBox1 = ({ pos, rot }) => {
  const ref = useRef(null);

  const [active, setActive] = useState(false);
  useFrame((state, delta) => {
    if (active) {
      ref.current.rotation.y += 0.04;
    }
  });

  const { nodes } = useGLTF(glassBoxURL);

  return (
    <group
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
      scale={[0.6, 0.6, 0.6]}
      position={pos}
      rotation={rot}
      ref={ref}
    >
      <spotLight intensity={1} position={[0, 3, 0]} angle={1} penumbra={1} />
      <CarModel1
        position={[0, 1.1, 0]}
        rotation={[1.5, 0.4, 0]}
        scale={[0.4, 0.4, 0.4]}
      />
      <mesh
        geometry={nodes.ChamferBox001.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
      >
        <meshPhysicalMaterial
          metalness={0.9}
          roughness={0.05}
          envMapIntensity={0.9}
          clearcoat={1}
          transparent={true}
          // transmission: .95,
          opacity={0.5}
          reflectivity={0.2}
          refractionRatio={0.985}
          ior={0.9}
          side={THREE.BackSide}
        />

        {/* <meshPhysicalMaterial
            color={params.color} 
            transmission={params.transmission} 
            opacity={params.opacity} 
            metalness={params.metalness} 
            roughness={params.roughness} 
            ior={params.ior} 
            thickness={params.thickness} 
            specularIntensity={params.specularIntensity} 
            specularColor={params.specularColor} 
            envMapIntensity={params.envMapIntensity} 
            lightIntensity={params.lightIntensity} 
            exposure={params.exposure} 
            transparent={true}
            side={THREE.DoubleSide}          
         /> */}
      </mesh>
      <mesh
        geometry={nodes.Cylinder001.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
      >
        <meshPhysicalMaterial
          color={params.color}
          transmission={params.transmission}
          opacity={params.opacity}
          metalness={params.metalness}
          roughness={params.roughness}
          ior={params.ior}
          thickness={params.thickness}
          specularIntensity={params.specularIntensity}
          specularColor={params.specularColor}
          envMapIntensity={params.envMapIntensity}
          lightIntensity={params.lightIntensity}
          exposure={params.exposure}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Cylinder002.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
      >
        <meshPhysicalMaterial
          color={params.color}
          transmission={params.transmission}
          opacity={params.opacity}
          metalness={params.metalness}
          roughness={params.roughness}
          ior={params.ior}
          thickness={params.thickness}
          specularIntensity={params.specularIntensity}
          specularColor={params.specularColor}
          envMapIntensity={params.envMapIntensity}
          lightIntensity={params.lightIntensity}
          exposure={params.exposure}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Object001.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
      >
        <meshPhysicalMaterial
          color={params.color}
          transmission={params.transmission}
          opacity={params.opacity}
          metalness={params.metalness}
          roughness={params.roughness}
          ior={params.ior}
          thickness={params.thickness}
          specularIntensity={params.specularIntensity}
          specularColor={params.specularColor}
          envMapIntensity={params.envMapIntensity}
          lightIntensity={params.lightIntensity}
          exposure={params.exposure}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Object004.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
      >
        <meshPhysicalMaterial
          color={"#3e4447"}
          transmission={params.transmission}
          opacity={1}
          metalness={1}
          roughness={0}
          ior={params.ior}
          thickness={params.thickness}
          specularIntensity={params.specularIntensity}
          specularColor={params.specularColor}
          envMapIntensity={1}
          lightIntensity={params.lightIntensity}
          exposure={params.exposure}
          transparent={false}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Object005.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
      >
        <meshPhysicalMaterial
          color={params.color}
          transmission={params.transmission}
          opacity={params.opacity}
          metalness={params.metalness}
          roughness={params.roughness}
          ior={params.ior}
          thickness={params.thickness}
          specularIntensity={params.specularIntensity}
          specularColor={params.specularColor}
          envMapIntensity={params.envMapIntensity}
          lightIntensity={params.lightIntensity}
          exposure={params.exposure}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Object006.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
      >
        <meshPhysicalMaterial
          color={"#3e4447"}
          transmission={params.transmission}
          opacity={1}
          metalness={1}
          roughness={0}
          ior={params.ior}
          thickness={params.thickness}
          specularIntensity={params.specularIntensity}
          specularColor={params.specularColor}
          envMapIntensity={1}
          lightIntensity={params.lightIntensity}
          exposure={params.exposure}
          transparent={false}
          side={THREE.DoubleSide}
          s
        />
      </mesh>
      <mesh
        geometry={nodes.Object008.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
      >
        <meshPhysicalMaterial
          color={params.color}
          transmission={params.transmission}
          opacity={params.opacity}
          metalness={params.metalness}
          roughness={params.roughness}
          ior={params.ior}
          thickness={params.thickness}
          specularIntensity={params.specularIntensity}
          specularColor={params.specularColor}
          envMapIntensity={params.envMapIntensity}
          lightIntensity={params.lightIntensity}
          exposure={params.exposure}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

const GlassBox2 = ({ pos, rot }) => {
  const ref = useRef(null);

  const [active, setActive] = useState(false);
  useFrame((state, delta) => {
    if (active) {
      ref.current.rotation.y += 0.04;
    }
  });

  const { nodes } = useGLTF(glassBoxURL);

  return (
    <group
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
      scale={[0.6, 0.6, 0.6]}
      position={pos}
      rotation={rot}
      ref={ref}
    >
      <spotLight intensity={1} position={[0, 3, 0]} angle={0.2} penumbra={1} />
      <CarModel2
        position={[0, 1.1, 0]}
        rotation={[1.5, 0.4, 0]}
        scale={[0.4, 0.4, 0.4]}
      />
      <mesh
        geometry={nodes.ChamferBox001.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
      >
        <meshPhysicalMaterial
          metalness={0.9}
          roughness={0.05}
          envMapIntensity={0.9}
          clearcoat={1}
          transparent={true}
          // transmission: .95,
          opacity={0.5}
          reflectivity={0.2}
          refractionRatio={0.985}
          ior={0.9}
          side={THREE.BackSide}
        />

        {/* <meshPhysicalMaterial
           color={params.color} 
           transmission={params.transmission} 
           opacity={params.opacity} 
           metalness={params.metalness} 
           roughness={params.roughness} 
           ior={params.ior} 
           thickness={params.thickness} 
           specularIntensity={params.specularIntensity} 
           specularColor={params.specularColor} 
           envMapIntensity={params.envMapIntensity} 
           lightIntensity={params.lightIntensity} 
           exposure={params.exposure} 
           transparent={true}
           side={THREE.DoubleSide}          
        /> */}
      </mesh>
      <mesh
        geometry={nodes.Cylinder001.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
      >
        <meshPhysicalMaterial
          color={params.color}
          transmission={params.transmission}
          opacity={params.opacity}
          metalness={params.metalness}
          roughness={params.roughness}
          ior={params.ior}
          thickness={params.thickness}
          specularIntensity={params.specularIntensity}
          specularColor={params.specularColor}
          envMapIntensity={params.envMapIntensity}
          lightIntensity={params.lightIntensity}
          exposure={params.exposure}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Cylinder002.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
      >
        <meshPhysicalMaterial
          color={params.color}
          transmission={params.transmission}
          opacity={params.opacity}
          metalness={params.metalness}
          roughness={params.roughness}
          ior={params.ior}
          thickness={params.thickness}
          specularIntensity={params.specularIntensity}
          specularColor={params.specularColor}
          envMapIntensity={params.envMapIntensity}
          lightIntensity={params.lightIntensity}
          exposure={params.exposure}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Object001.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
      >
        <meshPhysicalMaterial
          color={params.color}
          transmission={params.transmission}
          opacity={params.opacity}
          metalness={params.metalness}
          roughness={params.roughness}
          ior={params.ior}
          thickness={params.thickness}
          specularIntensity={params.specularIntensity}
          specularColor={params.specularColor}
          envMapIntensity={params.envMapIntensity}
          lightIntensity={params.lightIntensity}
          exposure={params.exposure}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Object004.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
      >
        <meshPhysicalMaterial
          color={params.color}
          transmission={params.transmission}
          opacity={params.opacity}
          metalness={params.metalness}
          roughness={params.roughness}
          ior={params.ior}
          thickness={params.thickness}
          specularIntensity={params.specularIntensity}
          specularColor={params.specularColor}
          envMapIntensity={params.envMapIntensity}
          lightIntensity={params.lightIntensity}
          exposure={params.exposure}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Object005.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
      >
        <meshPhysicalMaterial
          color={params.color}
          transmission={params.transmission}
          opacity={params.opacity}
          metalness={params.metalness}
          roughness={params.roughness}
          ior={params.ior}
          thickness={params.thickness}
          specularIntensity={params.specularIntensity}
          specularColor={params.specularColor}
          envMapIntensity={params.envMapIntensity}
          lightIntensity={params.lightIntensity}
          exposure={params.exposure}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Object006.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
      >
        <meshPhysicalMaterial
          color={params.color}
          transmission={params.transmission}
          opacity={params.opacity}
          metalness={params.metalness}
          roughness={params.roughness}
          ior={params.ior}
          thickness={params.thickness}
          specularIntensity={params.specularIntensity}
          specularColor={params.specularColor}
          envMapIntensity={params.envMapIntensity}
          lightIntensity={params.lightIntensity}
          exposure={params.exposure}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Object008.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
      >
        <meshPhysicalMaterial
          color={params.color}
          transmission={params.transmission}
          opacity={params.opacity}
          metalness={params.metalness}
          roughness={params.roughness}
          ior={params.ior}
          thickness={params.thickness}
          specularIntensity={params.specularIntensity}
          specularColor={params.specularColor}
          envMapIntensity={params.envMapIntensity}
          lightIntensity={params.lightIntensity}
          exposure={params.exposure}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

const GlassBox3 = ({ pos, rot }) => {
  const ref = useRef(null);

  const [active, setActive] = useState(false);
  useFrame((state, delta) => {
    if (active) {
      ref.current.rotation.y += 0.04;
    }
  });

  const { nodes } = useGLTF(glassBoxURL);

  return (
    <group
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
      scale={[0.6, 0.6, 0.6]}
      position={pos}
      rotation={rot}
      ref={ref}
    >
      <spotLight intensity={1} position={[0, 3, 0]} angle={0.2} penumbra={1} />
      <CarModel3
        position={[0, 1.1, 0]}
        rotation={[1.5, 0.4, 0]}
        scale={[0.4, 0.4, 0.4]}
      />
      <mesh
        geometry={nodes.ChamferBox001.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
      >
        <meshPhysicalMaterial
          metalness={0.9}
          roughness={0.05}
          envMapIntensity={0.9}
          clearcoat={1}
          transparent={true}
          // transmission: .95,
          opacity={0.5}
          reflectivity={0.2}
          refractionRatio={0.985}
          ior={0.9}
          side={THREE.BackSide}
        />

        {/* <meshPhysicalMaterial
           color={params.color} 
           transmission={params.transmission} 
           opacity={params.opacity} 
           metalness={params.metalness} 
           roughness={params.roughness} 
           ior={params.ior} 
           thickness={params.thickness} 
           specularIntensity={params.specularIntensity} 
           specularColor={params.specularColor} 
           envMapIntensity={params.envMapIntensity} 
           lightIntensity={params.lightIntensity} 
           exposure={params.exposure} 
           transparent={true}
           side={THREE.DoubleSide}          
        /> */}
      </mesh>
      <mesh
        geometry={nodes.Cylinder001.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
      >
        <meshPhysicalMaterial
          color={params.color}
          transmission={params.transmission}
          opacity={params.opacity}
          metalness={params.metalness}
          roughness={params.roughness}
          ior={params.ior}
          thickness={params.thickness}
          specularIntensity={params.specularIntensity}
          specularColor={params.specularColor}
          envMapIntensity={params.envMapIntensity}
          lightIntensity={params.lightIntensity}
          exposure={params.exposure}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Cylinder002.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
      >
        <meshPhysicalMaterial
          color={params.color}
          transmission={params.transmission}
          opacity={params.opacity}
          metalness={params.metalness}
          roughness={params.roughness}
          ior={params.ior}
          thickness={params.thickness}
          specularIntensity={params.specularIntensity}
          specularColor={params.specularColor}
          envMapIntensity={params.envMapIntensity}
          lightIntensity={params.lightIntensity}
          exposure={params.exposure}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Object001.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
      >
        <meshPhysicalMaterial
          color={params.color}
          transmission={params.transmission}
          opacity={params.opacity}
          metalness={params.metalness}
          roughness={params.roughness}
          ior={params.ior}
          thickness={params.thickness}
          specularIntensity={params.specularIntensity}
          specularColor={params.specularColor}
          envMapIntensity={params.envMapIntensity}
          lightIntensity={params.lightIntensity}
          exposure={params.exposure}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Object004.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
      >
        <meshPhysicalMaterial
          color={params.color}
          transmission={params.transmission}
          opacity={params.opacity}
          metalness={params.metalness}
          roughness={params.roughness}
          ior={params.ior}
          thickness={params.thickness}
          specularIntensity={params.specularIntensity}
          specularColor={params.specularColor}
          envMapIntensity={params.envMapIntensity}
          lightIntensity={params.lightIntensity}
          exposure={params.exposure}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Object005.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
      >
        <meshPhysicalMaterial
          color={params.color}
          transmission={params.transmission}
          opacity={params.opacity}
          metalness={params.metalness}
          roughness={params.roughness}
          ior={params.ior}
          thickness={params.thickness}
          specularIntensity={params.specularIntensity}
          specularColor={params.specularColor}
          envMapIntensity={params.envMapIntensity}
          lightIntensity={params.lightIntensity}
          exposure={params.exposure}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Object006.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
      >
        <meshPhysicalMaterial
          color={params.color}
          transmission={params.transmission}
          opacity={params.opacity}
          metalness={params.metalness}
          roughness={params.roughness}
          ior={params.ior}
          thickness={params.thickness}
          specularIntensity={params.specularIntensity}
          specularColor={params.specularColor}
          envMapIntensity={params.envMapIntensity}
          lightIntensity={params.lightIntensity}
          exposure={params.exposure}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Object008.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
      >
        <meshPhysicalMaterial
          color={params.color}
          transmission={params.transmission}
          opacity={params.opacity}
          metalness={params.metalness}
          roughness={params.roughness}
          ior={params.ior}
          thickness={params.thickness}
          specularIntensity={params.specularIntensity}
          specularColor={params.specularColor}
          envMapIntensity={params.envMapIntensity}
          lightIntensity={params.lightIntensity}
          exposure={params.exposure}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

const Box = ({ pos, rot }) => {
  const ref = useRef(null);

  const [active, setActive] = useState(false);
  useFrame((state, delta) => {
    if (active) {
      ref.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh position={pos} rotation={rot} ref={ref}>
      <RoundedBox args={[1, 1, 1]} radius={0.1}>
        <meshPhysicalMaterial
          color={params.color}
          transmission={params.transmission}
          opacity={params.opacity}
          metalness={params.metalness}
          roughness={params.roughness}
          ior={params.ior}
          thickness={params.thickness}
          specularIntensity={params.specularIntensity}
          specularColor={params.specularColor}
          envMapIntensity={params.envMapIntensity}
          lightIntensity={params.lightIntensity}
          exposure={params.exposure}
          transparent={true}
          side={THREE.DoubleSide}
        />
        <Cube />
      </RoundedBox>
    </mesh>
  );
};

const Cube = (pos) => {
  const ref = useRef(null);

  const texture_1 = useLoader(TextureLoader, texture1);
  const texture_2 = useLoader(TextureLoader, texture1);
  const texture_3 = useLoader(TextureLoader, texture1);
  const texture_4 = useLoader(TextureLoader, texture1);
  const texture_5 = useLoader(TextureLoader, texture1);
  const texture_6 = useLoader(TextureLoader, texture1);

  const [active, setActive] = useState(false);
  useFrame((state, delta) => {
    if (active) {
      ref.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh position={pos.pos} ref={ref} args={[1, 1, 1]} scale={[0.8, 0.8, 0.8]}>
      <boxGeometry />
      <meshStandardMaterial map={texture_1} attach="material" />
      <meshStandardMaterial map={texture_2} attach="material" />
      <meshStandardMaterial map={texture_3} attach="material" />
      <meshStandardMaterial map={texture_4} attach="material" />
      <meshStandardMaterial map={texture_5} attach="material" />
      <meshStandardMaterial map={texture_6} attach="material" />
    </mesh>
  );
};

const Floor = (props) => {
  const floorTex = useLoader(TextureLoader, floorTexUri);
  floorTex.wrapS = THREE.RepeatWrapping;
  floorTex.wrapT = THREE.RepeatWrapping;
  floorTex.repeat.x = 10;
  floorTex.repeat.y = 10;

  // const [ref] = usePlane(() => ({ type: "Static", ...props }));
  return (
   // <mesh ref={ref} receiveShadow>
     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color={'#d4d4d4'} map={floorTex}/>
      {/* <MeshReflectorMaterial
        color="#878790"
        blur={[400, 400]}
        resolution={1024}
        mixBlur={1}
        mixStrength={3}
        depthScale={1}
        minDepthThreshold={0.85}
        metalness={0}
        roughness={1}
      /> */}
    </mesh>
  );
};

const CameraControl = () => {
  const { camera, gl } = useThree();
 return  ( <OrbitControls args={[camera, gl.domElement]}
  // maxAzimuthAngle={Math.PI/2}
  // minAzimuthAngle={Math.PI/2}
   rotateSpeed={0.4}
  maxPolarAngle={Math.PI/2.31}
  minPolarAngle={Math.PI/2.31}
  enableRotate={true} 
  enableDamping={true} 
  enablePan={false} 
  enableZoom={false} 
  enabled={true}/>)
}

export function TopSection() {
  const [clicked, setClicked] = useState(false);
  const [ready, setReady] = useState(false);
  const store = { clicked, setClicked, ready, setReady };

  function Loader() {
    const { progress } = useProgress();
    return <Html center>{progress}</Html>;
  }



  return (
    <>
      <Canvas
        style={{
          width: "100vw",
          height: "90vh",
          marginTop: "10vh",
          zIndex: 40,
          position: "fixed",
        }}
        gl={{ alpha: false }}
        dpr={[1, 1.5]}
        camera={{ fov: 60, position: [0, 0, 10] }}
      >
        {/* <PerspectiveCamera makeDefault fov={60} position={[0, 0, 0]} /> */}
        <CameraControl />   
        <color attach="background" args={["#7f7f7f"]} />
        {/* <fog attach="fog" args={['#d3d3d3', 0, 40]} /> */}
        <Environment files={envMapURL} />
        <Suspense fallback={<Loader />}>
          <group position={[0, -4.5, 0]}>
            {/* <group position={[-3, 0.8, -4]} scale={[1.8,1.8,1.8]}>
              <Box 
                {...{
                  pos: [7, 0, -4],
                  rot: [0, 0, 0],
                }}              
              />
              <Box 
                {...{
                  pos: [4.5, 0, -2.5],
                  rot: [0, 0, 0],
                }} 
               />
              <Box 
                {...{
                  pos:[4, 0, -4],
                  rot: [0, 0, 0],
                }} 
              />
            </group>

            <group position={[-1.3, 1, -4.5]} scale={[1.1,1.1,1.1]}>
              <GlassBox1              
                {...{
                  pos: [-2.5, 0, -4.5],
                  rot: [0, 0.5, 0],
                }}
              />
              <GlassBox2              
                {...{
                  pos: [-4, 0, -3.5],
                  rot: [0, 0.1, 0],
                }}            
              />
              <GlassBox3               
                {...{
                  pos: [-6, 0, -4],
                  rot: [0,  -0.1, 0],
                }}            
              />
            </group> */}

            {/* <Car
              rotation={[0, Math.PI - 4.1, 0]}
              position={[0, 0, -13]}
              scale={[1, 1, 1]}
            /> */}

            <Cylinder {...store} />


            <gridHelper
              scale={[2, 2, 2]}
              position={[0, 0.01, 0]}
              rotation={[-Math.PI, 0, 0]}
              args={[16, 16, `white`, `white`]} />

    

            <Floor />
            {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
              <planeGeometry args={[50, 50]} />
              <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={2048}
                mixBlur={10}
                mixStrength={40}
                roughness={1}
                depthScale={12}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#555251"
                metalness={0}
                opacity={0.2}
              />
            </mesh> */}
          </group>
        </Suspense>
        {/* <AnimationWrapper />
        <SpinCylinderLeft />
        <SpinCylinderRight /> */}
      </Canvas>
      {/* <Overlay /> */}
    </>
  );
}

const OverlayContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-screen
    h-[100vh]
    fixed  
    bottom-0
    // px-8
    // pt-16
    z-50
    bg-opacity-0
    // overflow-x-hidden
    // overflow-y-auto
    `};
`;

// const Footer = styled.div`
//   ${tw`
//     flex
//     flex-row
//     w-full
//     h-full
//     border-opacity-10
//     // border-b-[1px]
//     // border-l-[1px]
//     // border-r-[1px]
//     border-gray-500
//     // overflow-x-hidden
//     // overflow-y-auto
//     `};
// `;

// const RingWrapper = styled.div`
//   ${tw`
// flex
// flex-row
// justify-between
// items-center
// `};
// `;

// const Ring = styled.div`
//   ${tw`
// flex
// flex-col
// justify-center
// items-center
// bg-cover
// bg-center
// bg-no-repeat
// w-[5.99vw]
// h-[3.85vw]
// `};
// `;

// const ContentWrapper = styled.div`
//   ${tw`
// flex
// flex-row
// flex-nowrap
// justify-between
// items-center
// w-screen
// `};
// `;

// const Content = styled.div`
//   ${tw`
// flex
// flex-row
// flex-nowrap
// justify-center
// items-center
// text-xs
// // pl-6
// px-4
// font-family[Roboto]
// text-[#9EA9B4]
// pb-4

// // pt-10
// `};
// `;

// const ContentButton = styled.button`
//   ${tw`
// flex
// flex-row
// justify-center
// items-center
// text-xs
// px-4
// font-family[Roboto]
// text-[#9EA9B4]
// pb-4
// // pl-6
// // pt-10
// `};
// `;

const ArrowsWrapper = styled.div`
  ${tw`
flex
flex-row
flex-nowrap
items-center
justify-around
w-screen
h-full
`};
`;

const ArrowLeftWrapper = styled.div`
  ${tw`
flex
flex-row
flex-nowrap
justify-start
items-center
w-1/2
h-full
text-gray-500  
text-sm
`};
`;

const ArrowRightWrapper = styled.div`
  ${tw`
flex
flex-row
flex-nowrap
justify-end
items-center
w-1/2
h-full
text-gray-500 
text-sm
`};
`;

const ArrowLeft = styled.button`
  ${tw`
flex
flex-col
justify-center
items-center
`};
`;

const ArrowRight = styled.button`
  ${tw`
  flex
  flex-col
  justify-center
  items-center
`};
`;

export default function Overlay({ ready, clicked, setClicked }) {
  const snap1 = useSnapshot(leftState);
  const snap2 = useSnapshot(rightState);

  return (
    <OverlayContainer>
      <ArrowsWrapper>
        <ArrowLeftWrapper>
          <ArrowLeft onClick={(e) => leftState.count++}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-36 w-36"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </ArrowLeft>
        </ArrowLeftWrapper>
        <ArrowRightWrapper>
          <ArrowRight onClick={(e) => rightState.count++}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-36 w-36"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </ArrowRight>
        </ArrowRightWrapper>
      </ArrowsWrapper>
      {/* <Footer>
        <ContentWrapper>
          <Content>© 2022 Motorsport Network, All Rights Reserved</Content>
          <Content>
            <ContentButton>Terms of Service</ContentButton>
            <ContentButton>PrivacyPolicy</ContentButton>
          </Content>
        </ContentWrapper>
      </Footer> */}
    </OverlayContainer>
  );
}
