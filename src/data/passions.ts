import { Localized } from "@/i18n/translations";

export type PassionKind = "story" | "quote" | "note" | "list";

export interface PassionEntry {
  id: string;
  kind: PassionKind;
  /** Small label above the title, e.g. category */
  tag: Localized;
  title: Localized;
  body: Localized;
  /** Optional image URL — omit for text-only cards */
  image?: string;
  /** Optional attribution for quotes */
  source?: string;
  /** Optional bullet items for list cards */
  items?: Localized[];
  /** Tailwind span classes for the masonry-ish grid */
  span?: string;
}

export const passions: PassionEntry[] = [
  {
    id: "movement",
    kind: "story",
    tag: { pl: "Ruch", en: "Movement" },
    title: { pl: "Poranne biegi bez zegarka", en: "Morning runs without a watch" },
    body: {
      pl: "Bieganie nauczyło mnie, że tempo jest projektem samym w sobie. Najlepsze pomysły na scenariusze zajęć przychodzą między piątym a siódmym kilometrem.",
      en: "Running taught me that pace is a design decision. My best ideas for learning sessions arrive somewhere between kilometre five and seven.",
    },
    image:
      "https://images.unsplash.com/photo-1502904550040-7534597429ae?w=1200&h=900&fit=crop",
    span: "md:col-span-2",
  },
  {
    id: "reading",
    kind: "list",
    tag: { pl: "Czytam", en: "Reading" },
    title: { pl: "Na nocnej szafce", en: "On the nightstand" },
    body: {
      pl: "Krótka lista, która zmienia się co kilka tygodni.",
      en: "A short list that changes every few weeks.",
    },
    items: [
      { pl: "„Jak się uczymy” — Stanislas Dehaene", en: "How We Learn — Stanislas Dehaene" },
      { pl: "„Gra w projektowanie” — notatki własne", en: "The Design of Play — personal notes" },
      { pl: "Podcast: Pedagogika bez patosu", en: "Podcast: Pedagogy, unvarnished" },
    ],
  },
  {
    id: "quote",
    kind: "quote",
    tag: { pl: "Myśl przewodnia", en: "Guiding thought" },
    title: {
      pl: "„Dzieci nie potrzebują lepszych instrukcji. Potrzebują lepszych pytań.”",
      en: "\u201cChildren don't need better instructions. They need better questions.\u201d",
    },
    body: { pl: "", en: "" },
    source: "notatnik / notebook, 2024",
  },
  {
    id: "workshop",
    kind: "story",
    tag: { pl: "Eksperymenty", en: "Experiments" },
    title: { pl: "Warsztat z kartonu i taśmy", en: "A workshop made of cardboard and tape" },
    body: {
      pl: "Prototypuję narzędzia edukacyjne najpierw z papieru. Jeśli działa na stole, zadziała w klasie.",
      en: "I prototype learning tools in paper first. If it works on a table, it works in a classroom.",
    },
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&h=900&fit=crop",
  },
  {
    id: "observations",
    kind: "note",
    tag: { pl: "Obserwacje", en: "Observations" },
    title: { pl: "Zebrane po drodze", en: "Collected along the way" },
    body: {
      pl: "Siedmiolatek wytłumaczył mi grawitację używając skarpetki. Od tamtej pory każdy mój model zaczyna się od metafory, nie od definicji.",
      en: "A seven-year-old explained gravity to me using a sock. Since then every model I build starts with a metaphor, not a definition.",
    },
  },
  {
    id: "ceramics",
    kind: "story",
    tag: { pl: "Rzemiosło", en: "Craft" },
    title: { pl: "Ceramika i cierpliwość", en: "Ceramics and patience" },
    body: {
      pl: "Glina nie negocjuje. Uczy przyjmować, że pierwsza wersja pęka — i że to nie jest porażka.",
      en: "Clay does not negotiate. It teaches you that the first version cracks — and that this is not failure.",
    },
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&h=900&fit=crop",
    span: "md:col-span-2",
  },
];
