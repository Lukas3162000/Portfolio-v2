import React from "react";
import HeroSection from "../Components/HeroSlider";
import SectionOverview from "../Components/SectionOverview";
import QuickIntro from "../Components/QuickIntro";


export default function Home(){

    return(
        <>
            <HeroSection />
            <SectionOverview />
            <QuickIntro />
            <p>Home</p>
            <HeroSection />
            <HeroSection />
            <HeroSection />
            <HeroSection />

        </>
    );
};