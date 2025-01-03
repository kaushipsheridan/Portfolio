import { useRef , useEffect} from 'react'
import planeScene from '../assets/3d/plane.glb'
import { useAnimations , useGLTF } from '@react-three/drei'

const Plane = ({isRotating, ...props}) => {

  const ref= useRef();
  //Loading scene and animations
    const {scene,animations} = useGLTF(planeScene)
    //Loading action from animations coming from three/drei
    const { actions } = useAnimations(animations,ref);

    //using function to play the plane animation

    useEffect(()=>{
        if(isRotating){
            actions['Take 001'].play()
        }else{
            actions['Take 001'].stop()
        }
    },[actions,isRotating])

  return (
    <mesh {...props} ref={ref}> 
        <primitive object={scene}/>
    </mesh>
  )
}

export default Plane