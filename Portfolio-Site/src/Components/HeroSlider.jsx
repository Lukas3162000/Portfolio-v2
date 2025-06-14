import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Projekt A",
    subtitle: "Modernes Webdesign für Startups",
    description: "Ein responsives Landingpage-Projekt mit klarer Typografie und moderner UI.",
    image: "https://pngfile.net/public/uploads/preview/hp-laptop-png-free-download-21567004182lrfmol6dx6.png",
    ctaLink: "/projekte/projekt-a"
  },
  {
    title: "Projekt B",
    subtitle: "Digitale Portfolio-Seite",
    description: "Eine schlanke und mobile-freundliche Lösung für Freelancer.",
    image: "https://pngimg.com/uploads/porsche/porsche_PNG102845.png",
    ctaLink: "/projekte/projekt-b"
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const project = projects[current];

  return (
    <>
      <style>
        {`
          @keyframes fadeZoom {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>

      <section className="relative w-full bg-black text-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Image mit Overlay */}
          <div className="relative w-full h-[400px] md:h-[500px]">
            <img
              key={project.image} // wichtig für Animation
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-2xl shadow-lg animate-[fadeZoom_0.8s_ease-out]"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-4 rounded-2xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
              <p className="text-lg md:text-xl text-gray-200">{project.subtitle}</p>
            </div>

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Right: CTA Card */}
          <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg space-y-4">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-sm text-gray-700">{project.description}</p>
            <Link
              to={project.ctaLink}
              className="inline-block bg-black text-white font-bold px-4 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Zum Projekt →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
