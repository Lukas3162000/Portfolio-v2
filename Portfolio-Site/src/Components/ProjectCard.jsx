import React from "react";

export default function ProjectCard({ title, subline, image, link }) {
  
  return(
    <a
    href={link}
    className="relative w-1/3 h-40 rounded-xl overflow-hidden group hover:scale-[1.02] transition"
    >
        <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"
        />
        <div className="absolute top-2 right-2 text-xs bg-white/80 text-black px-2 py-1 rounded">
            Link →
        </div>
        <div className="absolute bottom-2 left-2 text-white drop-shadow">
            <h4 className="font-semibold text-base">{title}</h4>
            <p className="text-sm opacity-80">{subline}</p>
        </div>
    </a>
        );
    };
