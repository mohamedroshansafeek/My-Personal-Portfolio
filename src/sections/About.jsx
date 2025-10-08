import React from 'react'
import RevealOnScroll from '../Ui/RevealOnScroll'

function About() {
  const skills = [
    "ReactJS",
    "ExpressJS",
    "NodeJS",
    "Redux",
    "MongoDB",
    "Firebase",
    "GitHub",
    "Oracle",
    "PHP",
    "JavaScript",
    "TailwindCSS",
    "CSS3",
    "HTML5",
  ]
  return (
    <section id='about' className='min-h-screen font-mono flex items-center justify-center py-20'>
     <RevealOnScroll>
      <div className='max-w-3xl mx-auto px-4'>
        <h2 className='max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center'>
          About Me
        </h2>
        <div className="p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-5 text-xl text-center">
            Hi, I'm <span className="text-white font-semibold">Mohamed Roshan Safeek Y</span>, 
            a passionate <span className="text-white font-semibold">MERN Stack Developer. </span>  
            I love building responsive and dynamic web applications using 
            MongoDB, Express.js, React.js, and Node.js. 
            I'm always eager to learn, explore new technologies, and create 
            innovative full stack solutions that make a real impact.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-2xl text-center font-bold mb-8">💼 Skills</h3>
            <div className="flex justify-center flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition "
                    key={index}
                  >
                    {skill}
                  </span>
              ))}
            </div>
          </div>

          <div className="p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-2xl text-center font-bold mb-8">
                📚 Education
            </h3>
            <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
              <li>
                <strong>
                  {""} 
                  <em>B.S. in Computer Science</em>{""}
                </strong>
              </li>
              <li>Sadakathullah Appa College (2022 - 2025)</li>
              <li>
                 Web Development, Data Structure, Python, MySql, Php, Java, C++, J2EE
              </li>
            </ul>
          </div>
        </div>  

          <div className="p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-2xl text-center font-bold mb-8">
                💻 Work Experience
            </h3>
            <ul className="pl-5 list-disc list-inside text-lg text-gray-300 text-center">
              <li>
                <strong>
                  <em>Intern at Iconic Software Solution for Web Development </em>
                </strong>
              </li>
               <li>
                <strong>
                  <em>Error Makes Clever for MERN Stack Development </em>
                </strong>
              </li>
               <li>
                <strong>
                  <em>Error Makes Clever for Prompt Engineering </em>
                </strong>
              </li>
            </ul>
          </div>
      </div>
    </RevealOnScroll>
    </section>
  )
}

export default About
