import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import Loader from '../components/Loader';

import Christmas from '../models/christmas';
import Sky from '../models/sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';

import Homeinfo from '../components/Homeinfo';
 

const Home = () => {

    const [isRotating, setisRotating] = useState(false);

    const [currentStage, setCurrentStage] = useState(1);

    

    const adjustChristmasForScreenSize=()=>{
        let screenScale=null;
        let screenPosition=[0,-20,-230];
        let rotation = [3.15,11,3.15];

        if(window.innerWidth < 768){
            screenScale = [0.55, 0.55, 0.55];
            
        }else{
            screenScale =[90, 90, 90];
           
        }

        return [screenScale,screenPosition,rotation];

    }

    const adjustPlaneForScreenSize=()=>{
        let planeScale;
        let planePosition;

        if(window.innerWidth < 768){
            planeScale = [1.5,1.5,1.5];
            planePosition = [5,-1.5,0];
            
        }else{
            planeScale =[3,3,3];
            planePosition = [0,-4,-4];
           
        }

        return [planeScale,planePosition];

    }

    const[christmasScale,christmasPosition,christmasRotation] = adjustChristmasForScreenSize();
    const[planeScale,planePosition] = adjustPlaneForScreenSize();

    return (
        <section className = "w-full h-screen relative" >
        <div className=" absolute top-28 left-0 right-0 z-10 flex items-center justify-center text-4xl font-bold text-black">
            {currentStage && <Homeinfo currentStage={currentStage} />}
        </div>

            {/* This will be the root component that sets up everything 3D we use - just like .NET */}
            <Canvas  
                className ={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{near:0.1, far:1000}}
            >


                {/* used to render loading screen */}
                <Suspense fallback={<Loader />}>
                    {/* THEy handle the lighting and colour scheme of the Island/Christmas House */}
                    <directionalLight position={[1,1,1]} intensity={2}/>
                    <ambientLight intensity={0.5}/>
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>

                    <Bird/>
                    <Sky
                    isRotating={isRotating}
                    
                    />
                   
                    <Christmas
                    position={christmasPosition}
                    scale={christmasScale}
                    rotation={christmasRotation}
                    isRotating={isRotating}
                    setisRotating={setisRotating}
                    setCurrentStage={setCurrentStage}
                    />

                    <Plane
                    isRotating={isRotating}
                    planeScale={planeScale}
                    planePosition={planePosition}
                    rotation={[0,20,0]}
                    />
                </Suspense>
            </Canvas>


        </section>
    );
};

export default Home;