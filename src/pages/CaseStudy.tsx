import { useParams, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ScrollRevealText from "@/components/ScrollRevealText";
import ProjectCard from "@/components/ProjectCard";
import { getProjectById, projects } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : null;
  const { t, tl } = useLanguage();

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  // Get 3 latest projects excluding current one
  const latestProjects = projects
    .filter(p => p.id !== project.id)
    .slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="container-editorial pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <span className="label-uppercase text-muted-foreground">{t("case.label")}</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <ScrollRevealText className="heading-display mb-6">
              {`${project.title.replace("_", "")}_`}
            </ScrollRevealText>
            
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-muted-foreground">
              <span className="text-sm">{project.client}</span>
              <span className="text-border">•</span>
              <span className="text-sm">{tl(project.category)}</span>
              <span className="text-border">•</span>
              <span className="text-sm">{project.year}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image - Full Bleed */}
      <section className="pb-16 md:pb-24">
        <div className="w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover animate-scale-in"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="container-editorial pb-16 md:pb-24">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <span className="label-uppercase text-muted-foreground">{t("case.overview")}</span>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="text-body text-muted-foreground">
              {tl(project.description)}
            </p>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="container-editorial pb-16 md:pb-24">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2"></div>
          <div className="col-span-12 md:col-span-10">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <span className="label-uppercase text-muted-foreground block mb-4">{t("case.challenge")}</span>
                <p className="text-body text-muted-foreground">
                  {tl(project.challenge)}
                </p>
              </div>
              
              <div>
                <span className="label-uppercase text-muted-foreground block mb-4">{t("case.solution")}</span>
                <p className="text-body text-muted-foreground">
                  {tl(project.solution)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="space-y-6 md:space-y-8">
          {project.images[0] && (
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={project.images[0]}
                alt={`${project.title} - ${t("case.image")} 1`}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          {project.images.length > 2 && (
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.images[1]}
                  alt={`${project.title} - ${t("case.image")} 2`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.images[2]}
                  alt={`${project.title} - ${t("case.image")} 3`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Latest Work */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <span className="w-2 h-2 rounded-full bg-foreground" />
          <span className="label-uppercase">{t("case.latest")}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {latestProjects.map((p, index) => (
            <ProjectCard 
              key={p.id} 
              project={p} 
              index={index}
              variant="clean"
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudy;
