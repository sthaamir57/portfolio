import Pulse from "./components/Pulse/Pulse"
import ArrowIcon from "./components/ArrowIcon/ArrowIcon"
import { useTransform, motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = ({scrollYProgress}) => {

    const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);
    const x2 = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const op = useTransform(scrollYProgress, [0, 1], [1, -2.6]);
    const opSlow = useTransform(scrollYProgress, [0, 1], [1, -1.6]);
    const blur = useTransform(scrollYProgress, [0, 1], ['blur(0px)', 'blur(20px)']);
    const blurFast = useTransform(scrollYProgress, [0, 1], ['blur(0px)', 'blur(30px)']);
    // const colorChange = useTransform(scrollYProgress, [0, 1], ['#090909', '#000000']);

    return (
        
        <section className="sticky top-0 flex flex-col items-center justify-center h-[80vh] overflow-hidden ">
            <motion.h2  style={{translateY : x1, opacity: opSlow,  filter : blur}} className="flex flex-row items-center gap-[1vw] mb-[2vw]">
                <Pulse />
                <span className="text-[1.8vw] tracking-tight cursor-text">Open for work</span>
            </motion.h2>
            <h1 className="leading-[0.92] text-center text-[8.5vw] font-display cursor-text">
                <motion.span
                    style={{translateX : x1, opacity: op, filter : blurFast}}
                    className="inline-block"
                >
                    Web Developer
                </motion.span>
                <br />
                <motion.span
                    style={{translateX : x2, opacity: op, filter : blurFast}}
                    className="inline-block"
                >& Designer</motion.span>
            </h1>

            
            <motion.div style={{bottom : x2, opacity: op, filter : blur}} className="absolute text-base bottom-0 animate-bounce animate-duration-[25000ms] pb-2">
                <Link className="flex cursor-pointer" to="myWorks" smooth={true} duration={500}>
                    <span className="inline-block">Recent</span>
                    <ArrowIcon />
                    <span className="inline-block">Works</span>
                </Link>
            </motion.div>
            

            
            
        </section>
    )
}

export default Hero