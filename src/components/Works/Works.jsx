import { useTransform, motion } from "framer-motion";
import Heading from "../OneForAll/Heading"
import GalleryImage from "./components/GalleryImage"
import { CardWorks } from "./components/CardWorks";

const Works = ({scrollYProgress}) => {
  const variants = {
    hidden: { scaleX: 1},
    visible: { scaleX: 1},
  };

  const scaleObject = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  // variants={variants}  initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-200px" }} transition={{
  //   ease: "easeInOut",
  //   delay: 0.1,
  //   duration: 0.4,
  // }}
  return (
    <motion.div id="myWorks" style={{scaleX: scaleObject}} className="relative flex flex-row min-h-screen gap-24 p-16 scale-x-75 pt-28 bg-neutral-900/60 backdrop-blur-lg backdrop-saturate-150">
        <div>
        <Heading heading="Recent Works" />
        </div>

    <div className="flex flex-col gap-28 ">
      <CardWorks />
      <CardWorks />
      <CardWorks />
      <CardWorks />

    </div>
 
        
    </motion.div>
  )
}

export default Works