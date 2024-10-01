'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, useScroll, Plane } from '@react-three/drei';
import { Model } from './Model';
import { useRef, useState, useEffect } from 'react';

const NUM_MODELS = 2; // Number of model instances
const MODEL_LENGTH = 32; // Adjust this to match the length of your model
const TOTAL_LENGTH = NUM_MODELS * MODEL_LENGTH;
const SCROLL_SPEED = 0.5; // Adjust this value to slow down the camera (1 is default speed, <1 slows down)
const FOG_PLANE_Z = MODEL_LENGTH * NUM_MODELS; // Position of the fog plane at the end of the model

function InfiniteScroll({ mouse }) {
  const modelRefs = useRef([]);
  const scroll = useScroll();

  useFrame(() => {
    // Apply the SCROLL_SPEED multiplier to slow down the camera movement
    const scrollOffset = (1 - scroll.offset * SCROLL_SPEED) * TOTAL_LENGTH;

    modelRefs.current.forEach((modelRef, index) => {
      if (modelRef) {
        // Apply parallax effect based on mouse position
        const parallaxX = mouse.x * 0.7; // Adjust sensitivity of parallax
        const parallaxY = mouse.y * 0.5;

        // Move the models with the scroll and apply parallax
        modelRef.position.z = ((index * MODEL_LENGTH) - scrollOffset) % TOTAL_LENGTH;
        modelRef.position.x = parallaxX; // Apply parallax on x-axis
        modelRef.position.y = parallaxY; // Apply parallax on y-axis

        // Reposition the model if it goes out of view to make it seamless
        if (modelRef.position.z < -MODEL_LENGTH) {
          modelRef.position.z += TOTAL_LENGTH;
        } else if (modelRef.position.z > MODEL_LENGTH) {
          modelRef.position.z -= TOTAL_LENGTH;
        }
      }
    });
  });

  return (
    <>
      {Array.from({ length: NUM_MODELS }).map((_, index) => (
        <group
          key={index}
          ref={el => (modelRefs.current[index] = el)}
          position={[0, 0, index * MODEL_LENGTH]}
        >
          <Model />
        </group>
      ))}

      {/* Add the fog effect at the end of the model */}
      <Plane
        args={[10, 10]} // Size of the plane (width, height)
        position={[0, 0, FOG_PLANE_Z]} // Position the plane at the end of the model
        rotation={[0, 0, 0]} // Keep the plane upright
      >
        <meshBasicMaterial
          color="black"
          transparent={true} // Make the material transparent
          opacity={0.9} // Set the opacity to create a fog-like effect
        />
      </Plane>
    </>
  );
}

export default function Index() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Capture mouse movement and update state
  const handleMouseMove = (event) => {
    setMouse({
      x: (event.clientX / window.innerWidth) * 2 - 1, // Normalize x to -1 to 1
      y: (event.clientY / window.innerHeight) * 2 - 1, // Normalize y to -1 to 1
    });
  };

  // Add event listener for mouse movement
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Canvas
      style={{ background: '#000000', width: '100%', height: '100%' }}
      camera={{ position: [0, 1.25, 15], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight intensity={2} position={[0, 2, 3]} />
      <ScrollControls pages={3} infinite> {/* Adjust the number of pages based on the total length */}
        <InfiniteScroll mouse={mouse} /> {/* Render the infinite scrolling models with parallax */}
      </ScrollControls>
    </Canvas>
  );
}
