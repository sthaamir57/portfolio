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
  const containerHero = useRef();
    const { scrollYProgress : Y1 } = useScroll({
      target: container,
      offset: ["start start", "end end"]
    })
    const { scrollYProgress : Y2 } = useScroll({
      target: containerHero,
      offset: ["0 0.2", "0.1 0.1"]
    })

    

  return (
    <>
        <Nav />
        <div className="min-h-[200vh] ">
          <Hero scrollYProgress={Y1} ref={container}/>
          <Works scrollYProgress={Y2} ref={containerHero}  />
        </div>

        <div id="contact" className="relative h-screen p-16 z-100 bg-slate-800">Contact Me</div>
    </>
  )
}

export default App
