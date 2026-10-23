import { Link } from "react-router-dom";
import { useId } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { inspirations } from "@/data/inspirations";

export default function LensEntryLink() {
  const { tl } = useLanguage();
  const patternId = `spectres-${useId().replace(/:/g, "")}`;
  return <Link to="/passion-play/joy-curiosity" className="inspiration-experiment-link" aria-label={`JOY & CURIOSITY — ${tl(inspirations.joy.cta)}`}>
    <svg viewBox="0 0 360 140" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <defs><pattern id={patternId} width="48" height="44" patternUnits="userSpaceOnUse">
        <rect width="48" height="44" fill="#f53591" />
        <g fill="none" stroke="#ffe29a" strokeWidth="2"><circle cx="18" cy="18" r="17" /><circle cx="18" cy="18" r="12" /><circle cx="18" cy="18" r="8" /><circle cx="43" cy="39" r="7" /><circle cx="43" cy="39" r="3" /></g>
        <path d="M18 9L20 15 26 12 22 18 27 22 20 21 18 27 16 21 9 22 14 18 10 12 16 15Z" fill="#ac205c" />
        <path d="M42 8L44 12 48 11 45 15 47 19 42 17 39 20 40 15 36 13 41 12Z" fill="#65206d" />
      </pattern></defs>
      <path d="M160 66Q180 48 200 66" fill="none" stroke="#a52b74" strokeWidth="13" />
      <path d="M160 66Q180 48 200 66" fill="none" stroke="#f28dbc" strokeWidth="8" />
      {[false, true].map(mirrored => <g key={String(mirrored)} transform={mirrored ? "translate(360 0) scale(-1 1)" : undefined}>
        <path d="M62 31L43 8Q33 -1 30 9Q31 17 43 31L17 27Q2 23 5 34Q7 41 39 49L14 57Q0 60 8 70Q12 75 40 70L11 87Q0 93 9 101Q15 105 44 90L17 115Q7 125 21 128L68 127Q128 145 159 114Q179 92 167 59Q148 25 110 24Q79 21 62 31Z" fill={`url(#${patternId})`} stroke="#a52b74" strokeWidth="2" strokeLinejoin="round" />
        <g fill="none" stroke="#f8d394" strokeWidth="2.5">
          <circle cx="48" cy="49" r="10" /><circle cx="48" cy="49" r="5" />
          <circle cx="37" cy="76" r="9" /><circle cx="37" cy="76" r="4" />
          <circle cx="65" cy="107" r="9" /><circle cx="65" cy="107" r="4" />
          <circle cx="117" cy="27" r="6" /><circle cx="150" cy="48" r="6" /><circle cx="145" cy="110" r="6" />
          <path d="M73 22L78 31M89 18L92 28M139 28L133 35M161 76L151 76M108 120L108 128" />
        </g>
        <ellipse cx="108" cy="78" rx="45" ry="44" fill={mirrored ? "#464b13" : "#123c59"} stroke={mirrored ? "#a8b638" : "#238dc8"} strokeWidth="3" />
        <g transform="translate(108 78)" stroke={mirrored ? "#d6dc65" : "#5dc4f3"} strokeWidth="1.4" opacity=".6">
          {Array.from({ length: 12 }, (_, i) => <path key={i} transform={`rotate(${i * 30})`} d="M0 -10V-40M-4 -18H4M-6 -25H6M-8 -32H8" />)}
          <circle r="6" fill="none" />
        </g>
        <path d="M77 54Q87 40 99 39" stroke="white" strokeOpacity=".55" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>)}
      <g fill="#fff" textAnchor="middle" fontSize="13" fontWeight="600" letterSpacing=".4" stroke="#182a31" strokeWidth=".6" paintOrder="stroke">
        <text x="108" y="83">JOY</text>
        <text x="252" y="83">CURIOSITY</text>
      </g>
    </svg>
  </Link>;
}
