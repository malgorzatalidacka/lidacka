import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { useLanguage } from "@/i18n/LanguageContext";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsCarousel() {
  const { language, tl, t } = useLanguage();
  const [viewport, api] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  const reducedMotion = useReducedMotion();
  const resumeAt = useRef(0);
  const pl = language === "pl";
  const interact = useCallback(() => { resumeAt.current = Date.now() + 12000; }, []);



  useEffect(() => {
    if (!api) return;
    const sync = () => setSelected(api.selectedScrollSnap());
    api.on("select", sync).on("reInit", sync).on("pointerDown", interact);
    sync();
    return () => { api.off("select", sync).off("reInit", sync).off("pointerDown", interact); };
  }, [api, interact]);



  return (
    <section id="opinie" className="container-editorial pb-12 md:pb-16" aria-labelledby="opinie-title">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-4">
          <h2 id="opinie-title" className="label-uppercase text-muted-foreground">{t("about.testimonials")}</h2>
        </div>
        <div className="min-w-0">
          <div role="region" aria-roledescription={pl ? "karuzela" : "carousel"} aria-label={t("about.testimonials")} onFocusCapture={interact} onPointerDownCapture={interact} className="border-y border-border py-6 md:py-8">
            <span aria-hidden="true" className="block h-14 text-7xl leading-none text-muted-foreground/30">“</span>
            <div ref={viewport} className="overflow-hidden touch-pan-y">
              <div className="flex">
                {testimonials.map((item, index) => (
                  <figure key={item.id} role="group" aria-roledescription={pl ? "slajd" : "slide"} aria-label={`${index + 1} / ${testimonials.length}`} aria-hidden={selected !== index} className="min-w-0 flex-[0_0_100%] px-4 md:px-8">
                    <blockquote className="mx-auto max-w-[65ch] text-body text-left">{tl(item.quote)}</blockquote>
                    <figcaption className="mt-6 text-sm text-muted-foreground leading-[1.5]">
                      <span className="block text-foreground">— {tl(item.name)}</span>
                      <span>{[tl(item.role), tl(item.organization)].filter(Boolean).join(" / ")}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <div className="mt-6 flex flex-col items-center justify-center gap-2">
              <div className="flex" role="group" aria-label={pl ? "Wybierz opinię" : "Choose a testimonial"}>
                {testimonials.map((item, index) => (
                  <button key={item.id} type="button" aria-label={`${pl ? "Pokaż opinię" : "Show testimonial"} ${index + 1}`} aria-current={selected === index ? "true" : undefined} onClick={() => { interact(); api?.scrollTo(index, reducedMotion); }} className="group flex h-11 w-10 sm:w-11 items-center justify-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <span aria-hidden="true" className={`h-2.5 w-2.5 border transition-colors motion-reduce:transition-none ${selected === index ? "border-foreground bg-foreground" : "border-muted-foreground/40 bg-transparent group-hover:border-foreground"}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





