import React , {useState} from 'react';
import {useRef} from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const formRef = useRef(null);
    //To be used in form
    const [form, setform] = useState({name: '', email: '', message: ''});

    const [isLoading,setIsLoading] = useState(false);

    //This is handling any change in the form text boxes (eg. inputing values in the text boxes)
    const handleChange=(e)=>{
        setform({...form, [e.target.name]: e.target.value});
    };
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        setIsLoading(true);

        emailjs.send( 
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "Priyanshu Kaushik",
                from_email: form.email,
                to_email: 'kaushipr@sheridancollege.ca',
                message: form.message,
                
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(()=>{
            setIsLoading(false);
            //TODO : Show success message
            //TODO : Hide an Alert
        }).catch((error)=>{
            setIsLoading(false);
            console.log(error);
            //TODO: SHOW ERROR MESSAGE TO USER
        })
            
    };

    const handleFocus=()=>{};
    const handleBlur=()=>{};




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
            
            
        </section>
    );
};

export default Contact;