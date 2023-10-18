import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function House(props) {
  const { nodes, materials } = useGLTF("/assets/models/house/minecraft_onsen.glb");
  return (
    
        <group {...props} dispose={null}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.MC_material}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        </group>
    
  );
}

useGLTF.preload("/assets/models/house/minecraft_onsen.glb");