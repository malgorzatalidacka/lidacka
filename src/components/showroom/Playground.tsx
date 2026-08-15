import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { playgroundCategories, playgroundItems } from "@/data/showroom";
import { cn } from "@/lib/utils";

const Playground = () => {
  const { tl } = useLanguage();
  const [filter, setFilter] = useState("all");

  const items = filter === "all" ? playgroundItems : playgroundItems.filter((i) => i.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {playgroundCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setFilter(cat.id)}
            aria-pressed={filter === cat.id}
            className={cn(
              "rounded-full border px-4 py-2 text-xs transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              filter === cat.id
                ? "border-foreground bg-foreground text-background"
                : "border-border hover:border-foreground/40 motion-safe:hover:-translate-y-0.5"
            )}
          >
            <span aria-hidden className="mr-2">{cat.glyph}</span>
            {tl(cat.label)}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, i) => (
          <article
            key={item.id}
            style={{ animationDelay: `${i * 40}ms` }}
            className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-foreground/40 motion-safe:hover:-translate-y-1 motion-safe:animate-fade-in"
          >
            <span aria-hidden className="text-xl">
              {playgroundCategories.find((c) => c.id === item.category)?.glyph}
            </span>
            <h3 className="mt-4 text-base md:text-lg font-medium tracking-tight">{tl(item.title)}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tl(item.body)}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Playground;
