import type { Localized } from "@/i18n/translations";

/**
 * Scenariusze zajęć prezentowane na półce ("warsztat pracy").
 * Aby dodać / usunąć segregator — dopisz lub usuń obiekt w tablicy poniżej.
 * Aby zmienić tytuł lub treść — edytuj pola tego obiektu.
 */
export interface ScenarioStep {
  label: Localized;
}

export interface Scenario {
  id: string;
  title: Localized;
  /** Krótkie hasło na grzbiecie segregatora (opcjonalne). */
  tag: Localized;
  audience: Localized;
  duration: Localized;
  /** Karta projektu */
  need: Localized;
  goal: Localized;
  activities: Localized[];
  materials: Localized[];
  outcome: Localized;
  /** Fragment scenariusza — odsłaniany po kliknięciu */
  steps: ScenarioStep[];
  methods: Localized[];
  designed: Localized;
  /** Opcjonalnie: link do PDF lub zdjęcia */
  attachmentUrl?: string;
  attachmentLabel?: Localized;
}

export const parentClubsIntro = {
  title: {
    pl: "Współpraca z Klubami Rodziców w Krakowie",
    en: "Collaboration with Parents' Clubs in Kraków",
  } as Localized,
  lead: {
    pl: "Projektowanie i prowadzenie zajęć psychoedukacyjnych dla rodziców oraz tworzenie praktycznych materiałów wspierających rodzicielstwo.",
    en: "Designing and running psychoeducational workshops for parents, and creating practical materials that support everyday parenting.",
  } as Localized,
  blocks: [
    {
      label: { pl: "Kontekst", en: "Context" } as Localized,
      body: {
        pl: "Współpraca z Klubami Rodziców w Krakowie obejmowała przygotowanie i prowadzenie zajęć psychoedukacyjnych odpowiadających na codzienne potrzeby rodziców małych dzieci.",
        en: "The collaboration with Parents' Clubs in Kraków covered preparing and running psychoeducational sessions responding to the everyday needs of parents of young children.",
      } as Localized,
    },
    {
      label: { pl: "Moja rola", en: "My role" } as Localized,
      body: {
        pl: "Projektowałam scenariusze zajęć, przygotowywałam materiały edukacyjne, prowadziłam spotkania i dostosowywałam ich formę do potrzeb uczestników.",
        en: "I designed session scenarios, prepared learning materials, facilitated the meetings and adapted their format to the participants' needs.",
      } as Localized,
    },
    {
      label: { pl: "Cel", en: "Goal" } as Localized,
      body: {
        pl: "Tworzenie bezpiecznej przestrzeni do rozmowy, wymiany doświadczeń i zdobywania praktycznej wiedzy, którą rodzice mogą wykorzystać w codziennym życiu.",
        en: "Creating a safe space for conversation, sharing experience and gaining practical knowledge parents can use in daily life.",
      } as Localized,
    },
  ],
  shelfTitle: {
    pl: "Zajrzyj do mojego warsztatu pracy.",
    en: "Take a look inside my workshop.",
  } as Localized,
  shelfSub: {
    pl: "Każdy segregator to jeden z przygotowanych przeze mnie scenariuszy zajęć.",
    en: "Each binder is one of the session scenarios I designed.",
  } as Localized,
  ui: {
    open: { pl: "Otwórz scenariusz", en: "Open scenario" } as Localized,
    back: { pl: "← Wróć do półki", en: "← Back to the shelf" } as Localized,
    projectCard: { pl: "Karta projektu", en: "Project card" } as Localized,
    need: { pl: "Potrzeba", en: "Need" } as Localized,
    goal: { pl: "Cel edukacyjny", en: "Learning goal" } as Localized,
    activities: { pl: "Aktywności", en: "Activities" } as Localized,
    materials: { pl: "Materiały", en: "Materials" } as Localized,
    outcome: { pl: "Efekt", en: "Outcome" } as Localized,
    audience: { pl: "Dla kogo", en: "Audience" } as Localized,
    duration: { pl: "Czas", en: "Duration" } as Localized,
    reveal: { pl: "Zobacz fragment scenariusza", en: "See a scenario excerpt" } as Localized,
    hide: { pl: "Ukryj fragment scenariusza", en: "Hide the scenario excerpt" } as Localized,
    flow: { pl: "Przebieg", en: "Session flow" } as Localized,
    methods: { pl: "Metody", en: "Methods" } as Localized,
    designed: { pl: "Co projektowałam?", en: "What did I design?" } as Localized,
  },
};

