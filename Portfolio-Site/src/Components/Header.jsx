import React, { use, useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";


export default function Header({activeMenu, setActiveMenu}) {


  //Menu-Chooser
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768); // md = 768px
  const handleMenu = () => setIsDesktop(!isDesktop);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => setMenuIsOpen((prev) => !prev);

    useEffect(() => {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 768);
        if (window.innerWidth >= 768) {
          setMenuIsOpen(false); // Menü schließen, wenn Desktop
        }
      };

      window.addEventListener("resize", handleResize);

      // Cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []);



  //Desktop Menu Settings and handlers
  const handleMouseEnter = (menu) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const showSubMenu = activeMenu === "webdesign" || activeMenu === "media";
  
  //Styling
  const baseClasses = "px-3 py-1 rounded-full transition-colors duration-200 hover:bg-slate-900 cursor-pointer";

  return (
    <header
      onMouseLeave={handleMouseLeave}
      className={`fixed top-0 z-50 transition-all left-1/2 -translate-x-1/2 max-w-7xl min-w-4xl duration-300 ease-in-out
        bg-black/60 text-white shadow-lg backdrop-blur-md rounded-t-3xl rounded-b-3xl
        ${showSubMenu ? "pb-6" : "pb-4"}
      `}>

      {isDesktop ? (

        <DesktopMenu 
        handleMouseEnter={handleMouseEnter} 
        handleMouseLeave={handleMouseLeave} 
        showSubMenu={showSubMenu} 
        baseClasses={baseClasses} 
        activeMenu={activeMenu} 
        setActiveMenu={setActiveMenu} 
        hoveredIndex={hoveredIndex} 
        setHoveredIndex={setHoveredIndex}
        />

      ) : (
        <MobileMenu
          isOpen={menuIsOpen}
          setIsOpen={setMenuIsOpen}
          baseClasses="text-lg font-medium hover:bg-gray-200 px-4 py-2 rounded"
        />

      )}

        


    </header>
  );
}
