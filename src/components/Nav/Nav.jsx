import { Link, animateScroll as scroll } from "react-scroll"
import Button from "../OneForAll/Button"

const Nav = () => {
  return ( 
    <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between p-4 pt-6 bg-black/50 backdrop-blur-lg backdrop-saturate-150">
        <div>
            <p>Amir Shrestha</p>
            <p className="text-xs font-light">Kathmandu,Nepal</p>
        </div>

        <div className="flex flex-row items-center gap-3">
            <Link className="cursor-pointer" to="myWorks" smooth={true} duration={500}>
                <div className="px-4 py-2">
                    My Works
                </div>
            </Link>
            <Link className="cursor-pointer" to="contact" smooth={true} duration={500}>
                <Button btnText="Hire Me" />
            </Link>
        </div>
    </nav>
  )
}

export default Nav