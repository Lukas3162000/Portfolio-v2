import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";


export default function Header(){
    

    return(
        <nav className="flex justify-between p-4">
            <div className="text-xl font-bold">Lukas</div>
            <ul className="flex gap-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/webdesign">Webdesign</NavLink>
                <NavLink to="/media">Media</NavLink>
                <NavLink to="/about">Über mich</NavLink>
                <NavLink to="/contact">Kontakt</NavLink>
            </ul>
        </nav>
    );
}