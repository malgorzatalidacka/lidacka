import Layout from "@/components/layout/Layout";
import { getProjectById } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";

const ParentClubs = () => {
  const { tl, language } = useLanguage();
  const project = getProjectById("kluby-rodzicow")!;
  const pl = language === "pl";

  return (
    <Layout>
      <header className="container-editorial pt-12 md:pt-16 pb-8 md:pb-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <p className="label-uppercase text-muted-foreground">{pl ? "Projekt" : "Project"}</p>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h1 className="heading-display mb-4">{project.title}</h1>
            <p className="text-sm text-muted-foreground">{project.client} · {tl(project.category)} · {project.year}</p>
          </div>
        </div>
      </header>

      <section aria-labelledby="clubs-description" className="container-editorial pb-10 md:pb-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <h2 id="clubs-description" className="label-uppercase text-muted-foreground">{pl ? "Opis projektu" : "Project description"}</h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="text-body text-muted-foreground">{tl(project.description)}</p>
          </div>
        </div>
      </section>

      <div className="container-editorial pb-12 md:pb-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-start-3 md:col-span-10 grid md:grid-cols-2 gap-12 md:gap-16">
            <section aria-labelledby="clubs-challenge">
              <h2 id="clubs-challenge" className="label-uppercase text-muted-foreground mb-4">{pl ? "Wyzwanie" : "Challenge"}</h2>
              <p className="text-body text-muted-foreground">{tl(project.challenge)}</p>
            </section>
            <section aria-labelledby="clubs-solution">
              <h2 id="clubs-solution" className="label-uppercase text-muted-foreground mb-4">{pl ? "Rozwiązanie" : "Solution"}</h2>
              <p className="text-body text-muted-foreground">{tl(project.solution)}</p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ParentClubs;
