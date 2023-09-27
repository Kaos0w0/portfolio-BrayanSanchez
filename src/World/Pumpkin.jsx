import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

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

useGLTF.preload("/pumkin_minecraft.glb");
