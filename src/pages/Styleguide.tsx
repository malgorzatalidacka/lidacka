import Layout from "@/components/layout/Layout";

const Styleguide = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="container-editorial pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="label-uppercase">Styleguide</span>
        </div>
        
        <h1 className="heading-display max-w-4xl">
          Design
          <br />
          system<span className="text-accent">_</span>
        </h1>
      </section>

      {/* Typography */}
      <section className="container-editorial pb-16 md:pb-24">
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <span className="w-2 h-2 rounded-full bg-foreground" />
          <span className="label-uppercase">Typography</span>
        </div>
        
        <div className="space-y-12">
          <div className="pb-8 border-b border-border">
            <span className="label-uppercase text-muted-foreground mb-4 block">Heading Display</span>
            <p className="heading-display">The quick brown fox jumps over</p>
          </div>
          
          <div className="pb-8 border-b border-border">
            <span className="label-uppercase text-muted-foreground mb-4 block">Heading Large</span>
            <p className="heading-large">The quick brown fox jumps over the lazy dog</p>
          </div>
          
          <div className="pb-8 border-b border-border">
            <span className="label-uppercase text-muted-foreground mb-4 block">Heading Medium</span>
            <p className="heading-medium">The quick brown fox jumps over the lazy dog</p>
          </div>
          
          <div className="pb-8 border-b border-border">
            <span className="label-uppercase text-muted-foreground mb-4 block">Heading Small</span>
            <p className="heading-small">The quick brown fox jumps over the lazy dog</p>
          </div>
          
          <div className="pb-8 border-b border-border">
            <span className="label-uppercase text-muted-foreground mb-4 block">Text Editorial</span>
            <p className="text-editorial max-w-3xl">The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump!</p>
          </div>
          
          <div className="pb-8 border-b border-border">
            <span className="label-uppercase text-muted-foreground mb-4 block">Text Body</span>
            <p className="text-body max-w-3xl">The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump! The five boxing wizards jump quickly.</p>
          </div>
          
          <div className="pb-8 border-b border-border">
            <span className="label-uppercase text-muted-foreground mb-4 block">Label Uppercase</span>
            <p className="label-uppercase">The quick brown fox jumps over the lazy dog</p>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="container-editorial pb-16 md:pb-24">
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <span className="w-2 h-2 rounded-full bg-foreground" />
          <span className="label-uppercase">Colors</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="aspect-square bg-foreground mb-4" />
            <span className="label-uppercase text-muted-foreground">Foreground</span>
            <p className="text-sm text-muted-foreground mt-1">#0a0a0a</p>
          </div>
          
          <div>
            <div className="aspect-square bg-background border border-border mb-4" />
            <span className="label-uppercase text-muted-foreground">Background</span>
            <p className="text-sm text-muted-foreground mt-1">#ffffff</p>
          </div>
          
          <div>
            <div className="aspect-square bg-muted mb-4" />
            <span className="label-uppercase text-muted-foreground">Muted</span>
            <p className="text-sm text-muted-foreground mt-1">#f5f5f5</p>
          </div>
          
          <div>
            <div className="aspect-square bg-accent mb-4" />
            <span className="label-uppercase text-muted-foreground">Accent</span>
            <p className="text-sm text-muted-foreground mt-1">#22c55e</p>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <section className="container-editorial pb-16 md:pb-24">
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <span className="w-2 h-2 rounded-full bg-foreground" />
          <span className="label-uppercase">Spacing & Grid</span>
        </div>
        
        <div className="space-y-8">
          <div className="pb-8 border-b border-border">
            <span className="label-uppercase text-muted-foreground mb-4 block">Container Margins</span>
            <p className="text-body">48px (mobile) — 64px (desktop)</p>
          </div>
          
          <div className="pb-8 border-b border-border">
            <span className="label-uppercase text-muted-foreground mb-4 block">Grid Gap</span>
            <p className="text-body">24px (mobile) — 32px (desktop)</p>
          </div>
          
          <div className="pb-8 border-b border-border">
            <span className="label-uppercase text-muted-foreground mb-4 block">Section Spacing</span>
            <p className="text-body">96px (mobile) — 128px (desktop)</p>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <span className="w-2 h-2 rounded-full bg-foreground" />
          <span className="label-uppercase">Buttons & Links</span>
        </div>
        
        <div className="space-y-8">
          <div className="pb-8 border-b border-border">
            <span className="label-uppercase text-muted-foreground mb-4 block">Primary Button</span>
            <button className="bg-foreground text-background px-8 py-4 label-uppercase hover:opacity-80 transition-opacity">
              View Project
            </button>
          </div>
          
          <div className="pb-8 border-b border-border">
            <span className="label-uppercase text-muted-foreground mb-4 block">Secondary Button</span>
            <button className="border border-foreground text-foreground px-8 py-4 label-uppercase hover:bg-foreground hover:text-background transition-colors">
              Contact
            </button>
          </div>
          
          <div className="pb-8 border-b border-border">
            <span className="label-uppercase text-muted-foreground mb-4 block">Link with Underline</span>
            <a href="#" className="label-uppercase link-underline">
              View All Projects →
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Styleguide;
