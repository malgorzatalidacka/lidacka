import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { processSteps } from "@/data/showroom";
import { cn } from "@/lib/utils";

const ProcessPath = () => {
  const { tl, language } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(processSteps[0].id);

  return (
    <ol className="relative border-l border-border pl-6 md:pl-10">
      {processSteps.map((step) => {
        const isOpen = openId === step.id;
        return (
          <li key={step.id} className="relative pb-4">
            <span
              aria-hidden
              className={cn(
                "absolute -left-[27px] md:-left-[43px] top-5 flex h-3 w-3 items-center justify-center rounded-full border transition-colors duration-300",
                isOpen ? "border-accent bg-accent" : "border-border bg-background"
              )}
            />
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : step.id)}
              className="group flex w-full items-baseline gap-4 py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="text-xs tabular-nums text-muted-foreground">{step.number}</span>
              <span className="heading-small group-hover:opacity-70 transition-opacity">{tl(step.title)}</span>
              <span aria-hidden className={cn("ml-auto text-muted-foreground transition-transform duration-300", isOpen && "rotate-45")}>
                +
              </span>
            </button>

            {isOpen && (
              <div className="pb-6 motion-safe:animate-fade-in">
                <p className="text-sm md:text-base text-muted-foreground italic">{tl(step.question)}</p>
                <p className="mt-3 max-w-2xl text-sm md:text-base leading-relaxed">{tl(step.body)}</p>
                <p className="mt-4 inline-block rounded-full bg-secondary px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  {language === "pl" ? "Materiał" : "Artifact"} — {tl(step.artifact)}
                </p>
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
};

export default ProcessPath;
