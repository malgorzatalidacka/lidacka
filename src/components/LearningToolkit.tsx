import { skillsTools, toolGroups, professionalProfile, keyCompetencies } from "@/data/skillsTools";
import { useLanguage } from "@/i18n/LanguageContext";

export default function LearningToolkit() {
  const { tl, language } = useLanguage();
  const pl = language === "pl";

  return (
    <section className="container-editorial pt-12 md:pt-16 pb-12 md:pb-16" aria-labelledby="toolkit-title">
      <h1 id="toolkit-title" className="heading-large">{pl ? "Konkretne umiejętności, które posiadam_" : "Practical skills I have_"}</h1>
      <div className="mt-8 max-w-4xl">
        <h2 className="label-uppercase">{pl ? "Profil zawodowy" : "Professional profile"}</h2>
        <p className="text-body text-muted-foreground mt-4">{tl(professionalProfile)}</p>
        <h2 className="label-uppercase mt-8">{pl ? "Kluczowe kompetencje" : "Key competencies"}</h2>
        <ul className="list-disc pl-5 mt-4 space-y-3 text-body text-muted-foreground">
          {keyCompetencies.map((item) => <li key={item.en}>{tl(item)}</li>)}
        </ul>
      </div>

      <div className="mt-10 md:mt-12 space-y-8">
        {toolGroups.map((group) => (
          <section key={group.id} aria-labelledby={`tools-${group.id}`} className={`bg-gradient-to-br ${group.gradient} border border-border p-6 md:p-8`}>
            <h2 id={`tools-${group.id}`} className="heading-medium">{tl(group.title)}</h2>
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 mt-6">
        {group.tools.map((name) => skillsTools.find((tool) => tool.name === name)!).map((tool) => (
          <article key={tool.name} className="min-w-0 border-t border-border pt-6">
            <h3 className="heading-small">{tool.name}</h3>
            <p className="text-body text-muted-foreground mt-3">{tl(tool.description)}</p>
            <div className="mt-5">
              {tool.artifact ? (
                tool.artifact.kind === "image" ? (
                  <img src={tool.artifact.url} alt={tl(tool.artifact.label)} loading="lazy" className="w-full h-auto border border-border" />
                ) : tool.artifact.kind === "embed" ? (
                  <iframe src={tool.artifact.url} title={`${tool.name}: ${tl(tool.artifact.label)}`} loading="lazy" className="w-full h-96 border border-border" allowFullScreen />
                ) : (
                  <a href={tool.artifact.url} className="text-body underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">{tl(tool.artifact.label)}</a>
                )
              ) : (
                <div className="border border-dashed border-border bg-secondary/30 p-5">
                  <p className="label-uppercase text-muted-foreground">{pl ? "Miejsce na przykład pracy" : "Space for a work sample"}</p>
                  <p className="text-sm text-muted-foreground mt-2">{tl(tool.example)}</p>
                </div>
              )}
            </div>
          </article>
        ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}





