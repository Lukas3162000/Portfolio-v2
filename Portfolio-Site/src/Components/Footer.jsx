import React from "react";
import { Phone, Linkedin, MessageSquareText } from "lucide-react";


export default function Footer(){

    return(
        <>
            
          <footer className="bg-gray-100 text-gray-800 py-10 px-6 md:px-12 mt-20 border-t border-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        
        {/* Left Column */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Rechtliches</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://lukas3162000.github.io/privacy/impressum.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Impressum
              </a>
            </li>
            <li>
              <a
                href="https://lukas3162000.github.io/privacy/Datenschutz.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Datenschutz
              </a>
            </li>
            <li className="text-xs text-gray-500 mt-4">
              Diese Website befindet sich noch im Aufbau und ist derzeit nicht öffentlich verfügbar.
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Kontakt</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-gray-600" />
              <a
                href="https://www.linkedin.com/in/lukas-schneider1603/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn-Profil
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageSquareText className="w-4 h-4 text-green-600" />
              <a
                href="https://wa.me/4915563125231"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600" />
              <a href="tel:+4915563125231" className="hover:underline">
                +49 15563 125231
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Lukas Schneider. Alle Rechte vorbehalten.
      </div>
    </footer>

        </>
    );
}