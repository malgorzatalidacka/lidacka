import Layout from "@/components/layout/Layout";
import ScrollRevealText from "@/components/ScrollRevealText";
import { useLanguage } from "@/i18n/LanguageContext";

/**
 * Paste here the public link to the published Articulate 360 course
 * (Review 360 share link or self-hosted /story.html URL).
 * Leave empty to show the placeholder frame.
 */
const ARTICULATE_EMBED_URL = "";

const InteractiveLearning = () => {
  const { t, language } = useLanguage();

  const features = [
    { title: t("learning.f1.title"), body: t("learning.f1.body") },
    { title: t("learning.f2.title"), body: t("learning.f2.body") },
    { title: t("learning.f3.title"), body: t("learning.f3.body") },
  ];

  return (
    <Layout>
      <section className="container-editorial pt-24 md:pt-32 pb-10 md:pb-16">
        <span className="label-uppercase text-muted-foreground">{t("learning.label")}</span>
        <ScrollRevealText key={language} className="heading-large mt-4 max-w-5xl">
          {t("learning.title")}
        </ScrollRevealText>
        <p className="text-body text-muted-foreground max-w-2xl mt-8">{t("learning.intro")}</p>
      </section>

      <section className="container-editorial pb-16 md:pb-24">
        <div className="border border-border bg-card overflow-hidden">
          <div className="aspect-video w-full">
            {ARTICULATE_EMBED_URL ? (
              <iframe
                src={ARTICULATE_EMBED_URL}
                title={t("learning.title")}
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-center px-6">
                <span className="label-uppercase text-muted-foreground">
                  {t("learning.placeholder.label")}
                </span>
                <p className="text-muted-foreground text-sm md:text-base max-w-md">
                  {t("learning.placeholder.body")}
                </p>
              </div>
            )}
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-4">{t("learning.embedNote")}</p>
      </section>

      <section className="container-editorial pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((f) => (
            <article key={f.title} className="border border-border bg-card p-6 md:p-8">
              <h2 className="text-lg md:text-xl font-medium">{f.title}</h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-3">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default InteractiveLearning;
