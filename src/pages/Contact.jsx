import React , {Suspense, useState} from 'react';
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import Fox from '../models/fox';
import Loader from '../components/Loader';
import { Canvas } from '@react-three/fiber';



const Contact = () => {

    const formRef = useRef(null);
    //To be used in form
    const [form, setform] = useState({name: '', email: '', message: ''});

    const [isLoading,setIsLoading] = useState(false);

    const [currentAnimation, setCurrentAnimation] = useState('idle')

    //This is handling any change in the form text boxes (eg. inputing values in the text boxes)
    const handleChange=(e)=>{
        setform({...form, [e.target.name]: e.target.value});
    };
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        setIsLoading(true);
        setCurrentAnimation('hit');

        emailjs.send( 
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "Priyanshu Kaushik",
                from_email: form.email,
                to_email: 'priyanshu15112004@gmail.com',
                message: form.message,
                
              },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(()=>{
            setIsLoading(false);
            //TODO : Show success message
            //TODO : Hide an Alert

            setform({name: '', email: '', message: ''});
        }).catch((error)=>{
            setIsLoading(false);
            setCurrentAnimation('idle');
            console.log(error);
            //TODO: SHOW ERROR MESSAGE TO USER
        })
            
    };

    const handleFocus=()=>setCurrentAnimation('walk');
    const handleBlur=()=>{setCurrentAnimation('idle')};



    return (
        <section className="relative flex lg:flex-row flex-col max-container">
            <div className=" flex-1 min-w-[50%] flex flex-col">
                <h1 className="head-text">Get in touch</h1>
                <form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
                    {/* Name */}
                    <label className="text-black-500 font-semi-bold">Name
                        <input type="text" className="input" name="name" placeholder="John" required
                        value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
                    </label>
                    {/* Email */}
                    <label className="text-black-500 font-semi-bold">Email
                        <input type="email" className="input" name="email" placeholder="John@gmail.com" required
                        value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
                    </label>
                    {/* Message */}
                    <label className="text-black-500 font-semi-bold">Your Message
                        <input className="textarea" name="message" placeholder="How can i help you?" required rows={4} disabled={isLoading}
                        value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
                    </label>

                    <button type="submit" onFocus={handleFocus} onBlur={handleBlur} className="btn">
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>

            <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
                <Canvas
                    camera={{
                        position:[0,0,5],
                        fov: 75,
                        near: 0.1,
                        far: 1000,   
                    }}
                    >

                        <directionalLight intensity={2.5} position={[0,0,1]}/>
                        <ambientLight intensity={0.5}/>

                        <Suspense fallback={<Loader/>}>
                            <Fox
                                currentanimation={currentAnimation}
                                position={[0.8,0.1,0.5]}
                                rotation={[12.6,-0.6,-0.1]}
                                scale={[0.60,0.60,0.60]}
                            />
                        </Suspense>
                </Canvas>
            
            
            </div>
            
            
        </section>
    );
};

export default Contact;