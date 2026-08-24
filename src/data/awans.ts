import type { Localized } from "@/i18n/translations";

export const awansMeta = {
  title: "AWANS",
  subtitle: {
    pl: "Program rozwoju młodych sędziów piłki ręcznej",
    en: "Young Handball Referees Development Programme",
  } as Localized,
  client: "Małopolski Związek Piłki Ręcznej",
  tag: {
    pl: "Learning Design · Edukacja sportowa · Program rozwojowy",
    en: "Learning Design · Sports Education · Development Programme",
  } as Localized,
  tagline: {
    pl: "Od pierwszego gwizdka do egzaminu końcowego.",
    en: "From first whistle to final exam.",
  } as Localized,
  intro: {
    pl: "Uporządkowana ścieżka rozwoju dla młodych sędziów piłki ręcznej, zaprojektowana tak, by wiedzę zamieniać w pewność siebie, a praktykę w zawodową kompetencję.",
    en: "A structured learning journey for young handball referees, designed to turn knowledge into confidence, and practice into professional competence.",
  } as Localized,
  overview: {
    pl: "AWANS to program rozwojowy wspierający młodych sędziów piłki ręcznej w drodze od pierwszych doświadczeń na boisku do certyfikacji i sędziowania na wyższym poziomie. Program łączy warsztaty, treningi praktyczne, mecze, informację zwrotną, mentoring i ocenę w jedną spójną ścieżkę uczenia się.",
    en: "AWANS is a development programme designed to support young handball referees in progressing from their first experiences on court towards certification and higher-level refereeing. The programme combines workshops, practical training, matches, feedback, mentoring and assessment into one structured learning journey.",
  } as Localized,
  loop: {
    pl: "Ucz się → Ćwicz → Otrzymaj feedback → Popraw → Sprawdź się → Awansuj",
    en: "Learn → Practise → Receive feedback → Improve → Test → Advance",
  } as Localized,
  duration: {
    pl: "Marzec 2023 – Czerwiec 2024",
    en: "March 2023 – June 2024",
  } as Localized,
  audience: {
    pl: "Młodzi sędziowie piłki ręcznej",
    en: "Young handball referees",
  } as Localized,
  format: {
    pl: "Warsztaty · Treningi · Mecze praktyczne · Feedback · Ocena",
    en: "Workshops · Training · Practice matches · Feedback · Assessment",
  } as Localized,
};

export const awansFacts: { label: Localized; value: Localized }[] = [
  {
    label: { pl: "Klient", en: "Client" },
    value: { pl: awansMeta.client, en: awansMeta.client },
  },
  { label: { pl: "Czas trwania", en: "Duration" }, value: awansMeta.duration },
  { label: { pl: "Odbiorcy", en: "Audience" }, value: awansMeta.audience },
  { label: { pl: "Format", en: "Format" }, value: awansMeta.format },
];

export const awansChallenge = {
  heading: { pl: "Wyzwanie", en: "The Challenge" } as Localized,
  lead: {
    pl: "Młodzi sędziowie często znają przepisy, ale bycie pewnym siebie sędzią wymaga znacznie więcej niż wiedzy teoretycznej.",
    en: "Young referees often know the rules, but becoming a confident referee requires much more than theoretical knowledge.",
  } as Localized,
  needsLabel: {
    pl: "Potrzebują możliwości, aby:",
    en: "They need opportunities to:",
  } as Localized,
  needs: [
    {
      pl: "stosować przepisy w realnych sytuacjach meczowych,",
      en: "apply rules in real match situations,",
    },
    {
      pl: "rozwijać umiejętność podejmowania decyzji,",
      en: "develop decision-making skills,",
    },
    { pl: "skutecznie się komunikować,", en: "communicate effectively," },
    {
      pl: "rozpoznawać schematy i przewidywać sytuacje,",
      en: "recognise patterns and anticipate situations,",
    },
    {
      pl: "otrzymywać konstruktywną informację zwrotną,",
      en: "receive constructive feedback,",
    },
    {
      pl: "reflektować nad własnym działaniem,",
      en: "reflect on their own performance,",
    },
    {
      pl: "stopniowo budować pewność siebie i samodzielność.",
      en: "gradually build confidence and independence.",
    },
  ] as Localized[],
  outro: {
    pl: "AWANS został zaprojektowany jako uporządkowana ścieżka łącząca te elementy w jeden spójny proces rozwoju.",
    en: "AWANS was designed as a structured pathway connecting these elements into one coherent development process.",
  } as Localized,
};

export interface JourneyStage {
  number: string;
  name: Localized;
  period: Localized;
  headline: Localized;
  points: Localized[];
  finale?: boolean;
  note?: Localized;
}

