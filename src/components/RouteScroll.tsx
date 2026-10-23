import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function RouteScroll() {
  const { key, pathname, search, hash } = useLocation();
  const previousKey = useRef(key);

  useLayoutEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useLayoutEffect(() => {
    if (previousKey.current !== key) {
      document.getElementById("main-content")?.focus({ preventScroll: true });
      previousKey.current = key;
    }
    if (hash) {
      let id = hash.slice(1);
      try {
        id = decodeURIComponent(id);
      } catch {
        // A malformed fragment can still match a literal element ID.
      }
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "instant", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [key, pathname, search, hash]);

  return null;
}
