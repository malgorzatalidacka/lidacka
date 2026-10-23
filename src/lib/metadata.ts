import type { Language } from "@/i18n/translations";

const title = "Małgorzata Lidacka | Learning Experience Design & Education";
const descriptions: Record<Language, string> = {
  pl: "Projektuję doświadczenia edukacyjne, prowadzę warsztaty i realizuję projekty społeczne. Poznaj moje kompetencje i wartości, którymi się kieruję.",
  en: "Designing learning experiences, facilitating workshops and developing social impact projects. Explore my work, skills and inspirations.",
};

// Static Polish equivalents live in index.html for crawlers that do not run JavaScript.
export function updateMetadata(language: Language) {
  document.title = title;
  const values: Record<string, string> = {
    'meta[name="description"]': descriptions[language],
    'meta[property="og:title"]': title,
    'meta[property="og:description"]': descriptions[language],
    'meta[property="og:locale"]': language === "pl" ? "pl_PL" : "en_GB",
    'meta[property="og:locale:alternate"]': language === "pl" ? "en_GB" : "pl_PL",
    'meta[name="twitter:title"]': title,
    'meta[name="twitter:description"]': descriptions[language],
  };
  for (const [selector, value] of Object.entries(values)) {
    document.querySelector(selector)?.setAttribute("content", value);
  }
}
