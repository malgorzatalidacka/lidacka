import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const navItems = [
    { label: "Work", path: "/work" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

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
      <nav className="container-editorial flex items-center justify-between h-14 md:h-16">
        <Link 
          to="/" 
          className="text-lg md:text-xl font-medium tracking-tight hover:opacity-70 transition-opacity"
        >
          Lidacka.
        </Link>
        
        <ul className="flex items-center gap-6 md:gap-10">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "label-uppercase link-underline transition-opacity hover:opacity-70",
                  location.pathname === item.path && "opacity-50"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
