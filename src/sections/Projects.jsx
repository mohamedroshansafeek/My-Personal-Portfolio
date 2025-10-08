import React, { useState } from "react";
import fashionStore from "../assets/fashion-store.png";
import BulkMailSender from "../assets/BulkMailSender.png";
import weather from "../assets/weather.png";
import Apple from "../assets/Apple.png";
import MovieExplorer from "../assets/MovieExplorer.png";
import GreenDen from "../assets/GreenDen.png";
import Nostra from "../assets/Nostra.png";
import TaskBuddy from "../assets/TaskBuddy.png";
import TripAdvisor from "../assets/TripAdvisor.png";
import Udemy from "../assets/Udemy.png";
import RevealOnScroll from "../Ui/RevealOnScroll";
import PersonalPortfolio from "../assets/portfolio.png"

function Projects() {
  const [projects] = useState([
    {
      image: fashionStore,
      name: "MERN Stack E-Commerce Website",
      brief:
        "🛍️ Full-featured MERN e-commerce platform with user authentication, product management, secure payments, and admin dashboard for orders and inventory control.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Vercel", "Render"],
      link: "https://github.com/mohamedroshansafeek/Fashion-Store",
      live: "https://fashion-store-pearl.vercel.app",
    },
    {
      image: BulkMailSender,
      name: "MERN Stack Mail App",
      brief:
        "📧 MERN-based Bulk Mail Sender app that automates personalized email campaigns with secure authentication, contact management, and real-time delivery tracking.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Render", "Vercel"],
      link: "https://github.com/mohamedroshansafeek/BulkMail-Sender",
      live: "https://bulk-mail-sender-rho.vercel.app",
    },
    {
      image: weather,
      name: "Weather App",
      brief:
        "🌤️ Responsive Weather App built with React and Tailwind CSS that fetches real-time weather data using API integration and displays location-based forecasts.",
      tech: ["React", "API", "TailwindCSS"],
      link: "https://github.com/mohamedroshansafeek/Weather-App-",
      live: "https://weather-app-lovat-nine-82.vercel.app",
    },
    {
      image: Apple,
      name: "Apple Clone",
      brief:
        "🍎 Apple Clone UI built with React and Tailwind CSS, featuring a sleek, responsive design that replicates Apple’s modern layout and animations.",
      tech: ["React", "TailwindCSS", "Vite"],
      link: "https://github.com/mohamedroshansafeek/Apple-clone",
      live: "https://apple-clone-gamma-seven.vercel.app",
    },
    {
      image: MovieExplorer,
      name: "Movie Explorer",
      brief:
        "🎬 Movie Explorer App built with React and Tailwind CSS, fetching real-time movie data via API to browse, search, and view detailed film information.",
      tech: ["React", "API", "TailwindCSS"],
      link: "https://github.com/mohamedroshansafeek/Movie-Explorer",
      live: "https://movie-explorer-psi-blue.vercel.app",
    },
    {
      image: PersonalPortfolio,
      name: "Personal Portfolio",
      brief: 
      "✨ A modern personal portfolio developed using React and Tailwind CSS, highlighting projects, professional experience, and interactive UI components to demonstrate front-end skills.",
      tech: ["HTML","TailwindCSS","JavaScript","React","Vite","Vercel"],
      link: "https://github.com/mohamedroshansafeek/My-Personal-Portfolio",
      live: "https://my-personal-portfolio-one-zeta.vercel.app"
    },
    {
      image: TaskBuddy,
      name: "Task Buddy",
      brief:
        "📝 TaskBuddy is a feature-rich Todo App built with React and Tailwind CSS. Users can add, edit, delete, and mark tasks as complete, with a clean and responsive UI.",
      tech: ["React", "TailwindCSS", "LocalStorage"],
      link: "https://github.com/mohamedroshansafeek/Task-Management-App",
      live: "https://task-management-app-five-zeta.vercel.app",
    },
    {
      image: GreenDen,
      name: "GreenDen",
      brief:
        "🌱 GreenDen is an eco-friendly website built with JavaScript and Tailwind CSS, designed to promote sustainable products and practices.",
      tech: ["JavaScript", "TailwindCSS", "GitHub"],
      link: "https://github.com/mohamedroshansafeek/greenden-tailwind",
      live: "https://mohamedroshansafeek.github.io/greenden-tailwind/",
    },
    {
      image: Nostra,
      name: "Nostra",
      brief:
        "👗 Nostra is a stylish fashion website built with Tailwind CSS, CSS, and JavaScript. Users can browse clothing collections, view product details, and explore seasonal trends through a responsive, interactive UI.",
      tech: ["JavaScript", "CSS", "TailwindCSS", "GitHub", "HTML"],
      link: "https://github.com/mohamedroshansafeek/Nostra-fashion-world",
      live: "https://mohamedroshansafeek.github.io/Nostra-fashion-world/",
    },
    {
      image: TripAdvisor,
      name: "TripAdvisor-Clone",
      brief:
        "🌍 TripAdvisor Clone is a travel review website allowing users to explore destinations, view hotel and restaurant details, and read or share reviews.",
      tech: ["HTML", "CSS", "GitHub"],
      link: "https://github.com/yourusername/tripadvisor-clone",
      live: "https://mohamedroshansafeek.github.io/tripadvisor-clone/",
    },
    {
      image: Udemy,
      name: "Udemy-Clone",
      brief:
        "🎓 Udemy Clone is an online learning platform built with HTML and CSS, featuring a clean and responsive layout where users can browse courses, explore categories, and view instructor details.",
      tech: ["HTML", "CSS", "GitHub"],
      link: "https://github.com/mohamedroshansafeek/udemy-clone",
      live: "https://mohamedroshansafeek.github.io/udemy-clone/",
    },
  ]);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center font-mono justify-center py-20"
      style={{ backgroundColor: "#1c0d30" }} 
    >
      <RevealOnScroll>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 flex flex-col justify-between rounded-xl text-center border border-white/10 
                         hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:-translate-y-1 
                         transition-all bg-gray-900/40 backdrop-blur-md min-h-[540px]"
            >
              <div>
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="font-semibold text-xl mb-2 text-white">
                  {project.name}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">{project.brief}</p>
              </div>

              <div>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500/20 hover:bg-blue-500/40 text-blue-300 hover:text-white py-2 px-4 rounded-lg transition"
                    >
                      🔗 Live Demo
                    </a>
                  )}

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-blue-400 hover:bg-blue-500/20 text-blue-300 hover:text-white py-2 px-4 rounded-lg transition"
                  >
                    💻 Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
