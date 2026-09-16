import Layout from "@/components/layout/Layout";
import ScrollRevealText from "@/components/ScrollRevealText";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowDown, Download, Quote } from "lucide-react";

const About = () => {
  const { t, tl, language } = useLanguage();

  const experience = [
    { role: { pl: "Niezależna projektantka", en: "Independent Designer" }, company: "Lidacka Studio", period: "2020 — ".concat(language === "pl" ? "obecnie" : "Present") },
    { role: { pl: "Starsza projektantka", en: "Senior Designer" }, company: "Pentagram", period: "2018 — 2020" },
    { role: { pl: "Projektantka", en: "Designer" }, company: "Collins", period: "2016 — 2018" },
    { role: { pl: "Młodsza projektantka", en: "Junior Designer" }, company: "Base Design", period: "2014 — 2016" },
  ];

  const services = [
    { pl: "Strategia i pozycjonowanie marki", en: "Brand Strategy & Positioning" },
    { pl: "Projektowanie identyfikacji wizualnej", en: "Visual Identity Design" },
    { pl: "Logo i znaki graficzne", en: "Logo & Mark Development" },
    { pl: "Systemy typograficzne", en: "Typography Systems" },
    { pl: "Opracowanie palety kolorów", en: "Color Palette Development" },
    { pl: "Księgi znaku i wytyczne marki", en: "Brand Guidelines" },
    { pl: "Kierownictwo artystyczne", en: "Art Direction" },
    { pl: "Projektowanie produktów cyfrowych", en: "Digital Product Design" },
    { pl: "Motion design", en: "Motion Design" },
    { pl: "Druk i opakowania", en: "Print & Packaging" },
  ];

  const testimonials = [
    { quote: { pl: "Miejsce na opinię o współpracy, podejściu do projektu i rezultatach.", en: "A place for a testimonial about the collaboration, approach and results." }, author: { pl: "Imię i nazwisko · rola", en: "Name and surname · role" } },
    { quote: { pl: "Miejsce na opinię o jakości doświadczenia edukacyjnego i pracy z uczestnikami.", en: "A place for a testimonial about the quality of the learning experience and participant work." }, author: { pl: "Imię i nazwisko · organizacja", en: "Name and surname · organisation" } },
    { quote: { pl: "Miejsce na opinię o uważności, komunikacji i wspólnym projektowaniu rozwiązania.", en: "A place for a testimonial about care, communication and co-designing the solution." }, author: { pl: "Imię i nazwisko · rola", en: "Name and surname · role" } },
    { quote: { pl: "Miejsce na opinię o prowadzeniu warsztatu i zaangażowaniu grupy.", en: "A place for a testimonial about workshop facilitation and group engagement." }, author: { pl: "Imię i nazwisko · organizacja", en: "Name and surname · organisation" } },
    { quote: { pl: "Miejsce na opinię o wiedzy merytorycznej, kreatywności i dobrej współpracy.", en: "A place for a testimonial about expertise, creativity and a strong working relationship." }, author: { pl: "Imię i nazwisko · rola", en: "Name and surname · role" } },
    { quote: { pl: "Miejsce na opinię o wpływie projektu edukacyjnego na ludzi i organizację.", en: "A place for a testimonial about the learning project's impact on people and the organisation." }, author: { pl: "Imię i nazwisko · organizacja", en: "Name and surname · organisation" } },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="container-editorial pt-24 md:pt-32 pb-16 md:pb-24">
        <ScrollRevealText key={language} className="heading-large">
          {t("about.title")}
        </ScrollRevealText>
      </section>

      {/* CV download */}
      <section className="container-editorial pb-24 md:pb-32">
        <a
          href={language === "pl" ? "/cv-lidacka-pl.pdf" : "/cv-lidacka-en.pdf"}
          download
          className="group grid grid-cols-12 gap-6 border-y border-border py-8 md:py-12 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
          aria-label={t("about.cvDownload")}
        >
          <div className="col-span-12 md:col-span-2">
            <span className="label-uppercase text-muted-foreground">{t("about.cvLabel")}</span>
          </div>
          <div className="col-span-10 md:col-span-8">
            <h2 className="heading-small mb-3">{t("about.cvTitle")}</h2>
            <p className="text-sm md:text-base text-muted-foreground">{t("about.cvDescription")}</p>
          </div>
          <div className="col-span-2 flex items-center justify-end">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-transform duration-300 group-hover:-translate-y-1" aria-hidden="true">
              <Download className="h-5 w-5" />
            </span>
          </div>
        </a>
      </section>

      {/* Studio Image */}
      <section className="container-editorial pb-16 md:pb-24">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop"
            alt={t("about.imageAlt")}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Bio */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2"></div>
          <div className="col-span-12 md:col-span-8 space-y-6">
            <p className="text-body text-muted-foreground">{t("about.bio1")}</p>
            <p className="text-body text-muted-foreground">{t("about.bio2")}</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <span className="label-uppercase text-muted-foreground">{t("about.experience")}</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            {experience.map((item, index) => (
              <div
                key={index}
                className="py-5 border-b border-border flex flex-col md:flex-row md:items-center md:justify-between gap-2"
              >
                <div>
                  <h3 className="text-body font-medium">{tl(item.role)}</h3>
                  <p className="text-muted-foreground text-sm">{item.company}</p>
                </div>
                <span className="text-sm text-muted-foreground">{item.period}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <span className="label-uppercase text-muted-foreground">{t("about.testimonials")}</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="heading-medium max-w-3xl mb-8">{t("about.testimonialsTitle")}</h2>
            <div className="relative">
              <div className="h-[26rem] overflow-y-auto overscroll-contain border-y border-border pr-3 md:pr-6" tabIndex={0} aria-label={t("about.testimonials")}>
                {testimonials.map((testimonial, index) => (
                  <figure key={index} className="min-h-[13rem] border-b border-border py-8 md:py-10 last:border-b-0">
                    <Quote className="mb-5 h-5 w-5 text-muted-foreground" aria-hidden="true" />
                    <blockquote className="max-w-3xl text-xl md:text-2xl leading-snug">“{tl(testimonial.quote)}”</blockquote>
                    <figcaption className="mt-6 text-sm text-muted-foreground">{tl(testimonial.author)}</figcaption>
                  </figure>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs uppercase text-muted-foreground">
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
                <span>{t("about.testimonialsHint")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <span className="label-uppercase text-muted-foreground">{t("about.services")}</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            {services.map((service, index) => (
              <div key={index} className="py-4 border-b border-border">
                <span className="text-body">{tl(service)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
