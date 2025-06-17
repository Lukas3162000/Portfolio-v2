import React from "react";
import PageHeader from "../Components/PageHeader";
import ProjectSection from "../Components/ProjectSection";
import SkillsUsed from "../Components/SkillsUsed";

export default function WebDesign(){

    const webdesignProjects = [
    {
        title: "1&1 Control Center App",
        subtitle: "UX Redesign im Team, Fokus auf Navigationsstruktur",
        image: "/projects/1und1.jpg",
        link: "/projekte/control-center",
    },
    {
        title: "Fitness Website",
        subtitle: "React-basierte Eigenentwicklung als Showcase",
        image: "/projects/fitness.jpg",
        link: "/projekte/fitness",
    },
    // Weitere Projekte später
    ];


    return(
        <>
            <PageHeader
            title="Webdesign & Entwicklung"
            subtitle="UX-orientiert. Modern umgesetzt. Hier findest du eine Auswahl meiner Webprojekte – von Konzept bis Code."
            bg="bg-gray-50"
            textColor="text-gray-900"
            />

            <ProjectSection
                title="1&1 Control Center App"
                subtitle="UX Redesign im Team"
                 description={`Im Rahmen meiner Werkstudententätigkeit bei 1&1 habe ich an der Weiterentwicklung  des Control Centers mitgewirkt – einer Self-Service-App mit über 6 Millionen aktiven Nutzer:innen. Ziel des Projekts war ein umfassendes UX-Facelift zur Reduktion von Servicekosten durch verbesserte Nutzerführung und eigenständige Problembehebung.
                    \nIn enger Abstimmung mit einem interdisziplinären Team aus UX-Designern, App-Entwicklern und Product Ownern habe ich zentrale UI-Komponenten wie das Bottom Sheet oder den „Frequent Action Button“ überarbeitet und ins 1&1-eigene mobile Designsystem überführt – angelehnt an Googles Material 3 und Apples Human Interface Guidelines für iOS 17.
                    \nDarüber hinaus habe ich exemplarische Screens für komplexere Flows entworfen (z. B. Login via Mehrbenutzer-Menü), Prototypen für UX-Logik erstellt sowie die grafische Modernisierung zahlreicher Menüseiten verantwortet.`}

                image="https://cdn6.aptoide.com/imgs/0/9/6/0966db16b7a66fd8b25af5c729a2b4f8_fgraphic.png"
                link="/projekte/control-center"
                skills={["Figma", "UX Research", "Design Systems"]}
                reverse={false}
             />
  
            <ProjectSection
                title="Fitness Website"
                subtitle="Komplette Eigenentwicklung"
                description="React-basierte Webseite inkl. Responsive Design."
                image="https://www.simdif.com/img/home/multiplatform-blue.jpg"
                link="/projekte/fitness"
                skills={["React", "CSS", "Responsive Design"]}
                reverse={true} // Bild links/rechts abwechselnd
            />



            <SkillsUsed />
        </>
    );
};