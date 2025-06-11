import React from "react";
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'


export default function QuickIntro(){

    return(
        <>
            
        <section className="py-16 bg-indigo-50">
            <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
               
                {/* Bildbereich */}
                <div className="flex justify-center">
                    <img
                        src="https://lukas3162000.github.io/trainer-website-v3/assets/About_pic-18eu0jD7.jpg"
                        alt="Profilbild"
                        className="w-64 h-64 object-cover rounded-3xl shadow-lg transform rotate-1 transition-transform duration-300 hover:scale-105 ease-in-out"
                    />
                </div>

                {/* Textbereich */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Kreativ. Digital. Echt.</h2>
                    <p className="text-gray-700 mb-6">
                        Ich bin Lukas – Webdesigner mit einem Herz für gute Gestaltung und klare Kommunikation. Egal ob du gerade erst durchstartest oder deinem Business einen frischen Look verpassen willst: Ich helfe dir, online Eindruck zu machen.
                    </p>
                    <Link
                        to="/about"
                        className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-5 py-3 rounded-full shadow hover:bg-indigo-700 transition-colors duration-300"
                    >
                        Mehr über mich <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>

        </>
    );
}