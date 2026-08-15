import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { toolkitCategories } from "@/data/showroom";
import { cn } from "@/lib/utils";

const Toolkit = () => {
  const { tl, language } = useLanguage();
  const [activeId, setActiveId] = useState(toolkitCategories[0].id);
  const [flipped, setFlipped] = useState<string | null>(null);

  const active = toolkitCategories.find((c) => c.id === activeId) ?? toolkitCategories[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-14">
      {/* Shelf of categories */}
      <div role="tablist" aria-label={language === "pl" ? "Kategorie narzędzi" : "Tool categories"} className="flex lg:flex-col gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
        {toolkitCategories.map((cat) => {
          const isActive = cat.id === activeId;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              type="button"
              onClick={() => {
                setActiveId(cat.id);
                setFlipped(null);
              }}
              className={cn(
                "group flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card hover:border-foreground/40 motion-safe:hover:translate-x-1"
              )}
            >
              <span aria-hidden className="text-lg">{cat.glyph}</span>
              <span className="text-xs md:text-sm font-medium tracking-tight whitespace-nowrap lg:whitespace-normal">
                {tl(cat.label)}
              </span>
            </button>
          );
        })}
      </div>

      {/* Items */}
      <div key={active.id} className="motion-safe:animate-fade-in">
        <p className="text-muted-foreground text-sm md:text-base">{tl(active.blurb)}</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {active.items.map((item) => {
            const isFlipped = flipped === item.id;
            return (
              <div key={item.id} className="[perspective:1600px]">
                <button
                  type="button"
                  aria-expanded={isFlipped}
                  onClick={() => setFlipped(isFlipped ? null : item.id)}
                  className="group relative block h-full w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-2xl"
                >
                  <div
                    className={cn(
                      "relative min-h-[260px] rounded-2xl border border-border bg-card p-6 transition-transform duration-500 [transform-style:preserve-3d] motion-reduce:transition-none",
                      isFlipped && "[transform:rotateY(180deg)]"
                    )}
                  >
                    {/* Front */}
                    <div className={cn("[backface-visibility:hidden]", isFlipped && "invisible")}>
                      <span aria-hidden className="text-2xl">{active.glyph}</span>
                      <h4 className="mt-4 text-lg font-medium tracking-tight">{tl(item.title)}</h4>
                      <p className="mt-3 border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted-foreground italic">
                        {tl(item.excerpt)}
                      </p>
                      <span className="mt-6 inline-block text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                        {language === "pl" ? "Odwróć kartę →" : "Flip the card →"}
                      </span>
                    </div>

                    {/* Back */}
                    <div
                      className={cn(
                        "absolute inset-0 rounded-2xl bg-secondary p-6 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-auto",
                        !isFlipped && "invisible"
                      )}
                    >
                      <dl className="space-y-4">
                        <div>
                          <dt className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                            {language === "pl" ? "Co to jest?" : "What is it?"}
                          </dt>
                          <dd className="mt-1 text-sm leading-relaxed">{tl(item.what)}</dd>
                        </div>
                        <div>
                          <dt className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                            {language === "pl" ? "Jak tego używam?" : "How is it used?"}
                          </dt>
                          <dd className="mt-1 text-sm leading-relaxed">{tl(item.how)}</dd>
                        </div>
                        <div>
                          <dt className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                            {language === "pl" ? "Czego uczy?" : "What does it teach?"}
                          </dt>
                          <dd className="mt-1 text-sm leading-relaxed">{tl(item.teaches)}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Toolkit;
