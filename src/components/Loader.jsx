import { Html } from '@react-three/drei'
const Loader = () => {
  return (
    <Html>
        <div className="flex items-center justify-center ">
                <div className ="w-20,h-20, border-10, border-opacity-5 , border-blue-500, border-t-blue-500 rounded-full animate-spin"/>
        </div>
    </Html>
  )
}

export default Loader