import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Astronaut from "./components/Tshirt";
import Loader from "./components/Loader";

const App = () => {
    return (
        <div className='w-screen h-screen flex flex-col'>
            {/* Header */}
            <header className='w-full bg-blue-600 text-white py-6'>
                <div className='container mx-auto text-center'>
                    <h1 className='text-4xl font-bold'>Welcome to Our Landing Page</h1>
                    <h2 className='text-2xl mt-4'>Explore our 3D Astronaut Model</h2>
                </div>
            </header>

            {/* Main Content */}
            <main className='flex-1 flex flex-col items-center justify-center'>
                <div className='w-[300px] h-[200px] '>
                    <Canvas>
                        <ambientLight intensity={1.5} />
                        <Suspense fallback={<Loader />}>
                            <Astronaut
                                rotation-y={Math.PI * 2.2}
                                scale={2.3}
                                position-y={-1.9}
                                color='red'
                            />
                        </Suspense>
                    </Canvas>
                </div>
            </main>

            {/* Additional Sections */}
            <section className='w-full bg-white py-12'>
                <div className='container mx-auto text-center'>
                    <h2 className='text-3xl font-semibold mb-4'>Our Features</h2>
                    <p className='text-lg text-gray-700'>
                        Discover the amazing features of our product.
                    </p>
                    {/* Add more content as needed */}
                </div>
            </section>

            {/* Footer */}
            <footer className='w-full bg-blue-600 text-white py-4'>
                <div className='container mx-auto text-center'>
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
