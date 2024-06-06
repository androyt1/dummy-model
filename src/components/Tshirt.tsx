import { useGLTF } from "@react-three/drei";
import { useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import { MeshProps } from "@react-three/fiber";

type AstronautProps = MeshProps & {
    position?: [number, number, number];
    scale?: number | [number, number, number];
    color: string;
};
const Astronaut = (props: AstronautProps) => {
    const panther = useGLTF("/images/astronaut.glb");
    const animations = useAnimations(panther.animations, panther.scene);

    useEffect(() => {
        if (animations.actions["metarig|walking(28)"]) {
            animations.actions["metarig|walking(28)"].play();
        }
    }, [animations.actions]);

    return (
        <mesh {...props}>
            <primitive object={panther.scene} />
        </mesh>
    );
};

export default Astronaut;