export const awansJourney: JourneyStage[] = [
  {
    number: "01",
    name: { pl: "ODKRYJ", en: "DISCOVER" },
    period: { pl: "Marzec 2023", en: "March 2023" },
    headline: { pl: "Warsztat wprowadzający", en: "Introductory workshop" },
    points: [
      { pl: "Wprowadzenie do programu", en: "Introduction to the programme" },
      { pl: "Poznanie grupy", en: "Meeting the group" },
      { pl: "Ustalenie oczekiwań", en: "Setting expectations" },
      {
        pl: "Zrozumienie ścieżki rozwoju",
        en: "Understanding the development pathway",
      },
    ],
  },
  {
    number: "02",
    name: { pl: "ĆWICZ", en: "PRACTISE" },
    period: { pl: "Kwiecień – Sierpień 2023", en: "April – August 2023" },
    headline: {
      pl: "Treningi i mecze praktyczne",
      en: "Training sessions & practice matches",
    },
    points: [
      {
        pl: "Praktyczne doświadczenie sędziowskie",
        en: "Practical refereeing experience",
      },
      {
        pl: "Stosowanie wiedzy teoretycznej",
        en: "Applying theoretical knowledge",
      },
      { pl: "Rozwijanie decyzyjności", en: "Developing decision-making" },
      {
        pl: "Uczenie się przez realne sytuacje",
        en: "Learning through real situations",
      },
    ],
  },
  {
    number: "03",
    name: { pl: "REFLEKSJA", en: "REFLECT" },
    period: { pl: "Wrzesień 2023", en: "September 2023" },
    headline: { pl: "Warsztat śródokresowy", en: "Intermediate workshop" },
    points: [
      { pl: "Przegląd postępów", en: "Review of progress" },
      { pl: "Informacja zwrotna", en: "Feedback" },
      {
        pl: "Rozpoznanie mocnych stron i obszarów rozwoju",
        en: "Identification of strengths and development areas",
      },
      { pl: "Wskazówki na kolejny etap", en: "Guidance for the next stage" },
    ],
  },
  {
    number: "04",
    name: { pl: "ROZWIJAJ", en: "DEVELOP" },
    period: {
      pl: "Październik 2023 – Marzec 2024",
      en: "October 2023 – March 2024",
    },
    headline: {
      pl: "Dalsze treningi i mecze",
      en: "Continued training & matches",
    },
    points: [
      { pl: "Budowanie doświadczenia", en: "Building experience" },
      {
        pl: "Doskonalenie warsztatu sędziowskiego",
        en: "Refining refereeing skills",
      },
      { pl: "Wzrost samodzielności", en: "Increasing independence" },
      {
        pl: "Uczenie się przez powtarzalną praktykę",
        en: "Learning from repeated practice",
      },
    ],
  },
  {
    number: "05",
    name: { pl: "PRZYGOTUJ", en: "PREPARE" },
    period: { pl: "Kwiecień 2024", en: "April 2024" },
    headline: { pl: "Warsztat końcowy", en: "Final workshop" },
    points: [
      { pl: "Konsolidacja wiedzy", en: "Consolidating knowledge" },
      { pl: "Ostatnia informacja zwrotna", en: "Final feedback" },
      { pl: "Przygotowanie do egzaminu", en: "Exam preparation" },
      { pl: "Budowanie pewności siebie", en: "Building confidence" },
    ],
  },
  {
    number: "06",
    name: { pl: "AWANS", en: "ADVANCE" },
    period: { pl: "Czerwiec 2024", en: "June 2024" },
    headline: { pl: "Egzamin końcowy", en: "Final exam" },
    points: [],
    finale: true,
    note: {
      pl: "Ostatnie wyzwanie: pokazać wiedzę i umiejętności wypracowane w trakcie całego programu.",
      en: "The final challenge: demonstrate the knowledge and skills developed throughout the programme.",
    },
  },
];

export const awansModel: { key: Localized; body: Localized }[] = [
  {
    key: { pl: "INPUT", en: "INPUT" },
    body: {
      pl: "Poznaj przepisy, zasady i techniki.",
      en: "Learn the rules, principles and techniques.",
    },
  },
  {
    key: { pl: "PRAKTYKA", en: "PRACTICE" },
    body: {
      pl: "Stosuj wiedzę na treningach i w realnych sytuacjach meczowych.",
      en: "Apply knowledge during training and real match situations.",
    },
  },
  {
    key: { pl: "FEEDBACK", en: "FEEDBACK" },
    body: {
      pl: "Otrzymuj wskazówki od doświadczonych sędziów i trenerów.",
      en: "Receive guidance from experienced referees and trainers.",
    },
  },
  {
    key: { pl: "REFLEKSJA", en: "REFLECTION" },
    body: {
      pl: "Rozpoznaj mocne strony, błędy i obszary do rozwoju.",
      en: "Identify strengths, mistakes and areas for development.",
    },
  },
  {
    key: { pl: "POPRAWA", en: "IMPROVEMENT" },
    body: {
      pl: "Wróć do praktyki z jasnym celem rozwojowym.",
      en: "Return to practice with a clear development goal.",
    },
  },
  {
    key: { pl: "OCENA", en: "ASSESSMENT" },
    body: {
      pl: "Potwierdź kompetencje na egzaminie końcowym.",
      en: "Demonstrate competence in the final exam.",
    },
  },
];

