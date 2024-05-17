import { Link, animateScroll as scroll } from "react-scroll"
import Button from "../OneForAll/Button"

const Nav = () => {
  return ( 
    <nav className="flex items-center justify-around p-4 pt-6 bg-black font-display">
        <Link className="cursor-pointer" to="myWorks" smooth={true} duration={500}>
                <div className="p-2">
                    Works
                </div>
        </Link>

        <div className="text-2xl text-center font-display">
            <p>Amir</p>
        </div>

            
            <Link className="p-2 cursor-pointer" to="contact" smooth={true} duration={500}>
                {/* <Button btnText="Hire Me" /> */}
                Contact
            </Link>
    </nav>
  )
}

export default Nav