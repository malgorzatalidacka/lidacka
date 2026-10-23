import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/ProjectCard";
import HeroSlideshow from "@/components/HeroSlideshow";
import ScrollRevealText from "@/components/ScrollRevealText";
import { projects } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const featuredProjects = projects.slice(0, 3);
  const gridProjects = projects.slice(3, 7);
  const { t, language } = useLanguage();

  return (
    <Layout>
      {/* Hero Section with Slideshow */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <HeroSlideshow />
      </section>

      {/* Introduction with Scroll Reveal */}
      <section className="container-editorial py-12 md:py-16">
        <ScrollRevealText key={language} className="heading-medium max-w-5xl">
          {t("home.intro")}
        </ScrollRevealText>
      </section>

      {/* Featured Projects - Single Column */}
      <section className="container-editorial pb-10 md:pb-12">
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="label-uppercase">{t("home.featured")}</span>
        </div>

        <div className="flex flex-col gap-6 md:gap-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} heightClass="h-[60vh] md:h-[80vh] lg:h-[90vh]" />
          ))}
        </div>
      </section>

      {/* Grid Projects */}
      <section className="container-editorial pb-12 md:pb-16">
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <span className="w-2 h-2 rounded-full bg-foreground" />
          <span className="label-uppercase">{t("home.selected")}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {gridProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} variant="clean" />
          ))}
        </div>

        <div className="mt-8 md:mt-10 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 label-uppercase link-underline hover:opacity-70 transition-opacity"
          >
            {t("home.viewAll")}
            <span>→</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
