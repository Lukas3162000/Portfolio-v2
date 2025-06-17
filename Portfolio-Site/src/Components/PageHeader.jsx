import React from "react";

export default function PageHeader({ title, subtitle, bg = "bg-white", textColor = "text-gray-900" }) {
  return (
    <header className={`${bg} ${textColor} py-16 px-6 md:px-12  pt-30 bg-gray-100`}>
            <div className="max-w-4xl  mx-auto text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
                {subtitle && (
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">{subtitle}</p>
                )}
            </div>
    </header>
  );
}
