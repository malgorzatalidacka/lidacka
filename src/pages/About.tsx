import Layout from "@/components/layout/Layout";
import ScrollRevealText from "@/components/ScrollRevealText";

const About = () => {
  const experience = [
    { role: "Independent Designer", company: "Jordan Studio", period: "2020 — Present" },
    { role: "Senior Designer", company: "Pentagram", period: "2018 — 2020" },
    { role: "Designer", company: "Collins", period: "2016 — 2018" },
    { role: "Junior Designer", company: "Base Design", period: "2014 — 2016" },
  ];

  const services = [
    "Brand Strategy & Positioning",
    "Visual Identity Design",
    "Logo & Mark Development",
    "Typography Systems",
    "Color Palette Development",
    "Brand Guidelines",
    "Art Direction",
    "Digital Product Design",
    "Motion Design",
    "Print & Packaging",
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="container-editorial pt-24 md:pt-32 pb-16 md:pb-24">
        <ScrollRevealText className="heading-large">
          Designer focused on meaningful digital experiences_
        </ScrollRevealText>
      </section>

      {/* Studio Image */}
      <section className="container-editorial pb-16 md:pb-24">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop"
            alt="Jordan Studio workspace"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Bio */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2"></div>
          <div className="col-span-12 md:col-span-8 space-y-6">
            <p className="text-body text-muted-foreground">
              I'm Jordan, an independent artist and designer based in New York City. 
              With over 8 years of experience working with startups, agencies, and established 
              brands, I've developed a deep understanding of what makes a brand resonate with 
              its audience.
            </p>
            <p className="text-body text-muted-foreground">
              My approach combines strategic thinking with meticulous craft—ensuring that every 
              design decision serves a purpose while maintaining the highest standards of visual 
              excellence. When I'm not designing, you'll find me exploring typography archives, 
              photographing urban landscapes, or mentoring emerging designers.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <span className="label-uppercase text-muted-foreground">Experience</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            {experience.map((item, index) => (
              <div
                key={index}
                className="py-5 border-b border-border flex flex-col md:flex-row md:items-center md:justify-between gap-2"
              >
                <div>
                  <h3 className="text-body font-medium">{item.role}</h3>
                  <p className="text-muted-foreground text-sm">{item.company}</p>
                </div>
                <span className="text-sm text-muted-foreground">{item.period}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <span className="label-uppercase text-muted-foreground">Services</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="py-4 border-b border-border"
              >
                <span className="text-body">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
