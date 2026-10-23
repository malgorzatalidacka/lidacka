import { useEffect, useState } from "react";
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches || document.documentElement.dataset.reduceMotion === "true");
    update();
    media.addEventListener("change", update);
    window.addEventListener("accessibility-change", update);
    return () => { media.removeEventListener("change", update); window.removeEventListener("accessibility-change", update); };
  }, []);
  return reduced;
}
