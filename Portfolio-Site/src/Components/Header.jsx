import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react'; // Für Theme-Toggle (optional)


export default function Header(){
    

    return(

<header className="fixed top-0 left-0 right-0 max-w-7xl mx-auto z-50 backdrop-blur-md bg-black/50 text-white shadow-lg rounded-full">
  <nav className="w-full px-6 py-4 flex justify-between items-center">
    {/* Logo */}
    <div className="text-xl font-bold">
      <NavLink to="/">DeinLogo</NavLink>
    </div>

    {/* Navigation */}
    <ul className="hidden md:flex gap-6 items-center text-sm font-medium tracking-wide">
      <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
      <li><NavLink to="/webdesign" className="hover:underline">Webdesign</NavLink></li>
      <li><NavLink to="/media" className="hover:underline">Media</NavLink></li>
      <li><NavLink to="/about" className="hover:underline">Über mich</NavLink></li>
      <li><NavLink to="/contact" className="hover:underline">Kontakt</NavLink></li>
    </ul>

    {/* CTA */}
    <div className="hidden md:block">
      <NavLink 
        to="/contact"
        className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100 transition"
      >
        Let’s talk
      </NavLink>
    </div>
  </nav>
</header>



    );
}