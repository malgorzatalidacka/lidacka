import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/ProjectCard";
import HeroSlideshow from "@/components/HeroSlideshow";
import ScrollRevealText from "@/components/ScrollRevealText";
import { projects } from "@/data/projects";

const Index = () => {
  const featuredProjects = projects.slice(0, 3);
  const gridProjects = projects.slice(3, 7);

  return (
    <Layout>
      {/* Hero Section with Slideshow */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <HeroSlideshow />
      </section>

      {/* Introduction with Scroll Reveal */}
      <section className="container-editorial py-24 md:py-32">
        <ScrollRevealText className="text-xl md:text-2xl lg:text-[42px] font-normal leading-tight lg:leading-[1.2] max-w-5xl">
          I help teams build high-impact brand experiences. I'm Lidacka, an independent artist and designer based in New York City. I specialize in brand identity and visual systems for companies that value thoughtful design and strategic thinking.
        </ScrollRevealText>
      </section>

      {/* Featured Projects - Single Column */}
      <section className="container-editorial pb-16 md:pb-24">
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="label-uppercase">Featured</span>
        </div>

        <div className="flex flex-col gap-6 md:gap-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} heightClass="h-[60vh] md:h-[80vh] lg:h-[90vh]" />
          ))}
        </div>
      </section>

      {/* Grid Projects */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <span className="w-2 h-2 rounded-full bg-foreground" />
          <span className="label-uppercase">Selected Work</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {gridProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} variant="clean" />
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 label-uppercase link-underline hover:opacity-70 transition-opacity"
          >
            View All Projects
            <span>→</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
