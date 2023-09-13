import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";

export function Bee(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/assets/models/bee/minecraft_bee.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(()=>{
    const action = actions["Take 001"]
    action.play()
    }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.157}
        >
          <group
            name="32bde958fb4643638f790cd30ef6d0f4fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Flower" position={[-0.202, 0.985, 0]}>
                  <mesh
                    name="Flower_Flower_MAT_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Flower_Flower_MAT_0.geometry}
                    material={materials.Flower_MAT}
                  />
                </group>
                <group name="polySurface33">
                  <group name="transform3" />
                </group>
                <group
                  name="R_wing"
                  position={[0.092, 2.156, -0.722]}
                  rotation={[-0.077, 0, 0]}
                >
                  <group name="transform1" position={[-0.092, -2.275, 0.663]} />
                </group>
                <group
                  name="r"
                  position={[0.063, 2.787, -0.166]}
                  rotation={[-0.077, 0, 0]}
                >
                  <mesh
                    name="r_Bee_MAT_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.r_Bee_MAT_0.geometry}
                    material={materials.Bee_MAT}
                  />
                </group>
                <group
                  name="L_wing"
                  position={[0.092, 2.164, 0.733]}
                  rotation={[0.076, 0, 0]}
                >
                  <group
                    name="transform2"
                    position={[-0.092, -2.275, -0.669]}
                  />
                </group>
                <group
                  name="l"
                  position={[0.203, 2.833, 0.179]}
                  rotation={[0.078, 0, 0]}
                >
                  <mesh
                    name="l_Bee_MAT_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.l_Bee_MAT_0.geometry}
                    material={materials.Bee_MAT}
                  />
                </group>
                <group
                  name="Bee"
                  position={[0.275, 1.607, 0.005]}
                  rotation={[0, 0, -0.173]}
                >
                  <group
                    name="polySurface98"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform5" />
                  </group>
                  <group
                    name="polySurface99"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform12" />
                  </group>
                  <group
                    name="polySurface100"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform16" />
                  </group>
                  <group
                    name="polySurface101"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform13" />
                  </group>
                  <group
                    name="polySurface102"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform15" />
                  </group>
                  <group
                    name="polySurface103"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform14" />
                  </group>
                  <group
                    name="polySurface104"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform11" />
                  </group>
                  <group
                    name="polySurface105"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform8" />
                  </group>
                  <group
                    name="polySurface106"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform9" />
                  </group>
                  <group
                    name="polySurface107"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform10" />
                  </group>
                  <group
                    name="polySurface108"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform6" />
                  </group>
                  <group
                    name="polySurface109"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform7" />
                  </group>
                  <group
                    name="polySurface110"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform24" />
                  </group>
                  <group
                    name="polySurface111"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform25" />
                  </group>
                  <group
                    name="polySurface112"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform27" />
                  </group>
                  <group
                    name="polySurface113"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform26" />
                  </group>
                  <group
                    name="polySurface114"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform28" />
                  </group>
                  <group
                    name="polySurface115"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform35" />
                  </group>
                  <group
                    name="polySurface116"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform36" />
                  </group>
                  <group
                    name="polySurface117"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform37" />
                  </group>
                  <group
                    name="polySurface118"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform38" />
                  </group>
                  <group
                    name="polySurface119"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform29" />
                  </group>
                  <group
                    name="polySurface120"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform30" />
                  </group>
                  <group
                    name="polySurface121"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform31" />
                  </group>
                  <group
                    name="polySurface122"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform32" />
                  </group>
                  <group
                    name="polySurface123"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform33" />
                  </group>
                  <group
                    name="polySurface124"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform34" />
                  </group>
                  <group
                    name="polySurface125"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform44" />
                  </group>
                  <group
                    name="polySurface126"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform45" />
                  </group>
                  <group
                    name="polySurface127"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform46" />
                  </group>
                  <group
                    name="polySurface128"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform42" />
                  </group>
                  <group
                    name="polySurface129"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform43" />
                  </group>
                  <group
                    name="polySurface130"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform41" />
                  </group>
                  <group
                    name="polySurface131"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform40" />
                  </group>
                  <group
                    name="polySurface132"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform39" />
                  </group>
                  <group
                    name="polySurface133"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform19" />
                  </group>
                  <group
                    name="polySurface134"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform20" />
                  </group>
                  <group
                    name="polySurface135"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform21" />
                  </group>
                  <group
                    name="polySurface136"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform22" />
                  </group>
                  <group
                    name="polySurface137"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform23" />
                  </group>
                  <group
                    name="polySurface138"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform18" />
                  </group>
                  <group
                    name="polySurface139"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform17" />
                  </group>
                  <group
                    name="polySurface140"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform48" />
                  </group>
                  <group
                    name="polySurface141"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform47" />
                  </group>
                  <group
                    name="polySurface142"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform58" />
                  </group>
                  <group
                    name="polySurface143"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform59" />
                  </group>
                  <group
                    name="polySurface144"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform60" />
                  </group>
                  <group
                    name="polySurface145"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform55" />
                  </group>
                  <group
                    name="polySurface146"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform56" />
                  </group>
                  <group
                    name="polySurface147"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform57" />
                  </group>
                  <group
                    name="polySurface148"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform52" />
                  </group>
                  <group
                    name="polySurface149"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform54" />
                  </group>
                  <group
                    name="polySurface150"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform49" />
                  </group>
                  <group
                    name="polySurface151"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform50" />
                  </group>
                  <group
                    name="polySurface152"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform51" />
                  </group>
                  <group
                    name="polySurface153"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform53" />
                  </group>
                  <group
                    name="polySurface154"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform64" />
                  </group>
                  <group
                    name="polySurface155"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform65" />
                  </group>
                  <group
                    name="polySurface156"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform63" />
                  </group>
                  <group
                    name="polySurface157"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform62" />
                  </group>
                  <group
                    name="polySurface158"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform61" />
                  </group>
                  <group
                    name="polySurface159"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform67" />
                  </group>
                  <group
                    name="polySurface160"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform68" />
                  </group>
                  <group
                    name="polySurface161"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform69" />
                  </group>
                  <group
                    name="polySurface162"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform70" />
                  </group>
                  <group
                    name="polySurface163"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform76" />
                  </group>
                  <group
                    name="polySurface164"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform74" />
                  </group>
                  <group
                    name="polySurface165"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform72" />
                  </group>
                  <group
                    name="polySurface166"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform71" />
                  </group>
                  <group
                    name="polySurface167"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform75" />
                  </group>
                  <group
                    name="polySurface168"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform73" />
                  </group>
                  <group
                    name="polySurface169"
                    position={[-0.275, -1.597, -0.005]}
                  >
                    <group name="transform66" />
                  </group>
                  <group
                    name="transform4"
                    position={[-0.275, -1.597, -0.005]}
                  />
                </group>
                <group
                  name="b"
                  position={[0.279, 2.455, 0]}
                  rotation={[0, 0, -0.173]}
                >
                  <mesh
                    name="b_Bee_MAT_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.b_Bee_MAT_0.geometry}
                    material={materials.Bee_MAT}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/bee/minecraft_bee.glb");