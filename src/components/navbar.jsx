import { NavLink } from "react-router-dom"

const navbar = () => {
  return (
        <header className="header">

            {/* HEADER NAVLINK LOGO */}
            {/* navlink is nothing just linking the page to where it should take the user upon clicking - here to HOMEPAGE */}
            <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                <p className="blue-gradient_text">PK</p>
            </NavLink>

            {/* Gap btw the logo and the options on the right */}
            <nav className="flex text-lg gap-7 font-medium">

            {/* HEADER NAVLING RIGHT OPTIONS HERE*/}
            <NavLink to="/about" className={ ({isActive}) => isActive ?  'text-blue-500' : 'text-black' } >
                 ABOUT
            </NavLink>

            <NavLink to="/projects" className={ ({isActive}) => isActive ?  'text-blue-500' : 'text-black' } >
                PROJECTS
            </NavLink>
            
            <NavLink to="/resume" className={ ({isActive}) => isActive ?  'text-blue-500' : 'text-black' } >
                RESUME
            </NavLink>
            <NavLink to="/contact" className={ ({isActive}) => isActive ?  'text-blue-500' : 'text-black' } >
                CONTACT
            </NavLink>

    
            </nav>
        </header>
  )
}

export default navbar