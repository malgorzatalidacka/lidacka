import { useState, useEffect } from "react";
import { projects } from "@/data/projects";

const HeroSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Get all project images
  const allImages = projects.flatMap(p => p.images);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allImages.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [allImages.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {allImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Portfolio ${index + 1}`}
            className="w-full h-full object-cover animate-ken-burns"
            style={{
              animationDelay: `${index * 2}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default HeroSlideshow;
