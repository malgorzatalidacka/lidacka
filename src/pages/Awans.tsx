import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { awansMeta, awansChallenge, awansRole } from "@/data/awans";

const Awans = () => {
  const { tl, language } = useLanguage();
  const pl = language === "pl";

  return (
    <Layout>
      <header className="container-editorial pt-12 md:pt-16 pb-8 md:pb-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <p className="label-uppercase text-muted-foreground">{pl ? "Projekt" : "Project"}</p>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h1 className="heading-display mb-4">{awansMeta.title}</h1>
            <p className="text-sm text-muted-foreground">{awansMeta.client} · {tl(awansMeta.tag)} · {tl(awansMeta.duration)}</p>
          </div>
        </div>
      </header>

      <section aria-labelledby="awans-description" className="container-editorial pb-10 md:pb-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <h2 id="awans-description" className="label-uppercase text-muted-foreground">{pl ? "Opis projektu" : "Project description"}</h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="text-body text-muted-foreground">{tl(awansMeta.overview)}</p>
          </div>
        </div>
      </section>

      <div className="container-editorial pb-12 md:pb-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-start-3 md:col-span-10 grid md:grid-cols-2 gap-12 md:gap-16">
            <section aria-labelledby="awans-challenges">
              <h2 id="awans-challenges" className="label-uppercase text-muted-foreground mb-4">{pl ? "Wyzwania" : "Challenges"}</h2>
              <p className="text-body text-muted-foreground">{tl(awansChallenge.lead)}</p>
              <p className="text-body text-muted-foreground mt-4">{tl(awansChallenge.needsLabel)}</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-body text-muted-foreground">
                {awansChallenge.needs.map((need) => <li key={need.en}>{tl(need)}</li>)}
              </ul>
            </section>
            <section aria-labelledby="awans-delivery">
              <h2 id="awans-delivery" className="label-uppercase text-muted-foreground mb-4">{pl ? "Realizacja" : "Delivery"}</h2>
              <p className="text-body text-muted-foreground">{tl(awansRole.body)}</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-body text-muted-foreground">
                {awansRole.points.map((point) => <li key={point.en}>{tl(point)}</li>)}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Awans;
