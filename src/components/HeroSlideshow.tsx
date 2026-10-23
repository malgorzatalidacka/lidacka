import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { projects } from "@/data/projects";

const HeroSlideshow = () => {
  const reducedMotion = useReducedMotion();
  const { language } = useLanguage();
  const [paused, setPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Get all project images
  const allImages = projects.flatMap(p => p.images);
  
  useEffect(() => {
    if (reducedMotion || paused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allImages.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [allImages.length, reducedMotion, paused]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {allImages.map((image, index) => (
        <div
          aria-hidden="true"
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover"
            style={{
              animationDelay: `${index * 2}s`,
            }}
          />
        </div>
      ))}
      {!reducedMotion && <button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused} className="absolute bottom-4 right-4 z-20 min-h-11 px-4 py-2 bg-background text-foreground border border-foreground text-base">
        {language === "pl" ? (paused ? "Wznów pokaz zdjęć" : "Wstrzymaj pokaz zdjęć") : (paused ? "Resume slideshow" : "Pause slideshow")}
      </button>}
    </div>
  );
};

export default HeroSlideshow;


