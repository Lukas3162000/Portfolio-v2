import React from "react";
import { Link } from "react-router-dom";

export default function ProjectSection({ title, subtitle, description, image, link, skills = [], reverse = false }) {
  return (
    <section className={`py-16 px-6 md:px-12 bg-white dark:bg-gray-900`}>
      <div className={`max-w-7xl mx-auto flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-12`}>
        
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img src={image} alt={title} className="rounded-xl shadow-lg w-full h-auto object-cover" />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-700 dark:text-gray-300">{subtitle}</p>
          <p className="text-m text-gray-600 dark:text-gray-400 whitespace-pre-line">{description}</p>

          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded-full text-gray-800 dark:text-white">
                {skill}
              </span>
            ))}
          </div>

          <Link to={link} className="inline-block mt-4 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
            Zum Projekt →
          </Link>
        </div>
      </div>
    </section>
  );
}

