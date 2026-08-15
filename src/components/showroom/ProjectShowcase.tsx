import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/LanguageContext";
import type { PlayProject } from "@/data/showroom";
import { cn } from "@/lib/utils";

interface Props {
  project: PlayProject;
  actionLabel: string;
  featured?: boolean;
}

const ProjectShowcase = ({ project, actionLabel, featured }: Props) => {
  const { tl, language } = useLanguage();
  const [open, setOpen] = useState(false);

  const meta = [
    { label: language === "pl" ? "Odbiorca" : "Audience", value: tl(project.audience) },
    { label: language === "pl" ? "Cel edukacyjny" : "Learning goal", value: tl(project.goal) },
    { label: language === "pl" ? "Narzędzie" : "Tool", value: project.tool },
    { label: language === "pl" ? "Moja rola" : "My role", value: tl(project.role) },
  ];

  return (
    <>
      <article
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-border bg-card",
          featured ? "p-6 md:p-10" : "p-6 md:p-8"
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        />
        <div className="relative">
          <span className="label-uppercase text-muted-foreground">
            {language === "pl" ? "Zaprojektowane w" : "Designed in"} {project.tool}
          </span>

          <h3 className={cn("mt-4 font-medium tracking-tight", featured ? "heading-medium" : "heading-small")}>
            {project.title}
          </h3>

          <p className="mt-4 max-w-2xl text-muted-foreground text-sm md:text-base leading-relaxed">
            {tl(project.description)}
          </p>

          <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-muted-foreground">{m.label}</dt>
                <dd className="mt-1 text-sm md:text-base">{m.value}</dd>
              </div>
            ))}
          </dl>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-foreground px-6 py-3 text-xs uppercase tracking-[0.15em] transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {actionLabel}
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </article>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-left text-xl font-medium">{project.title}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full overflow-hidden rounded-xl border border-border bg-secondary">
            {project.embedUrl ? (
              <iframe
                src={project.embedUrl}
                title={project.title}
                className="h-full w-full"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
                <span className="label-uppercase text-muted-foreground">
                  {language === "pl" ? "Miejsce na osadzenie" : "Embed placeholder"}
                </span>
                <p className="max-w-md text-sm text-muted-foreground">
                  {language === "pl"
                    ? "Wklej publiczny link do projektu w polu embedUrl w src/data/showroom.ts, aby osadzić go tutaj."
                    : "Paste the public project link into embedUrl in src/data/showroom.ts to embed it here."}
                </p>
              </div>
            )}
          </div>
          {project.externalUrl && (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noreferrer"
              className="link-underline text-sm text-muted-foreground"
            >
              {language === "pl" ? "Otwórz w nowej karcie" : "Open in a new tab"} →
            </a>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectShowcase;
