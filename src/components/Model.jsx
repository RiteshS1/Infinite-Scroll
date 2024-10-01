'use client';
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


export function Model(props) {
  const { nodes, materials } = useGLTF('/untitled.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-2.566, 215.765, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.paintings_details_0.geometry}
            material={materials.details}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.paintings_paintings_0.geometry}
            material={materials.paintings}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ceiling_walls_0.geometry}
          material={materials.walls}
          position={[0, -1345.865, 2214.415]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 104.785, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.column_walls_0.geometry}
          material={materials.walls}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.column_2_walls_0.geometry}
          material={materials.walls}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cornice_details_0.geometry}
          material={materials.details}
          position={[0, 418.051, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016_details_0.geometry}
          material={materials.details}
          position={[156.068, 0, 381.058]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={31.69}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017_details_0.geometry}
          material={materials.details}
          position={[156.068, 0, -378.542]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={31.69}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018_details_0.geometry}
          material={materials.details}
          position={[156.068, 0, -986.285]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={31.69}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_details_0.geometry}
          material={materials.details}
          position={[156.068, 0, 989.273]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={31.69}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020_details_0.geometry}
          material={materials.details}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.door_details_0.geometry}
          material={materials.details}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lamps001_details_0.geometry}
          material={materials.details}
          position={[-2.566, 205.884, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.panels_details_0.geometry}
          material={materials.details}
          position={[0, -9.394, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.panels001_details_0.geometry}
          material={materials.details}
          position={[0, -9.394, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_2_walls_0.geometry}
          material={materials.walls}
          position={[0, -1345.865, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 104.785, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.walls_walls_0.geometry}
          material={materials.walls}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>

      
    </group>
  )
}