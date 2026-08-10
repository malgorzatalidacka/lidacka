import { useEffect, useRef, useState } from "react";

interface ScrollRevealTextProps {
  children: string;
  className?: string;
}

const ScrollRevealText = ({ children, className = "" }: ScrollRevealTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealProgress, setRevealProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start revealing when element enters viewport, complete when it reaches middle
      const startPoint = windowHeight;
      const endPoint = windowHeight * 0.3;
      
      if (rect.top >= startPoint) {
        setRevealProgress(0);
      } else if (rect.top <= endPoint) {
        setRevealProgress(1);
      } else {
        const progress = (startPoint - rect.top) / (startPoint - endPoint);
        setRevealProgress(Math.max(0, Math.min(1, progress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = children.split(" ");
  const wordsToReveal = Math.ceil(revealProgress * words.length);

  return (
    <div ref={containerRef} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`transition-colors duration-300 ${
            index < wordsToReveal ? "text-foreground" : "text-muted-foreground/40"
          }`}
        >
          {word}
          {index < words.length - 1 ? " " : ""}
        </span>
      ))}
    </div>
  );
};

export default ScrollRevealText;
