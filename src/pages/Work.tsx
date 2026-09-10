import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/ProjectCard";
import ScrollRevealText from "@/components/ScrollRevealText";
import { projects } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";

const Work = () => {
  const { t, tl, language } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="container-editorial pt-24 md:pt-32 pb-16 md:pb-20">
        <ScrollRevealText key={language} className="heading-display">
          {t("work.title")}
        </ScrollRevealText>
      </section>

      {/* Featured interactive project */}
      <section className="container-editorial pb-12 md:pb-16">
        <Link
          to="/work/kluby-rodzicow"
          className="group block border border-border bg-card p-6 md:p-10 hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="label-uppercase text-muted-foreground">
            {language === "pl" ? "Projekt interaktywny" : "Interactive project"}
          </span>
          <h2 className="heading-medium mt-4 max-w-3xl group-hover:opacity-70 transition-opacity">
            {tl(parentClubsIntro.title)}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-sm md:text-base leading-relaxed">
            {tl(parentClubsIntro.lead)}
          </p>
        </Link>
      </section>

      {/* Projects - 2 Column Grid */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              variant="clean"
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Work;
