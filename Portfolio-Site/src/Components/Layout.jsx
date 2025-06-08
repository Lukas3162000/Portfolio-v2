import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout(){
      const [activeMenu, setActiveMenu] = useState(null);
    
    return(
        <>
            <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>

                {activeMenu && (
                 <div className="fixed inset-0 z-40 backdrop-blur-sm bg-black/30 transition" />
                 )}

            <main><Outlet /></main>
            <Footer />
        </>
    );
}