import React from 'react'
import profileImg from "../assets/profileImage.jpeg"
import { FiDownload } from 'react-icons/fi'
import resume from "../assets/resume.pdf"

function Home() {
  return (
    <section 
      id='home' 
      className='relative min-h-screen flex flex-col justify-center items-center lg:flex-row-reverse gap-9 lg:gap-15 px-4'
    >
      
      <div className='z-10'>
        <img 
          className='w-[200px] mt-20 rounded-full shadow-lg shadow-gray-500/70 lg:mt-0 lg:max-w-[250px] object-cover object-bottom hover:translate-y-1 transition-all pointer-events-none' 
          src={profileImg} 
          alt='Profile Image' 
        />
      </div>

      
      <div className='text-center font-mono z-20'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl lg:max-w-[500px] font-semibold mb-6 px-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent leading-tight'>
          I am Mohamed Roshan Safeek
        </h1>
        <p className='text-gray-300 text-lg mb-8 max-w-lg mx-auto'>
          I'm a MERN Stack Developer passionate about crafting interactive and scalable 
          web applications. I focus on building elegant UIs, smooth performance, and 
          meaningful digital experiences that users love.
        </p>

        
        <div className="flex justify-center items-center space-x-4">
          <a
            className="bg-gradient-to-r from-teal-500 to-indigo-600 py-3 px-6 rounded hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] font-medium transition"
            href="#contact"
          >
            Contact Me
          </a>

          <a
            className="bg-gradient-to-r from-teal-500 to-indigo-600 py-3 px-6 rounded hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] font-medium transition flex items-center justify-center"
            href={resume}
            download
          >
            <span>Resume</span>
            <FiDownload className="ml-3 text-2xl text-white" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
