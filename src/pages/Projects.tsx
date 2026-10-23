import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/ProjectCard";
import ScrollRevealText from "@/components/ScrollRevealText";
import { projects } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";

const Work = () => {
  const { t, language } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="container-editorial pt-12 md:pt-16 pb-10 md:pb-10">
        <ScrollRevealText key={language} className="heading-display">
          {t("projects.title")}
        </ScrollRevealText>
      </section>

      {/* Projects - 2 Column Grid */}
      <section className="container-editorial pb-12 md:pb-16">
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
