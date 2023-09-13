import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Chest } from "./World/Chest";
import { Bee } from "./World/Bee";
import { Tree } from "./World/Tree";
import { useTexture } from "@react-three/drei";

const Experience = () => {
    const boxRef = useRef();
    const sphereRef = useRef();
    const torusRef = useRef();
    const { width, height } = useThree(state => state.viewport)

    const propsTexture = useTexture({
        map: '/assets/textures/grass/grass.jpg',
        normalMap: '/assets/textures/grass/normal.jpg',
        roughnessMap: '/assets/textures/grass/roughness.jpg',
        aoMap: '/assets/textures/grass/ao.jpg',
    })

    useFrame((state, delta)=>{
        boxRef.current.position.x = Math.sin(state.clock.getElapsedTime()) - 3.7;
        boxRef.current.rotation.x = Math.cos(state.clock.getElapsedTime());
        sphereRef.current.position.x = Math.sin(state.clock.getElapsedTime()) - 4.0;
        sphereRef.current.rotation.x = Math.cos(state.clock.getElapsedTime());
        torusRef.current.position.x = Math.sin(state.clock.getElapsedTime()) - 4.3;
        torusRef.current.rotation.x = Math.cos(state.clock.getElapsedTime());
    })

    return (
        <>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <mesh ref={boxRef} position={[0, 2.78, 0]} rotation={[0, -Math.PI / 4, 0]} scale={0.1}>
                <boxGeometry args={[1, 1, 1]} />
                <meshToonMaterial color="red" />
            </mesh>
            <mesh ref={sphereRef} position={[1, 2.78, 0]} rotation={[0, -Math.PI / 4, 0]} scale={0.1}>
                <sphereGeometry args={[0.8, 32, 32]} />
                <meshToonMaterial color="blue" />
            </mesh>
            <mesh ref={torusRef} position={[2, 2.78, 0]} rotation={[0, -Math.PI / 4, 0]} scale={0.1}>
                <torusGeometry args={[0.8, 0.3, 32, 100]} />
                <meshToonMaterial color="yellow" />
            </mesh>
            <Bee position={[-3,-2,0]} scale={4}/>
            <Tree position={[3,-2.4,0]} scale={3}/>
            <Chest position={[2.76,-0.9,0.4]} scale={0.002} rotation-y={-Math.PI/2}/>
            <mesh position-y={-2} rotation-x={-Math.PI / 2} >
                <planeGeometry attach="geometry" args={[32, 12]} />
                <meshStandardMaterial {...propsTexture} />
            </mesh>
        </>
    )
}

export default Experience;