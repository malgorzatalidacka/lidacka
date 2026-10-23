import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const socialLinks = [
    { label: "lidacka@zohomail.eu", url: "mailto:lidacka@zohomail.eu" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/ma%C5%82gorzata-lidacka-8601634a/" },
    { label: "+48 696 070 758", url: "tel:+48696070758" },
  ];

  return (
    <footer className="bg-foreground text-background py-10 md:py-12">
      <div className="container-editorial">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-10 md:mb-12">
          
          {/* Left Column */}
          <div className="order-2 md:order-1 space-y-8">
            <div>
              <span className="label-uppercase text-background/60 block mb-4">{t("footer.stayInTouch")}</span>
              <div className="space-y-0">
                {socialLinks.map((link) => (
                  <a 
                    key={link.label} 
                    href={link.url}
                    target={link.url.startsWith("https:") ? "_blank" : undefined}
                    rel={link.url.startsWith("https:") ? "noopener noreferrer" : undefined}
                    className="block text-background hover:opacity-70 transition-opacity border-b border-background/20 py-4"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <span className="label-uppercase text-background/60 block mb-4">{t("footer.location")}</span>
              <p className="text-background/80 text-sm leading-[1.5]">
                {t("footer.locationValue")}<br />
                {t("footer.locationSub")}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-6 border-t border-background/10">
          <p className="text-background/60 text-sm">
            © {currentYear} Lidacka Studio. {t("footer.rights")}
          </p>
          <a href="#" className="text-background/80 text-sm hover:opacity-70 transition-opacity underline underline-offset-4">
            {t("footer.privacy")}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
