import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { label: "hello@jordanstudio.com", url: "mailto:hello@jordanstudio.com" },
    { label: "LinkedIn", url: "https://linkedin.com" },
    { label: "Instagram", url: "https://instagram.com" },
  ];

  return (
    <footer className="bg-foreground text-background py-16 md:py-24">
      <div className="container-editorial">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16 md:mb-24">
          
          {/* Left Column - Stay in Touch + Location */}
          <div className="order-2 md:order-1 space-y-12">
            <div>
              <span className="label-uppercase text-background/60 block mb-6">Stay in Touch</span>
              <div className="space-y-0">
                {socialLinks.map((link) => (
                  <a 
                    key={link.label} 
                    href={link.url}
                    target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                    rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="block text-background hover:opacity-70 transition-opacity border-b border-background/20 py-4"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <span className="label-uppercase text-background/60 block mb-4">Location</span>
              <p className="text-background/80 text-sm leading-relaxed">
                New York City<br />
                Available worldwide
              </p>
            </div>
          </div>

          {/* Right Column - Partner + Newsletter */}
          <div className="order-1 md:order-2 space-y-12">
            <div>
              <span className="label-uppercase text-background/60 block mb-6">Partner with Us</span>
              <Link 
                to="/contact" 
                className="inline-block px-8 py-3 bg-background text-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Let's Chat
              </Link>
            </div>
            
            <div>
              <span className="label-uppercase text-background/60 block mb-3">Newsletters</span>
              <p className="text-background/60 text-sm mb-4">
                Stay in the loop with our latest fixations on creativity and technology
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter Email" 
                  className="flex-1 bg-transparent border border-background/20 px-4 py-3 text-background placeholder:text-background/40 focus:outline-none focus:border-background/40"
                />
                <button className="px-6 py-3 bg-background text-foreground font-medium hover:opacity-90 transition-opacity">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-background/10">
          <p className="text-background/60 text-sm">
            © {currentYear} Jordan Studio. All rights reserved.
          </p>
          <a href="#" className="text-background/80 text-sm hover:opacity-70 transition-opacity underline underline-offset-4">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
