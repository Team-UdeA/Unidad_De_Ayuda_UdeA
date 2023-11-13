'use client'
import HeroSection from "@/components/HeroSection";
import AchievementsSection from "@/components/AchievementsSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import MathSymbolAnimation from "@/components/MathSymbolAnimation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col   dark:bg-[#000000]  text-black" >  
      <div className="container mt-24 pl-2 py-4">
        <HeroSection />
        <AchievementsSection />
        <div className="flex items-center justify-center">
          <AboutSection />
        </div>
        <ProjectsSection />
        <MathSymbolAnimation/>
      </div>
    </main>
  );
}
