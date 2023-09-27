import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Sign(props) {
  const { nodes, materials } = useGLTF("/assets/models/sign/sign.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.Oak_Sign}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      {props.children}
    </group>
  );
}

useGLTF.preload("/sign.glb");