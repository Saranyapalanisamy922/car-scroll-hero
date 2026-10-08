'use client'; 

import { useEffect, useRef } from "react"; 
import { gsap } from "gsap"; 
import {ScrollTrigger} from 'gsap/ScrollTrigger' 

gsap.registerPlugin(ScrollTrigger); 

export default function HeroSection (){
    const containerRef = useRef(null);
    const titleRef = useRef(null); 
    const carRef = useRef(null);
    const statsRef = useRef(null); 
    
    const bgTextRef = useRef(null); 

    useEffect(() => {
        const ctx = gsap.context(() => {
      const introTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      introTl
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 40, filter: 'blur(10px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2 }
        )
        .fromTo(
          statsRef.current.children,
          { opacity: 0, y: 25, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15 },
          '-=0.6'
        )
        .fromTo(
          carRef.current,
          { opacity: 0, scale: 0.85, y: 60 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'back.out(1.2)' },
          '-=0.8'
        );

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      scrollTl
        .to(carRef.current, {
          xPercent: 75,
          scale: 1.15,
          rotate: 3,
          ease: 'none',
        }, 0)
        .to(titleRef.current, {
          y: -100,
          opacity: 0.2,
          filter: 'blur(8px)',
          ease: 'none',
        }, 0)
        .to(statsRef.current, {
          y: -50,
          opacity: 0,
          ease: 'none',
        }, 0)
        .to(bgTextRef.current, {
          xPercent: -30,
          opacity: 0.1,
          ease: 'none',
        }, 0);

    }, containerRef);

    return () => ctx.revert();
  }, []);

return (
    <section 
    ref={containerRef} 
    className="relative w-full h-screen overflow-hidden flex flex-col justify-between p-8 md:p-16 select-none"
    > 
    <div className="hero-gradient-bg"/>

    <div 
    ref={bgTextRef} 
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black text-white/5 whitespace-nowrap pointer-events-none gpu-layer z-0"
    >
     PERFORMANCE
    </div> 
    <header className="relative z-10 text-center mt-6"> 
    <h1 
    ref={titleRef} 
    className="spaced-headline text-xl sm:text-3xl md:text-5xl lg:text-6xl tracking-widest gpu-layer"
    >  
     W E L C O M E &nbsp; I T Z &nbsp; F I Z Z
    </h1>
    <p className="text-xs sm:text-sm text-slate-400 mt-4 tracking-widest uppercase">
        Precision Engineering &amp; Motion Design
    </p>

   </header> 
   <div className="relative  z-20 text-center flex flex-1 items-center my-4">
    <div ref={carRef} className="w-full max-w-4xl gpu-layer">
      <img 
      src="/car.png"
      alt="Sports Car Visual"
      className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
      /> 
    </div>
    </div> 
    
    <footer 
     ref={statsRef} 
     className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto w-full mb-4"
    > 
     <div className="glass-card rounded-2xl p-4 sm:p-6 text-center gpu-layer">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            2.1s
          </h2>
          <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">0-100 km/h</p>
        </div>

        <div className="glass-card rounded-2xl p-4 sm:p-6 text-center gpu-layer">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            100%
          </h2>
          <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Electric Power</p>
        </div>

        <div className="glass-card rounded-2xl p-4 sm:p-6 text-center gpu-layer">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            750hp
          </h2>
          <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Peak Output</p>
        </div>

        <div className="glass-card rounded-2xl p-4 sm:p-6 text-center gpu-layer">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            0.20
          </h2>
          <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Drag Coeff (cd)</p>
        </div>
    </footer>


    </section>

   
)

}