export const awansSkills: { title: Localized; body: Localized }[] = [
  {
    title: { pl: "ZNAJOMOŚĆ PRZEPISÓW", en: "RULE KNOWLEDGE" },
    body: {
      pl: "Rozumienie i poprawne stosowanie przepisów.",
      en: "Understanding and applying the rules correctly.",
    },
  },
  {
    title: { pl: "DECYZYJNOŚĆ", en: "DECISION MAKING" },
    body: {
      pl: "Trafne decyzje pod presją czasu.",
      en: "Making accurate decisions under time pressure.",
    },
  },
  {
    title: { pl: "CZYTANIE BOISKA", en: "COURT AWARENESS" },
    body: {
      pl: "Czytanie gry i przewidywanie sytuacji.",
      en: "Reading the game and anticipating situations.",
    },
  },
  {
    title: { pl: "KOMUNIKACJA", en: "COMMUNICATION" },
    body: {
      pl: "Skuteczna współpraca z drugim sędzią i komunikowanie decyzji.",
      en: "Working effectively with the other referee and communicating decisions.",
    },
  },
  {
    title: { pl: "PEWNOŚĆ SIEBIE", en: "CONFIDENCE" },
    body: {
      pl: "Budowanie pewności przez powtarzalną praktykę i feedback.",
      en: "Developing confidence through repeated practice and feedback.",
    },
  },
  {
    title: { pl: "REFLEKSJA", en: "REFLECTION" },
    body: {
      pl: "Uczenie się z doświadczenia i wykorzystywanie feedbacku.",
      en: "Learning from experience and using feedback to improve.",
    },
  },
];

export const awansRole = {
  heading: { pl: "Moja rola w projekcie", en: "My role in the project" } as Localized,
  roles: {
    pl: "Trenerka sędziów · Projektantka procesu uczenia · Facylitatorka",
    en: "Referee Trainer · Learning Designer · Facilitator",
  } as Localized,
  body: {
    pl: "Współtworzyłam i prowadziłam proces rozwojowy, łącząc moje doświadczenie sędziowskie w piłce ręcznej z podejściem edukacyjnym do uczenia się i informacji zwrotnej.",
    en: "I contributed to the design and delivery of the development process, combining my experience as a handball referee with an educational approach to learning and feedback.",
  } as Localized,
  points: [
    { pl: "projektowanie aktywności edukacyjnych,", en: "designing learning activities," },
    { pl: "budowanie struktury ścieżki rozwoju,", en: "structuring the development pathway," },
    { pl: "facylitacja warsztatów,", en: "facilitating workshops," },
    { pl: "wsparcie nauki przez praktykę,", en: "supporting practical learning," },
    { pl: "udzielanie informacji zwrotnej,", en: "providing feedback," },
    {
      pl: "łączenie teorii z realnymi sytuacjami sędziowskimi,",
      en: "connecting theory with real-life refereeing situations,",
    },
    { pl: "przygotowanie uczestników do oceny.", en: "preparing participants for assessment." },
  ] as Localized[],
};

export const awansBehindScenes: Localized[] = [
  { pl: "Materiały warsztatowe", en: "Workshop materials" },
  { pl: "Ćwiczenia treningowe", en: "Training exercises" },
  { pl: "Scenariusze meczowe", en: "Match scenarios" },
  { pl: "Narzędzia feedbacku", en: "Feedback tools" },
  { pl: "Przygotowanie do egzaminu", en: "Assessment preparation" },
  { pl: "Materiały rozwojowe dla sędziów", en: "Referee development resources" },
];

export const awansRoad: Localized[] = [
  { pl: "PIERWSZY GWIZDEK", en: "FIRST WHISTLE" },
  { pl: "NAUKA", en: "LEARN" },
  { pl: "PRAKTYKA", en: "PRACTISE" },
  { pl: "FEEDBACK", en: "FEEDBACK" },
  { pl: "POPRAWA", en: "IMPROVE" },
  { pl: "PEWNOŚĆ SIEBIE", en: "CONFIDENCE" },
  { pl: "EGZAMIN KOŃCOWY", en: "FINAL EXAM" },
  { pl: "AWANS", en: "ADVANCE" },
];
