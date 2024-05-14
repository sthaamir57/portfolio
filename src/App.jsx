import { useEffect, useRef } from 'react';
import './App.css'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'
import Works from './components/Works/Works'
import Lenis from 'lenis';
import { useScroll } from 'framer-motion';

function App() {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const container = useRef();
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end end"]
    })

  return (
    <>
        <Nav />
        <div className="min-h-[200vh] ">
          <Hero scrollYProgress={scrollYProgress} ref={container}/>
          <Works scrollYProgress={scrollYProgress}  />
        </div>

        <div id="contact" className="relative h-screen p-16 z-100 bg-slate-800">Contact Me</div>
    </>
  )
}

export default App
