import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { AnimationMixer } from "three";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/test2.glb");
  const mixerRef = useRef(null);

  useEffect(() => {
    if (computer.animations.length > 0) {
      mixerRef.current = new AnimationMixer(computer.scene);
      computer.animations.forEach((clip) => {
        const action = mixerRef.current.clipAction(clip);
        action.play();
      });
    }

    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
        mixerRef.current = null;
      }
    };
  }, [computer]);

  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });

  return (
    <mesh>
      <hemisphereLight
        position={[10, 10, 10]}
        intensity={0.6}
        groundColor='white'
      />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.15}
        penumbra={1}
        intensity={0.7}
        castShadow
        shadow-mapSize={1024}
      />
      {/* <pointLight position={[10, 10, 10]} intensity={0.7} /> */}
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 2 : 6}
        position={isMobile ? [0, -3, -2.2] : [2.5, -9, -1.5]}
        rotation={[-0.01, 0, 0]} // Adjusted rotation to face forward
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='always' // Changed to 'demand' to optimize performance
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 1, 10], fov: 25 }} // Adjusted camera position to face the front of the model
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
