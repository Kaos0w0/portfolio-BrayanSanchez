import { Sign } from "./Sign";
import { Text } from "@react-three/drei";

const Signs = () => {
    const handleSign = (type) => {
        if(type === "about"){
            alert("Mi nombre es Brayan Sanchez, un placer! :D");
        } else if(type === "contact"){
            alert("Puedes contactarme a mi correo: brayan.andres.sanchez@correounivalle.edu.co");
        } else if(type === "projects"){
            alert("Puedes ver mis proyectos en mi github: https://github.com/Kaos0w0");
        } else if(type === "skills"){
            alert("Puedes ver mis habilidades en mi linkedin: https://www.linkedin.com/in/brayan-sanchez-0b6b3b1b5/");
        }
      };
    return(
        <>
            <Sign position={[-2.2,-2,-1]} scale={2} onClick={() => handleSign("about")}>
                <Text color="black" fontSize={0.09} position={[0.25, 0.42, 0.28]} font="/assets/fonts/Minecraft.ttf">
                    About
                </Text>
            </Sign>
            <Sign position={[-1.1,-2,-1]} scale={2} onClick={() => handleSign("skills")}>
                <Text color="black" fontSize={0.09} position={[0.25, 0.42, 0.28]} font="/assets/fonts/Minecraft.ttf">
                    Skills
                </Text>
            </Sign>
            <Sign position={[0,-2,-1]} scale={2} onClick={() => handleSign("contact")}>
                <Text color="black" fontSize={0.09} position={[0.25, 0.42, 0.28]} font="/assets/fonts/Minecraft.ttf">
                    Contact
                </Text>
            </Sign>
            <Sign position={[1.1,-2,-1]} scale={2} onClick={() => handleSign("projects")}>
                <Text color="black" fontSize={0.09} position={[0.25, 0.42, 0.28]} font="/assets/fonts/Minecraft.ttf">
                    Work
                </Text>
            </Sign>
        </>
    )
}

export default Signs;