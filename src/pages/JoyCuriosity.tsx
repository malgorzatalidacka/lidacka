import { useId, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { discoveries, lensCopy } from "@/data/joyCuriosity";
import "./JoyCuriosity.css";

type Lens = "normal" | "joy" | "curiosity";
export default function JoyCuriosity() {
  const { tl, language } = useLanguage();
  const pl = language === "pl";
  const reduced = useReducedMotion();
  const id = `lens-${useId().replace(/:/g, "")}`;
  const svg = useRef<SVGSVGElement>(null);
  const foundRef = useRef(new Set<string>());
  const [lens, setLens] = useState<Lens>("normal");
  const [point, setPoint] = useState({ x: 180, y: 170 });
  const [selected, setSelected] = useState<number | null>(null);
  const [found, setFound] = useState(0);
  const [announcement, setAnnouncement] = useState("");
  const move = (x: number, y: number, active = lens) => {
    const next = { x: Math.max(25, Math.min(975, x)), y: Math.max(25, Math.min(575, y)) };
    setPoint(next);
    if (active === "normal") return;
    const index = discoveries.findIndex(d => Math.hypot(d.x - next.x, d.y - next.y) < 100);
    setSelected(index < 0 ? null : index);
    if (index >= 0 && !foundRef.current.has(`${active}-${index}`)) {
      foundRef.current.add(`${active}-${index}`);
      setFound(foundRef.current.size);
      setAnnouncement(tl(discoveries[index][active]));
    }
  };
  const choose = (next: Lens) => {
    setLens(next);
    setAnnouncement(next === "normal" ? (pl ? "Widok bez soczewki" : "Normal view") : next.toUpperCase());
    if (next !== "normal") { const d = discoveries[selected ?? 0]; move(d.x, d.y, next); }
  };
  const visit = (index: number) => { const i = (index + discoveries.length) % discoveries.length; move(discoveries[i].x, discoveries[i].y); };
  const pointer = (event: PointerEvent<SVGSVGElement>) => {
    if (event.pointerType !== "mouse" && event.type === "pointermove" && !event.buttons) return;
    const matrix = svg.current?.getScreenCTM();
    if (!matrix) return;
    const p = new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse());
    move(p.x, p.y);
  };
  const keyboard = (event: KeyboardEvent<HTMLDivElement>) => {
    const deltas: Record<string, [number, number]> = { ArrowLeft: [-35, 0], ArrowRight: [35, 0], ArrowUp: [0, -35], ArrowDown: [0, 35] };
    if (deltas[event.key] && lens !== "normal") { event.preventDefault(); move(point.x + deltas[event.key][0], point.y + deltas[event.key][1]); }
    if (event.key === "Home" && lens !== "normal") { event.preventDefault(); visit(0); }
    if (event.key === "Escape") choose("normal");
  };
  const ink = lens === "joy" ? "#644020" : "#294b40";
  return <Layout><div className="joy-space" data-reduced-motion={reduced}>
    <section className="container-editorial pt-10 md:pt-12 pb-8">
      <Link to="/passion-play" className="label-uppercase link-underline">{pl ? "← Inspiracje" : "← Inspirations"}</Link>
      <p className="label-uppercase text-muted-foreground mt-8">{tl(lensCopy.tag)}</p>
      <h1 className="heading-display mt-4">JOY &<br />CURIOSITY<span className="joy-title-dot">.</span></h1>
      <p className="text-editorial mt-4 max-w-2xl">{tl(lensCopy.subtitle)}</p>
      <p className="text-body text-muted-foreground mt-4 max-w-2xl">{tl(lensCopy.intro)}</p>
    </section>
    <section className="container-editorial pb-10" aria-label={pl ? "Eksperyment z soczewkami" : "Lens experiment"}>
      <div className="joy-controls" role="group" aria-label={pl ? "Wybierz perspektywę" : "Choose a perspective"}>{(["normal", "joy", "curiosity"] as Lens[]).map(mode => <button key={mode} type="button" aria-pressed={lens === mode} onClick={() => choose(mode)} className={`joy-mode joy-mode-${mode}`}>{mode === "normal" ? (pl ? "Bez soczewki" : "Normal view") : mode.toUpperCase()}</button>)}<span className="joy-count">{pl ? "Odkrycia" : "Discoveries"} {found}/{discoveries.length * 2}</span></div>
      <p id={`${id}-instructions`} className="text-sm text-muted-foreground my-5">{tl(lensCopy.instructions)}</p>
      <div className={`joy-scene joy-scene-${lens}`} tabIndex={0} role="group" aria-label={pl ? "Przestrzeń odkrywania — użyj strzałek do przesuwania soczewki" : "Discovery space — use arrow keys to move the lens"} aria-describedby={`${id}-instructions`} onKeyDown={keyboard}>
        <svg ref={svg} viewBox="0 0 1000 600" aria-hidden="true" onPointerDown={pointer} onPointerMove={pointer}>
          <defs><pattern id={`${id}-grid`} width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#c9c5ba" strokeWidth=".6" /></pattern><clipPath id={id}><circle cx={point.x} cy={point.y} r="145" /></clipPath></defs>
          <rect width="1000" height="600" fill="#eeeae1" /><rect width="1000" height="600" fill={`url(#${id}-grid)`} opacity=".5" />
          <g id={`${id}-world`}>
            <path d="M0 50L310 0 215 330 0 365Z" fill="#e4dcc9" /><path d="M75 70L235 28M60 135L220 93M40 205L200 163" stroke="#faf8f2" strokeWidth="25" />
            <g transform="translate(390 82) rotate(-7 120 90)"><path d="M0 0Q60 -12 120 12Q180 -12 240 0V170Q180 156 120 182Q60 156 0 170Z" fill="#faf8f2" stroke="#66665d" strokeWidth="2" /><path d="M120 12V182M24 40H95M24 58H95M24 76H80M148 40H218M148 58H218M148 76H200" fill="none" stroke="#88887a" strokeWidth="2" /><path d="M190 0V45L199 37 208 45V0" fill="#697969" /></g>
            <g transform="translate(820 195)"><circle r="70" fill="#d2c8b7" stroke="#6b685f" strokeWidth="2" /><path d="M-66 -20Q0 10 55 44M-50 49Q0 0 28 -64M-13 -68Q-22 0 -5 69" fill="none" stroke="#777368" strokeWidth="2" /></g>
            <g transform="translate(165 350) rotate(9)"><rect width="240" height="140" fill="#faf8f2" stroke="#8d8b80" /><path d="M24 30H180M24 50H150M24 100H210" stroke="#afada3" strokeWidth="2" /><path d="M190 0L215 -18 230 0" stroke="#686c60" fill="none" strokeWidth="3" /></g>
            <g transform="translate(560 335) rotate(-5 100 70)"><path d="M0 0H225V160H0Z" fill="#d7d1c2" stroke="#777468" strokeWidth="2" /><path d="M0 0L65 48 112 0 158 48 225 0M65 48V160M158 48V160" fill="none" stroke="#999386" strokeDasharray="6 6" /><path d="M90 118L196 28" stroke="#77816f" strokeWidth="18" /><path d="M15 25L96 140" stroke="#f4eee0" strokeWidth="15" /></g>
            <path d="M918 580Q920 440 900 363M901 410Q858 390 869 363Q914 368 901 410M916 478Q951 420 977 446Q966 484 916 478" fill="#85917d" stroke="#66715d" strokeWidth="2" />
          </g>
          <text x="42" y="552" fill="#575a50" fontSize="13" letterSpacing="3">{pl ? "ŚWIAT W ZWYKŁYM KADRZE" : "AN ORDINARY LITTLE WORLD"}</text>
          {lens !== "normal" && <g clipPath={`url(#${id})`}>
            <rect width="1000" height="600" fill={lens === "joy" ? "#fcf3de" : "#e8eee9"} /><use href={`#${id}-world`} opacity=".22" />
            {lens === "curiosity" && <path d="M180 170Q330 360 510 170T820 195M280 420Q480 540 685 430" stroke="#385d51" strokeWidth="2" strokeDasharray="5 8" fill="none" />}
            {discoveries.map((d, i) => <g key={i} transform={`translate(${d.x} ${d.y})`}>
              {lens === "curiosity" ? <><circle r="38" fill="none" stroke={ink} strokeWidth="1.5" strokeDasharray="3 5" /><text y="14" textAnchor="middle" fill={ink} fontSize="43">?</text><path d="M45 0Q80 -45 102 -20M94 -30L102 -20 88 -18" fill="none" stroke={ink} strokeWidth="2" /></> : i === 3 ? <g fill="#785447"><ellipse cy="8" rx="21" ry="17" /><ellipse cx="-27" cy="-12" rx="8" ry="11" /><ellipse cx="-10" cy="-25" rx="8" ry="11" /><ellipse cx="10" cy="-25" rx="8" ry="11" /><ellipse cx="27" cy="-12" rx="8" ry="11" /></g> : <g stroke={ink} strokeWidth="2" fill="#edbb65"><circle r="22" /><path d="M0 -38V-30M0 30V38M-38 0H-30M30 0H38" /></g>}
              <foreignObject x="-115" y="48" width="230" height="80"><div className="joy-discovery-note" style={{ color: ink }}>{tl(d[lens])}</div></foreignObject>
            </g>)}
          </g>}
          {lens !== "normal" && <g pointerEvents="none"><circle cx={point.x} cy={point.y} r="145" fill="none" stroke={ink} strokeWidth="3" /><circle cx={point.x} cy={point.y} r="152" fill="none" stroke={ink} strokeWidth="1" /><text x={point.x} y={point.y - 115} textAnchor="middle" fontSize="12" letterSpacing="3" fill={ink}>{lens.toUpperCase()}</text></g>}
        </svg>
      </div>
      <div className="joy-navigation"><button type="button" disabled={lens === "normal"} onClick={() => visit((selected ?? 0) - 1)} aria-label={pl ? "Poprzednie miejsce odkrycia" : "Previous discovery location"}>←</button><div className="joy-reading"><span className="label-uppercase">{selected === null || lens === "normal" ? (pl ? "Ten sam świat" : "The same world") : `${tl(discoveries[selected].label)} · ${selected + 1}/5`}</span><p>{lens === "normal" ? (pl ? "Wybierz JOY lub CURIOSITY, aby zajrzeć pod powierzchnię." : "Choose JOY or CURIOSITY to look beneath the surface.") : selected === null ? (pl ? "Rozejrzyj się. Co jeszcze możesz zauważyć?" : "Look around. What else might you notice?") : tl(discoveries[selected][lens])}</p></div><button type="button" disabled={lens === "normal"} onClick={() => visit((selected ?? -1) + 1)} aria-label={pl ? "Następne miejsce odkrycia" : "Next discovery location"}>→</button></div>
      <p role="status" className="sr-only" aria-live="polite" aria-atomic="true">{announcement}</p>
      <details className="joy-transcript"><summary>{pl ? "Wszystkie odkrycia — wersja tekstowa" : "All discoveries — text version"}</summary><p className="mt-4 text-sm text-muted-foreground">{tl(lensCopy.description)}</p><ul className="mt-5 space-y-5">{discoveries.map((d, i) => <li key={i}><h2 className="text-base font-medium">{tl(d.label)}</h2><p className="mt-1">JOY — {tl(d.joy)}</p><p>CURIOSITY — {tl(d.curiosity)}</p></li>)}</ul></details>
      <p className="text-editorial max-w-2xl mt-8">{tl(lensCopy.closing)}</p>
    </section>
  </div></Layout>;
}
