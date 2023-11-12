'use client'
import HeroSection from "@/components/HeroSection";
import AchievementsSection from "@/components/AchievementsSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import MathSymbolAnimation from "@/components/MathSymbolAnimation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#040f04]">
      <div className="container mt-24 mx-auto px-12 py-4">
        <MathSymbolAnimation/>
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
