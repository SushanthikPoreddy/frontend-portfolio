"use client";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import JourneyTimeline from "./JourneyTimeline";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Contact from "./Contact";

export default function EditorPane({
  activeFile,
  setActiveFile,
}: {
  activeFile: string;
  setActiveFile: (file: string) => void;
}) {
  const renderContent = () => {
    switch (activeFile) {
      case "Hero.tsx":
        // ✅ give Hero the setter so the button works
        return <Hero setActiveFile={setActiveFile} />;
      case "About.tsx":
        return <About />;
      case "Projects.tsx":
        return <Projects />;
      case "JourneyTimeline.tsx":
        return <JourneyTimeline />;
      case "Skills.tsx":
        return <Skills />;
      case "Certifications.tsx":
        return <Certifications />;
      case "Contact.tsx":
        return <Contact />;
      default:
        return <Hero setActiveFile={setActiveFile} />;
    }
  };

  return <div className="flex-1 bg-[#1e1e1e] p-6 overflow-auto">{renderContent()}</div>;
}