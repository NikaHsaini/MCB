import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import '../styles/StarryBackground.css';

const StarryBackground: React.FC = () => {
  return (
    <div className="starry-background">
      <Canvas>
        <Stars 
          radius={100} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0.5} 
          fade 
          speed={1} 
        />
        <ambientLight intensity={0.1} />
      </Canvas>
    </div>
  );
};

export default StarryBackground;
