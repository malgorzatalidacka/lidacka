import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { scenarios } from "@/data/showroom";
import { cn } from "@/lib/utils";

const ScenarioSim = () => {
  const { tl, language } = useLanguage();
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<string | null>(null);

  const scenario = scenarios[index];
  const chosen = scenario.options.find((o) => o.id === choice);

  const go = (next: number) => {
    setIndex((next + scenarios.length) % scenarios.length);
    setChoice(null);
  };

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <div className="flex items-center justify-between gap-4 border-b border-border px-6 py-4 md:px-10">
        <span className="label-uppercase text-muted-foreground">{tl(scenario.context)}</span>
        <span className="text-xs text-muted-foreground tabular-nums">
          {index + 1} / {scenarios.length}
        </span>
      </div>

      <div key={scenario.id} className="p-6 md:p-10 motion-safe:animate-fade-in">
        <p className="text-editorial max-w-3xl text-balance">{tl(scenario.situation)}</p>
        <h3 className="heading-small mt-8">{tl(scenario.question)}</h3>

        <ul className="mt-6 grid grid-cols-1 gap-3">
          {scenario.options.map((opt, i) => {
            const selected = choice === opt.id;
            return (
              <li key={opt.id}>
                <button
                  type="button"
                  onClick={() => setChoice(opt.id)}
                  aria-pressed={selected}
                  className={cn(
                    "group flex w-full items-start gap-4 rounded-xl border p-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    selected
                      ? "border-foreground bg-secondary"
                      : "border-border hover:border-foreground/40 motion-safe:hover:-translate-y-0.5"
                  )}
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-current text-xs font-medium">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-sm md:text-base leading-relaxed">{tl(opt.label)}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {chosen && (
          <div className="mt-8 rounded-xl bg-secondary p-6 motion-safe:animate-fade-in">
            <span
              className={cn(
                "label-uppercase",
                chosen.quality === "best" ? "text-accent" : "text-muted-foreground"
              )}
            >
              {language === "pl" ? "Informacja zwrotna" : "Feedback"}
            </span>
            <p className="mt-3 text-sm md:text-base leading-relaxed">{tl(chosen.feedback)}</p>
            <p className="mt-6 border-t border-border pt-4 text-xs md:text-sm text-muted-foreground">
              <span className="uppercase tracking-[0.15em]">
                {language === "pl" ? "Decyzja projektowa" : "Design decision"}
              </span>
              <br />
              {tl(scenario.designNote)}
            </p>
          </div>
        )}

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => go(index - 1)}
            className="link-underline text-xs uppercase tracking-[0.15em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            ← {language === "pl" ? "Poprzednia sytuacja" : "Previous situation"}
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            className="link-underline text-xs uppercase tracking-[0.15em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {language === "pl" ? "Następna sytuacja" : "Next situation"} →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScenarioSim;
