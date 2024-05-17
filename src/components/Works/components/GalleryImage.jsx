import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Pill } from "./Pill";

const GalleryImage = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

  const translate = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  return (
    <div ref={ref} >
      <div className='w-[320px] h-[300px] overflow-hidden bg-fuchsia-700 relative'>
        <div className="absolute top-0 left-0 z-20 p-3">
          <div className="tracking-[1px] text-[0.7rem] flex gap-1 flex-wrap"> 
                  <Pill tech={"ReactJS"} />
                  <Pill tech={"FastAPI"} />
                  <Pill tech={"Machine Learning"} />
                  <Pill tech={"Framer Motion"} />
                </div>
        </div>
        <motion.div
        className='relative w-full h-full transition-transform ease-linear scale-x-105 scale-y-105 translate-y-0'
        style={{translateY: translate, scaleX: 1.05, scaleY: 1.05}}
        >
            <picture>
            <img src="./images/place.png" />
            {/* <img src="https://cdn.pixabay.com/photo/2023/10/04/17/00/ai-generated-8294107_960_720.png" /> */}
            </picture>
        </motion.div>
    </div>
    </div>
  )
}

export default GalleryImage