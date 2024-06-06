import { useProgress, Html } from "@react-three/drei";

function Loader() {
    const { progress } = useProgress();
    return (
        <Html center className='text-stone-800 text-xl w-full h-full flex'>
            loading model: {Math.round(progress)} %
        </Html>
    );
}
export default Loader;
