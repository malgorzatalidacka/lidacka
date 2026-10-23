import type { Localized } from "@/i18n/translations";

// Add a URL and select a format when a sample is ready to display.
export type ToolArtifact = {
  kind: "image" | "embed" | "link";
  url: string;
  label: Localized;
};

export interface SkillsTool {
  name: string;
  description: Localized;
  example: Localized;
  artifact?: ToolArtifact;
}

export const skillsTools: SkillsTool[] = [
  {
    name: "Excel",
    description: { pl: "Porządkowanie i analiza danych oraz planowanie pracy.", en: "Organising and analysing data, and planning work." },
    example: { pl: "Arkusz, zestawienie lub wykres", en: "Spreadsheet, summary or chart" },
  },
  {
    name: "Canva",
    description: { pl: "Tworzenie materiałów wizualnych i edukacyjnych.", en: "Creating visual and learning materials." },
    example: { pl: "Prezentacja, infografika lub karta pracy", en: "Presentation, infographic or worksheet" },
  },
  {
    name: "Moodle",
    description: { pl: "Organizacja kursów i materiałów do nauki online.", en: "Organising online courses and learning materials." },
    example: { pl: "Podgląd kursu lub modułu edukacyjnego", en: "Course or learning module preview" },
  },
  {
    name: "Trello",
    description: { pl: "Planowanie zadań i koordynowanie pracy nad projektem.", en: "Planning tasks and coordinating project work." },
    example: { pl: "Tablica projektu lub plan działań", en: "Project board or action plan" },
  },
  {
    name: "Google Workspace",
    description: { pl: "Współpraca nad dokumentami, materiałami i organizacją pracy.", en: "Collaborating on documents, materials and work organisation." },
    example: { pl: "Dokument, formularz lub prezentacja", en: "Document, form or presentation" },
  },
  {
    name: "SessionLab",
    description: { pl: "Tworzenie skalowalnych i adaptowalnych scenariuszy zajęć i warsztatów.", en: "Creating scalable and adaptable session and workshop plans." },
    example: { pl: "Scenariusz zajęć lub warsztatu", en: "Session or workshop plan" },
  },
  {
    name: "H5P",
    description: { pl: "Tworzenie interaktywnych doświadczeń z treściami nauczania.", en: "Creating interactive experiences with learning content." },
    example: { pl: "Interaktywne ćwiczenie lub materiał edukacyjny", en: "Interactive activity or learning resource" },
  },
];

export const toolGroups = [
  { id: "education", title: { pl: "Tworzenie narzędzi edukacyjnych", en: "Creating learning tools" }, tools: ["Canva", "Moodle", "H5P"], gradient: "from-[hsl(var(--latte-cream))] via-background to-background" },
  { id: "management", title: { pl: "Zarządzanie projektem", en: "Project management" }, tools: ["Excel", "Trello", "Google Workspace"], gradient: "from-[hsl(var(--latte-oat))] via-background to-background" },
  { id: "collaboration", title: { pl: "Współpraca z zespołem i skalowanie pomysłów", en: "Team collaboration and scaling ideas" }, tools: ["SessionLab", "Padlet"], gradient: "from-[hsl(var(--latte-mocha))] via-background to-background" },
];

skillsTools.push({
  name: "Padlet",
  description: { pl: "Wspólne zbieranie pomysłów, materiałów i informacji zwrotnej na tablicach zespołowych.", en: "Collecting ideas, resources and feedback together on shared boards." },
  example: { pl: "Tablica pomysłów lub materiałów zespołu", en: "Shared team ideas or resource board" },
});

export const professionalProfile = {
  pl: "Kieruję projektami społecznymi i edukacyjnymi. Jestem pedagożką, terapeutką pedagogiczną i doświadczoną trenerką projektującą szkolenia. Sędziuję zawody sportowe na poziomie międzynarodowym i pełnię funkcję wiceprezeski organizacji pożytku publicznego.",
  en: "I manage social and educational projects. I am an educator, educational therapist and experienced trainer designing training programmes. I referee sports at an international level and serve as vice-president of a public benefit organisation.",
};

export const keyCompetencies = [
  { pl: "Projektowanie i wdrażanie nowoczesnych rozwiązań edukacyjnych i szkoleniowych (Learning Experience Design, Universal Design for Learning, digital pedagogy).", en: "Designing and implementing modern educational and training solutions (Learning Experience Design, Universal Design for Learning, digital pedagogy)." },
  { pl: "Kierowanie projektami społecznymi i edukacyjnymi oraz zarządzanie zespołem.", en: "Leading social and educational projects and managing a team." },
  { pl: "Zarządzanie budżetem i harmonogramem, monitorowanie i raportowanie w dużych projektach rządowych i europejskich.", en: "Managing budgets and schedules, monitoring and reporting in large government and European projects." },
  { pl: "Umiejętność pracy w międzynarodowym środowisku.", en: "Ability to work in an international environment." },
  { pl: "Samodzielność, odpowiedzialność i precyzyjne działanie pod presją czasu i oczekiwań.", en: "Independence, responsibility and precise work under time pressure and high expectations." },
];



