import Layout from "@/components/layout/Layout";
import ScrollRevealText from "@/components/ScrollRevealText";
import { passions, PassionEntry } from "@/data/passions";
import { useLanguage } from "@/i18n/LanguageContext";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const PassionCard = ({ entry, index }: { entry: PassionEntry; index: number }) => {
  const { tl } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
      className={cn(
        "group border border-border bg-card p-6 md:p-8 flex flex-col gap-4",
        "transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_hsl(var(--foreground)/0.35)]",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        entry.span,
      )}
    >
      <span className="label-uppercase text-muted-foreground text-[10px] md:text-xs">
        {tl(entry.tag)}
      </span>

      {entry.image && (
        <div className="overflow-hidden aspect-[16/10]">
          <img
            src={entry.image}
            alt={tl(entry.title)}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}

      <h2
        className={cn(
          entry.kind === "quote"
            ? "heading-small md:text-3xl leading-[1.25] text-balance"
            : "text-lg md:text-xl font-medium",
        )}
      >
        {tl(entry.title)}
      </h2>

      {tl(entry.body) && (
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          {tl(entry.body)}
        </p>
      )}

      {entry.items && (
        <ul className="space-y-2">
          {entry.items.map((item, i) => (
            <li
              key={i}
              className="text-sm md:text-base border-b border-border pb-2 last:border-0"
            >
              {tl(item)}
            </li>
          ))}
        </ul>
      )}

      {entry.source && (
        <span className="text-xs text-muted-foreground mt-auto">— {entry.source}</span>
      )}
    </article>
  );
};

const PassionPlay = () => {
  const { t, language } = useLanguage();

  return (
    <Layout>
      <section className="container-editorial pt-24 md:pt-32 pb-10 md:pb-16">
        <span className="label-uppercase text-muted-foreground">{t("passion.label")}</span>
        <ScrollRevealText key={language} className="heading-large mt-4 max-w-5xl">
          {t("passion.title")}
        </ScrollRevealText>
        <p className="text-body text-muted-foreground max-w-2xl mt-8">{t("passion.intro")}</p>
      </section>

      <section className="container-editorial pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-auto">
          {passions.map((entry, index) => (
            <PassionCard key={entry.id} entry={entry} index={index} />
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-10 md:mt-14 max-w-xl">
          {t("passion.outro")}
        </p>
      </section>
    </Layout>
  );
};

export default PassionPlay;
