import Layout from "@/components/layout/Layout";
import ScrollRevealText from "@/components/ScrollRevealText";
import { useLanguage } from "@/i18n/LanguageContext";

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

  return (
    <Layout>
      {/* Hero */}
      <section className="container-editorial pt-24 md:pt-32 pb-16 md:pb-24">
        <ScrollRevealText key={language} className="heading-large">
          {t("about.title")}
        </ScrollRevealText>
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