const commonDesigned: Localized = {
  pl: "Scenariusz zajęć, ćwiczenia, pytania do dyskusji, materiały dla uczestników i strukturę całego spotkania.",
  en: "The session scenario, exercises, discussion questions, participant handouts and the structure of the whole meeting.",
};

export const scenarios: Scenario[] = [
  {
    id: "sen-dziecka",
    title: { pl: "Sen dziecka", en: "Children's sleep" },
    tag: { pl: "Rytm dnia", en: "Daily rhythm" },
    audience: { pl: "Rodzice dzieci 0–3 lat", en: "Parents of children aged 0–3" },
    duration: { pl: "90 minut", en: "90 minutes" },
    need: {
      pl: "Rodzice są przemęczeni i zagubieni w sprzecznych poradach na temat snu — potrzebują wiedzy i zgody na własny rytm.",
      en: "Parents are exhausted and lost among contradictory sleep advice — they need knowledge and permission to find their own rhythm.",
    },
    goal: {
      pl: "Uczestnicy rozumieją fizjologię snu małego dziecka i potrafią zaprojektować realny rytuał wieczorny dla swojej rodziny.",
      en: "Participants understand infant sleep physiology and can design a realistic evening ritual for their family.",
    },
    activities: [
      { pl: "Mapa nocy — wspólne rysowanie przebiegu typowej doby", en: "Night map — sketching a typical 24 hours together" },
      { pl: "Mit czy fakt — praca z kartami twierdzeń o śnie", en: "Myth or fact — working with statement cards about sleep" },
      { pl: "Projekt własnego rytuału wieczornego", en: "Designing your own evening ritual" },
    ],
    materials: [
      { pl: "Karty „mit czy fakt”", en: "“Myth or fact” cards" },
      { pl: "Karta pracy „Mapa nocy”", en: "“Night map” worksheet" },
      { pl: "Miniporadnik do zabrania do domu", en: "Take-home mini guide" },
    ],
    outcome: {
      pl: "Każdy rodzic wychodzi z jednym konkretnym, wykonalnym krokiem na najbliższy tydzień.",
      en: "Every parent leaves with one concrete, doable step for the coming week.",
    },
    steps: [
      { label: { pl: "01 — Rozgrzewka: jak wygląda nasza noc", en: "01 — Warm-up: what our night looks like" } },
      { label: { pl: "02 — Ćwiczenie: mit czy fakt", en: "02 — Exercise: myth or fact" } },
      { label: { pl: "03 — Rozmowa i refleksja w parach", en: "03 — Conversation and reflection in pairs" } },
      { label: { pl: "04 — Miniwykład: fizjologia snu dziecka", en: "04 — Mini-lecture: children's sleep physiology" } },
      { label: { pl: "05 — Praktyka: projekt rytuału wieczornego", en: "05 — Practice: designing an evening ritual" } },
      { label: { pl: "06 — Podsumowanie i jeden krok na tydzień", en: "06 — Wrap-up and one step for the week" } },
    ],
    methods: [
      { pl: "praca indywidualna", en: "individual work" },
      { pl: "rozmowa w parach", en: "paired conversation" },
      { pl: "miniwykład", en: "mini-lecture" },
      { pl: "refleksja grupowa", en: "group reflection" },
    ],
    designed: commonDesigned,
  },
  {
    id: "granice-i-emocje",
    title: { pl: "Granice i emocje", en: "Boundaries and emotions" },
    tag: { pl: "Relacja", en: "Relationship" },
    audience: { pl: "Rodzice dzieci 2–6 lat", en: "Parents of children aged 2–6" },
    duration: { pl: "90 minut", en: "90 minutes" },
    need: {
      pl: "Rodzice chcą stawiać granice bez krzyku i poczucia winy, ale brakuje im języka i konkretnych narzędzi.",
      en: "Parents want to set boundaries without shouting or guilt, but lack the language and concrete tools.",
    },
    goal: {
      pl: "Uczestnicy potrafią sformułować granicę w sposób jasny i wspierający relację oraz rozpoznać emocje pod zachowaniem dziecka.",
      en: "Participants can phrase a boundary clearly and supportively, and recognise the emotion behind a child's behaviour.",
    },
    activities: [
      { pl: "Studium przypadku: trzy trudne sytuacje z życia", en: "Case study: three difficult everyday situations" },
      { pl: "Przeformułowanie komunikatu — praca na zdaniach", en: "Reframing the message — working on sentences" },
      { pl: "Scenki i wymiana doświadczeń", en: "Role-play and sharing experience" },
    ],
    materials: [
      { pl: "Zestaw kart z sytuacjami", en: "Situation card set" },
      { pl: "Karta „zdanie zamiast krzyku”", en: "“A sentence instead of a shout” worksheet" },
      { pl: "Lista komunikatów wspierających", en: "List of supportive phrases" },
    ],
    outcome: {
      pl: "Rodzice mają gotowy zestaw zdań, które mogą wykorzystać jeszcze tego samego dnia.",
      en: "Parents leave with a ready set of phrases they can use the very same day.",
    },
    steps: [
      { label: { pl: "01 — Wejście w temat: moja trudna sytuacja", en: "01 — Entering the topic: my difficult situation" } },
      { label: { pl: "02 — Ćwiczenie: co jest pod zachowaniem", en: "02 — Exercise: what lies beneath the behaviour" } },
      { label: { pl: "03 — Rozmowa i refleksja", en: "03 — Conversation and reflection" } },
      { label: { pl: "04 — Miniwykład: granica jako informacja", en: "04 — Mini-lecture: a boundary as information" } },
      { label: { pl: "05 — Praktyka: przeformułowanie komunikatu", en: "05 — Practice: reframing the message" } },
      { label: { pl: "06 — Podsumowanie", en: "06 — Wrap-up" } },
    ],
    methods: [
      { pl: "studium przypadku", en: "case study" },
      { pl: "ćwiczenia w parach", en: "paired exercises" },
      { pl: "dyskusja", en: "discussion" },
      { pl: "refleksja", en: "reflection" },
    ],
    designed: commonDesigned,
  },
  {
    id: "samodzielnosc-dziecka",
    title: { pl: "Samodzielność dziecka", en: "Children's independence" },
    tag: { pl: "Rozwój", en: "Development" },
    audience: { pl: "Rodzice dzieci 1–5 lat", en: "Parents of children aged 1–5" },
    duration: { pl: "90 minut", en: "90 minutes" },
    need: {
      pl: "Codzienny pośpiech sprawia, że łatwiej zrobić coś za dziecko niż dać mu czas na próbę.",
      en: "Everyday rush makes it easier to do things for the child than to give them time to try.",
    },
    goal: {
      pl: "Uczestnicy rozpoznają obszary, w których dziecko może działać samo, i wiedzą, jak przygotować mu otoczenie.",
      en: "Participants identify areas where a child can act independently and know how to prepare the environment.",
    },
    activities: [
      { pl: "Audyt jednego poranka — co robię za dziecko", en: "Audit of one morning — what I do for my child" },
      { pl: "Projektowanie „strefy samodzielności” w domu", en: "Designing an “independence zone” at home" },
      { pl: "Rozmowa o gotowości i tempie dziecka", en: "Conversation about readiness and the child's pace" },
    ],
    materials: [
      { pl: "Karta pracy „Mój poranek”", en: "“My morning” worksheet" },
      { pl: "Ilustracje przykładowych przestrzeni", en: "Illustrations of sample spaces" },
      { pl: "Lista kroków do wprowadzenia w domu", en: "Checklist of steps to try at home" },
    ],
    outcome: {
      pl: "Rodzic wychodzi z planem jednej zmiany w przestrzeni domowej.",
      en: "Each parent leaves with a plan for one change in their home space.",
    },
    steps: [
      { label: { pl: "01 — Rozgrzewka: jeden poranek", en: "01 — Warm-up: one morning" } },
      { label: { pl: "02 — Ćwiczenie: audyt czynności", en: "02 — Exercise: activity audit" } },
      { label: { pl: "03 — Rozmowa i refleksja", en: "03 — Conversation and reflection" } },
      { label: { pl: "04 — Miniwykład: strefa najbliższego rozwoju", en: "04 — Mini-lecture: zone of proximal development" } },
      { label: { pl: "05 — Praktyka: projekt strefy samodzielności", en: "05 — Practice: designing an independence zone" } },
      { label: { pl: "06 — Podsumowanie", en: "06 — Wrap-up" } },
    ],
    methods: [
      { pl: "praca indywidualna", en: "individual work" },
      { pl: "projektowanie", en: "design work" },
      { pl: "dyskusja", en: "discussion" },
      { pl: "miniwykład", en: "mini-lecture" },
    ],
    designed: commonDesigned,
  },
  {
    id: "rodzicielstwo-bez-presji",
    title: { pl: "Rodzicielstwo bez presji", en: "Parenting without pressure" },
    tag: { pl: "Dobrostan", en: "Well-being" },
    audience: { pl: "Rodzice małych dzieci", en: "Parents of young children" },
    duration: { pl: "90 minut", en: "90 minutes" },
    need: {
      pl: "Porównywanie się i oczekiwania z zewnątrz odbierają rodzicom pewność siebie.",
      en: "Comparison and outside expectations take away parents' confidence.",
    },
    goal: {
      pl: "Uczestnicy nazywają własne wartości rodzicielskie i odróżniają je od cudzych oczekiwań.",
      en: "Participants name their own parenting values and separate them from other people's expectations.",
    },
    activities: [
      { pl: "Ćwiczenie „czyj to głos” — źródła presji", en: "“Whose voice is it” exercise — sources of pressure" },
      { pl: "Wybór trzech własnych wartości", en: "Choosing three personal values" },
      { pl: "Krąg wymiany doświadczeń", en: "Sharing circle" },
    ],
    materials: [
      { pl: "Karty wartości", en: "Value cards" },
      { pl: "Karta pracy „Czyj to głos”", en: "“Whose voice is it” worksheet" },
      { pl: "Krótkie teksty do refleksji", en: "Short reflection texts" },
    ],
    outcome: {
      pl: "Poczucie ulgi i jasność co do własnych priorytetów rodzicielskich.",
      en: "A sense of relief and clarity about one's own parenting priorities.",
    },
    steps: [
      { label: { pl: "01 — Wejście w temat: skąd presja", en: "01 — Entering the topic: where pressure comes from" } },
      { label: { pl: "02 — Ćwiczenie: czyj to głos", en: "02 — Exercise: whose voice is it" } },
      { label: { pl: "03 — Rozmowa i refleksja", en: "03 — Conversation and reflection" } },
      { label: { pl: "04 — Miniwykład: wartości a oczekiwania", en: "04 — Mini-lecture: values vs. expectations" } },
      { label: { pl: "05 — Praktyka: moje trzy wartości", en: "05 — Practice: my three values" } },
      { label: { pl: "06 — Podsumowanie w kręgu", en: "06 — Closing circle" } },
    ],
    methods: [
      { pl: "refleksja indywidualna", en: "individual reflection" },
      { pl: "rozmowa w kręgu", en: "circle conversation" },
      { pl: "praca z kartami", en: "card work" },
      { pl: "dyskusja", en: "discussion" },
    ],
    designed: commonDesigned,
  },
];
