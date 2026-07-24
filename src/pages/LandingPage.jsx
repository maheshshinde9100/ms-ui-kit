import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Sparkle } from 'lucide-react';
import { MoveRight } from 'lucide-react';
import { Typewriter } from "react-simple-typewriter";

 export const Landing = ()=> {
  return (
    <div className=' relative min-h-screen overflow-hidden bg-black '>
        <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-3xl animate-pulse" />

        <div className="absolute bottom-0 right-1/4 h-[450px] w-[450px] rounded-full bg-blue-600/30 blur-3xl animate-pulse delay-1000" />

        <div className="absolute left-1/2 top-1/3 h-[350px] w-[350px] rounded-full bg-indigo-500/20 blur-3xl animate-pulse delay-500" />
      </div>


     <section className='relative z-10 min-h-screen flex items-center justify-center px-6'>



     <div className='text-center  max-w-4xl '>
    



<h1 className="text-6xl md:text-8xl font-black text-white">
MS UI KIT
</h1>

<p className="mt-6 text-6xl text-gray-300">
  Open Source React UI Library
  <br />
  to build{" "}
  <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 bg-clip-text text-transparent">
    <Typewriter
      words={[
        "Beautiful UIs",
        "Modern Dashboards",
        "Landing Pages",
        "SaaS Applications",
        "Developer Tools",
      ]}
      loop={0}
      cursor
      cursorStyle="_"
      typeSpeed={80}
      deleteSpeed={40}
      delaySpeed={1800}
    />
  </span>
</p>



<div className='mt-8 flex justify-center gap-4'>
    <Link 
    to="/components"
    className='flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105'
    
    >

     Browse Components <MoveRight size={20}/>
    </Link>
    <a
     href="https://github.com/maheshshinde9100/ms-ui-kit"
     target="_blank"
    rel="noopener noreferrer"
    className='rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/20'
     >  ★ GitHub</a>



</div>
</div>
     </section>
    </div>
  )
}

