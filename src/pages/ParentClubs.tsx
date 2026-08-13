import Layout from "@/components/layout/Layout";
import ScrollRevealText from "@/components/ScrollRevealText";
import BinderShelf from "@/components/BinderShelf";
import { parentClubsIntro } from "@/data/parentClubs";
import { useLanguage } from "@/i18n/LanguageContext";

const ParentClubs = () => {
  const { tl, language } = useLanguage();

  return (
    <Layout>
      <section className="container-editorial pt-24 md:pt-32 pb-10 md:pb-16">
        <span className="label-uppercase text-muted-foreground">
          {language === "pl" ? "Projekt" : "Project"}
        </span>
        <ScrollRevealText key={language} className="heading-large mt-4 max-w-5xl">
          {tl(parentClubsIntro.title)}
        </ScrollRevealText>
        <p className="text-body text-muted-foreground max-w-2xl mt-8">
          {tl(parentClubsIntro.lead)}
        </p>
      </section>

      <section className="container-editorial pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {parentClubsIntro.blocks.map((b) => (
            <article key={b.label.pl} className="border border-border bg-card p-6 md:p-8">
              <h2 className="label-uppercase text-muted-foreground">{tl(b.label)}</h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed">{tl(b.body)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-editorial pb-24 md:pb-32">
        <BinderShelf />
      </section>
    </Layout>
  );
};

export default ParentClubs;
