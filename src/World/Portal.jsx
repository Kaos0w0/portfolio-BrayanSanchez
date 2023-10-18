import React, { useState } from "react";
import { useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";

export function Portal(props) {
    const [portalSound] = useState(() => new Audio('/assets/sounds/portal.wav'))
    const urlList = ['portfolio-juan-moreno', 'juanda-portfolio-3d', 'integrator-project', 'portfolio-paul-rodrigo-rojas-wn1x', 'portafolio-igino-valencia.netlify.app', 'portafolio-sebastian-idrobo', 'portfolio-juan-majin-2wnxrnb75-juanmajin', 'portofolio-julian-alvarez', 'portafolio-pi-psi-three', 'portfolio-carlos-hernandez', 'portfolio-jhon-suescun', 'portfolio-lenin-carabali', 'portfolio-jheison-gomez-4oh3rc515-jheisongz', 'portfolio-jesus-gomez', 'portfolio-3d-juan-camilo', 'portfolio-valentinabarb', 'portfolio-sebastian-penaranda', 'portfolio-marcelo-1941427', 'daniel-caicedo', 'portfolio-paula-giraldo', 'portfolio-mauricio-munoz', 'portafolio-brandon-calderon-prieto', 'portfolio-robert-o0gawguoh-robertgilunivalle', 'portfolio-jose-luis', 'portfolio-juan-getial', 'portafolio-liseth-castillo', 'portfolio-brayan-sanchez-lozano', 'pi-mesh-materials-and-animations', 'portfolio-nicol-ortiz', 'portfolio-javier-diaz', 'portfolio-marcela981', 'portafolio-luis-rodriguez23-4qdnxoobq-luisgarogu', 'portfolio-isabela-rosero',]
    const quantity = 32

    const handleRedirect = () => {
        portalSound.play()
        var random = Math.floor(Math.random() * quantity)
        setTimeout(() => {
            window.location.href = 'https://' + urlList[random] + '.vercel.app/'
        }, 1500);
    }
    const [portal, portalApi] = useBox(() => ({ onCollide: (e) => handleRedirect(), args: [1.5, 18, 1], type: "Static", ...props }))
    const { nodes, materials } = useGLTF("/assets/models/portal/nether_portal.glb");
    return (
        <group ref={portal} {...props} dispose={null}>
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