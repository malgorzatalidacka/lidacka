import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ScrollRevealText from "@/components/ScrollRevealText";
import { useLanguage } from "@/i18n/LanguageContext";
import { toast } from "sonner";

const Contact = () => {
  const { t, language } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const socialLinks = [
    { label: "Instagram", url: "https://instagram.com" },
    { label: "LinkedIn", url: "https://linkedin.com" },
    { label: "Dribbble", url: "https://dribbble.com" },
    { label: "Behance", url: "https://behance.net" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("contact.form.success"));
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="container-editorial pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="w-full overflow-hidden">
          <ScrollRevealText key={language} className="text-3xl md:text-5xl lg:text-6xl font-normal leading-[1] tracking-tight mb-12">
            {t("contact.title")}
          </ScrollRevealText>

          <p className="text-body text-muted-foreground max-w-xl mb-12">
            {t("contact.lead")}
          </p>

          <div>
            <span className="label-uppercase text-muted-foreground block mb-3">{t("contact.emailLabel")}</span>
            <a
              href="mailto:hello@lidacka.studio"
              className="text-xl md:text-2xl font-normal hover:opacity-70 transition-opacity"
            >
              hello@lidacka.studio
            </a>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <span className="label-uppercase text-muted-foreground">{t("contact.formTitle")}</span>
          </div>
          <div className="col-span-12 md:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-8 max-w-xl">
              <div>
                <label htmlFor="name" className="label-uppercase text-muted-foreground block mb-2">
                  {t("contact.form.name")}
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={t("contact.form.namePlaceholder")}
                  className="w-full bg-transparent border-b border-border py-3 text-body focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="label-uppercase text-muted-foreground block mb-2">
                  {t("contact.form.email")}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={t("contact.form.emailPlaceholder")}
                  className="w-full bg-transparent border-b border-border py-3 text-body focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="label-uppercase text-muted-foreground block mb-2">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t("contact.form.messagePlaceholder")}
                  className="w-full bg-transparent border-b border-border py-3 text-body focus:outline-none focus:border-foreground transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
              >
                {t("contact.form.submit")}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social & Location */}
      <section className="container-editorial pb-24 md:pb-32">
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
