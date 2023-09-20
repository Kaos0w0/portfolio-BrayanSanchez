import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { PointLightHelper } from "three";

const Lights = () => {
    const pointLightRef = useRef();
    //useHelper(pointLightRef, PointLightHelper, 1, "hotpink");

    return <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={0.8} color={0xFFFFFF} castShadow
                shadow-mapSize={[256, 256]}
                shadow-camera-far={20}
                shadow-camera-left={-4}
                shadow-camera-right={7}
                shadow-camera-top={4}
                shadow-camera-bottom={-4}
            />
            <pointLight ref={pointLightRef} position={[-2, 0, 0]} intensity={7} color={0xFDB813} />
        </>
}
export default Lights;