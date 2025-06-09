import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { Menu, X } from "lucide-react";

export default function DesktopMenu({ handleMouseEnter, handleMouseLeave, showSubMenu, baseClasses, activeMenu, setActiveMenu, hoveredIndex, setHoveredIndex }) {
  return (
    <nav className="max-w-7xl mx-auto px-6 pt-4 flex flex-col items-center transition-all duration-300 ease-in-out">
       
       
       
        {/* Top Row */}
        <div className="w-full flex justify-between items-center">
          {/* Logo & erste Zeile */}
          <div className="text-xl font-bold">
            <NavLink to="/" className="flex gap-3">
                <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="32" fill="url(#paint0_linear_4019_94)"/>
                  <path d="M23.6445 51.2569L11.6989 18.9858L18.9747 16.2926L28.6485 42.4262L40.8244 37.9191C40.8244 37.9191 42.4646 40.0697 40.1635 43.7353C37.8623 47.401 23.6445 51.2569 23.6445 51.2569Z" fill="black"/>
                  <path d="M21.0569 38.0327C20.2508 35.8549 19.8467 33.547 19.8447 31.1091C19.8549 28.7041 20.2953 26.3463 21.1658 24.0356C21.1658 24.0356 22.1817 24.8038 21.6437 26.3912C21.1057 27.9785 23.8203 29.281 23.7308 30.965C23.6535 32.6819 25.7512 35.207 26.3253 36.7578C26.8994 38.3087 27.7001 39.8132 28.4968 40.3437C29.3057 40.9072 31.2079 40.0154 32.0329 39.7101C32.7918 39.4292 33.3124 39.0113 33.5948 38.4566C33.9102 37.8896 34.0924 37.1656 34.1415 36.2845C34.2235 35.3912 34.2897 34.3537 34.34 33.172L34.5828 28.3548C34.6051 26.996 34.8002 25.6481 35.1683 24.3113C35.5694 22.9622 36.2087 21.7501 37.0863 20.6749C38.0092 19.6204 39.2625 18.8 40.8464 18.2138C42.6282 17.5542 44.4118 17.4568 46.1971 17.9214C48.0276 18.4069 49.6955 19.3653 51.2007 20.7966C52.7512 22.2486 53.9601 24.146 54.8273 26.4888C55.548 28.4356 55.8934 30.4838 55.8637 32.6334C55.834 34.7829 55.3949 36.8401 54.5464 38.805L48.5693 36.7967C48.9789 35.3695 49.1906 34.0155 49.2042 32.7348C49.2509 31.4419 48.9811 30.0035 48.3948 28.4197C47.9551 27.2318 47.3473 26.35 46.5714 25.7743C45.7955 25.1986 44.9291 25.0878 43.9722 25.442C43.3453 25.6741 42.9028 26.1005 42.6449 26.7212C42.3869 27.342 42.2395 28.1094 42.2027 29.0235C42.1659 29.9375 42.1388 30.9793 42.1215 32.1488L41.886 36.6819C41.8955 38.3291 41.6936 39.8108 41.2803 41.1269C40.9 42.4307 40.2527 43.5707 39.3385 44.547C38.4242 45.5232 37.2082 46.2923 35.6903 46.8541C33.9085 47.5137 32.0754 47.6294 30.1911 47.2014C28.319 46.8063 26.5729 45.8394 24.9528 44.3006C23.3449 42.7947 22.0463 40.7054 21.0569 38.0327Z" fill="black"/>
                  <defs>
                  <linearGradient id="paint0_linear_4019_94" x1="32" y1="0" x2="32" y2="64" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="white"/>
                  </linearGradient>
                  </defs>
                </svg>
                Lukas Schneider
            </NavLink>
          </div>


          {/* Desktop-Links */}
          <ul className="hidden md:flex gap-6 items-center text-sm font-medium tracking-wide">
            <li onMouseEnter={handleMouseLeave} className="realtive Group">
              <NavLink
                to="/"
                className={`${baseClasses}`}
              >
                Home
              </NavLink>
            </li>

            <li onMouseEnter={() => handleMouseEnter("webdesign")}>
              <span className={`${baseClasses}`}>Webdesign</span>
            </li>

            <li onMouseEnter={() => handleMouseEnter("media")}>
              <span className={`${baseClasses}`}>Media</span>
            </li>

            <li onMouseEnter={handleMouseLeave}>
              <NavLink to="/about" className={`${baseClasses}`}>
                Über mich
              </NavLink>
            </li>
          </ul>


          {/* CTA */}
          <div className="hidden md:block">
            <NavLink
              to="/contact"
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100 transition"
            >
              Kontakt aufnehmen
            </NavLink>
          </div>
        </div>




        {/* Submenü-Bereich */}
        {showSubMenu && (
          <div className="w-full mt-6 rounded-xl p-6 flex flex-row gap-4 transition-all duration-300">
            {activeMenu === "webdesign" && (
              <>
                <ProjectCard
                  index={0}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                  title="Case Study 1"
                  subline="UX Redesign für Firma XY"
                  image="https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=1827&auto=format&fit=crop"
                  link="/webdesign#project-1"
                />
                <ProjectCard
                  index={1}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                  title="Case Study 2"
                  subline="Website für Startup ABC"
                  image="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop"
                  link="/webdesign#project-2"
                />
                <ProjectCard
                  index={2}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                  title="Weitere Projekte"
                  subline="Alle ansehen"
                  image="https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=1740&auto=format&fit=crop"
                  link="/webdesign"
                />
              </>
            )}

            {activeMenu === "media" && (
              <>
                <ProjectCard
                  index={0}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                  title="Video-Projekt A"
                  subline="Imagefilm für Studio X"
                  image="https://images.unsplash.com/photo-1612548403247-aa2873e9422d?q=80&w=1887&auto=format&fit=crop"
                  link="/media#video-1"
                />
                <ProjectCard
                  index={1}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                  title="Fotografie"
                  subline="Event-Serie 2024"
                  image="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=1932&auto=format&fit=crop"
                  link="/media#photo-1"
                />
                <ProjectCard
                  index={2}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                  title="Weitere Medien"
                  subline="Galerie öffnen"
                  image="https://images.unsplash.com/photo-1636971828014-0f3493cba88a?q=80&w=1740&auto=format&fit=crop"
                  link="/media"
                />
              </>
            )}
            </div>
          )}



      </nav>

  );
}
