import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/happiness-hero.jpg";
import {
  happinessChapters,
  happinessClosing,
  happinessIntro,
  happinessNotes,
  happinessPrinciples,
} from "@/data/actionForHappiness";

const Reveal = ({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-[900ms] ease-out motion-reduce:transition-none",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className,
      )}
    >
      {children}
    </div>
  );
};

const ActionForHappiness = () => {
  const { tl, t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Layout>
      <div className="theme-happiness bg-background text-foreground overflow-hidden">
        {/* Hero */}
        <section className="relative container-editorial pt-24 md:pt-32 pb-12 md:pb-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle,hsl(var(--happy-sun)/0.45),transparent_70%)]"
            style={{ transform: `translateY(${scrollY * 0.08}px)` }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-40 -right-32 h-[380px] w-[380px] rounded-full blur-3xl opacity-50 bg-[radial-gradient(circle,hsl(var(--happy-bloom)/0.4),transparent_70%)]"
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          />

          <div className="relative">
            <Reveal>
              <span className="label-uppercase text-muted-foreground">
                {tl(happinessIntro.label)}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="heading-large mt-4 max-w-4xl text-balance">
                {tl(happinessIntro.title)}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-editorial text-muted-foreground max-w-2xl mt-8">
                {tl(happinessIntro.lead)}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <ul className="flex flex-wrap gap-x-8 gap-y-2 mt-10">
                {happinessIntro.meta.map((m, i) => (
                  <li key={i} className="text-xs md:text-sm text-muted-foreground">
                    {tl(m)}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Hero image with parallax */}
        <section className="container-editorial pb-16 md:pb-28">
          <Reveal>
            <div className="relative overflow-hidden aspect-[16/9] md:aspect-[21/9] rounded-sm">
              <img
                src={heroImage}
                alt={tl(happinessIntro.title)}
                width={1600}
                height={1000}
                className="w-full h-[118%] object-cover will-change-transform"
                style={{ transform: `translateY(${Math.min(scrollY * 0.06, 90)}px)` }}
              />
            </div>
          </Reveal>
        </section>

        {/* Chapter 01 + 02 */}
        {happinessChapters.slice(0, 2).map((chapter) => (
          <section key={chapter.id} className="container-editorial pb-20 md:pb-32">
            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
              <Reveal className="md:col-span-4">
                <span className="label-uppercase text-muted-foreground">
                  {tl(chapter.kicker)}
                </span>
                <h2 className="heading-medium mt-4 text-balance">{tl(chapter.title)}</h2>
              </Reveal>
              <div className="md:col-span-7 md:col-start-6 space-y-6">
                {chapter.paragraphs.map((p, i) => (
                  <Reveal key={i} delay={i * 100}>
                    <p className="text-body text-muted-foreground">{tl(p)}</p>
                  </Reveal>
                ))}
                {chapter.pull && (
                  <Reveal delay={200}>
                    <blockquote className="mt-10 border-l-2 border-[hsl(var(--happy-accent))] pl-6 heading-small font-normal text-balance">
                      {tl(chapter.pull)}
                    </blockquote>
                  </Reveal>
                )}
              </div>
            </div>
          </section>
        ))}

        {/* GREAT DREAM principles */}
        <section className="py-20 md:py-32 bg-[hsl(var(--happy-surface))]">
          <div className="container-editorial">
            <Reveal>
              <span className="label-uppercase text-muted-foreground">
                {t("happiness.keysLabel")}
              </span>
              <h2 className="heading-medium mt-4 max-w-3xl text-balance">
                {t("happiness.keysTitle")}
              </h2>
              <p className="text-body text-muted-foreground max-w-2xl mt-6">
                {t("happiness.keysIntro")}
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16">
              {happinessPrinciples.map((p, i) => (
                <Reveal key={p.id} delay={(i % 3) * 90}>
                  <article className="group h-full bg-card border border-border p-6 md:p-8 rounded-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_hsl(var(--happy-accent)/0.8)]">
                    <span
                      aria-hidden
                      className="block text-4xl md:text-5xl font-normal text-[hsl(var(--happy-accent))] transition-transform duration-500 group-hover:scale-110 origin-left"
                    >
                      {p.letter}
                    </span>
                    <h3 className="heading-small mt-4">{tl(p.title)}</h3>
                    <p className="text-muted-foreground mt-2">{tl(p.body)}</p>
                    <p className="text-sm text-muted-foreground/90 mt-6 pt-4 border-t border-border">
                      {tl(p.designNote)}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Notes strip */}
        <section className="container-editorial py-20 md:py-32">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {happinessNotes.map((note, i) => (
              <Reveal key={i} delay={i * 120}>
                <p className="text-lg md:text-xl leading-relaxed text-balance">
                  <span aria-hidden className="block w-8 h-[2px] bg-[hsl(var(--happy-accent))] mb-5" />
                  {tl(note)}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Chapter 04 — practice */}
        {happinessChapters.slice(2).map((chapter) => (
          <section key={chapter.id} className="container-editorial pb-20 md:pb-32">
            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
              <Reveal className="md:col-span-4">
                <span className="label-uppercase text-muted-foreground">
                  {tl(chapter.kicker)}
                </span>
                <h2 className="heading-medium mt-4 text-balance">{tl(chapter.title)}</h2>
              </Reveal>
              <div className="md:col-span-7 md:col-start-6 space-y-6">
                {chapter.paragraphs.map((p, i) => (
                  <Reveal key={i} delay={i * 100}>
                    <p className="text-body text-muted-foreground">{tl(p)}</p>
                  </Reveal>
                ))}
                {chapter.pull && (
                  <Reveal delay={200}>
                    <blockquote className="mt-10 border-l-2 border-[hsl(var(--happy-accent))] pl-6 heading-small font-normal text-balance">
                      {tl(chapter.pull)}
                    </blockquote>
                  </Reveal>
                )}
              </div>
            </div>
          </section>
        ))}

        {/* Closing */}
        <section className="container-editorial pb-24 md:pb-36">
          <Reveal>
            <div className="relative bg-[hsl(var(--happy-surface))] p-8 md:p-16 rounded-sm overflow-hidden">
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle,hsl(var(--happy-sun)/0.5),transparent_70%)]"
              />
              <div className="relative max-w-3xl">
                <h2 className="heading-medium text-balance">{tl(happinessClosing.title)}</h2>
                <p className="text-editorial text-muted-foreground mt-6">
                  {tl(happinessClosing.body)}
                </p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-10">
                  <a
                    href={happinessClosing.link.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-underline label-uppercase"
                  >
                    {tl(happinessClosing.link.label)}
                  </a>
                  <Link to="/passion-play" className="link-underline label-uppercase text-muted-foreground">
                    {t("happiness.back")}
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </Layout>
  );
};

export default ActionForHappiness;
