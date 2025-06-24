import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const SpinningCube: React.FC = () => (
  <Canvas style={{ height: 300 }}>
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} />
    <mesh rotation={[0.4, 0.2, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#4f8cff" />
    </mesh>
    <OrbitControls enableZoom={false} />
  </Canvas>
);

export default SpinningCube;
