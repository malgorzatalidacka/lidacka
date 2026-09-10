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
      <section className="container-editorial pt-24 md:pt-32 pb-16 md:pb-20">
        <ScrollRevealText key={language} className="heading-display">
          {t("work.title")}
        </ScrollRevealText>
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
