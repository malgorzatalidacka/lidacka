import { useLanguage } from "@/i18n/LanguageContext";
import { LANGUAGES } from "@/i18n/translations";
import { cn } from "@/lib/utils";

const LanguageSwitcher = ({ className }: { className?: string }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t("nav.language")}
      className={cn("flex items-center gap-1 border border-border rounded-full px-1 py-0.5", className)}
    >
      {LANGUAGES.map((lang, i) => (
        <span key={lang.code} className="flex items-center">
          {i > 0 && <span className="text-border select-none mr-1">|</span>}
          <button
            type="button"
            lang={lang.code}
            onClick={() => setLanguage(lang.code)}
            aria-current={language === lang.code ? "true" : undefined}
            aria-label={lang.name}
            title={lang.name}
            className={cn(
              "label-uppercase text-[10px] md:text-xs px-1.5 md:px-2 py-1 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              language === lang.code
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {lang.label}
          </button>
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
