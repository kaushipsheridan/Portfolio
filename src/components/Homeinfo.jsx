import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/icons/arrow.svg'

const InfoBox=({text,link,btnText})=>(
    <div className="info-box">
        <p className="font-small sm:text-xl text-center font-mono"> {text} </p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            <div className="font-mono sm:text-xl">{btnText}</div>
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>    
)

const renderContent={
    1: (
        //For first one we have placed 
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
         <span className="sm:text-small font-mono">  Hi, I am <span className=" text-xl sm:text-2xl font-mono">Priyanshu</span></span> 👋
        <br />
        <span className="sm:text-small font-mono">Software Engineer👨‍💻|Full Stack Developer💻|Open Source Enthusiast🌟</span>
        <br />
        <span className="sm:text-small font-mono">from Toronto🍁Canada</span>
      </h1>
      
    ),
    2: (
        <InfoBox
        text="Looking for a dev? I am just a few clicks away."
        link="/contact"
        btnText="Lets Talk!"
        />
    ),
    3: (
        <InfoBox
        text="Built and Contributed to Open source projects."
        link="/Projects"
        btnText="View My Projects"
        />
    ),
    4: (
        <InfoBox
       

        text="Worked with many companies and startups to build their products and services."
        link="/About"
        btnText="Know More"
        />
    )

}


const Homeinfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default Homeinfo