import * as THREE from "three";
import React, { Suspense, useState, useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  Html,
  useProgress,
  MeshReflectorMaterial,
  useTexture,
  useGLTF,
  OrbitControls,
  Environment,
  RoundedBox,
  softShadows,
  Loader,
  Text, 
  TrackballControls,
} from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import carModelUrl from "./model/f1.glb";
import car1 from "./model/car1.glb";
import car2 from "./model/car2.glb";
import car3 from "./model/car3.glb";
import floorTexUri from "./image/floor.jpeg";
import styled from "styled-components";
import tw from "twin.macro";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import "./css/style.css";
import C1 from "./image/C1.jpg";
import C2 from "./image/C2.jpg";
import V1 from "./video/V1.mp4";
import envMapFrameURL from "./texture/envMapFrame.hdr";
import glassBoxPedstalURL from "./model/glassBoxPedstal.glb";
import envMapURL from "./texture/empty_warehouse_01_2k.hdr";
import F1 from "./image/F1.png";
import F2 from "./image/F2.png";
import F3 from "./image/F3.png";
import F4 from "./image/F4.png";
import F5 from "./image/F5.png";
import F6 from "./image/F6.png";
import { proxy, useSnapshot, subscribe } from "valtio";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import twitterButton from "./image/twitter.svg";
import facebookButton from "./image/facebook.svg";
import youtubeButton from "./image/youtube.svg";
import instagramButton from "./image/instagram.svg";
import discordButton from "./image/discord.svg";
import arrow from "./image/arrow.svg";
import ring from "./image/ring.svg";


gsap.registerPlugin(ScrollTrigger);
softShadows();

const params = {
  color: 0xffffff,
  transmission: 1,
  opacity: 1,
  metalness: 0.05,
  roughness: 0,
  ior: 2,
  thickness: 0,
  specularIntensity: 1,
  specularColor: 0xffffff,
  lightIntensity: 1,
  exposure: 1,
  reflectivity: 1,
  envMapIntensity: 1,
};

const paramsMetal = {
  color: 0x000000,
  emmisive: 0x000000,
  opacity: 1,
  metalness: 0.7,
  roughness: 0.3,
  reflectivity: 1,
  clearcoat: 0.5,
};

const leftState = proxy({
  count: 0,
});

const rightState = proxy({
  count: 0,
});

const Car = (props) => {
  const { nodes, scene } = useLoader(GLTFLoader, carModelUrl)
  useMemo(() => Object.values(nodes).forEach(obj =>
    obj.isMesh && Object.assign(obj, { castShadow: true })), [nodes])

  return <primitive castShadow object={scene} dispose={null} {...props} />;
};

const CarModel1 = (props) => {
  const { scene } = useGLTF(car1);
  return <primitive castShadow object={scene} {...props} />;
};

const CarModel2 = (props) => {
  const { scene } = useGLTF(car2);
  return <primitive castShadow object={scene} {...props} />;
};

const CarModel3 = (props) => {
  const { scene } = useGLTF(car3);
  return <primitive castShadow object={scene} {...props} />;
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
    radius: 25,
    height: 20,
  };
 
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
           map={c2}
        >
          {/* <videoTexture attach="map" args={[video]} /> */}
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
         // map={c2}
        >
           <videoTexture attach="map" args={[video]} />
        </meshBasicMaterial>
      </mesh>
    </group>
  );
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

