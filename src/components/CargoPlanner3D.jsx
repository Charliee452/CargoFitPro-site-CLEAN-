
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Box({ position, size, color }) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function CargoPlanner3D({ uldDimensions = [3, 2, 2], boxDimensions = [0.5, 0.5, 0.5], quantity = 10 }) {
  const boxes = [];
  const [uldL, uldW, uldH] = uldDimensions;
  const [bL, bW, bH] = boxDimensions;

  let x = -uldL / 2 + bL / 2;
  let y = -uldH / 2 + bH / 2;
  let z = -uldW / 2 + bW / 2;

  for (let i = 0; i < quantity; i++) {
    boxes.push(<Box key={i} position={[x, y, z]} size={[bL, bH, bW]} color="#F75C1E" />);
    x += bL;
    if (x + bL / 2 > uldL / 2) {
      x = -uldL / 2 + bL / 2;
      z += bW;
      if (z + bW / 2 > uldW / 2) {
        z = -uldW / 2 + bW / 2;
        y += bH;
      }
    }
  }

  return (
    <div style={{ height: '400px', width: '100%', background: '#f0f0f0', borderRadius: '8px' }}>
      <Canvas camera={{ position: [5, 5, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          {/* ULD Container */}
          <Box position={[0, 0, 0]} size={[uldL, uldH, uldW]} color="rgba(0,0,255,0.2)" />
          {/* Cargo Boxes */}
          {boxes}
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
