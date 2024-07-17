import React, { Suspense, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  Html,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, techName }) => {
  const [decal] = useTexture([imgUrl]);
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef();

  useFrame(({ camera }) => {
    if (meshRef.current) {
      meshRef.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh
        castShadow
        receiveShadow
        scale={2.75}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1, 1]} /> {/* Reduced complexity */}
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
        {hovered && (
          <group ref={meshRef}>
            <Html
              position={[-1.5, 1, 0]}
              center
              style={{
                background: "rgba(0, 0, 0, 0.8)",
                color: "white",
                padding: "10px 10px",
                borderRadius: "10px",
                fontSize: "18px",
                fontWeight: "bold",
                whiteSpace: "nowrap",
                transform: "scale(0.8)",
                pointerEvents: "none",
              }}
            >
              {techName}
            </Html>
          </group>
        )}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, techName }) => {
  return (
    <Canvas
      frameloop='always' // Keeping 'always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: false }} // Set to false unless necessary
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} techName={techName} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
