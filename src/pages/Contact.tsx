import Layout from "@/components/layout/Layout";
import ScrollRevealText from "@/components/ScrollRevealText";
import { useLanguage } from "@/i18n/LanguageContext";


const Contact = () => {
  const { t, language } = useLanguage();

  const socialLinks = [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/ma%C5%82gorzata-lidacka-8601634a/" },
    { label: "PolishPuppyRescue", url: "https://www.polishpuppyrescue.org/blank-1" },
    { label: "Fundacja TAB", url: "https://fundacjatab.pl/" },
  ];


  return (
    <Layout>
      {/* Hero */}
      <section className="container-editorial pt-12 md:pt-16 pb-10 md:pb-12">
        <div className="w-full overflow-hidden">
          <ScrollRevealText key={language} className="heading-large mb-8">
            {t("contact.title")}
          </ScrollRevealText>

          <div className="flex flex-col gap-8">
            {[
              { label: t("contact.emailLabel"), href: "mailto:lidacka@zohomail.eu", value: "lidacka@zohomail.eu" },
              { label: language === "pl" ? "Telefon" : "Phone", href: "tel:+48696070758", value: "+48 696070758" },
            ].map((item) => (
              <div key={item.href} className="flex flex-col items-start gap-3">
                <span className="label-uppercase text-muted-foreground">{item.label}</span>
                <a
                  href={item.href}
                  className="text-xl md:text-2xl leading-normal font-normal hover:opacity-70 transition-opacity"
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social & Location */}
      <section className="container-editorial pb-12 md:pb-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 border-b border-border flex items-center justify-between group hover:opacity-70 transition-opacity"
              >
                <span className="text-body">{link.label}</span>
                <span className="text-muted-foreground group-hover:translate-x-1 transition-transform">→</span>
              </a>
            ))}
          </div>
          <div className="mt-4 md:mt-0">
            <span className="label-uppercase text-muted-foreground block mb-4">{t("contact.locationLabel")}</span>
            <p className="text-body text-muted-foreground">
              {t("contact.location")}
              <br />
              {t("contact.locationSub")}
            </p>
            <p className="text-body text-muted-foreground mt-4">{language === "pl" ? "Pracuję w języku polskim i angielskim." : "I work in Polish and English."}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;


