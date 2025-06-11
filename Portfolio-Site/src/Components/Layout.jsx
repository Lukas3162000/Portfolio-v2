import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout(){
    const [activeMenu, setActiveMenu] = useState(null);
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    
    return(
        <>
            <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}/>

                { (activeMenu || menuIsOpen) && (
                 <div className="fixed inset-0 z-40 backdrop-blur-sm bg-black/30 transition" />
                 )}

            <main><Outlet /></main>
            <Footer />
        </>
    );
}