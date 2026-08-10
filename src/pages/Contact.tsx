import Layout from "@/components/layout/Layout";
import ScrollRevealText from "@/components/ScrollRevealText";

const Contact = () => {
  const socialLinks = [
    { label: "Instagram", url: "https://instagram.com" },
    { label: "LinkedIn", url: "https://linkedin.com" },
    { label: "Dribbble", url: "https://dribbble.com" },
    { label: "Behance", url: "https://behance.net" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="container-editorial pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="w-full overflow-hidden">
          <ScrollRevealText className="text-3xl md:text-5xl lg:text-6xl font-normal leading-[1] tracking-tight mb-12">
            Let's create something great together_
          </ScrollRevealText>
          
          <p className="text-body text-muted-foreground max-w-xl mb-12">
            I'm always interested in hearing about new projects, creative ideas, 
            or opportunities to be part of your visions.
          </p>
          
          <div>
            <span className="label-uppercase text-muted-foreground block mb-3">Email</span>
            <a 
              href="mailto:hello@jordanstudio.com"
              className="text-xl md:text-2xl font-normal hover:opacity-70 transition-opacity"
            >
              hello@jordanstudio.com
            </a>
          </div>
        </div>
      </section>

      {/* Social & Location */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 border-b border-border flex items-center justify-between group hover:opacity-70 transition-opacity"
              >
                <span className="text-body">{link.label}</span>
                <span className="text-muted-foreground group-hover:translate-x-1 transition-transform">→</span>
              </a>
            ))}
          </div>
          <div className="mt-4 md:mt-0">
            <span className="label-uppercase text-muted-foreground block mb-4">Location</span>
            <p className="text-body text-muted-foreground">
              Based in New York City
              <br />
              Available worldwide
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
