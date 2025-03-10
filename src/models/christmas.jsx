/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect} from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame,useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'

import christmasScene from '../assets/3D/christmas.glb'


const christmas = ({ isRotating , setisRotating,setCurrentStage, ...props}) => {

  const christmasRef = useRef();

  const { gl, viewport }= useThree();
  const { nodes, materials } = useGLTF(christmasScene);
  
  //storing last position of mouse
  const lastX = useRef(0);
  const rotationSpeed=useRef(0);
  const dampingFactor = 0.95;

  // on mouse click
  const handlePointerDown = (e) => {
    //Limit mouse click to just this function 
    e.stopPropagation();
    //to stop the page from reloading and keeping it going
    e.preventDefault();
    //while holding, the island is allowed to be rotating
    setisRotating(true);

    //storing the last position of the mouse and figuring out if its a touch on phone or a click on Computer
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    
    //now stroing the last touch or click position
    lastX.current = clientX;
  }

  //On mouse click release
  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setisRotating(false);

  }

  //On movement while on click
  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if(isRotating){

    // If rotation is enabled, calculate the change in clientX position
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    //  now we will calculate the change in the movement of the island 
    const delta = (clientX - lastX.current)/ viewport.width;

    //now updating the rotation of the island based on change calculated .....delta
    //we are calulating and updating in reference to a circle
    christmasRef.current.rotation.y -= delta * Math.PI * 0.005; 

    //now updating the new position
    lastX.current = clientX;

    //updating rotation speed with the same delta
    rotationSpeed.current = delta * Math.PI * 0.005;
    }
  
  }

  //now movement with keyboard
  const handleKeyDown = (e) => {
    if(e.key==='ArrowLeft'){
      if (!isRotating) setisRotating(true);
      christmasRef.current.rotation.y-=0.005*Math.PI;
    }else if(e.key==='ArrowRight'){
      if (!isRotating) setisRotating(true);
      christmasRef.current.rotation.y+=0.005*Math.PI;
    }
  }

  const handleKeyUp = (e) => {
    if(e.key==='ArrowRight' || e.key==='ArrowLeft'){
      setisRotating(false);
    }
  }

  //Now this function will work wherever one of the variables changes
  useEffect(() => {

    const canvas = gl.domElement;

    //adding event listeners
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      //removing event listeners
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }
    },[gl,handlePointerUp,handlePointerMove,handlePointerDown]) 
  

  //Now we will use the useFrame hook to rotate the island
  useFrame(() => {

    //if the island is rotating
    if(!isRotating){

      //we will slow down the rotation WHEN user stops rotating the island
      rotationSpeed.current *= dampingFactor;

      //when its slow enough, will stop the rotation
      if(Math.abs(rotationSpeed.current) < 0.000001){
        rotationSpeed.current = 0;


      }
      //we gotta slow it down too,
      christmasRef.current.rotation.y-=rotationSpeed.current;

    }else{

      const rotation = christmasRef.current.rotation.y;

      // Normalize the rotation value to be within the range of 0 to 2 * Math.PI (0 to 360 degrees).
      // This ensures that the rotation value is always positive and within one full rotation.
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

        // Set the current stage based on the island's orientation
        switch (true) {
          case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
            setCurrentStage(4);
            break;
          case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
            setCurrentStage(3);
            break;
          case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
            setCurrentStage(2);
            break;
          case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
            setCurrentStage(1);
            break;
          default:
            setCurrentStage(null);
        }
    }
  })

  return (

      <a.group  ref={christmasRef}{...props} >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            
            
            geometry={nodes.Object_4.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_5.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_6.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_7.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_8.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_9.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_10.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_11.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_12.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_13.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_14.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_15.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_16.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_17.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_18.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_19.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_20.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_21.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_22.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_23.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_24.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_25.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_26.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_27.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_28.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_29.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_30.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_31.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_32.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_33.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_34.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_35.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_36.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_37.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_38.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_39.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_40.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_41.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_42.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_43.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_44.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_45.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_46.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_47.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_48.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_49.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_50.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_51.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_52.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_53.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_54.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_55.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_56.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_57.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_58.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_59.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_60.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_61.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_62.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_63.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_64.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_65.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_66.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_67.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_68.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_69.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_70.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_71.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_72.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_73.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_74.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_75.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_76.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_77.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_78.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_79.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_80.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_81.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_82.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_83.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_84.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_85.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_86.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_87.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_88.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_89.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_90.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_91.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_92.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_93.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_94.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_95.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_96.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_97.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_98.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_99.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_100.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_101.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_102.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_103.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_104.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_105.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_106.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_107.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_108.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_109.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_110.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_111.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_112.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_113.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_114.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_115.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_116.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_117.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_118.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_119.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_120.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_121.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_122.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_123.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_124.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_125.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_126.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_127.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_128.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_129.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_130.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_131.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_132.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_133.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_134.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_135.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_136.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_137.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_138.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_139.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_140.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_141.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_142.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_143.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_144.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_145.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_146.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_147.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_148.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_149.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_150.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_151.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_152.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_153.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_154.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_155.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_156.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_157.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_158.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_159.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_160.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_161.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_162.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_163.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_164.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_165.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_166.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_167.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_168.geometry}
            material={materials.FeatherMaterial}
          />
          <mesh
            
            
            geometry={nodes.Object_169.geometry}
            material={materials.FeatherMaterial}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            
            
            geometry={nodes.Object_171.geometry}
            material={materials['Material.212']}
          />
          <mesh
            
            
            geometry={nodes.Object_172.geometry}
            material={materials['Material.226']}
          />
          <mesh
            
            
            geometry={nodes.Object_173.geometry}
            material={materials['Material.227']}
          />
          <mesh
            
            
            geometry={nodes.Object_174.geometry}
            material={materials['Material.330']}
          />
          <mesh
            
            
            geometry={nodes.Object_175.geometry}
            material={materials['Material.334']}
          />
          <mesh
            
            
            geometry={nodes.Object_176.geometry}
            material={materials['Material.335']}
          />
          <mesh
            
            
            geometry={nodes.Object_177.geometry}
            material={materials['Material.336']}
          />
          <mesh
            
            
            geometry={nodes.Object_178.geometry}
            material={materials['Material.282']}
          />
          <mesh
            
            
            geometry={nodes.Object_179.geometry}
            material={materials['Material.283']}
          />
          <mesh
            
            
            geometry={nodes.Object_180.geometry}
            material={materials['Material.102']}
          />
          <mesh
            
            
            geometry={nodes.Object_181.geometry}
            material={materials['Material.102']}
          />
          <mesh
            
            
            geometry={nodes.Object_182.geometry}
            material={materials['Material.102']}
          />
          <mesh
            
            
            geometry={nodes.Object_183.geometry}
            material={materials['Material.102']}
          />
          <mesh
            
            
            geometry={nodes.Object_184.geometry}
            material={materials['Material.104']}
          />
          <mesh
            
            
            geometry={nodes.Object_185.geometry}
            material={materials['Material.105']}
          />
        </group>
      </a.group>
    )

  }


  export default christmas;
