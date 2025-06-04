import React from "react";
import { Link } from "react-router-dom";


export default function HeroSection(){

    return(
        <>
    <section className="bg-gray-900 text-white py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Hi, ich bin Lukas 👋</h1>
        <p className="text-lg md:text-xl mb-8">
          Ich gestalte und entwickle moderne Websites – mit Fokus auf UX, Code & Ästhetik.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/webdesign" className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">Projekte ansehen</Link>
          <Link to="/contact" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition">Kontakt aufnehmen</Link>
        </div>
      </div>
    </section>
        </>
    );
}