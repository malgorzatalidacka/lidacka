import { useEffect, useRef, useState } from "react";
import Layout from "@/components/layout/Layout";
import ScrollRevealText from "@/components/ScrollRevealText";
import ProjectShowcase from "@/components/showroom/ProjectShowcase";
import Toolkit from "@/components/showroom/Toolkit";
import ScenarioSim from "@/components/showroom/ScenarioSim";
import ProcessPath from "@/components/showroom/ProcessPath";
import BeforeAfterSection from "@/components/showroom/BeforeAfter";
import Playground from "@/components/showroom/Playground";
import {
  playProjects,
  presentationProjects,
  showroomHeroChips,
  showroomTiles,
} from "@/data/showroom";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const Reveal = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      )}
    >
      {children}
    </div>
  );
};

const SectionHead = ({
  kicker,
  title,
  intro,
  id,
}: {
  kicker: string;
  title: string;
  intro?: string;
  id?: string;
}) => (
  <div id={id} className="scroll-mt-24 max-w-3xl">
    <span className="label-uppercase text-accent">{kicker}</span>
    <h2 className="heading-large mt-4">{title}</h2>
    {intro && <p className="text-body text-muted-foreground mt-5">{intro}</p>}
  </div>
);

const Showroom = () => {
  const { tl, language } = useLanguage();
  const pl = language === "pl";

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Layout>
      {/* HERO */}
      <section className="container-editorial pt-24 md:pt-32 pb-16 md:pb-24">
        <span className="label-uppercase text-muted-foreground">Showroom</span>
        <ScrollRevealText key={language} className="heading-display mt-6 max-w-5xl text-balance">
          Learning should be experienced, not just explained.
        </ScrollRevealText>
        <p className="text-body text-muted-foreground max-w-2xl mt-8">
          {pl
            ? "Kolekcja doświadczeń edukacyjnych, narzędzi i materiałów, które zaprojektowałam — od interaktywnego e-learningu i prezentacji po scenariusze, gry, narzędzia refleksji i aktywności warsztatowe."
            : "A collection of learning experiences, educational tools and materials I have designed — from interactive e-learning and presentations to scenarios, games, reflection tools and workshop activities."}
        </p>

        <ul className="mt-10 flex flex-wrap gap-2 md:gap-3">
          {showroomHeroChips.map((chip, i) => (
            <li
              key={chip.glyph}
              style={{ animationDelay: `${i * 70}ms` }}
              className="motion-safe:animate-fade-in rounded-full border border-border bg-card px-4 py-2 text-xs md:text-sm text-muted-foreground transition-all duration-300 hover:border-foreground/40 hover:text-foreground motion-safe:hover:-translate-y-1"
            >
              <span aria-hidden className="mr-2">{chip.glyph}</span>
              {tl(chip.label)}
            </li>
          ))}
        </ul>
      </section>

      {/* FOUR ENTRANCES */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {showroomTiles.map((tile) => (
            <button
              key={tile.id}
              type="button"
              onClick={() => scrollTo(tile.target)}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 md:p-10 text-left transition-all duration-500 hover:border-foreground/40 motion-safe:hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-foreground origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
              />
              <span aria-hidden className="block text-3xl transition-transform duration-500 motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:rotate-6">
                {tile.glyph}
              </span>
              <span className="label-uppercase mt-6 block text-accent">{tile.kicker}</span>
              <span className="heading-small mt-3 block">{tl(tile.title)}</span>
              <span className="mt-3 block text-sm text-muted-foreground leading-relaxed">{tl(tile.body)}</span>
              <span className="mt-6 inline-block text-xs uppercase tracking-[0.15em] transition-transform duration-300 motion-safe:group-hover:translate-x-1">
                ↓ {pl ? "Zobacz" : "See it"}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* PLAY */}
      <section className="container-editorial pb-24 md:pb-32">
        <Reveal>
          <SectionHead
            id="play"
            kicker="PLAY"
            title={pl ? "Interaktywne doświadczenia edukacyjne" : "Interactive learning experiences"}
            intro={
              pl
                ? "Projekty, których można spróbować — nauka przez decyzje, konsekwencje i informację zwrotną."
                : "Projects you can actually try — learning through decisions, consequences and feedback."
            }
          />
          <div className="mt-10 grid grid-cols-1 gap-6">
            {playProjects.map((p) => (
              <ProjectShowcase
                key={p.id}
                project={p}
                featured
                actionLabel={pl ? "Zagraj" : "Play"}
              />
            ))}
          </div>
        </Reveal>
      </section>

      {/* EXPLORE */}
      <section className="container-editorial pb-24 md:pb-32">
        <Reveal>
          <SectionHead
            id="explore"
            kicker="EXPLORE"
            title={pl ? "Interaktywne prezentacje" : "Interactive presentations"}
            intro={
              pl
                ? "Prezentacje projektowane jako przestrzeń do zwiedzania, nie liniowy pokaz slajdów."
                : "Presentations designed as a space to explore, not a linear slide deck."
            }
          />
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {presentationProjects.map((p) => (
              <ProjectShowcase
                key={p.id}
                project={p}
                actionLabel={pl ? "Zwiedź prezentację" : "Explore the presentation"}
              />
            ))}
          </div>
        </Reveal>
      </section>

      {/* USE — TOOLKIT */}
      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container-editorial">
          <Reveal>
            <SectionHead
              id="use"
              kicker="USE"
              title={pl ? "Moja skrzynka narzędzi" : "My Learning Toolkit"}
              intro={
                pl
                  ? "Wybierz kategorię i odwróć kartę, żeby zobaczyć, czym jest materiał, jak go używam i czego uczy."
                  : "Pick a category and flip a card to see what the material is, how I use it and what it teaches."
              }
            />
            <div className="mt-12">
              <Toolkit />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SCENARIO-BASED LEARNING */}
      <section className="container-editorial py-24 md:py-32">
        <Reveal>
          <SectionHead
            id="scenarios"
            kicker="WHAT WOULD YOU DO?"
            title={pl ? "Uczenie oparte na scenariuszach" : "Scenario-based learning"}
            intro={
              pl
                ? "Wejdź w sytuację, podejmij decyzję i zobacz jej konsekwencje — tak działają moje karty scenariuszowe."
                : "Step into a situation, make a decision and see its consequences — this is how my scenario cards work."
            }
          />
          <div className="mt-10">
            <ScenarioSim />
          </div>
        </Reveal>
      </section>

      {/* SEE HOW */}
      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container-editorial">
          <Reveal>
            <SectionHead
              id="seehow"
              kicker="SEE HOW"
              title="Behind the Learning"
              intro={
                pl
                  ? "Siedem kroków od realnego problemu do wersji drugiej scenariusza. Kliknij etap, żeby zobaczyć szczegóły."
                  : "Seven steps from a real problem to version two of a scenario. Click a stage to see the details."
              }
            />
            <div className="mt-12 max-w-3xl">
              <ProcessPath />
            </div>
          </Reveal>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="container-editorial py-24 md:py-32">
        <Reveal>
          <SectionHead
            kicker={pl ? "ZA KULISAMI" : "BEHIND THE SCENES"}
            title={pl ? "Wersja pierwsza → wersja druga" : "Version one → version two"}
            intro={
              pl
                ? "Materiały nie powstają od razu. Przełącz widok, żeby zobaczyć, co zmieniłam i dlaczego."
                : "Materials are never right the first time. Switch the view to see what I changed and why."
            }
          />
          <div className="mt-10">
            <BeforeAfterSection />
          </div>
        </Reveal>
      </section>

      {/* PLAYGROUND */}
      <section className="container-editorial pb-24 md:pb-32">
        <Reveal>
          <SectionHead
            id="playground"
            kicker="PLAYGROUND"
            title={pl ? "Małe narzędzia. Duże momenty nauki." : "Small tools. Big learning moments."}
            intro={
              pl
                ? "Drobniejsze materiały, które nie potrzebują osobnego case study — filtruj według typu."
                : "Smaller materials that do not need a full case study — filter them by type."
            }
          />
          <div className="mt-10">
            <Playground />
          </div>
        </Reveal>
      </section>
    </Layout>
  );
};

export default Showroom;
