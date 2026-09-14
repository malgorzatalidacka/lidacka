import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ScrollRevealText from "@/components/ScrollRevealText";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  awansMeta,
  awansFacts,
  awansChallenge,
  awansJourney,
  awansModel,
  awansSkills,
  awansRole,
  awansBehindScenes,
  awansRoad,
} from "@/data/awans";
import heroImage from "@/assets/projects/awans-hero.jpg";

const Awans = () => {
  const { tl, language } = useLanguage();
  const [openStage, setOpenStage] = useState<string>("01");
  const pl = language === "pl";

  return (
    <Layout>
      {/* HERO */}
      <section className="container-editorial pt-24 md:pt-32 pb-10 md:pb-14">
        <span className="label-uppercase text-muted-foreground">{tl(awansMeta.tag)}</span>
        <ScrollRevealText key={language} className="heading-display mt-4">
          {awansMeta.title}
        </ScrollRevealText>
        <p className="text-editorial mt-4 md:mt-6 max-w-3xl">{tl(awansMeta.tagline)}</p>
        <p className="text-body text-muted-foreground mt-4 max-w-2xl">{tl(awansMeta.intro)}</p>
        <p className="label-uppercase mt-6 text-muted-foreground">{tl(awansMeta.subtitle)}</p>

        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border mt-10 md:mt-14">
          {awansFacts.map((f) => (
            <div key={f.label.en} className="bg-background p-5 md:p-6">
              <dt className="label-uppercase text-muted-foreground">{tl(f.label)}</dt>
              <dd className="mt-2 text-sm md:text-base leading-relaxed">{tl(f.value)}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* HERO IMAGE */}
      <section className="pb-16 md:pb-24">
        <div className="w-full h-[45vh] md:h-[65vh] overflow-hidden">
          <img
            src={heroImage}
            alt={pl ? "Trajektoria rozwoju sędziego na boisku" : "Referee development trajectory across the court"}
            width={1600}
            height={1200}
            className="w-full h-full object-cover animate-scale-in"
          />
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="container-editorial pb-16 md:pb-24">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <span className="label-uppercase text-muted-foreground">{pl ? "Przegląd" : "Overview"}</span>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="text-body text-muted-foreground">{tl(awansMeta.overview)}</p>
            <p className="heading-small mt-8">{tl(awansMeta.loop)}</p>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="container-editorial pb-16 md:pb-24">
        <div className="border border-border bg-card p-6 md:p-12">
          <span className="label-uppercase text-muted-foreground">{tl(awansChallenge.heading)}</span>
          <p className="text-editorial mt-4 max-w-3xl">{tl(awansChallenge.lead)}</p>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 mt-10">
            <div>
              <p className="label-uppercase text-muted-foreground">{tl(awansChallenge.needsLabel)}</p>
              <ul className="mt-4 space-y-3">
                {awansChallenge.needs.map((n) => (
                  <li key={n.en} className="flex gap-3 text-sm md:text-base leading-relaxed group">
                    <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">→</span>
                    <span className="text-muted-foreground">{tl(n)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual metaphor: referee moving stage to stage */}
            <div className="flex flex-col justify-center">
              <div className="relative border-l border-border pl-6 space-y-6">
                {awansJourney.map((s, i) => (
                  <div key={s.number} className="relative">
                    <span
                      className={`absolute -left-[31px] top-1.5 block w-2.5 h-2.5 rounded-full ${
                        i === awansJourney.length - 1 ? "bg-accent" : "bg-foreground/30"
                      }`}
                    />
                    <span className="label-uppercase">{s.number} · {tl(s.name)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-body mt-10 max-w-3xl">{tl(awansChallenge.outro)}</p>
        </div>
      </section>

      {/* LEARNING JOURNEY */}
      <section className="container-editorial pb-20 md:pb-28">
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="label-uppercase">{pl ? "Ścieżka rozwoju AWANS" : "The AWANS Learning Journey"}</span>
        </div>

        <div className="border-t border-border">
          {awansJourney.map((stage) => {
            const open = openStage === stage.number;
            return (
              <div key={stage.number} className={`border-b border-border ${stage.finale ? "bg-secondary" : ""}`}>
                <button
                  type="button"
                  onClick={() => setOpenStage(open ? "" : stage.number)}
                  aria-expanded={open}
                  className="w-full text-left py-6 md:py-8 flex flex-wrap items-baseline gap-x-6 gap-y-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring px-4 md:px-8"
                >
                  <span className={`text-2xl md:text-4xl tabular-nums ${stage.finale ? "text-accent" : "text-muted-foreground"}`}>
                    {stage.number}
                  </span>
                  <span className="heading-small group-hover:opacity-70 transition-opacity">{tl(stage.name)}</span>
                  <span className="label-uppercase text-muted-foreground">{tl(stage.period)}</span>
                  <span className="ml-auto text-muted-foreground transition-transform duration-300 group-hover:translate-x-1">
                    {open ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 md:px-8 pb-8 md:pb-10 grid md:grid-cols-12 gap-6">
                      <p className="md:col-span-4 heading-small">{tl(stage.headline)}</p>
                      <div className="md:col-span-8">
                        {stage.note && (
                          <p className="text-editorial">{tl(stage.note)}</p>
                        )}
                        <ul className="space-y-2">
                          {stage.points.map((p) => (
                            <li key={p.en} className="text-sm md:text-base text-muted-foreground leading-relaxed">
                              — {tl(p)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* LEARNING DESIGN */}
      <section className="container-editorial pb-20 md:pb-28">
        <h2 className="heading-medium max-w-3xl">
          {pl
            ? "Zaprojektowane jako ścieżka uczenia się — nie jako seria wydarzeń."
            : "Designed as a learning journey — not a series of events."}
        </h2>
        <p className="text-body text-muted-foreground mt-6 max-w-2xl">
          {pl
            ? "Program opierał się na progresji: od wiedzy, przez praktykę, po coraz bardziej samodzielne działanie na boisku."
            : "The programme was based on a progression from knowledge to practice and increasingly independent performance."}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border mt-10 md:mt-14">
          {awansModel.map((m, i) => (
            <div key={m.key.en} className="bg-background p-6 md:p-8 group hover:bg-secondary transition-colors">
              <div className="flex items-center gap-3">
                <span className="label-uppercase text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
              <h3 className="heading-small mt-4">{tl(m.key)}</h3>
              <p className="text-sm md:text-base text-muted-foreground mt-3 leading-relaxed">{tl(m.body)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="container-editorial pb-20 md:pb-28">
        <h2 className="heading-medium">
          {pl ? "Od przepisów do decyzji w czasie rzeczywistym" : "From rules to real-time decisions"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
          {awansSkills.map((s) => (
            <article
              key={s.title.en}
              className="border border-border p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-foreground"
            >
              <h3 className="label-uppercase">{tl(s.title)}</h3>
              <p className="text-sm md:text-base text-muted-foreground mt-4 leading-relaxed">{tl(s.body)}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ROAD TO THE FINAL WHISTLE */}
      <section className="container-editorial pb-20 md:pb-28">
        <div className="border border-border p-6 md:p-12">
          <span className="label-uppercase text-muted-foreground">
            {pl ? "Droga do ostatniego gwizdka" : "The road to the final whistle"}
          </span>
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-4">
            {awansRoad.map((step, i) => (
              <div key={step.en} className="flex items-center gap-4">
                <span
                  className={`label-uppercase px-3 py-2 border transition-colors duration-300 ${
                    i === awansRoad.length - 1
                      ? "border-accent text-accent"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                  }`}
                >
                  {tl(step)}
                </span>
                {i < awansRoad.length - 1 && <span className="text-muted-foreground">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MY ROLE */}
      <section className="container-editorial pb-20 md:pb-28">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <span className="label-uppercase text-muted-foreground">{tl(awansRole.heading)}</span>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="heading-small">{tl(awansRole.roles)}</p>
            <p className="text-editorial mt-6 max-w-3xl">{tl(awansRole.body)}</p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-y-3 gap-x-8">
              {awansRole.points.map((p) => (
                <li key={p.en} className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  — {tl(p)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BEHIND THE SCENES */}
      <section className="container-editorial pb-20 md:pb-28">
        <h2 className="heading-medium">{pl ? "Kulisy programu" : "Behind the scenes"}</h2>
        <p className="text-body text-muted-foreground mt-4 max-w-2xl">
          {pl
            ? "Wybrane materiały i artefakty edukacyjne można będzie tu przejrzeć."
            : "Selected materials and learning artefacts can be explored here."}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
          {awansBehindScenes.map((item, i) => (
            <article
              key={item.en}
              className="group border border-dashed border-border p-6 md:p-8 transition-colors hover:border-foreground"
            >
              <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
                <span className="label-uppercase text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="label-uppercase mt-6">{tl(item)}</h3>
              <p className="text-xs md:text-sm text-muted-foreground mt-2">
                {pl ? "Materiał w przygotowaniu" : "Placeholder — material coming soon"}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="border-t border-border pt-12 md:pt-16">
          <p className="heading-medium max-w-4xl">
            {pl
              ? "AWANS to coś więcej niż program szkolenia sędziów."
              : "AWANS is more than a referee training programme."}
          </p>
          <p className="text-editorial text-muted-foreground mt-6 max-w-3xl">
            {pl
              ? "To uporządkowana ścieżka uczenia się, która daje młodym sędziom szansę, by uczyć się, ćwiczyć, reflektować, poprawiać i pokazać, co potrafią."
              : "It is a structured learning journey that gives young referees the opportunity to learn, practise, reflect, improve and prove what they can do."}
          </p>

          <Link
            to="/projects"
            className="inline-flex items-center gap-3 mt-10 border border-foreground px-6 py-4 label-uppercase hover:bg-foreground hover:text-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {pl ? "Wróć do projektów" : "Back to projects"}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Awans;
