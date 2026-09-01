import { Localized } from "@/i18n/translations";

export interface HappinessPrinciple {
  id: string;
  letter: string;
  title: Localized;
  body: Localized;
  designNote: Localized;
}

export interface HappinessChapter {
  id: string;
  kicker: Localized;
  title: Localized;
  paragraphs: Localized[];
  pull?: Localized;
}

export const happinessIntro = {
  label: { pl: "Inspiracje", en: "Inspiration" },
  title: {
    pl: "Action for Happiness — czyli dlaczego projektuję dla dobrostanu_",
    en: "Action for Happiness — why I design for wellbeing_",
  },
  lead: {
    pl: "To nie jest opis organizacji. To osobista notatka o idei, która zmieniła sposób, w jaki myślę o uczeniu się: że dobrostan nie jest dodatkiem do nauki, tylko jej warunkiem.",
    en: "This is not an organisation profile. It is a personal note about an idea that changed the way I think about learning: wellbeing is not an add-on to learning — it is its precondition.",
  },
  meta: [
    { pl: "Temat · Dobrostan w uczeniu się", en: "Topic · Wellbeing in learning" },
    { pl: "Forma · Esej wizualny", en: "Format · Visual essay" },
    { pl: "Rok · notatki od 2021", en: "Year · notes since 2021" },
  ] as Localized[],
};

export const happinessChapters: HappinessChapter[] = [
  {
    id: "start",
    kicker: { pl: "01 — Jak to się zaczęło", en: "01 — How it started" },
    title: {
      pl: "Pierwsze spotkanie z prostym pytaniem",
      en: "A first encounter with a very simple question",
    },
    paragraphs: [
      {
        pl: "Trafiłam na Action for Happiness przypadkiem — przez kalendarz z jednym małym działaniem na każdy dzień. Bez teorii, bez slajdów, bez modelu dojrzałości. Po prostu: zrób dziś jedną rzecz, która komuś pomoże.",
        en: "I came across Action for Happiness by accident — through a calendar with one small action for each day. No theory, no slides, no maturity model. Just: do one thing today that helps someone.",
      },
      {
        pl: "Jako projektantka doświadczeń edukacyjnych zwykle zaczynam od celów, efektów, kryteriów. Tutaj kolejność była odwrócona: najpierw działanie, potem refleksja, dopiero na końcu nazwanie tego, czego się nauczyłam.",
        en: "As a learning designer I usually start with objectives, outcomes, criteria. Here the order was reversed: action first, reflection second, and only at the end naming what I had learned.",
      },
    ],
    pull: {
      pl: "„Najmniejsze możliwe działanie” okazało się jedną z najlepszych mechanik uczenia, jakie znam.",
      en: "\u201cThe smallest possible action\u201d turned out to be one of the best learning mechanics I know.",
    },
  },
  {
    id: "why",
    kicker: { pl: "02 — Dlaczego mnie to trzyma", en: "02 — Why it stays with me" },
    title: {
      pl: "Uczenie się dzieje się w ciele, nastroju i relacji",
      en: "Learning happens in the body, the mood and the relationship",
    },
    paragraphs: [
      {
        pl: "Grupa, która czuje się bezpiecznie, zadaje więcej pytań. Grupa zmęczona i oceniana — milknie. To banał, ale w projektowaniu szkoleń zaskakująco często ginie pod tabelą kompetencji.",
        en: "A group that feels safe asks more questions. A tired, judged group goes quiet. It sounds obvious, yet in course design it is surprisingly often buried under a competency matrix.",
      },
      {
        pl: "Action for Happiness przypomina mi, żeby projektować nie tylko treść, ale też temperaturę spotkania: ile w nim światła, ile ciszy, ile miejsca na „nie wiem”.",
        en: "Action for Happiness reminds me to design not only content, but the temperature of a session: how much light, how much silence, how much room for \u201cI don't know\u201d.",
      },
    ],
  },
  {
    id: "practice",
    kicker: { pl: "04 — W praktyce", en: "04 — In practice" },
    title: {
      pl: "Co z tego trafia do moich scenariuszy",
      en: "What of this ends up in my session designs",
    },
    paragraphs: [
      {
        pl: "Zaczynam warsztaty od pytania o stan, nie o wiedzę. Kończę mikro-zobowiązaniem zamiast podsumowania. Wplatam wdzięczność jako narzędzie utrwalania — bo pamiętamy to, co miało dla nas znaczenie emocjonalne.",
        en: "I open workshops with a question about state, not knowledge. I close with a micro-commitment instead of a summary. I weave gratitude in as a retention tool — we remember what mattered to us emotionally.",
      },
      {
        pl: "I pilnuję jednej zasady: żaden uczestnik nie wychodzi z sali z listą rzeczy, których nie umie. Wychodzi z jedną rzeczą, którą może zrobić jutro.",
        en: "And I hold one rule: no participant leaves the room with a list of things they cannot do. They leave with one thing they can do tomorrow.",
      },
    ],
    pull: {
      pl: "Dobrostan to nie temat zajęć. To sposób ich prowadzenia.",
      en: "Wellbeing is not a session topic. It is a way of running one.",
    },
  },
];

