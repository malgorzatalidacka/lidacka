import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";

const Header = () => {
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { key: "nav.projects", path: "/projects" },
    { key: "nav.showroom", path: "/showroom" },
    { key: "nav.passion", path: "/passion-play" },
    { key: "nav.about", path: "/about" },
    { key: "nav.contact", path: "/contact" },
  ] as const;



  return (
    <header 
      className="relative z-50 bg-background"
    >
      <nav className="container-editorial flex items-center justify-between gap-4 py-4 flex-wrap">
        <Link 
          to="/" 
          className="text-xl md:text-2xl font-medium tracking-tight text-foreground/80 hover:text-foreground transition-colors duration-200 shrink-0"
        >
          Lidacka.
        </Link>
        
        <div className="flex items-center flex-wrap gap-4 min-w-0">
          <ul className="flex flex-wrap items-center gap-3 md:gap-6 min-w-0">

            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path} aria-current={location.pathname === item.path ? "page" : undefined}
                  className={cn(
                    "font-sans font-medium tracking-tight text-foreground/80 hover:text-foreground transition-colors duration-200 whitespace-nowrap text-base inline-flex min-h-11 items-center",
                    location.pathname === item.path && "underline underline-offset-4"
                  )}
                >
                  {t(item.key)}
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

