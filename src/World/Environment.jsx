import { Cloud, Environment, Sky, Sparkles, Stars } from "@react-three/drei"

const Environments = () => {
    return (
        <>
            <Stars
                radius={100} // Radius of the inner sphere (default=100)
                depth={50} // Depth of area where stars should fit (default=50)
                count={5000} // Amount of stars (default=5000)
                factor={2} // Size factor (default=4)
                saturation={0} // Saturation 0-1 (default=0)
            />
            <Sky
                inclination={0.001}       // Ajusta la inclinación para simular el atardecer
                azimuth={180}          // Ajusta el ángulo azimutal para cambiar la dirección de la luz
                mieCoefficient={0.005}  // Ajusta la dispersión atmosférica
                rayleigh={20}        // Ajusta la dispersión de Rayleigh
                turbidity={10}         // Ajusta la claridad del cielo
                exposure={0.5}
            />
            <Sparkles
                color="rose"
                count={100}
                size={4}
                fade={true}
                speed={0.5}
                scale={[12,4,6]}
            />
            <Cloud
                opacity={0.5}
                speed={0.1} // Rotation speed
                width={100} // Width of the full cloud
                depth={5} // Z-dir depth
                segments={20} // Number of particles
                position-y={20}
            />
        </>
    )
}
export default Environments;