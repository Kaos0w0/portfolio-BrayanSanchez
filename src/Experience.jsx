import { Float, OrbitControls, Text3D } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Chest } from "./World/Chest";
import { Bee } from "./World/Bee";
import { Tree } from "./World/Tree";
import { useTexture } from "@react-three/drei";
import Lights from "./World/Lights";
import Environments from "./World/Environment";
import { Perf } from "r3f-perf";
import Signs from "./World/Signs";
import { Pumpkin } from "./World/Pumpkin";
import { Title } from "./World/Title";

const Experience = () => {
    const { width, height } = useThree(state => state.viewport)

    const urlList = ['portfolio-juan-moreno','juanda-portfolio-3d','integrator-project','portfolio-paul-rodrigo-rojas-wn1x','portafolio-igino-valencia.netlify.app','portafolio-sebastian-idrobo','portfolio-juan-majin-2wnxrnb75-juanmajin','portofolio-julian-alvarez','portafolio-pi-psi-three','portfolio-carlos-hernandez','portfolio-jhon-suescun','portfolio-lenin-carabali','portfolio-jheison-gomez-4oh3rc515-jheisongz','portfolio-jesus-gomez','portfolio-3d-juan-camilo','portfolio-valentinabarb','portfolio-sebastian-penaranda','portfolio-marcelo-1941427','daniel-caicedo','portfolio-paula-giraldo','portfolio-mauricio-munoz','portafolio-brandon-calderon-prieto', 'portfolio-robert-o0gawguoh-robertgilunivalle','portfolio-jose-luis','portfolio-juan-getial','portafolio-liseth-castillo', 'portfolio-brayan-sanchez-lozano','pi-mesh-materials-and-animations','portfolio-nicol-ortiz','portfolio-javier-diaz','portfolio-marcela981','portafolio-luis-rodriguez23-4qdnxoobq-luisgarogu','portfolio-isabela-rosero',]
    const quantity = 32

    const handleRedirect = () => {
        var random = Math.floor(Math.random() * quantity)
        window.location.href = 'https://' + urlList[random] + '.vercel.app/'
    }

    const propsTexture = useTexture({
        map: '/assets/textures/grass/grass.jpg',
        normalMap: '/assets/textures/grass/normal.jpg',
        roughnessMap: '/assets/textures/grass/roughness.jpg',
        aoMap: '/assets/textures/grass/ao.jpg',
    })

    useFrame((state, delta)=>{
        //boxRef.current.rotation.x = Math.cos(state.clock.getElapsedTime());
    })


    
    return (
        <>
            {/* <Perf position={"top-right"} /> */}
            <OrbitControls />
            <Lights />
            <Environments />
            <Title rotation={[0, Math.PI, 0]} scale={0.35} position={[-2, 1.5, 0]}/> 
            <Float speed={2} floatIntensity={1}>
                <Text3D
                    position={[-0.5, 1.1, 0.7]}
                    rotation={[0, 0, 0.3]}
                    bevelEnabled
                    bevelSize={0.0001}
                    bevelThickness={0.0001}
                    height={0.1}
                    lineHeight={0.5}
                    size={0.2}
                    onClick={() => handleRedirect()}
                    font="/assets/fonts/Minecraft.json">
                    {`Prueba otros portafolios!`}
                    <meshStandardMaterial color={0xFCFB11}/>
                </Text3D>
            </Float>
            <Signs />
            <Pumpkin position={[5.9,-2,-2.65]} scale={0.35}/>
            <Bee position={[-4,-2,0]} scale={4}/>
            <Tree position={[5,-3.95,-3]} scale={4.5}/>
            <Chest position={[4.70,-1.70,-2.65]} scale={0.0034} rotation-y={-Math.PI/2} onClick={() => alert("No abrir")}/>
            <mesh position-y={-2} rotation-x={-Math.PI / 2} receiveShadow>
                <planeGeometry attach="geometry" args={[32, 12]} />
                <meshStandardMaterial {...propsTexture}/>
            </mesh>
        </>
    )
}

export default Experience;