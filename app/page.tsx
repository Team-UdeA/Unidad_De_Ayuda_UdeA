'use client'
import TitleHome from "@/components/TitleHome";
import AchievementsSection from "@/components/AchievementsSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ArticleSection";
import MathSymbolAnimation from "@/components/MathSymbolAnimation";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col   dark:bg-[#000000]  text-black" >  
      <div className="container mt-24 pl-2 py-4">
        <MathSymbolAnimation/>
        <TitleHome />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        
      </div>
    </main>
  );
}
