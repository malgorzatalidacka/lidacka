import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Layout from "@/components/layout/Layout";
import { professionalExperience, volunteering, education, relevantCourses } from "@/data/aboutExperience";
import { useLanguage } from "@/i18n/LanguageContext";
import { Download } from "lucide-react";

const About = () => {
  const { t, tl, language } = useLanguage();
  const pl = language === "pl";

  return (
    <Layout>
      <section className="container-editorial pt-12 md:pt-16 pb-10 md:pb-12">
        <h1 className="heading-large">{pl ? "Profil zawodowy, który pokazuje kim jestem_" : "A professional profile that shows who I am_"}</h1>
      </section>

      <section className="container-editorial pb-10 md:pb-12" aria-label="Curriculum Vitae">
        <div className="grid grid-cols-12 gap-x-6 gap-y-2 border-t border-border pt-4">
          <div className="col-span-12 lg:col-span-3">
            <span className="label-uppercase text-muted-foreground break-normal hyphens-none [overflow-wrap:normal]">{t("about.cvLabel")}</span>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="heading-small mb-2">{pl ? "Zobacz moje CV" : "View my CV"}</h2>
            {[
              { id: "pl", title: { pl: "CV po polsku", en: "CV in Polish" } },
              { id: "en", title: { pl: "CV po angielsku", en: "CV in English" } },
            ].map((cv) => (
              <a key={cv.id} href={`${import.meta.env.BASE_URL}cv-lidacka-${cv.id}.pdf`} download={`CV-Malgorzata-Lidacka-${cv.id}.pdf`}
                className="group flex items-center justify-between gap-6 border-b border-border py-2 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4">
                <span className="text-body">{tl(cv.title)}</span>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border" aria-hidden="true"><Download className="h-5 w-5" /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="container-editorial pb-10 md:pb-12">
        <div className="aspect-[16/9] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop" alt={t("about.imageAlt")} loading="lazy" className="w-full h-full object-cover" />
        </div>
      </section>

      <TestimonialsCarousel />

      <section className="container-editorial pb-12 md:pb-16" aria-labelledby="experience-title">
        <div className="grid grid-cols-12 gap-8">
          <h2 id="experience-title" className="col-span-12 lg:col-span-3 label-uppercase text-muted-foreground break-normal hyphens-none [overflow-wrap:normal]">{pl ? "Doświadczenie zawodowe" : "Professional experience"}</h2>
          <div className="col-span-12 lg:col-span-9 space-y-8">
            {professionalExperience.map((item) => (
              <article key={item.company} className="border-b border-border pb-8">
                <h3 className="text-body font-semibold uppercase">{tl(item.role)}</h3>
                <p className="text-sm text-muted-foreground mt-2 uppercase">{item.company} <span className="normal-case">({tl(item.period)})</span></p>
                <p className="text-body text-muted-foreground mt-4">{tl(item.intro)}</p>
                <ul className="list-none mt-3 space-y-2 text-body text-muted-foreground">
                  {item.points.map((point) => <li key={point.pl}>{tl(point)}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-editorial pb-12 md:pb-16" aria-labelledby="volunteering-title">
        <div className="grid grid-cols-12 gap-8">
          <h2 id="volunteering-title" className="col-span-12 lg:col-span-3 label-uppercase text-muted-foreground break-normal hyphens-none [overflow-wrap:normal]">{pl ? "Wolontariat" : "Volunteering"}</h2>
          <div className="col-span-12 lg:col-span-9">
            <h3 className="text-body font-semibold">{volunteering.company} ({tl(volunteering.period)})</h3>
            <p className="text-sm text-muted-foreground mt-2">{tl(volunteering.role)}</p>
            <ul className="list-none mt-4 space-y-2 text-body text-muted-foreground">
              {volunteering.points.map((point) => <li key={point.pl}>{tl(point)}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {[
        { id: "education", title: pl ? "Wykształcenie" : "Education", items: education },
        { id: "courses", title: pl ? "Istotne kursy" : "Relevant courses", items: relevantCourses },
      ].map((section) => (
        <section key={section.id} className="container-editorial pb-12 md:pb-16" aria-labelledby={`${section.id}-title`}>
          <div className="grid grid-cols-12 gap-8">
            <h2 id={`${section.id}-title`} className="col-span-12 lg:col-span-3 label-uppercase text-muted-foreground break-normal hyphens-none [overflow-wrap:normal]">{section.title}</h2>
            <ul className="col-span-12 lg:col-span-9 list-none space-y-3 text-body text-muted-foreground">
              {section.items.map((item) => <li key={item.pl}>{tl(item)}</li>)}
            </ul>
          </div>
        </section>
      ))}
    </Layout>
  );
};

export default About;



