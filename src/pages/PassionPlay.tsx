import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Bookshelf from "@/components/inspirations/Bookshelf";

import InspirationMedia from "@/components/inspirations/InspirationMedia";
import { inspirations as c, inspirationMedia as media } from "@/data/inspirations";
import { useLanguage } from "@/i18n/LanguageContext";
import "./PassionPlay.css";
export default function PassionPlay() {
  const { tl, language } = useLanguage();
  const pl = language === "pl";
  return <Layout><div className="inspirations-page">
    <section className="container-editorial pt-10 md:pt-14 pb-10 md:pb-12">
      <p className="label-uppercase text-muted-foreground">{pl ? "Inspiracje" : "Inspirations"}</p>
      <h1 className="heading-large mt-5 max-w-5xl">{tl(c.title)}</h1>
      <p className="text-editorial text-muted-foreground mt-6 max-w-2xl">{tl(c.lead)}</p>
      <nav aria-label={pl ? "Obszary inspiracji" : "Inspiration areas"} className="flex flex-wrap gap-x-6 gap-y-2 mt-6">{[["community", "Action for Happiness"], ["care", "Polish Puppy Rescue"], ["books", pl ? "Książki" : "Books"], ["sport", "Sport"], ["joy", pl ? "Radość i ciekawość" : "Joy & Curiosity"]].map(([id, label]) => <a key={id} href={`#${id}`} className="inline-flex min-h-11 items-center text-sm link-underline">{label}</a>)}</nav>
    </section>
    <section id="community" aria-labelledby="community-title" className="container-editorial pb-10 md:pb-14 scroll-mt-8">
      <div className="inspiration-section-label"><span>01</span><span>{tl(c.community.subtitle)}</span></div>
      <div className="grid md:grid-cols-12 gap-8 md:gap-12 mt-6"><div className="md:col-span-5"><h2 id="community-title" className="heading-medium">{c.community.title}</h2><p className="text-body text-muted-foreground mt-4">{tl(c.community.body)}</p><p className="label-uppercase mt-4">{tl(c.community.note)}</p><Link to="/passion-play/action-for-happiness" className="inline-flex min-h-11 items-center link-underline text-sm mt-5">{pl ? "Dlaczego projektuję dla dobrostanu →" : "Why I design for wellbeing →"}</Link></div><div className="md:col-span-7"><InspirationMedia media={media.community} aspect="aspect-[3/2]" /></div></div>
      <details className="inspiration-artifact mt-6 md:ml-[43%]"><summary>{pl ? "Zajrzyj do materiałów ze spotkań" : "Look at the meeting materials"}</summary><div className="mt-5"><InspirationMedia media={media.artifact} aspect="aspect-[16/9]" /></div></details>
    </section>
    <section id="care" aria-labelledby="care-title" className="container-editorial pb-10 md:pb-14 scroll-mt-8">
      <div className="inspiration-section-label"><span>02</span><span>{tl(c.care.subtitle)}</span></div>
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 mt-6 mb-6"><div><h2 id="care-title" className="heading-medium">{c.care.title}</h2><p className="text-sm text-muted-foreground mt-3">Fundacja TAB</p></div><p className="text-body text-muted-foreground">{tl(c.care.body)}</p></div>
      <div className="grid md:grid-cols-[1.3fr_1fr] gap-8 items-start"><InspirationMedia media={media.care} /><div className="md:pt-10"><InspirationMedia media={media.everyday} /></div></div>
    </section>
    <section id="books" aria-labelledby="books-title" className="container-editorial pb-10 md:pb-14 scroll-mt-8"><div className="inspiration-section-label"><span>03</span><span>{tl(c.books.subtitle)}</span></div><h2 id="books-title" className="heading-medium mt-6">{tl(c.books.title)}</h2><p className="text-body text-muted-foreground max-w-2xl mt-5 mb-6">{tl(c.books.body)}</p><Bookshelf /></section>
    <section id="sport" aria-labelledby="sport-title" className="container-editorial pb-10 md:pb-14 scroll-mt-8">
      <div className="inspiration-section-label"><span>04</span><span>{tl(c.sport.subtitle)}</span></div><div className="grid md:grid-cols-12 gap-8 mt-6 mb-6"><h2 id="sport-title" className="heading-large md:col-span-7 max-w-3xl">{tl(c.sport.title)}</h2><p className="text-body text-muted-foreground md:col-span-5">{tl(c.sport.body)}</p></div>
      <InspirationMedia media={media.sport} aspect="aspect-[4/3] md:aspect-[21/9]" /><ol className="grid md:grid-cols-3 gap-8 mt-6">{c.sport.reflections.map((reflection, index) => <li key={reflection.title.en} className="border-t border-foreground pt-5"><span className="text-3xl md:text-5xl tabular-nums">0{index + 1}</span><h3 className="heading-small mt-5">{tl(reflection.title)}</h3><p className="text-muted-foreground mt-3 leading-[1.5]">{tl(reflection.body)}</p></li>)}</ol>
    </section>
    <section id="joy" aria-labelledby="joy-title" className="container-editorial pb-10 md:pb-14 scroll-mt-8">
      <div className="inspiration-section-label"><span>05</span><span>{tl(c.joy.subtitle)}</span></div>
      <h2 id="joy-title" className="heading-medium mt-6">{pl ? "Radość i ciekawość" : "Joy & Curiosity"}</h2>
      {/* Add a personal description, image or digital artefact here. */}
      <div className="border border-dashed border-border bg-secondary/30 p-6 mt-6">
        <p className="text-sm text-muted-foreground">{pl ? "Miejsce na opis, zdjęcie lub inny materiał." : "Space for a description, photo or other material."}</p>
      </div>
    </section>
    <div className="container-editorial pb-12 md:pb-16"><p className="text-editorial max-w-3xl border-t border-border pt-6">{tl(c.closing)}</p></div>
  </div></Layout>;
}

