import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";

export function Chest(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/assets/models/chest/minecraft_chest.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(()=>{
    const action = actions["Chest_0_A|Chest_0_AAction"]
    action.play()
    }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="chestfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Chest_0_A"
                  position={[-6.365, -87.985, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_12"
                      geometry={nodes.Object_12.geometry}
                      material={materials.Material}
                      skeleton={nodes.Object_12.skeleton}
                    />
                    <group
                      name="Object_11"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                  </group>
                </group>
                <group
                  name="Chest_0"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/chest/minecraft_chest.glb");
