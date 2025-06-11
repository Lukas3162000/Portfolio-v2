import React from "react";
import { Link } from 'react-router-dom'
import { LayoutGrid } from 'lucide-react'


export default function SectionOverview(){

      const sections = [
    {
      title: 'Webdesign',
      description: 'Individuelle Weblösungen, modern & responsive.',
      href: '/Webdesign',
    },
    {
      title: 'Media',
      description: 'Kreative Inhalte: Foto, Video & Social Media.',
      href: '/Media',
    },
  ]

    return(
        <>
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6">
                    {sections.map((section) => (
                        <Link
                        key={section.title}
                        to={section.href}
                        className="group block p-8 bg-white rounded-2xl shadow-md hover:shadow-xl  hover:scale-102 ease-in-out transition-transform  transition-shadow duration-300"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                                {section.title}
                                </h2>
                                <LayoutGrid className="w-6 h-6 text-gray-400 group-hover:text-indigo-600 transition-colors duration-300" />
                            </div>
                            <p className="text-gray-600">{section.description}</p>
                        </Link>
                    ))}
                    </div>
                </div>
            </section>
        </>
    );
}