import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ProjectCard from "./ProjectCard";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu(null);

  const showSubMenu = activeMenu === "webdesign" || activeMenu === "media";

  return (
    <header
      onMouseLeave={handleMouseLeave}
      className={`sticky top-0 max-w-[1000px] mx-auto object-center z-50 transition-all duration-300 ease-in-out
        bg-black/60 text-white shadow-lg backdrop-blur-md rounded-t-3xl rounded-b-3xl
        ${showSubMenu ? "pb-6" : "pb-4"}
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 pt-4 flex flex-col items-center transition-all duration-300 ease-in-out">
        {/* Top Row */}
        <div className="w-full flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold">
            <NavLink to="/">DeinLogo</NavLink>
          </div>

          {/* Main Navigation */}
          <ul className="hidden md:flex gap-6 items-center text-sm font-medium tracking-wide">
            <li onMouseEnter={handleMouseLeave}>
              <NavLink
                to="/"
                className="hover:bg-stone-500 px-3 py-1 rounded-full"
              >
                Home
              </NavLink>
            </li>

            <li onMouseEnter={() => handleMouseEnter("webdesign")}>
              <span className="cursor-pointer hover:underline">Webdesign</span>
            </li>

            <li onMouseEnter={() => handleMouseEnter("media")}>
              <span className="cursor-pointer hover:underline">Media</span>
            </li>

            <li onMouseEnter={handleMouseLeave}>
              <NavLink to="/about" className="hover:underline">
                Über mich
              </NavLink>
            </li>

            <li onMouseEnter={handleMouseLeave}>
              <NavLink to="/contact" className="hover:underline">
                Kontakt
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
          <div className="w-full mt-6  rounded-xl p-6 flex gap-4 transition-all duration-300">
            {activeMenu === "webdesign" && (
              <>
                <ProjectCard
                  title="Case Study 1"
                  subline="UX Redesign für Firma XY"
                  image="/img/project1.jpg"
                  link="/webdesign#project-1"
                />
                <ProjectCard
                  title="Case Study 2"
                  subline="Website für Startup ABC"
                  image="/img/project2.jpg"
                  link="/webdesign#project-2"
                />
                <ProjectCard
                  title="Weitere Projekte"
                  subline="Alle ansehen"
                  image="/img/overview.jpg"
                  link="/webdesign"
                />
              </>
            )}

            {activeMenu === "media" && (
              <>
                <ProjectCard
                  title="Video-Projekt A"
                  subline="Imagefilm für Studio X"
                  image="https://images.unsplash.com/photo-1534368270820-9de3d8053204?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  link="/media#video-1"
                />
                <ProjectCard
                  title="Fotografie"
                  subline="Event-Serie 2024"
                  image="https://images.unsplash.com/photo-1534368270820-9de3d8053204?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  link="/media#photo-1"
                />
                <ProjectCard
                  title="Weitere Medien"
                  subline="Galerie öffnen"
                  image="https://images.unsplash.com/photo-1534368270820-9de3d8053204?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  link="/media"
                />
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
