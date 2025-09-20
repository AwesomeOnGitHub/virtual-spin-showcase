import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';

// Define the props interface for the SkyBox component
interface SkyBoxProps {
  imageUrl: string;
}

function SkyBox({ imageUrl }: SkyBoxProps) {
  const texture = useLoader(TextureLoader, imageUrl);
  return (
    // Invert the sphere's scale on the x-axis to view the texture from the inside
    <Sphere args={[100, 100, 100]} scale={[-1, 1, 1]}>
      <meshBasicMaterial map={texture} attach="material" />
    </Sphere>
  );
}

// Define the props interface for the ThreeSixtyViewer component
interface ThreeSixtyViewerProps {
  imageUrl: string;
}

export function ThreeSixtyViewer({ imageUrl }: ThreeSixtyViewerProps) {
  return (
    <Canvas camera={{ position: [0, 0, 0.1] }}>
      <Suspense fallback={null}> {/* Fallback for when the texture is loading */}
        <SkyBox imageUrl={imageUrl} />
      </Suspense>
      <OrbitControls
        enableZoom={false} // Disable zoom for a typical 360 viewer experience
        enablePan={false}  // Disable panning (moving the camera position)
        rotateSpeed={0.5}  // Adjust rotation speed
      />
    </Canvas>
  );
}