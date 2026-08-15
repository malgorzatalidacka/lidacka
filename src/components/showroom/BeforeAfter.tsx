import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { beforeAfter } from "@/data/showroom";
import { cn } from "@/lib/utils";

const BeforeAfterSection = () => {
  const { tl, language } = useLanguage();
  const [state, setState] = useState<Record<string, "before" | "after">>({});

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {beforeAfter.map((item) => {
        const mode = state[item.id] ?? "before";
        const isAfter = mode === "after";
        return (
          <article key={item.id} className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h3 className="heading-small">{tl(item.title)}</h3>

            <div className="mt-5 inline-flex rounded-full border border-border p-1">
              {(["before", "after"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setState((s) => ({ ...s, [item.id]: m }))}
                  aria-pressed={mode === m}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.15em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    mode === m ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {m === "before"
                    ? language === "pl" ? "Przed" : "Before"
                    : language === "pl" ? "Po" : "After"}
                </button>
              ))}
            </div>

            <div key={mode} className="mt-6 rounded-xl bg-secondary p-5 text-sm md:text-base leading-relaxed motion-safe:animate-fade-in">
              {isAfter ? tl(item.after) : tl(item.before)}
            </div>

            <p className="mt-5 text-xs md:text-sm text-muted-foreground">
              <span className="uppercase tracking-[0.15em]">{language === "pl" ? "Dlaczego" : "Why"}</span>
              <br />
              {tl(item.why)}
            </p>
          </article>
        );
      })}
    </div>
  );
};

export default BeforeAfterSection;
