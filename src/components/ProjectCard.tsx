import { Link } from "react-router-dom";
import { Project } from "@/data/projects";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

interface ProjectCardProps {
  project: Project;
  index?: number;
  variant?: "overlay" | "clean";
  heightClass?: string;
}

const ProjectCard = ({ project, index = 0, variant = "overlay", heightClass }: ProjectCardProps) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { tl } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (variant === "clean") {
    return (
      <Link
        ref={cardRef}
        to={`/work/${project.id}`}
        className="group block"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="relative overflow-hidden aspect-[4/3] mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        
        <div className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <span className="text-sm text-muted-foreground block mb-1">{project.client}</span>
          <h3 className="text-lg md:text-xl font-medium group-hover:opacity-70 transition-opacity">
            {project.title}
          </h3>
        </div>
      </Link>
    );
  }

  return (
    <Link
      ref={cardRef}
      to={`/work/${project.id}`}
      className={`group block relative overflow-hidden ${heightClass || "aspect-[16/10]"}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/10 transition-colors duration-500 z-10" />
      
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12 z-20">
        <div className={`flex items-center gap-3 mb-3 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          <span className="label-uppercase text-white/70">{tl(project.category)}</span>
          <span className="text-white/40">•</span>
          <span className="label-uppercase text-white/70">{project.year}</span>
        </div>
        <h3 
          className={`text-2xl md:text-4xl lg:text-5xl font-normal leading-[1] tracking-tight text-white transition-all duration-700 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {project.title}
        </h3>
        <p 
          className={`mt-2 md:mt-3 text-white/80 text-sm md:text-base lg:text-lg transition-all duration-700 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          {project.client}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
