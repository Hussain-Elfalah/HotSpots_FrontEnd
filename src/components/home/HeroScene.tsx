import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Suspense } from 'react';

const HeroScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <Sphere args={[1, 100, 200]} scale={2.4}>
          <MeshDistortMaterial 
            color="#003049" 
            attach="material" 
            distort={0.4} 
            speed={1.5} 
            roughness={0.2}
          />
        </Sphere>
      </Suspense>
    </Canvas>
  );
};

export default HeroScene;
