import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function PortalCollider(props) {
  const { nodes, materials } = useGLTF("/assets/models/portal/nether_portal.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.StandardClone}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/portal/nether_portal.glb");