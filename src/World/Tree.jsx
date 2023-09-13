import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Tree(props) {
  const { nodes, materials } = useGLTF("/assets/models/tree/minecraft_tree.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Oak_Leaves}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Oak_Log}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/tree/minecraft_tree.glb");