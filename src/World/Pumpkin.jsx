import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Pumpkin(props) {
  const { nodes, materials } = useGLTF("/assets/models/pumpkin/pumpkin.glb");
  return (
    
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.palette}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
    
  );
}

useGLTF.preload("/assets/models/pumpkin/pumpkin_minecraft.glb");
