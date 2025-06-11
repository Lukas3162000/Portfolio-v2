import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileMenu({ isOpen, setIsOpen, baseClasses, activeMenu, setActiveMenu }) {
  
  const baseClassesLight = "px-3 py-1 rounded-full transition-colors duration-200 hover:bg-slate-900 text-bold cursor-pointer";


  return (
    <>

        <div className="md:hidden w-screen flex items-center justify-between gap-5 p-4 ">
  
                    {/* Logo and name*/}
                    <div className="">

                        <a href="/" className="flex gap-3 items-center">
                            <svg width="24" height="24" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <span className="text-xl font-bold white-500">Lukas Schneider</span>
                        </a>
                    </div>

                    {/* Burgermenu*/}
                            <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full"
                            aria-label="Toggle menu"
                            >

                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
            </div>

        { isOpen &&
        <div className="md:hidden text-white w-full flex flex-col items-center gap-5 py-6 ">
            <NavLink to="/"         onClick={() => setIsOpen(false)} className={baseClasses}>Home</NavLink>
            <NavLink to="/webdesign"onClick={() => setIsOpen(false)} className={baseClasses}>Webdesign</NavLink>
            <NavLink to="/media"    onClick={() => setIsOpen(false)} className={baseClasses}>Media</NavLink>
            <NavLink to="/about"    onClick={() => setIsOpen(false)} className={baseClasses}>Über mich</NavLink>
            <NavLink to="/contact"  onClick={() => setIsOpen(false)} className="bg-black text-white px-4 py-2 font-semibold rounded-full">
                Kontakt
            </NavLink>
        </div>
        }
    </>
  );
}
