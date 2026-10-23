import type { Localized } from "@/i18n/translations";

interface ToolkitArea {
  id: "design" | "connect" | "deliver";
  label: Localized;
  heading: Localized;
  skills: Localized[];
  tools: Localized[];
  practice: { title: Localized; pending: boolean; href: string; link: Localized };
}

export const toolkitCopy = {
  title: { pl: "Mój zestaw narzędzi projektowania uczenia się", en: "My Learning Design Toolkit" },
  subtitle: { pl: "Różne umiejętności.", en: "Different skills." },
  intro: { pl: "Odkryj, jak łączę projektowanie uczenia się, facylitację, zarządzanie projektami i technologię, aby tworzyć wartościowe doświadczenia edukacyjne.", en: "Explore how I combine learning design, facilitation, project management and technology to create meaningful learning experiences." },
  tabs: { pl: "Obszary kompetencji", en: "Skill areas" },
  tools: { pl: "Narzędzia, z którymi pracuję", en: "Tools I work with" },
  practice: { pl: "Zobacz w praktyce", en: "See it in practice" },
  pending: { pl: "Materiał w przygotowaniu", en: "Material in preparation" },
  preview: { pl: "Miejsce na podgląd materiału", en: "Material preview placeholder" },
} satisfies Record<string, Localized>;

export const scenarioPackage = {
  title: { pl: "Scenariusze zajęć i procesów", en: "Session and process plans" },
  topic: { pl: "Zanim włączysz bajkę", en: "Before you put on a cartoon" },
  audience: { pl: "Spotkanie dla rodziców dzieci do lat 3.", en: "A session for parents of children under 3." },
  label: { pl: "Pakiet danych", en: "Package contents" },
  items: [
    { title: { pl: "Scenariusz SessionLab", en: "SessionLab plan" }, description: { pl: "Cele, etapy, czas, metody i potrzebne materiały.", en: "Goals, stages, timing, methods and required materials." } },
    { title: { pl: "Instrukcja dla prowadzącego", en: "Facilitator guide" }, description: { pl: "Co powiedzieć, o co zapytać, na co zwrócić uwagę.", en: "What to say, what to ask and what to look out for." } },
    { title: { pl: "Materiały dla uczestników", en: "Participant materials" }, description: { pl: "Karty ćwiczeń, zadania i szablony gotowe do wydruku.", en: "Print-ready worksheets, activities and templates." } },
    { title: { pl: "Warianty adaptacji", en: "Adaptation options" }, description: { pl: "Zmiany dla różnych grup, czasów i warunków pracy.", en: "Adjustments for different groups, time frames and working conditions." } },
    { title: { pl: "Checklista wdrożenia", en: "Implementation checklist" }, description: { pl: "Przygotowanie sali, materiałów i warunków dostępności.", en: "Preparing the room, materials and accessibility arrangements." } },
    { title: { pl: "Ewaluacja i doskonalenie", en: "Evaluation and improvement" }, description: { pl: "Jak sprawdzić efekty i zebrać informację zwrotną.", en: "How to assess outcomes and gather feedback." } },
    { title: { pl: "Możliwe trudności", en: "Potential challenges" }, description: { pl: "Potencjalne przeszkody i sposoby reagowania.", en: "Potential obstacles and ways to respond." } },
  ],
};

// Copy, tools and real destination links are maintained together.
// Pending evidence is not presented as an existing artefact or achievement.
export const toolkitAreas: ToolkitArea[] = [
  {
    id: "design", label: { pl: "Projektuję", en: "Design" },
    heading: { pl: "Projektuję doświadczenia edukacyjne", en: "I design learning experiences" },
    skills: [
      { pl: "Learning Experience Design (University of Michigan)", en: "Learning Experience Design (University of Michigan)" },
      { pl: "Uniwersalne projektowanie uczenia się (UDL)", en: "Universal Design for Learning (UDL)" },
      { pl: "Pedagogika cyfrowa (UNICEF)", en: "UNICEF Digital Pedagogy" },
      { pl: "Tworzenie treści i materiałów edukacyjnych (UJ)", en: "Educational content & resource development (UJ)" },
    ],
    tools: [{ pl: "Moodle", en: "Moodle" }, { pl: "H5P", en: "H5P" }, { pl: "Canva", en: "Canva" }, { pl: "Papier i ołówek", en: "Paper and pencil" }],
    practice: { title: { pl: "Warsztat w Moodle", en: "Moodle workshop" }, pending: true, href: "/projects", link: { pl: "Zajrzyj do moich projektów", en: "Browse my projects" } },
  },
  {
    id: "connect", label: { pl: "Współpracuję", en: "Connect" },
    heading: { pl: "Pracuję z ludźmi", en: "I work with people" },
    skills: [
      { pl: "Facylitacja warsztatów", en: "Workshop facilitation" },
      { pl: "Komunikacja i współpraca", en: "Communication & collaboration" },
      { pl: "Mentoring i konstruktywna informacja zwrotna", en: "Mentoring & constructive feedback" },
      { pl: "Rozumienie potrzeb osób uczących się", en: "Understanding learner needs" },
    ],
    tools: [{ pl: "Google Drive", en: "Google Drive" }, { pl: "Trello", en: "Trello" }, { pl: "SessionLab", en: "SessionLab" }],
    practice: { title: { pl: "Ewaluacja warsztatu w Google Forms", en: "Workshop evaluation in Google Forms" }, pending: true, href: "/projects/kluby-rodzicow", link: { pl: "Zobacz projekt: Kluby Rodziców w Krakowie", en: "View project: Parents’ Clubs in Kraków" } },
  },
  {
    id: "deliver", label: { pl: "Realizuję", en: "Deliver" },
    heading: { pl: "Zamieniam pomysły w działanie", en: "I turn ideas into action" },
    skills: [
      { pl: "Zarządzanie projektami", en: "Project management" },
      { pl: "Koordynacja współpracy z interesariuszami", en: "Stakeholder coordination" },
      { pl: "Planowanie i ewaluacja", en: "Planning & evaluation" },
      { pl: "Wdrażanie programów", en: "Programme implementation" },
    ],
    tools: [{ pl: "Excel", en: "Excel" }, { pl: "Google Docs", en: "Google Docs" }, { pl: "Wykresy Gantta", en: "Gantt charts" }],
    practice: { title: { pl: "Arkusz Excel projektu Silniejsza Fundacja", en: "Silniejsza Fundacja project spreadsheet" }, pending: true, href: "/projects/silniejsza-fundacja", link: { pl: "Zobacz projekt: Silniejsza Fundacja", en: "View project: Silniejsza Fundacja" } },
  },
];