const GlassBox1 = ({ pos, rot, scale }) => {
  const ref = useRef(null);

 
  const [active, setActive] = useState(false);

  useFrame((state) => {
    if (active) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 10;
      ref.current.rotation.x = Math.cos(t / 4) / 4;
      // ref.current.rotation.y = Math.sin(t / 4) / 4;
      ref.current.rotation.y = ref.current.rotation.y + 0.01;
      ref.current.position.y = (1 + Math.sin(t / 1.5)) / 5;
    }
    // else
    // {
    //   ref.current.rotation = rot;
    //   ref.current.position = pos;
    // }
  });

  const envMapFrame = new RGBELoader().load(envMapFrameURL);

  const { nodes } = useGLTF(glassBoxPedstalURL);

  return (
    <group
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
      scale={scale}
      position={pos}
      rotation={rot}
      ref={ref}
    >
      {/* <spotLight intensity={1} position={[0, 10, 0]} angle={0.1} penumbra={0.8} /> */}
      <CarModel1
        position={[0, 1.3, 0]}
        rotation={[1.5, 0.4, 0]}
        scale={[0.2, 0.2, 0.2]}
      />

      <mesh
        geometry={nodes.Cylinder.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
      >
        <meshPhysicalMaterial
          color={paramsMetal.color}
          opacity={paramsMetal.opacity}
          metalness={paramsMetal.metalness}
          roughness={paramsMetal.roughness}
          reflectivity={paramsMetal.reflectivity}
          clearcoat={paramsMetal.clearcoat}
          side={THREE.FrontSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Cylinder1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
      >
        <meshPhysicalMaterial
          color={paramsMetal.color}
          opacity={paramsMetal.opacity}
          metalness={paramsMetal.metalness}
          roughness={paramsMetal.roughness}
          reflectivity={paramsMetal.reflectivity}
          clearcoat={paramsMetal.clearcoat}
          side={THREE.FrontSide}
        />
      </mesh>

      <mesh
        geometry={nodes.Cylinder1_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color={"#808080"}
          opacity={paramsMetal.opacity}
          metalness={paramsMetal.metalness}
          roughness={paramsMetal.roughness}
          reflectivity={paramsMetal.reflectivity}
          clearcoat={paramsMetal.clearcoat}
          side={THREE.FrontSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Cylinder2.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color={"#808080"}
          opacity={paramsMetal.opacity}
          metalness={paramsMetal.metalness}
          roughness={paramsMetal.roughness}
          reflectivity={paramsMetal.reflectivity}
          clearcoat={paramsMetal.clearcoat}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* pedstal */}
      <mesh
        geometry={nodes.Cylinder2_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color={paramsMetal.color}
          opacity={paramsMetal.opacity}
          metalness={paramsMetal.metalness}
          roughness={paramsMetal.roughness}
          reflectivity={paramsMetal.reflectivity}
          clearcoat={paramsMetal.clearcoat}
          side={THREE.FrontSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Cylinder_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
      >
        <meshPhysicalMaterial
          color={"#808080"}
          opacity={paramsMetal.opacity}
          metalness={paramsMetal.metalness}
          roughness={paramsMetal.roughness}
          reflectivity={paramsMetal.reflectivity}
          clearcoat={paramsMetal.clearcoat}
          side={THREE.FrontSide}
        />
      </mesh>

      <mesh
        geometry={nodes.ChamferBox001.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
      >
        {/* <meshPhysicalMaterial
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
        /> */}

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
        geometry={nodes.ChamferBox001_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
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
        castShadow
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

      {/* frame */}
      <mesh
        geometry={nodes.Object001_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
      >
        <meshPhysicalMaterial
          color={"#ffffff"}
          transmission={1}
          opacity={1}
          thickness={1}
          metalness={0.3}
          roughness={0.1}
          ior={params.ior}
          specularIntensity={1}
          specularColor={"#ffffff"}
          envMapIntensity={1}
          exposure={1}
          transparent={true}
          side={THREE.FrontSide}
          envMap={envMapFrame}
        />
      </mesh>
      <mesh
        geometry={nodes.Object003.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
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
        geometry={nodes.Object003_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
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
        castShadow
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
        geometry={nodes.Object004_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
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
        castShadow
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
        geometry={nodes.Object005_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
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
        castShadow
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

      {/* light */}
      <mesh
        geometry={nodes.Object006_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
      >
        <meshPhysicalMaterial
          color={"#3a3b3c"}
          opacity={1}
          metalness={paramsMetal.metalness}
          roughness={paramsMetal.roughness}
          reflectivity={paramsMetal.reflectivity}
          clearcoat={paramsMetal.clearcoat}
          side={THREE.BackSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Object007.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
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
        geometry={nodes.Object007_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
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
        geometry={nodes.Object007_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
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

const GlassBox2 = ({ pos, rot, scale }) => {
  const ref = useRef(null);


  const [active, setActive] = useState(false);


  const envMapFrame = new RGBELoader().load(envMapFrameURL);

  const { nodes } = useGLTF(glassBoxPedstalURL);

  return (
    <group
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
      scale={scale}
      position={pos}
      rotation={rot}
      ref={ref}
    >
      {/* <spotLight intensity={1} position={[0, 10, 0]} angle={0.1} penumbra={0.8} /> */}
      <CarModel2
        position={[0, 1.3, 0]}
        rotation={[1.5, 0.4, 0]}
        scale={[0.2, 0.2, 0.2]}
      />

      <mesh
        geometry={nodes.Cylinder.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
      >
        <meshPhysicalMaterial
          color={paramsMetal.color}
          opacity={paramsMetal.opacity}
          metalness={paramsMetal.metalness}
          roughness={paramsMetal.roughness}
          reflectivity={paramsMetal.reflectivity}
          clearcoat={paramsMetal.clearcoat}
          side={THREE.FrontSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Cylinder1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
      >
        <meshPhysicalMaterial
          color={paramsMetal.color}
          opacity={paramsMetal.opacity}
          metalness={paramsMetal.metalness}
          roughness={paramsMetal.roughness}
          reflectivity={paramsMetal.reflectivity}
          clearcoat={paramsMetal.clearcoat}
          side={THREE.FrontSide}
        />
      </mesh>

      <mesh
        geometry={nodes.Cylinder1_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color={"#808080"}
          opacity={paramsMetal.opacity}
          metalness={paramsMetal.metalness}
          roughness={paramsMetal.roughness}
          reflectivity={paramsMetal.reflectivity}
          clearcoat={paramsMetal.clearcoat}
          side={THREE.FrontSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Cylinder2.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color={"#808080"}
          opacity={paramsMetal.opacity}
          metalness={paramsMetal.metalness}
          roughness={paramsMetal.roughness}
          reflectivity={paramsMetal.reflectivity}
          clearcoat={paramsMetal.clearcoat}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* pedstal */}
      <mesh
        geometry={nodes.Cylinder2_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color={paramsMetal.color}
          opacity={paramsMetal.opacity}
          metalness={paramsMetal.metalness}
          roughness={paramsMetal.roughness}
          reflectivity={paramsMetal.reflectivity}
          clearcoat={paramsMetal.clearcoat}
          side={THREE.FrontSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Cylinder_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
      >
        <meshPhysicalMaterial
          color={"#808080"}
          opacity={paramsMetal.opacity}
          metalness={paramsMetal.metalness}
          roughness={paramsMetal.roughness}
          reflectivity={paramsMetal.reflectivity}
          clearcoat={paramsMetal.clearcoat}
          side={THREE.FrontSide}
        />
      </mesh>

      <mesh
        geometry={nodes.ChamferBox001.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
      >
        {/* <meshPhysicalMaterial
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
        /> */}

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
        geometry={nodes.ChamferBox001_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
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
        castShadow
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

      {/* frame */}
      <mesh
        geometry={nodes.Object001_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
      >
        <meshPhysicalMaterial
          color={"#ffffff"}
          transmission={1}
          opacity={1}
          thickness={1}
          metalness={0.3}
          roughness={0.1}
          ior={params.ior}
          specularIntensity={1}
          specularColor={"#ffffff"}
          envMapIntensity={1}
          exposure={1}
          transparent={true}
          side={THREE.FrontSide}
          envMap={envMapFrame}
        />
      </mesh>
      <mesh
        geometry={nodes.Object003.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
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
        geometry={nodes.Object003_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
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
        castShadow
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
        geometry={nodes.Object004_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
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
        castShadow
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
        geometry={nodes.Object005_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
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
        castShadow
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

      {/* light */}
      <mesh
        geometry={nodes.Object006_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
      >
        <meshPhysicalMaterial
          color={"#3a3b3c"}
          opacity={1}
          metalness={paramsMetal.metalness}
          roughness={paramsMetal.roughness}
          reflectivity={paramsMetal.reflectivity}
          clearcoat={paramsMetal.clearcoat}
          side={THREE.BackSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Object007.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
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
        geometry={nodes.Object007_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
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
        geometry={nodes.Object007_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
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

const GlassBox3 = ({ pos, rot, scale }) => {
  const ref = useRef(null);


  const [active, setActive] = useState(false);


  const envMapFrame = new RGBELoader().load(envMapFrameURL);

  const { nodes } = useGLTF(glassBoxPedstalURL);

  return (
    <group
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
      scale={scale}
      position={pos}
      rotation={rot}
      ref={ref}
    >
      {/* <spotLight intensity={1} position={[0, 10, 0]} angle={0.1} penumbra={0.8} /> */}
      <CarModel3
        position={[0, 1.3, 0]}
        rotation={[1.5, 0.4, 0]}
        scale={[0.2, 0.2, 0.2]}
      />

      <mesh
        geometry={nodes.Cylinder.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
      >
        <meshPhysicalMaterial
          color={paramsMetal.color}
          opacity={paramsMetal.opacity}
          metalness={paramsMetal.metalness}
          roughness={paramsMetal.roughness}
          reflectivity={paramsMetal.reflectivity}
          clearcoat={paramsMetal.clearcoat}
          side={THREE.FrontSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Cylinder1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
      >
        <meshPhysicalMaterial
          color={paramsMetal.color}
          opacity={paramsMetal.opacity}
          metalness={paramsMetal.metalness}
          roughness={paramsMetal.roughness}
          reflectivity={paramsMetal.reflectivity}
          clearcoat={paramsMetal.clearcoat}
          side={THREE.FrontSide}
        />
      </mesh>

      <mesh
        geometry={nodes.Cylinder1_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color={"#808080"}
          opacity={paramsMetal.opacity}
          metalness={paramsMetal.metalness}
          roughness={paramsMetal.roughness}
          reflectivity={paramsMetal.reflectivity}
          clearcoat={paramsMetal.clearcoat}
          side={THREE.FrontSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Cylinder2.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color={"#808080"}
          opacity={paramsMetal.opacity}
          metalness={paramsMetal.metalness}
          roughness={paramsMetal.roughness}
          reflectivity={paramsMetal.reflectivity}
          clearcoat={paramsMetal.clearcoat}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* pedstal */}
      <mesh
        geometry={nodes.Cylinder2_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color={paramsMetal.color}
          opacity={paramsMetal.opacity}
          metalness={paramsMetal.metalness}
          roughness={paramsMetal.roughness}
          reflectivity={paramsMetal.reflectivity}
          clearcoat={paramsMetal.clearcoat}
          side={THREE.FrontSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Cylinder_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
      >
        <meshPhysicalMaterial
          color={"#808080"}
          opacity={paramsMetal.opacity}
          metalness={paramsMetal.metalness}
          roughness={paramsMetal.roughness}
          reflectivity={paramsMetal.reflectivity}
          clearcoat={paramsMetal.clearcoat}
          side={THREE.FrontSide}
        />
      </mesh>

      <mesh
        geometry={nodes.ChamferBox001.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
      >
        {/* <meshPhysicalMaterial
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
        /> */}

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
        geometry={nodes.ChamferBox001_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
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
        castShadow
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

      {/* frame */}
      <mesh
        geometry={nodes.Object001_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
      >
        <meshPhysicalMaterial
          color={"#ffffff"}
          transmission={1}
          opacity={1}
          thickness={1}
          metalness={0.3}
          roughness={0.1}
          ior={params.ior}
          specularIntensity={1}
          specularColor={"#ffffff"}
          envMapIntensity={1}
          exposure={1}
          transparent={true}
          side={THREE.FrontSide}
          envMap={envMapFrame}
        />
      </mesh>
      <mesh
        geometry={nodes.Object003.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
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
        geometry={nodes.Object003_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
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
        castShadow
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
        geometry={nodes.Object004_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
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
        castShadow
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
        geometry={nodes.Object005_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
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
        castShadow
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

      {/* light */}
      <mesh
        geometry={nodes.Object006_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
      >
        <meshPhysicalMaterial
          color={"#3a3b3c"}
          opacity={1}
          metalness={paramsMetal.metalness}
          roughness={paramsMetal.roughness}
          reflectivity={paramsMetal.reflectivity}
          clearcoat={paramsMetal.clearcoat}
          side={THREE.BackSide}
        />
      </mesh>
      <mesh
        geometry={nodes.Object007.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
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
        geometry={nodes.Object007_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
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
        geometry={nodes.Object007_1.geometry}
        scale={[0.02, 0.02, 0.02]}
        position={[0, -1, 0]}
        castShadow
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

  return (
    <mesh castshadow position={pos} rotation={rot} ref={ref}>
      <RoundedBox castshadow args={[1, 1, 1]} radius={0.1}>
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
          side={THREE.FrontSide}
        />
        <Cube />
      </RoundedBox>
    </mesh>
  );
};

const Cube = (pos) => {
  const ref = useRef(null);

  const texture_1 = useLoader(TextureLoader, F1);
  const texture_2 = useLoader(TextureLoader, F2);
  const texture_3 = useLoader(TextureLoader, F3);
  const texture_4 = useLoader(TextureLoader, F4);
  const texture_5 = useLoader(TextureLoader, F5);
  const texture_6 = useLoader(TextureLoader, F6);


  return (
    <mesh castshadow position={pos.pos} ref={ref} args={[1, 1, 1]} scale={[0.8, 0.8, 0.8]}>
      <boxBufferGeometry castshadow attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial map={texture_1} attachArray="material" />
      <meshStandardMaterial map={texture_2} attachArray="material" />
      <meshStandardMaterial map={texture_3} attachArray="material" />
      <meshStandardMaterial map={texture_4} attachArray="material" />
      <meshStandardMaterial map={texture_5} attachArray="material" />
      <meshStandardMaterial map={texture_6} attachArray="material" />
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
      {/* <shadowMaterial attach="material" transparent opacity={0.1} map={floorTex}/> */}
      <meshStandardMaterial color={"#a6a6a6"} map={floorTex} />
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
  return (
    <OrbitControls
      args={[camera, gl.domElement]}
      // maxAzimuthAngle={Math.PI/2}
      // minAzimuthAngle={Math.PI/2}
      rotateSpeed={0.4}
      maxPolarAngle={Math.PI / 2.31}
      minPolarAngle={Math.PI / 2.31}
      enableRotate={true}
      enableDamping={true}
      enablePan={true}
      enableZoom={true}
      enabled={true}
    />
  );
};

export function TopSection() {
  const [clicked, setClicked] = useState(false);
  const [ready, setReady] = useState(false);
  const store = { clicked, setClicked, ready, setReady };

 

  return (
    <>
      <Canvas
        style={{
          width: "100vw",
          height: "92vh",
          marginTop: "8vh",
          zIndex: 40,
          position: "fixed",
        }}
        antialias={true}
        gl={{ alpha: false }}
        dpr={[1, 1.5]}
        camera={{ fov: 75, position: [0, 0.1, 0] }}
        shadows
      >
        <CameraControl />
        <color attach="background" args={["#d4d4d4"]} />
        <Environment files={envMapURL} />
        <directionalLight
          castShadow
          position={[2.5, 12, 5]}
          intensity={0.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <Suspense fallback={null}>
          <group position={[0, -5, 0]}>
            {/* history */}

            <group position={[-3, 1.2, -2]} scale={[2, 2, 2]}>
              <Box
                {...{
                  pos: [6, 0, -4],
                  rot: [0, 0.4, 0],
                }}
              />
              <Box
                {...{
                  pos: [4.5, 0, -2.5],
                  rot: [0, 0.4, 0],
                }}
              />
              <Box
                {...{
                  pos: [4, 0, -4],
                  rot: [0, 0.4, 0],
                }}
              />
              <Html
                transform
                position={[4, -0.5, -2.5]}
                rotation={[0, 0, 0]}
                scale={[4, 4, 4]}
                distanceFactor={1}
              >
                <HtmlContentWrapper>
                  <HtmlContentHeader>Mancell’s Moments</HtmlContentHeader>
                  <HtmlContentSubWrapper>
                    <HtmlContentParagraph>VIEW NFTs</HtmlContentParagraph>
                    <HtmlContentButton>
                      <HtmlContentRing />
                    </HtmlContentButton>
                  </HtmlContentSubWrapper>
                </HtmlContentWrapper>
              </Html>
            </group>

            <group position={[1, 1.2, -1]} scale={[2, 2, 2]}>
              <GlassBox1
                {...{
                  pos: [-3, 0, -4],
                  rot: [0, 0.5, 0],
                  scale: [0.4, 0.4, 0.4],
                }}
              />
              <GlassBox2
                {...{
                  pos: [-4, 0, -3.5],
                  rot: [0, 0.1, 0],
                  scale: [0.4, 0.4, 0.4],
                }}
              />
              <GlassBox3
                {...{
                  pos: [-5, 0, -4],
                  rot: [0, -0.1, 0],
                  scale: [0.4, 0.4, 0.4],
                }}
              />
              <Html    
               transform
               position={[-4, -0.5, -3]}
               rotation={[0, 0, 0]}
               scale={[4, 4, 4]}        
              distanceFactor={1}>
                <HtmlContentWrapper>
                  <HtmlContentHeader>Mancell’s Gear</HtmlContentHeader>
                  <HtmlContentSubWrapper>
                  <HtmlContentParagraph>VIEW NFTs</HtmlContentParagraph>
                  <HtmlContentButton><HtmlContentRing/></HtmlContentButton>
                  </HtmlContentSubWrapper>
                </HtmlContentWrapper>
              </Html>
            </group>

            <group>
              <Car
                rotation={[0, Math.PI - 4.1, 0]}
                position={[0, 0, -17]}
                scale={[1.5, 1.5, 1.5]}
              />
              <Html  
                  transform
                  position={[0, 0.5, -12]}
                  rotation={[0, 0, 0]}
                  scale={[8, 8, 8]}           
              distanceFactor={1}>
                <HtmlContentWrapper>
                  <HtmlContentHeader>Mancell’s Machines</HtmlContentHeader>
                  <HtmlContentSubWrapper>
                  <HtmlContentParagraph>VIEW NFTs</HtmlContentParagraph>
                  <HtmlContentButton><HtmlContentRing/></HtmlContentButton>
                  </HtmlContentSubWrapper>
                </HtmlContentWrapper>
              </Html>
            </group>

            {/* moments */}
            <group position={[-15, 1.2, 10]} scale={[2, 2, 2]}>
              <Box
                {...{
                  pos: [0, 0, 0],
                  rot: [0, 0, 0],
                }}
              />
              <Box
                {...{
                  pos: [3, 0, 0],
                  rot: [0, 0, 0],
                }}
              />
              <Box
                {...{
                  pos: [6, 0, 0],
                  rot: [0, 0, 0],
                }}
              />
              <Box
                {...{
                  pos: [0, 0, -3],
                  rot: [0, 0, 0],
                }}
              />
              <Box
                {...{
                  pos: [0, 0, -6],
                  rot: [0, 0, 0],
                }}
              />
              <Box
                {...{
                  pos: [3, 0, -6],
                  rot: [0, 0, 0],
                }}
              />
              <Box
                {...{
                  pos: [3, 0, -3],
                  rot: [0, 0, 0],
                }}
              />
              <Html
                //  transform
                //  position={[0, 0, 0]}
                //  rotation={[0, 2.5, 0]}
                distanceFactor={30}
              >
                <HtmlContentWrapper>
                  <HtmlContentHeader>Motorsport Moments</HtmlContentHeader>
                  {/* <br /> */}
                  <HtmlContentSubWrapper>
                    <HtmlContentParagraph>VIEW NFTs</HtmlContentParagraph>
                    <HtmlContentButton>
                      <HtmlContentRing />
                    </HtmlContentButton>
                  </HtmlContentSubWrapper>
                </HtmlContentWrapper>
              </Html>
              {/* <GroupInfo
                {...{
                  groupPos: [-6, 0, -7],
                  groupRot: [0, 0, 0],
                  mainPos: [0, 0, 0],
                  subPos: [0, 0, 0],
                  mainWord: "Motorsport Moments",
                  subWord: "VIEW NFTs"
                }}
              /> */}
            </group>

            {/* scene */}
            <Cylinder {...store} />

            <gridHelper
              scale={[2, 2, 2]}
              position={[0, 0.01, 0]}
              rotation={[-Math.PI, 0, 0]}
              args={[25, 25, `white`, `white`]}
            />

            <Floor />
          </group>
        </Suspense>
        {/* <AnimationWrapper /> */}
        <SpinCylinderLeft />
        <SpinCylinderRight />
      </Canvas>
      <Loader />
      <Overlay />
    </>
  );
}

const HtmlContentWrapper = styled.div`
  ${tw`
  mt-36
flex
flex-col
flex-wrap
justify-between
items-center
w-auto
`};
`;

const HtmlContentSubWrapper = styled.div`
  ${tw`
flex
flex-row
flex-nowrap
justify-between
items-center
`};
`;

const HtmlContentHeader = styled.div`
  ${tw`
flex
flex-row
flex-nowrap
justify-between
items-center
text-[25px]
// w-auto
font-family[Roboto]
whitespace-nowrap
`};
`;

const HtmlContentParagraph = styled.p`
  ${tw`
flex
flex-row
flex-nowrap
justify-between
items-center
text-[12px]
w-auto
h-auto
relative
font-family[Roboto]
whitespace-nowrap
`};
`;

const HtmlContentButton = styled.button`
  ${tw`
flex
flex-row
flex-nowrap
justify-start
items-start
text-sm
w-10
h-10
bg-no-repeat
bg-center
relative
`};
background-image: url(${arrow});
`;

const HtmlContentRing = styled.button`
  ${tw`
flex
flex-row
flex-nowrap
justify-start
items-start
text-sm
w-10
h-10
bg-no-repeat
bg-center

  absolute
  top-0
  left-0
`};
background-image: url(${ring});
`;

const OverlayContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-screen
    h-[92vh]
    mt-[8vh]
    fixed  
    bottom-0
    // px-8
    // pt-16
    z-40
    bg-opacity-0
    // overflow-x-hidden
    // overflow-y-auto
    pointer-events-none
    `};
`;

const Footer = styled.div`
  ${tw`
    flex
    flex-row
    w-full
    h-[6vh]
    justify-center
    items-center
    `};
`;

const ContentWrapper = styled.div`
  ${tw`
flex
flex-row
flex-nowrap
justify-between
items-center
w-screen
`};
`;

const ContentLeft = styled.div`
  ${tw`
flex
flex-row
flex-nowrap
justify-start
items-center
text-xs
px-4
font-family[Roboto]
text-[#30434F]
pb-4
w-1/3
`};
`;

const ContentMiddle = styled.div`
  ${tw`
flex
flex-row
flex-nowrap
justify-center
items-center
text-xs
px-4
font-family[Roboto]
text-[#30434F]
pb-4
w-1/3
`};
`;

const ContentRight = styled.div`
  ${tw`
flex
flex-row
flex-nowrap
justify-end
items-center
text-xs
px-4
font-family[Roboto]
text-[#30434F]
pb-4
w-1/3
`};
`;

const ContentButton = styled.button`
  ${tw`
flex
flex-row
justify-center
items-center
text-xs
px-4
font-family[Roboto]
text-[#30434F]
`};
`;

const ContentNestWrapper = styled.div`
  ${tw`
flex
flex-row
justify-center
items-center
text-xs
px-4
font-family[Roboto]
text-[#30434F]
`};
`;

const TwitterButton = styled.button`
  ${tw`
  flex
  flex-row
  justify-center
  items-center
  bg-no-repeat
  mx-2
  mt-2
  w-[25px]
  h-[25px]
`};
  background-image: url(${twitterButton});
`;

const FacebookButton = styled.button`
  ${tw`
  flex
  flex-row
  justify-center
  items-center
  bg-no-repeat
  m-2
  w-[25px]
  h-[25px]
`};
  background-image: url(${facebookButton});
`;

const InstagramButton = styled.button`
  ${tw`
  flex
  flex-row
  justify-center
  items-center
  bg-no-repeat
  mt-1
  mx-2

  w-[25px]
  h-[25px]
`};
  background-image: url(${instagramButton});
`;

const DiscordButton = styled.button`
  ${tw`
flex
flex-row
justify-center
items-center
bg-no-repeat
mt-2
mx-2
  w-[25px]
  h-[25px]
`};
  background-image: url(${discordButton});
`;

const YoutubeButton = styled.button`
  ${tw`
flex
flex-row
justify-center
items-center
bg-no-repeat
mt-2
mx-2
  w-[25px]
  h-[25px]
`};
  background-image: url(${youtubeButton});
`;

const ArrowsWrapper = styled.div`
  ${tw`
flex
flex-row
flex-nowrap
items-center
justify-around
w-screen
h-[86vh]
`};
`;

const LeftWrapper = styled.div`
  ${tw`
flex
flex-row
flex-nowrap
justify-start
items-center
w-1/3
h-full
text-gray-500  
text-sm
`};
`;

const MiddleWrapper = styled.div`
  ${tw`
  // flex
  // flex-col
// justify-start
// items-center
// self-center
w-auto
h-full
text-white
text-sm
relative
pt-8
`};
`;

const MiddleContent = styled.div`
  ${tw`
flex
flex-col
// justify-center
// items-center
rounded-md
bg-opacity-80
bg-[#1D1E22]
text-sm
// w-auto
h-auto
relative
 w-[640px]
// h-[260px]
`};
`;

const RightWrapper = styled.div`
  ${tw`
flex
flex-row
flex-nowrap
justify-end
items-center
w-1/3
h-full
text-gray-500 
text-sm
`};
`;

const Header = styled.div`
  ${tw`
flex
flex-row
justify-center
items-center
self-center
w-auto
h-auto
text-white
text-xl
 mt-[32px]
ml-[23.5px]
mr-[23.5px]
mb-[16px]
`};
`;

const Paragraph = styled.p`
  ${tw`
flex
flex-row
justify-center
items-center
self-center
w-auto
h-auto
text-white
text-sm
pl-[55px]
pr-[55px]
 pb-[48px]
`};
`;

const AbsoluteArrowLeft = styled.button`
  ${tw`
// flex
// flex-col
// justify-center
// items-center
// self-center
w-1/12
h-1/2
absolute 
top-1/4
left-0
bg-no-repeat
text-gray-200
text-9xl
z-50
`};
`;

const AbsoluteArrowRight = styled.button`
  ${tw`
  // flex
  // flex-col
  // justify-center
  // items-center
  // self-center
  w-1/12
  h-1/2
  absolute 
  top-1/4
  right-0
  bg-no-repeat
  text-gray-200
  text-9xl
  z-50
`};
`;

export default function Overlay({ ready, clicked, setClicked }) {
  // const snap1 = useSnapshot(leftState);
  // const snap2 = useSnapshot(rightState);

  const [LeftState, setLeftState] = useState(0);
  const [RightState, setRightState] = useState(0);

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisabled(false)
    }, 2000);
    return () => clearTimeout(timer);
  }, [LeftState]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisabled(false)
    }, 2000);
    return () => clearTimeout(timer);
  }, [RightState]);

  return (
    <>
      <AbsoluteArrowLeft
        onClick={(e) => {
          setDisabled(true);
          leftState.count++;
          setLeftState(leftState.count);
        }}
        disabled={disabled}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="16"
          // height="16"
          fill="currentColor"
          // class="bi bi-chevron-compact-left"
          viewBox="0 0 16 16"
          className="bi bi-chevron-compact-left fill-gray-100"
        >
          <path
            fillRule="evenodd"
            d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
          />
        </svg>
      </AbsoluteArrowLeft>

      <AbsoluteArrowRight
        onClick={(e) => {
          setDisabled(true);
          rightState.count++;
          setRightState(rightState.count);
        }}
        disabled={disabled}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="16"
          // height="16"
          fill="currentColor"
          //class="bi bi-chevron-compact-right"
          viewBox="0 0 16 16"
          className="bi bi-chevron-compact-right fill-gray-100"
        >
          <path
            fillRule="evenodd"
            d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
          />
        </svg>
      </AbsoluteArrowRight>

      <OverlayContainer>
        <ArrowsWrapper>
          <LeftWrapper>
            {/* <ArrowLeft
              onClick={(e) => {
                setDisabled(true);
                leftState.count++;
                setLeftState(leftState.count);
              }}
              disabled={disabled}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // width="16"
                // height="16"
                fill="currentColor"
                // class="bi bi-chevron-compact-left"
                viewBox="0 0 16 16"
                className="bi bi-chevron-compact-left h-48 w-48 ml-10 fill-gray-100"
              >
                <path
                  fillRule="evenodd"
                  d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
                />
              </svg>
            </ArrowLeft> */}
          </LeftWrapper>
          <MiddleWrapper>
            <MiddleContent>
              <Header>Motorsport Moments</Header>
              <Paragraph>
                Own the great moments in Motorsport history and earn access,
                status, and coin in our community. Checkout our moments or shop
                all motorsport NFTs. More drops coming soon!
              </Paragraph>
            </MiddleContent>
          </MiddleWrapper>
          <RightWrapper>
            {/* <ArrowRight
              onClick={(e) => {
                setDisabled(true);
                rightState.count++;
                setRightState(rightState.count);
              }}
              disabled={disabled}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // width="16"
                // height="16"
                fill="currentColor"
                //class="bi bi-chevron-compact-right"
                viewBox="0 0 16 16"
                className="bi bi-chevron-compact-right h-48 w-48 mr-10 fill-gray-100"
              >
                <path
                  fillRule="evenodd"
                  d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
                />
              </svg>
            </ArrowRight> */}
          </RightWrapper>
        </ArrowsWrapper>
        <Footer>
          <ContentWrapper>
            <ContentLeft>
              <ContentNestWrapper>
                © 2022 Motorsport Network, All Rights Reserved
              </ContentNestWrapper>
            </ContentLeft>
            <ContentMiddle>
              <FacebookButton></FacebookButton>
              <TwitterButton></TwitterButton>
              <InstagramButton></InstagramButton>
              <YoutubeButton></YoutubeButton>
              <DiscordButton></DiscordButton>
            </ContentMiddle>
            <ContentRight>
              <ContentButton>Terms of Service</ContentButton>
              <ContentButton>PrivacyPolicy</ContentButton>
            </ContentRight>
          </ContentWrapper>
        </Footer>
      </OverlayContainer>
    </>
  );
}