export const happinessPrinciples: HappinessPrinciple[] = [
  {
    id: "giving",
    letter: "G",
    title: { pl: "Dawanie", en: "Giving" },
    body: {
      pl: "Rób rzeczy dla innych.",
      en: "Do things for others.",
    },
    designNote: {
      pl: "W scenariuszach: zadania, w których uczestnik tworzy coś dla kogoś z grupy.",
      en: "In my designs: tasks where a participant makes something for someone else in the room.",
    },
  },
  {
    id: "relating",
    letter: "R",
    title: { pl: "Relacje", en: "Relating" },
    body: { pl: "Łącz się z ludźmi.", en: "Connect with people." },
    designNote: {
      pl: "Zawsze para przed plenum — nikt nie mówi pierwszy raz do dwudziestu osób.",
      en: "Always a pair before the plenary — nobody speaks to twenty people first.",
    },
  },
  {
    id: "exercising",
    letter: "E",
    title: { pl: "Ruch", en: "Exercising" },
    body: { pl: "Dbaj o ciało.", en: "Take care of your body." },
    designNote: {
      pl: "Zmiana pozycji co ~20 minut. Stanowiska, nie tylko krzesła.",
      en: "A change of position every ~20 minutes. Stations, not only chairs.",
    },
  },
  {
    id: "awareness",
    letter: "A",
    title: { pl: "Uważność", en: "Awareness" },
    body: { pl: "Bądź tu i teraz.", en: "Live life mindfully." },
    designNote: {
      pl: "Cisza wpisana w agendę jako aktywność, nie jako przerwa.",
      en: "Silence written into the agenda as an activity, not as a gap.",
    },
  },
  {
    id: "trying",
    letter: "T",
    title: { pl: "Próbowanie", en: "Trying out" },
    body: { pl: "Ucz się nowych rzeczy.", en: "Keep learning new things." },
    designNote: {
      pl: "Prototyp zamiast prezentacji — pierwsza wersja ma prawo pęknąć.",
      en: "A prototype instead of a presentation — the first version is allowed to crack.",
    },
  },
  {
    id: "direction",
    letter: "D",
    title: { pl: "Kierunek", en: "Direction" },
    body: { pl: "Miej cele, które cię niosą.", en: "Have goals to look forward to." },
    designNote: {
      pl: "Mikro-zobowiązanie na koniec: jedna rzecz, jeden tydzień.",
      en: "A micro-commitment at the end: one thing, one week.",
    },
  },
];

export const happinessNotes: Localized[] = [
  {
    pl: "Pytanie, które zadaję sobie przy każdym projekcie: czy po tych zajęciach ludziom będzie ze sobą lepiej?",
    en: "The question I ask myself in every project: will people feel better with each other after this session?",
  },
  {
    pl: "Optymizm nie jest naiwnością. Jest decyzją projektową o tym, co pokazujemy jako możliwe.",
    en: "Optimism is not naivety. It is a design decision about what we show as possible.",
  },
  {
    pl: "Małe działania skalują się lepiej niż wielkie postanowienia — w nauce i poza nią.",
    en: "Small actions scale better than grand resolutions — in learning and outside it.",
  },
];

export const happinessClosing = {
  title: {
    pl: "Co bym z tego zabrała, gdybym miała zabrać jedno zdanie",
    en: "If I could take one sentence from all of this",
  },
  body: {
    pl: "Projektuję po to, żeby ludzie wyszli z sali z odrobinę większą wiarą, że coś od nich zależy. Reszta — modele, matryce, ewaluacje — jest narzędziem do tego celu, nie celem.",
    en: "I design so that people leave the room with slightly more belief that something depends on them. Everything else — models, matrices, evaluations — is a tool for that, not the goal.",
  },
  link: {
    label: { pl: "actionforhappiness.org", en: "actionforhappiness.org" },
    url: "https://www.actionforhappiness.org",
  },
};
