import * as THREE from "three"
import { useTexture } from "@react-three/drei"
import { CuboidCollider, RigidBody } from "@react-three/rapier"
import grass from "./localAssets/grass3.jpg"
import { usePlane } from '@react-three/cannon';

export function Ground(props) {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
    const texture = useTexture(grass)
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping

    return (

            <mesh position = {[0, -2, 0]} rotation-x={-Math.PI / 2} receiveShadow>
                <planeGeometry args={[70, 70]} />
                <meshStandardMaterial map={texture} map-repeat={[90, 90]} />
            </mesh>

    );
}