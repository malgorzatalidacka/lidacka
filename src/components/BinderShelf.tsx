import { useEffect, useRef, useState } from "react";
import { parentClubsIntro, scenarios, type Scenario } from "@/data/parentClubs";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const ui = parentClubsIntro.ui;

const BinderSpine = ({
  scenario,
  index,
  onOpen,
}: {
  scenario: Scenario;
  index: number;
  onOpen: () => void;
}) => {
  const { tl } = useLanguage();

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`${tl(ui.open)}: ${tl(scenario.title)}`}
      className={cn(
        "group relative flex-1 min-w-0 cursor-pointer text-left",
        "focus-visible:outline-none",
      )}
    >
      {/* Binder body */}
      <div
        className={cn(
          "relative flex flex-col justify-between",
          "h-40 sm:h-56 md:h-72 w-full",
          "border border-foreground/20 bg-secondary",
          "transition-transform duration-500 ease-out motion-reduce:transition-none",
          "group-hover:-translate-y-3 group-focus-visible:-translate-y-3",
          "group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-background",
        )}
        style={{ transitionDelay: `${index * 20}ms` }}
      >
        {/* Spine rings */}
        <div className="absolute inset-y-6 left-1/2 -translate-x-1/2 flex flex-col justify-between items-center opacity-40">
          <span className="w-3 h-px bg-foreground" />
          <span className="w-3 h-px bg-foreground" />
          <span className="w-3 h-px bg-foreground" />
        </div>

        {/* Top label field */}
        <div className="relative m-2 md:m-3 border border-foreground/15 bg-background px-2 py-3 md:px-3 md:py-4">
          <span className="block text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="block mt-1 text-xs md:text-sm font-medium leading-snug break-words">
            {tl(scenario.title)}
          </span>
        </div>

        {/* Bottom tag */}
        <div className="relative m-2 md:m-3 flex flex-col gap-2">
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            {tl(scenario.tag)}
          </span>
          <span className="text-[10px] md:text-xs text-foreground opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 motion-reduce:transition-none">
            {tl(ui.open)} →
          </span>
        </div>
      </div>
    </button>
  );
};

const ScenarioDocument = ({
  scenario,
  onClose,
}: {
  scenario: Scenario;
  onClose: () => void;
}) => {
  const { tl } = useLanguage();
  const [showExcerpt, setShowExcerpt] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      ref={ref}
      tabIndex={-1}
      role="region"
      aria-label={tl(scenario.title)}
      className="animate-fade-in motion-reduce:animate-none outline-none"
    >
      <button
        type="button"
        onClick={onClose}
        className="label-uppercase text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {tl(ui.back)}
      </button>

      <article className="mt-6 border border-border bg-card">
        {/* Header */}
        <header className="border-b border-border p-6 md:p-10">
          <span className="label-uppercase text-muted-foreground">{tl(ui.projectCard)}</span>
          <h3 className="heading-medium mt-3">{tl(scenario.title)}</h3>
          <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {tl(ui.audience)}
              </dt>
              <dd className="mt-1 text-sm md:text-base">{tl(scenario.audience)}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {tl(ui.duration)}
              </dt>
              <dd className="mt-1 text-sm md:text-base">{tl(scenario.duration)}</dd>
            </div>
          </dl>
        </header>

        {/* Project card: need → goal → activities → materials → outcome */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
          <section className="p-6 md:p-10">
            <h4 className="label-uppercase text-muted-foreground">{tl(ui.need)}</h4>
            <p className="mt-3 text-sm md:text-base leading-relaxed">{tl(scenario.need)}</p>

            <h4 className="label-uppercase text-muted-foreground mt-8">{tl(ui.goal)}</h4>
            <p className="mt-3 text-sm md:text-base leading-relaxed">{tl(scenario.goal)}</p>
          </section>

          <section className="p-6 md:p-10">
            <h4 className="label-uppercase text-muted-foreground">{tl(ui.activities)}</h4>
            <ul className="mt-3 space-y-2">
              {scenario.activities.map((a, i) => (
                <li key={i} className="text-sm md:text-base leading-relaxed flex gap-3">
                  <span className="text-muted-foreground tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{tl(a)}</span>
                </li>
              ))}
            </ul>

            <h4 className="label-uppercase text-muted-foreground mt-8">{tl(ui.materials)}</h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {scenario.materials.map((m, i) => (
                <li key={i} className="border border-border px-3 py-1 text-xs md:text-sm">
                  {tl(m)}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="border-t border-border p-6 md:p-10">
          <h4 className="label-uppercase text-muted-foreground">{tl(ui.outcome)}</h4>
          <p className="mt-3 text-base md:text-lg leading-relaxed max-w-3xl">
            {tl(scenario.outcome)}
          </p>
        </div>

        {/* Excerpt toggle */}
        <div className="border-t border-border p-6 md:p-10">
          <button
            type="button"
            onClick={() => setShowExcerpt((v) => !v)}
            aria-expanded={showExcerpt}
            className="label-uppercase border border-foreground px-5 py-3 hover:bg-foreground hover:text-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {showExcerpt ? tl(ui.hide) : tl(ui.reveal)}
          </button>

          {showExcerpt && (
            <div className="mt-8 animate-fade-in motion-reduce:animate-none grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h4 className="label-uppercase text-muted-foreground">{tl(ui.flow)}</h4>
                <ol className="mt-4 space-y-3">
                  {scenario.steps.map((s, i) => (
                    <li
                      key={i}
                      className="border-b border-border pb-3 text-sm md:text-base leading-relaxed"
                    >
                      {tl(s.label)}
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h4 className="label-uppercase text-muted-foreground">{tl(ui.methods)}</h4>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {scenario.methods.map((m, i) => (
                    <li key={i} className="border border-border px-3 py-1 text-xs md:text-sm">
                      {tl(m)}
                    </li>
                  ))}
                </ul>

                <h4 className="label-uppercase text-muted-foreground mt-8">{tl(ui.designed)}</h4>
                <p className="mt-3 text-sm md:text-base leading-relaxed">{tl(scenario.designed)}</p>

                {scenario.attachmentUrl && (
                  <a
                    href={scenario.attachmentUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline inline-block mt-6 text-sm"
                  >
                    {scenario.attachmentLabel ? tl(scenario.attachmentLabel) : "PDF"}
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

const BinderShelf = () => {
  const { tl } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(null);
  const open = scenarios.find((s) => s.id === openId) ?? null;

  return (
    <div>
      <div className="max-w-2xl">
        <h2 className="heading-small">{tl(parentClubsIntro.shelfTitle)}</h2>
        <p className="text-muted-foreground mt-2 text-sm md:text-base">
          {tl(parentClubsIntro.shelfSub)}
        </p>
      </div>

      <div className="mt-10 md:mt-14">
        {open ? (
          <ScenarioDocument scenario={open} onClose={() => setOpenId(null)} />
        ) : (
          <div className="animate-fade-in motion-reduce:animate-none">
            {/* Shelf */}
            <div className="relative px-3 md:px-6 pt-4">
              <div className="flex flex-row gap-2 md:gap-4 items-end">
                {scenarios.map((s, i) => (
                  <BinderSpine
                    key={s.id}
                    scenario={s}
                    index={i}
                    onOpen={() => setOpenId(s.id)}
                  />
                ))}
              </div>
              {/* Shelf board */}
              <div className="h-2 md:h-3 bg-foreground/80 -mx-3 md:-mx-6" />
              <div className="h-6 md:h-8 bg-foreground/10 mx-6 md:mx-12" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BinderShelf;
