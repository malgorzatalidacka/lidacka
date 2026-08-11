import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";

const Header = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { t } = useLanguage();

  const navItems = [
    { key: "nav.work", path: "/work" },
    { key: "nav.passion", path: "/passion-play" },
    { key: "nav.about", path: "/about" },
    { key: "nav.contact", path: "/contact" },
  ] as const;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-background transition-transform duration-300",
        !isVisible && "-translate-y-full"
      )}
    >
      <nav className="container-editorial flex items-center justify-between gap-2 h-14 md:h-16">
        <Link 
          to="/" 
          className="text-base md:text-xl font-medium tracking-tight hover:opacity-70 transition-opacity shrink-0"
        >
          Lidacka.
        </Link>
        
        <div className="flex items-center gap-2 md:gap-8 min-w-0">
          <ul className="flex items-center gap-2 sm:gap-4 md:gap-8 min-w-0 overflow-x-auto no-scrollbar">

            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "label-uppercase link-underline transition-opacity hover:opacity-70 whitespace-nowrap text-[9px] sm:text-[10px] md:text-xs tracking-[0.1em] md:tracking-[0.15em]",
                    location.pathname === item.path && "opacity-50"
                  )}
                >
                  {item.path === "/passion-play" ? (
                    <>
                      <span className="sm:hidden">P&amp;P</span>
                      <span className="hidden sm:inline">{t(item.key)}</span>
                    </>
                  ) : (
                    t(item.key)
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <LanguageSwitcher className="shrink-0" />
        </div>
      </nav>
    </header>
  );
};

export default Header;

