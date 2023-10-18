import { Perf } from "r3f-perf";
import { useState, useEffect } from "react";
import { Bee } from "./World/Bee";
import Signs from "./World/Signs";
import { Tree } from "./World/Tree";
import Lights from "./World/Lights";
import { Chest } from "./World/Chest";
import { Title } from "./World/Title";
import { House } from "./World/House";
import { Biome } from "./World/Biome";
import { Portal } from "./World/Portal";
import { Ground } from "./World/Ground";
import { Player } from "./World/Player";
import { Pumpkin } from "./World/Pumpkin";
import Environments from "./World/Environment";
import { PortalCollider } from "./World/PortalCollider";
import { Physics, Debug, useBox } from '@react-three/cannon';
import { Float, OrbitControls, PointerLockControls, Text3D } from "@react-three/drei";

const Experience = () => {
    const [ready, setReady] = useState(false)
    const [enterSound] = useState(() => new Audio('/assets/sounds/minecraft_click.wav'))
    const urlList = ['portfolio-juan-moreno', 'juanda-portfolio-3d', 'integrator-project', 'portfolio-paul-rodrigo-rojas-wn1x', 'portafolio-igino-valencia.netlify.app', 'portafolio-sebastian-idrobo', 'portfolio-juan-majin-2wnxrnb75-juanmajin', 'portofolio-julian-alvarez', 'portafolio-pi-psi-three', 'portfolio-carlos-hernandez', 'portfolio-jhon-suescun', 'portfolio-lenin-carabali', 'portfolio-jheison-gomez-4oh3rc515-jheisongz', 'portfolio-jesus-gomez', 'portfolio-3d-juan-camilo', 'portfolio-valentinabarb', 'portfolio-sebastian-penaranda', 'portfolio-marcelo-1941427', 'daniel-caicedo', 'portfolio-paula-giraldo', 'portfolio-mauricio-munoz', 'portafolio-brandon-calderon-prieto', 'portfolio-robert-o0gawguoh-robertgilunivalle', 'portfolio-jose-luis', 'portfolio-juan-getial', 'portafolio-liseth-castillo', 'portfolio-brayan-sanchez-lozano', 'pi-mesh-materials-and-animations', 'portfolio-nicol-ortiz', 'portfolio-javier-diaz', 'portfolio-marcela981', 'portafolio-luis-rodriguez23-4qdnxoobq-luisgarogu', 'portfolio-isabela-rosero',]
    const quantity = 32

    useEffect(() => {
        const keyDownHandler = event => {
    
          if (event.key === 'Enter' && !ready) {
            event.preventDefault();
            play()  
            enterSound.play()                      
            alert('Clickea en cualquier lado para usar el mouse, moverte con WASD y espacio para saltar.')
          }
        };
    
        document.addEventListener('keydown', keyDownHandler);}, []);

    const handleRedirect = () => {
        var random = Math.floor(Math.random() * quantity)
        window.location.href = 'https://' + urlList[random] + '.vercel.app/'
    }

    const play = () => {
        setReady(true)       
    }

    return (
        <>
            {!ready && 
                <>
                <OrbitControls />
                <Signs />
                <Text3D
                    position={[-3.5, 0.1, 0]}
                    bevelEnabled
                    bevelSize={0.0001}
                    bevelThickness={0.0001}
                    height={0.1}
                    lineHeight={0.5}
                    size={0.4}
                    onClick={() => play()}
                    font="/assets/fonts/Minecraft.json">
                    {`Presiona enter para jugar!`}
                    <meshStandardMaterial color={0xFFFFFF} />
                </Text3D>
                </>}
            {/* <Perf openByDefault position={'bottom-left'} /> */}
            
            {ready && <>
                <Physics gravity={[0, -30, 0]}>
                    <Player position={[-2, 0, 6]}/>
                    <Portal position={[22.5, -7.5, 5]} scale={0.6} rotation={[0, Math.PI/2, 0]}/>
                    <PortalCollider position={[16, -3.2, 4.3]} scale={0.6} rotation={[0, Math.PI/2, 0]}/>
                    <Ground />
                </Physics>
                <PointerLockControls />
                </>}              
            
            <Lights />
            <Environments />
            <Title rotation={[0, Math.PI, 0]} scale={0.35} position={[-2, 1.5, 0]} />
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
                    <meshStandardMaterial color={0xFCFB11} />
                </Text3D>
            </Float>
            <Bee position={[-4, -2, 0]} scale={4} />
            <Tree position={[5, -3.95, -3]} scale={4.5} />
            <Chest position={[4.70, -1.70, -2.65]} scale={0.0034} rotation-y={-Math.PI / 2}/>
            <Pumpkin position={[5.9, -2, -2.65]} scale={0.35} />
            <Biome position={[0, -3.7, 0]} scale={0.8} />
            <House position={[0, -3.1, 15]} rotation-y={-Math.PI / 2} />
        </>
    )
}

export default Experience;