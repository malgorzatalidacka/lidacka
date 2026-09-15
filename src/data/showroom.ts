import type { Localized } from "@/i18n/translations";

/**
 * All Showroom content lives here so copy, projects and materials can be
 * edited without touching the interface components.
 */

export interface ShowroomTile {
  id: string;
  kicker: string;
  title: Localized;
  body: Localized;
  target: string; // element id to scroll to
  glyph: string;
}

export interface PlayProject {
  id: string;
  title: string;
  tool: string;
  /** Public embed / share link. Leave empty for a placeholder frame. */
  embedUrl: string;
  externalUrl?: string;
  description: Localized;
  audience: Localized;
  goal: Localized;
  role: Localized;
}

export interface ToolkitItem {
  id: string;
  title: Localized;
  what: Localized;
  how: Localized;
  teaches: Localized;
  /** Optional short excerpt printed on the card front (mockup). */
  excerpt: Localized;
}

export interface ToolkitCategory {
  id: string;
  glyph: string;
  label: Localized;
  blurb: Localized;
  items: ToolkitItem[];
}

export interface ScenarioOption {
  id: string;
  label: Localized;
  feedback: Localized;
  quality: "best" | "ok" | "poor";
}

export interface Scenario {
  id: string;
  context: Localized;
  situation: Localized;
  question: Localized;
  options: ScenarioOption[];
  designNote: Localized;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: Localized;
  question: Localized;
  body: Localized;
  artifact: Localized;
}

export interface BeforeAfter {
  id: string;
  title: Localized;
  before: Localized;
  after: Localized;
  why: Localized;
}

export interface PlaygroundItem {
  id: string;
  category: string;
  title: Localized;
  body: Localized;
}

export interface SkillCategory {
  id: string;
  glyph: string;
  title: Localized;
  description: Localized;
  skills: Localized[];
}

export const showroomHeroChips: { glyph: string; label: Localized }[] = [
  { glyph: "🎮", label: { pl: "Gry", en: "Games" } },
  { glyph: "🧩", label: { pl: "Aktywności", en: "Activities" } },
  { glyph: "🃏", label: { pl: "Karty", en: "Cards" } },
  { glyph: "🎭", label: { pl: "Scenariusze", en: "Scenarios" } },
  { glyph: "🧠", label: { pl: "Refleksja", en: "Reflection" } },
  { glyph: "📊", label: { pl: "Ewaluacja", en: "Evaluation" } },
  { glyph: "🌀", label: { pl: "Prezentacje", en: "Presentations" } },
];

export const showroomTiles: ShowroomTile[] = [
  {
    id: "skills",
    kicker: "SKILLS",
    glyph: "🧠",
    title: { pl: "Moje kompetencje", en: "My skills" },
    body: {
      pl: "Metodyki, narzędzia i umiejętności, których używam w projektowaniu edukacji.",
      en: "Methodologies, tools and abilities I use in learning design.",
    },
    target: "skills",
  },
  {
    id: "play",
    kicker: "PLAY",
    glyph: "🎮",
    title: { pl: "Zagraj w moje doświadczenia", en: "Try my interactive learning" },
    body: {
      pl: "Interaktywne moduły e-learningowe, w których uczysz się przez decyzje.",
      en: "Interactive e-learning modules where you learn by deciding.",
    },
    target: "play",
  },
  {
    id: "explore",
    kicker: "EXPLORE",
    glyph: "🌀",
    title: { pl: "Zobacz moje prezentacje", en: "Explore my presentations" },
    body: {
      pl: "Prezentacje multimedialne projektowane jako podróż, nie zestaw slajdów.",
      en: "Multimedia presentations designed as a journey, not a slide deck.",
    },
    target: "explore",
  },
  {
    id: "plan",
    kicker: "PLAN",
    glyph: "📋",
    title: { pl: "Zobacz scenariusz w SessionLab", en: "See a SessionLab scenario" },
    body: {
      pl: "Jak planuję przebieg warsztatu — czas, cel, metoda i materiały w jednym miejscu.",
      en: "How I plan a workshop flow — time, purpose, method and materials in one place.",
    },
    target: "plan",
  },
  {
    id: "use",
    kicker: "USE",
    glyph: "🧰",
    title: { pl: "Poznaj moje narzędzia", en: "Explore my learning tools" },
    body: {
      pl: "Karty, scenariusze, quizy, karty pracy i narzędzia refleksji.",
      en: "Cards, scenarios, quizzes, worksheets and reflection tools.",
    },
    target: "use",
  },
  {
    id: "seehow",
    kicker: "SEE HOW",
    glyph: "🧭",
    title: { pl: "Zobacz, jak projektuję naukę", en: "See how I design learning" },
    body: {
      pl: "Od realnego problemu do doświadczenia, feedbacku i iteracji.",
      en: "From a real problem to an experience, feedback and iteration.",
    },
    target: "seehow",
  },
];

export const playProjects: PlayProject[] = [
  {
    id: "articulate-game",
    title: "Instrukcja Obsługi Człowieka",
    tool: "Articulate 360",
    embedUrl: "",
    description: {
      pl: "Rozgałęziona gra edukacyjna o emocjach, granicach i komunikacji — uczestnik prowadzi rozmowę, podejmuje decyzje i widzi ich konsekwencje.",
      en: "A branching learning game about emotions, boundaries and communication — the learner leads a conversation, makes decisions and sees the consequences.",
    },
    audience: { pl: "Młodzież 14+ i osoby pracujące z młodzieżą", en: "Teens 14+ and youth workers" },
    goal: {
      pl: "Rozpoznawanie własnych reakcji w napiętych sytuacjach i świadomy wybór odpowiedzi.",
      en: "Recognising your own reactions in tense situations and choosing a response consciously.",
    },
    role: {
      pl: "Zaprojektowałam scenariusz, ścieżki decyzyjne, informacje zwrotne i cały interfejs modułu.",
      en: "I designed the scenario, decision paths, feedback loops and the whole module interface.",
    },
  },
];

export const presentationProjects: PlayProject[] = [
  {
    id: "prezi-safety",
    title: "Reagowanie w sytuacjach niebezpiecznych",
    tool: "Prezi",
    embedUrl: "",
    description: {
      pl: "Nielinearna prezentacja prowadząca przez mapę sytuacji z udziałem dzieci i młodzieży — zamiast slajdów, przestrzeń, po której poruszamy się razem z grupą.",
      en: "A non-linear presentation moving across a map of situations involving children and teenagers — instead of slides, a space we navigate together with the group.",
    },
    audience: { pl: "Nauczyciele, wychowawcy, moderatorzy", en: "Teachers, educators, moderators" },
    goal: {
      pl: "Szybkie rozpoznanie typu sytuacji i wybór adekwatnej reakcji.",
      en: "Quickly recognising the type of situation and choosing an adequate response.",
    },
    role: {
      pl: "Zaprojektowałam strukturę narracji, ścieżkę zoomów i materiały towarzyszące.",
      en: "I designed the narrative structure, the zoom path and the accompanying materials.",
    },
  },
  {
    id: "prezi-animals",
    title: "Zrozumieć psa i kota",
    tool: "Prezi",
    embedUrl: "",
    description: {
      pl: "Prezentacja o relacji człowiek–zwierzę, zbudowana wokół sygnałów, które zwierzęta wysyłają, zanim dojdzie do konfliktu.",
      en: "A presentation about the human–animal relationship, built around the signals animals send before a conflict happens.",
    },
    audience: { pl: "Dzieci, rodziny, grupy szkolne", en: "Children, families, school groups" },
    goal: {
      pl: "Odczytywanie sygnałów zwierzęcia i bezpieczne zachowanie w kontakcie z nim.",
      en: "Reading an animal's signals and behaving safely around it.",
    },
    role: {
      pl: "Opracowałam treść merytoryczną, scenariusz wizualny i ćwiczenia towarzyszące.",
      en: "I developed the content, the visual script and the accompanying exercises.",
    },
  },
];

export const toolkitCategories: ToolkitCategory[] = [
  {
    id: "scenario-cards",
    glyph: "🃏",
    label: { pl: "Karty scenariuszowe", en: "Scenario Cards" },
    blurb: {
      pl: "Karty z sytuacjami do pracy z młodzieżą i zespołami.",
      en: "Situation cards for work with teenagers and teams.",
    },
    items: [
      {
        id: "sc-1",
        title: { pl: "Trudne wejście", en: "A difficult arrival" },
        excerpt: {
          pl: "Na warsztat przychodzi nastolatek wyraźnie pod wpływem substancji.",
          en: "A young person arrives at the workshop visibly intoxicated.",
        },
        what: {
          pl: "Karta z jedną konkretną sytuacją i trzema możliwymi reakcjami.",
          en: "A card with one concrete situation and three possible responses.",
        },
        how: {
          pl: "Grupa losuje kartę, decyduje w parach, potem porównujemy wybory na forum.",
          en: "The group draws a card, decides in pairs, then we compare choices together.",
        },
        teaches: {
          pl: "Że reakcja to wybór, a nie odruch — i że każdy wybór ma konsekwencje.",
          en: "That a response is a choice, not a reflex — and every choice has consequences.",
        },
      },
      {
        id: "sc-2",
        title: { pl: "Naprawianie szkody", en: "Repairing the harm" },
        excerpt: {
          pl: "Ktoś powiedział coś, co zraniło drugą osobę. Co dalej?",
          en: "Someone said something that hurt another person. What now?",
        },
        what: {
          pl: "Karty prowadzące przez cztery kroki przeprosin, które faktycznie działają.",
          en: "Cards guiding through four steps of an apology that actually works.",
        },
        how: {
          pl: "Uczestnicy odgrywają rozmowę, korzystając z kart jako podpowiedzi.",
          en: "Participants act out the conversation, using the cards as prompts.",
        },
        teaches: {
          pl: "Różnicę między „przepraszam, ale…” a realną naprawą relacji.",
          en: "The difference between \"sorry, but…\" and genuinely repairing a relationship.",
        },
      },
    ],
  },
  {
    id: "role-cards",
    glyph: "🎭",
    label: { pl: "Karty ról", en: "Role Cards" },
    blurb: {
      pl: "Role do symulacji, debat i ćwiczeń perspektywy.",
      en: "Roles for simulations, debates and perspective-taking.",
    },
    items: [
      {
        id: "rc-1",
        title: { pl: "Moderator rozmowy", en: "Discussion moderator" },
        excerpt: {
          pl: "Twoim zadaniem jest pilnować, żeby każdy głos się zmieścił.",
          en: "Your task is to make sure every voice fits in the room.",
        },
        what: {
          pl: "Karta roli z zadaniem, ograniczeniem i jednym zdaniem-startem.",
          en: "A role card with a task, a constraint and one opening line.",
        },
        how: {
          pl: "Rozdana przed symulacją; po ćwiczeniu wracamy do niej w refleksji.",
          en: "Handed out before the simulation; we return to it in the reflection round.",
        },
        teaches: {
          pl: "Że facylitacja to konkretne zachowania, których można się nauczyć.",
          en: "That facilitation is a set of concrete, learnable behaviours.",
        },
      },
    ],
  },
  {
    id: "reflection",
    glyph: "🧠",
    label: { pl: "Narzędzia refleksji", en: "Reflection Tools" },
    blurb: { pl: "Pytania i formaty domykające doświadczenie.", en: "Questions and formats that close an experience." },
    items: [
      {
        id: "rf-1",
        title: { pl: "Trzy zdania na wyjście", en: "Three sentences on the way out" },
        excerpt: {
          pl: "Zauważyłam… / Zaskoczyło mnie… / Spróbuję…",
          en: "I noticed… / I was surprised by… / I will try…",
        },
        what: { pl: "Krótki format zamknięcia zajęć.", en: "A short closing format." },
        how: {
          pl: "Każdy uzupełnia trzy zdania na kartce, chętni czytają na głos.",
          en: "Everyone completes three sentences on paper, volunteers read aloud.",
        },
        teaches: {
          pl: "Przenoszenie wniosku z sali do codziennego życia.",
          en: "Carrying an insight from the room into everyday life.",
        },
      },
    ],
  },
  {
    id: "decision-trees",
    glyph: "🎯",
    label: { pl: "Drzewa decyzyjne", en: "Decision Trees" },
    blurb: { pl: "Ćwiczenia oparte na wyborach i konsekwencjach.", en: "Exercises built on choices and consequences." },
    items: [
      {
        id: "dt-1",
        title: { pl: "Nasz nowy świat", en: "Our new world" },
        excerpt: {
          pl: "Grupa projektuje zasady wspólnoty, decyzja po decyzji.",
          en: "The group designs the rules of a community, decision by decision.",
        },
        what: { pl: "Rozgałęzione ćwiczenie grupowe na dużym arkuszu.", en: "A branching group exercise on a large sheet." },
        how: {
          pl: "Każda decyzja odsłania kolejny dylemat; grupa widzi skutki własnych wyborów.",
          en: "Every decision reveals the next dilemma; the group sees the effects of its own choices.",
        },
        teaches: {
          pl: "Myślenie systemowe i kompromis zamiast jednej „poprawnej” odpowiedzi.",
          en: "Systems thinking and compromise instead of one \"correct\" answer.",
        },
      },
    ],
  },
  {
    id: "worksheets",
    glyph: "📝",
    label: { pl: "Karty pracy", en: "Worksheets" },
    blurb: { pl: "Materiały dla uczestników i instrukcje dla prowadzących.", en: "Participant materials and facilitator instructions." },
    items: [
      {
        id: "ws-1",
        title: { pl: "Piękny umysł — zmysły i mózg", en: "Beautiful mind — senses and the brain" },
        excerpt: {
          pl: "Mapa zmysłów: co odbieram, co z tym robi mózg, jak reaguję.",
          en: "A map of the senses: what I receive, what my brain does with it, how I react.",
        },
        what: { pl: "Karta pracy z ćwiczeniem obserwacyjnym.", en: "A worksheet with an observation exercise." },
        how: { pl: "Wypełniana indywidualnie, omawiana w trójkach.", en: "Filled in individually, discussed in threes." },
        teaches: { pl: "Że reakcja ciała poprzedza świadomą myśl.", en: "That a body reaction precedes conscious thought." },
      },
    ],
  },
  {
    id: "games",
    glyph: "🎲",
    label: { pl: "Gry edukacyjne", en: "Learning Games" },
    blurb: { pl: "Aktywności z zasadami, celem i napięciem.", en: "Activities with rules, a goal and tension." },
    items: [
      {
        id: "gm-1",
        title: { pl: "Sygnały", en: "Signals" },
        excerpt: {
          pl: "Odczytaj sygnał, zanim zrobisz krok — gra o uważności w relacji.",
          en: "Read the signal before you take a step — a game about attentiveness in relationships.",
        },
        what: { pl: "Krótka gra karciana dla 4–20 osób.", en: "A short card game for 4–20 people." },
        how: { pl: "Rundy po 3 minuty, po każdej krótkie omówienie.", en: "Three-minute rounds, each followed by a short debrief." },
        teaches: { pl: "Uważność na sygnały niewerbalne.", en: "Attentiveness to non-verbal signals." },
      },
    ],
  },
  {
    id: "quizzes",
    glyph: "❓",
    label: { pl: "Quizy", en: "Quizzes" },
    blurb: { pl: "Krótkie narzędzia sprawdzające i otwierające temat.", en: "Short tools that check knowledge and open a topic." },
    items: [
      {
        id: "qz-1",
        title: { pl: "Mit czy fakt?", en: "Myth or fact?" },
        excerpt: { pl: "Sześć zdań. Trzy z nich to mity.", en: "Six statements. Three of them are myths." },
        what: { pl: "Quiz otwierający zajęcia.", en: "A quiz that opens a session." },
        how: { pl: "Głosowanie ruchem po sali, potem wyjaśnienie.", en: "Voting by moving around the room, then an explanation." },
        teaches: { pl: "Że wiedza potoczna bywa myląca — i warto ją sprawdzać.", en: "That common knowledge can mislead — and is worth checking." },
      },
    ],
  },
  {
    id: "evaluation",
    glyph: "📊",
    label: { pl: "Ewaluacja", en: "Evaluation" },
    blurb: { pl: "Ankiety i narzędzia zbierania informacji zwrotnej.", en: "Surveys and feedback-gathering tools." },
    items: [
      {
        id: "ev-1",
        title: { pl: "Termometr zajęć", en: "Session thermometer" },
        excerpt: { pl: "Jedna skala, jedno pytanie otwarte, trzydzieści sekund.", en: "One scale, one open question, thirty seconds." },
        what: { pl: "Mikro-ankieta na wyjściu z sali.", en: "A micro-survey at the door." },
        how: { pl: "Naklejki na plakacie lub krótki formularz online.", en: "Stickers on a poster or a short online form." },
        teaches: { pl: "Mnie — co zmienić w kolejnej wersji scenariusza.", en: "Me — what to change in the next version of the scenario." },
      },
    ],
  },
];

export const scenarios: Scenario[] = [
  {
    id: "intoxicated",
    context: { pl: "Warsztat dla młodzieży", en: "Youth workshop" },
    situation: {
      pl: "Na warsztat przychodzi nastolatek wyraźnie pod wpływem substancji. Grupa to zauważa.",
      en: "A young person arrives at the workshop visibly intoxicated. The group notices.",
    },
    question: { pl: "Co robisz?", en: "What would you do?" },
    options: [
      {
        id: "a",
        label: { pl: "Wypraszasz go z sali przy grupie.", en: "You ask them to leave in front of the group." },
        quality: "poor",
        feedback: {
          pl: "Bezpieczeństwo grupy jest ważne, ale publiczne wykluczenie zamyka kontakt i podnosi ryzyko. Osoba wychodzi bez opieki.",
          en: "Group safety matters, but a public exclusion cuts off contact and raises risk. The person leaves unsupervised.",
        },
      },
      {
        id: "b",
        label: { pl: "Robisz przerwę i rozmawiasz z nim na osobności.", en: "You call a break and talk to them privately." },
        quality: "best",
        feedback: {
          pl: "Tak. Utrzymujesz kontakt, chronisz godność uczestnika i zyskujesz czas na ocenę stanu oraz uruchomienie procedury.",
          en: "Yes. You keep contact, protect the person's dignity and gain time to assess the situation and start the procedure.",
        },
      },
      {
        id: "c",
        label: { pl: "Udajesz, że nic się nie dzieje i prowadzisz dalej.", en: "You ignore it and carry on." },
        quality: "poor",
        feedback: {
          pl: "Grupa już to widzi. Brak reakcji podważa poczucie bezpieczeństwa i twoją wiarygodność jako prowadzącej.",
          en: "The group already sees it. No reaction undermines the sense of safety and your credibility as a facilitator.",
        },
      },
    ],
    designNote: {
      pl: "Zaprojektowałam tę kartę bez „jedynej poprawnej odpowiedzi” — feedback pokazuje konsekwencje, nie ocenę.",
      en: "I designed this card without a single correct answer — the feedback shows consequences, not a grade.",
    },
  },
  {
    id: "apology",
    context: { pl: "Ćwiczenie o naprawianiu szkody", en: "Repairing harm exercise" },
    situation: {
      pl: "Uczestnik żartem ośmieszył inną osobę. Ta osoba milknie na resztę zajęć.",
      en: "A participant made a joke at another person's expense. That person goes quiet for the rest of the session.",
    },
    question: { pl: "Co robisz?", en: "What would you do?" },
    options: [
      {
        id: "a",
        label: { pl: "Prosisz o natychmiastowe przeprosiny na forum.", en: "You ask for an immediate public apology." },
        quality: "ok",
        feedback: {
          pl: "Szybko, ale wymuszone przeprosiny rzadko naprawiają relację — i przenoszą uwagę na osobę zranioną.",
          en: "Fast, but a forced apology rarely repairs a relationship — and it puts the spotlight on the hurt person.",
        },
      },
      {
        id: "b",
        label: { pl: "Nazywasz zasadę grupy i wracasz do tematu po ćwiczeniu.", en: "You name the group agreement and return to it after the exercise." },
        quality: "best",
        feedback: {
          pl: "Tak. Reagujesz od razu na poziomie normy, a naprawę relacji prowadzisz w warunkach, które ją umożliwiają.",
          en: "Yes. You respond immediately at the level of the norm, and handle the repair in conditions that make it possible.",
        },
      },
      {
        id: "c",
        label: { pl: "Zbywasz to żartem, żeby rozładować napięcie.", en: "You brush it off with a joke to ease the tension." },
        quality: "poor",
        feedback: {
          pl: "Napięcie znika z powierzchni, ale osoba zraniona dostaje sygnał, że jej reakcja się nie liczy.",
          en: "The tension leaves the surface, but the hurt person hears that their reaction does not count.",
        },
      },
    ],
    designNote: {
      pl: "Ćwiczenie testowałam z dwiema grupami — po pierwszej skróciłam opis sytuacji o połowę, bo grupa gubiła się w detalach.",
      en: "I tested this exercise with two groups — after the first I halved the situation description, because the group got lost in details.",
    },
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "problem",
    number: "01",
    title: { pl: "Realny problem", en: "Real problem" },
    question: { pl: "Jaka potrzeba edukacyjna jest za tym tematem?", en: "What educational need sits behind the topic?" },
    body: {
      pl: "Zaczynam od rozmowy z zamawiającym i uczestnikami: co dokładnie nie działa i w jakiej sytuacji.",
      en: "I start with the client and the participants: what exactly does not work, and in which situation.",
    },
    artifact: { pl: "Notatki z rozmów, mapa potrzeb", en: "Interview notes, needs map" },
  },
  {
    id: "objective",
    number: "02",
    title: { pl: "Cel uczenia się", en: "Learning objective" },
    question: { pl: "Co uczestnik zauważy, zrozumie, zrobi?", en: "What will the learner notice, understand, do?" },
    body: {
      pl: "Przekładam potrzebę na jedno zdanie zaczynające się od czasownika — to filtr dla wszystkich decyzji.",
      en: "I turn the need into a single verb-first sentence — the filter for every later decision.",
    },
    artifact: { pl: "Karta celu zajęć", en: "Objective card" },
  },
  {
    id: "design",
    number: "03",
    title: { pl: "Projekt doświadczenia", en: "Design" },
    question: { pl: "Jaka aktywność doprowadzi do tego celu?", en: "Which activity leads to that goal?" },
    body: {
      pl: "Wybieram format: ćwiczenie, symulacja, gra, rozmowa. Zawsze doświadczenie przed wyjaśnieniem.",
      en: "I choose the format: exercise, simulation, game, conversation. Always experience before explanation.",
    },
    artifact: { pl: "Storyboard scenariusza", en: "Scenario storyboard" },
  },
  {
    id: "materials",
    number: "04",
    title: { pl: "Materiały", en: "Materials" },
    question: { pl: "Czego potrzebuję, żeby to zadziałało?", en: "What do I need to make it work?" },
    body: {
      pl: "Projektuję karty, instrukcje dla prowadzącego i materiały dla uczestników — tak, żeby ktoś inny mógł je poprowadzić.",
      en: "I design cards, facilitator instructions and participant materials — so that someone else could run it.",
    },
    artifact: { pl: "Zestaw kart, karta pracy, instrukcja", en: "Card set, worksheet, instructions" },
  },
  {
    id: "experience",
    number: "05",
    title: { pl: "Doświadczenie", en: "Experience" },
    question: { pl: "Jak wygląda to z perspektywy uczestnika?", en: "What does it look like from the learner's side?" },
    body: {
      pl: "Prowadzę i obserwuję: gdzie rośnie energia, gdzie spada uwaga, o co grupa dopytuje.",
      en: "I facilitate and observe: where energy rises, where attention drops, what the group asks about.",
    },
    artifact: { pl: "Notatki z sali", en: "In-room notes" },
  },
  {
    id: "feedback",
    number: "06",
    title: { pl: "Informacja zwrotna", en: "Feedback" },
    question: { pl: "Skąd wiem, czy to zadziałało?", en: "How do I know it worked?" },
    body: {
      pl: "Krótka ewaluacja na wyjściu plus rozmowa z osobą zamawiającą po kilku tygodniach.",
      en: "A short exit evaluation plus a conversation with the client a few weeks later.",
    },
    artifact: { pl: "Termometr zajęć, ankieta", en: "Session thermometer, survey" },
  },
  {
    id: "iteration",
    number: "07",
    title: { pl: "Iteracja", en: "Iteration" },
    question: { pl: "Co zmieniam w kolejnej wersji?", en: "What changes in the next version?" },
    body: {
      pl: "Każdy scenariusz ma numer wersji. Zmiany zapisuję razem z powodem, dla którego je wprowadziłam.",
      en: "Every scenario has a version number. I record each change together with the reason behind it.",
    },
    artifact: { pl: "Scenariusz v2, lista zmian", en: "Scenario v2, changelog" },
  },
];

export const beforeAfter: BeforeAfter[] = [
  {
    id: "ba-1",
    title: { pl: "Karta scenariuszowa", en: "Scenario card" },
    before: {
      pl: "Pierwsza wersja: pół strony opisu sytuacji, pięć wariantów odpowiedzi, drobny druk.",
      en: "First version: half a page of situation description, five answer options, small print.",
    },
    after: {
      pl: "Wersja druga: trzy zdania, trzy warianty, miejsce na własną odpowiedź uczestnika.",
      en: "Second version: three sentences, three options, space for the participant's own answer.",
    },
    why: {
      pl: "Grupa czytała kartę dłużej, niż o niej rozmawiała. Skróciłam treść, żeby czas poszedł w rozmowę.",
      en: "The group spent longer reading the card than discussing it. I cut the text so the time goes into conversation.",
    },
  },
  {
    id: "ba-2",
    title: { pl: "Instrukcja dla prowadzącego", en: "Facilitator instructions" },
    before: {
      pl: "Ciągły tekst opisujący przebieg zajęć od początku do końca.",
      en: "A continuous text describing the session from beginning to end.",
    },
    after: {
      pl: "Tabela: czas, cel kroku, co mówię, czego potrzebuję, sygnały ostrzegawcze.",
      en: "A table: time, purpose of the step, what I say, what I need, warning signals.",
    },
    why: {
      pl: "Inna osoba miała poprowadzić zajęcia z moich materiałów — potrzebowała czegoś, co da się czytać w trakcie.",
      en: "Another person had to run the session from my materials — she needed something readable while facilitating.",
    },
  },
];

export const playgroundCategories: { id: string; glyph: string; label: Localized }[] = [
  { id: "all", glyph: "✳️", label: { pl: "Wszystko", en: "All" } },
  { id: "games", glyph: "🎲", label: { pl: "Gry", en: "Games" } },
  { id: "cards", glyph: "🃏", label: { pl: "Karty", en: "Cards" } },
  { id: "activities", glyph: "🧩", label: { pl: "Aktywności", en: "Activities" } },
  { id: "reflection", glyph: "🧠", label: { pl: "Refleksja", en: "Reflection" } },
  { id: "roleplay", glyph: "🎭", label: { pl: "Role-play", en: "Role-play" } },
  { id: "quizzes", glyph: "❓", label: { pl: "Quizy", en: "Quizzes" } },
  { id: "worksheets", glyph: "📄", label: { pl: "Karty pracy", en: "Worksheets" } },
  { id: "evaluation", glyph: "📊", label: { pl: "Ewaluacja", en: "Evaluation" } },
];

export const playgroundItems: PlaygroundItem[] = [
  {
    id: "pg-1",
    category: "games",
    title: { pl: "Sygnały", en: "Signals" },
    body: { pl: "Gra karciana o odczytywaniu sygnałów, zanim zrobimy krok.", en: "A card game about reading signals before taking a step." },
  },
  {
    id: "pg-2",
    category: "cards",
    title: { pl: "Instrukcja Obsługi Człowieka", en: "Human User Manual" },
    body: { pl: "Karty o emocjach, granicach i komunikacji.", en: "Cards about emotions, boundaries and communication." },
  },
  {
    id: "pg-3",
    category: "activities",
    title: { pl: "Nasz nowy świat", en: "Our new world" },
    body: { pl: "Grupowe ćwiczenie projektowania zasad wspólnoty.", en: "A group exercise in designing community rules." },
  },
  {
    id: "pg-4",
    category: "reflection",
    title: { pl: "Trzy zdania na wyjście", en: "Three sentences on the way out" },
    body: { pl: "Mikro-format domykający zajęcia.", en: "A micro-format that closes a session." },
  },
  {
    id: "pg-5",
    category: "roleplay",
    title: { pl: "Przepraszam i naprawiam", en: "Sorry, and I repair it" },
    body: { pl: "Scenki o przepraszaniu, które faktycznie coś zmienia.", en: "Role-plays about apologies that actually change something." },
  },
  {
    id: "pg-6",
    category: "quizzes",
    title: { pl: "Mit czy fakt?", en: "Myth or fact?" },
    body: { pl: "Quiz otwierający temat bezpieczeństwa.", en: "A quiz opening the safety topic." },
  },
  {
    id: "pg-7",
    category: "worksheets",
    title: { pl: "Piękny umysł", en: "Beautiful mind" },
    body: { pl: "Karta pracy o zmysłach i funkcjach mózgu.", en: "A worksheet about the senses and brain functions." },
  },
  {
    id: "pg-8",
    category: "evaluation",
    title: { pl: "Termometr zajęć", en: "Session thermometer" },
    body: { pl: "Trzydziestosekundowa ewaluacja na wyjściu.", en: "A thirty-second exit evaluation." },
  },
  {
    id: "pg-9",
    category: "cards",
    title: { pl: "Zrozumieć psa i kota", en: "Understanding dogs and cats" },
    body: { pl: "Karty o sygnałach zwierząt i bezpiecznym kontakcie.", en: "Cards about animal signals and safe contact." },
  },
  {
    id: "pg-10",
    category: "activities",
    title: { pl: "Warsztaty dla rodziców", en: "Materials for parent workshops" },
    body: { pl: "Zestaw ćwiczeń i materiałów z Klubów Rodziców.", en: "A set of exercises and materials from the Parent Clubs." },
  },
];

export interface SessionLabBlock {
  id: string;
  time: string;
  title: Localized;
  method: Localized;
  purpose: Localized;
  materials?: Localized;
}

export interface SessionLabScenario {
  id: string;
  title: Localized;
  intro: Localized;
  duration: Localized;
  audience: Localized;
  groupSize: Localized;
  goal: Localized;
  blocks: SessionLabBlock[];
  embedUrl?: string;
  externalUrl?: string;
}

export const sessionLabScenario: SessionLabScenario = {
  id: "parent-workshop",
  title: {
    pl: "Warsztat dla rodziców: Granice i emocje_",
    en: "Parent workshop: Boundaries and emotions_",
  },
  intro: {
    pl: "Scenariusz przygotowany w SessionLab dla jednego z krakowskich Klubów Rodziców. Łączy krótkie ćwiczenia, refleksję w parach i wspólne omówienie, żeby rodzice wyszli z konkretnymi pomysłami, a nie tylko teorii.",
    en: "A scenario built in SessionLab for one of Kraków's Parent Clubs. It mixes short exercises, pair reflection and group debrief so parents leave with concrete ideas, not just theory.",
  },
  duration: { pl: "90 minut", en: "90 minutes" },
  audience: { pl: "Rodzice dzieci w wieku 6–10 lat", en: "Parents of children aged 6–10" },
  groupSize: { pl: "8–12 osób", en: "8–12 people" },
  goal: {
    pl: "Rozpoznanie własnych granic i reakcji emocjonalnych oraz wypróbowanie sposobów rozmowy z dzieckiem o trudnych sytuacjach.",
    en: "Recognising your own boundaries and emotional reactions, and trying out ways to talk with a child about difficult situations.",
  },
  blocks: [
    {
      id: "open",
      time: "0:00–0:10",
      title: { pl: "Wejście bez pośpiechu", en: "A calm arrival" },
      method: { pl: "Krótka runda: jedno słowo, które dziś przychodzi na myśl, gdy myślisz o granicach.", en: "A short round: one word that comes to mind today when you think about boundaries." },
      purpose: { pl: "Stopniowe przejście z codzienności do tematu warsztatu.", en: "A gradual transition from everyday life into the workshop topic." },
      materials: { pl: "Kartki i markery", en: "Paper cards and markers" },
    },
    {
      id: "map",
      time: "0:10–0:25",
      title: { pl: "Mapa sytuacji", en: "Situation map" },
      method: { pl: "Rodzice zapisują na karteczkach trzy sytuacje, w których trudno im ustalić granicę. Grupujemy je na wspólnej tablicy.", en: "Parents write three situations where it is hard to set a boundary. We group them on a shared board." },
      purpose: { pl: "Wspólne zobaczenie, że trudności nie są odosobnione.", en: "Seeing together that the difficulties are not isolated." },
      materials: { pl: "Karteczki samoprzylepne, duży arkusz", en: "Sticky notes, large sheet" },
    },
    {
      id: "tool",
      time: "0:25–0:45",
      title: { pl: "Model: granica – potrzeba – reakcja", en: "Model: boundary – need – reaction" },
      method: { pl: "Krótki mini-wykład z przykładami, potem ćwiczenie w parach: dopasowanie własnej sytuacji do modelu.", en: "A short mini-lecture with examples, then a pair exercise: matching your own situation to the model." },
      purpose: { pl: "Nadanie rodzicom wspólnego języka do opisu trudnych momentów.", en: "Giving parents a shared language to describe difficult moments." },
      materials: { pl: "Karty pracy z modelem", en: "Worksheets with the model" },
    },
    {
      id: "practice",
      time: "0:45–1:10",
      title: { pl: "Próbne rozmowy", en: "Practice conversations" },
      method: { pl: "Role-play w trójkach: rodzic, dziecko, obserwator. Po każdej rundzie krótka informacja zwrotna.", en: "Role-play in trios: parent, child, observer. After each round a short feedback round." },
      purpose: { pl: "Bezpieczne wypróbowanie nowych sformułowań w realistycznej sytuacji.", en: "Safely trying out new phrasing in a realistic situation." },
      materials: { pl: "Karty scenariuszowe", en: "Scenario cards" },
    },
    {
      id: "close",
      time: "1:10–1:30",
      title: { pl: "Domknięcie i jedna rzecz do spróbowania", en: "Closing and one thing to try" },
      method: { pl: "Każdy zapisuje jeden mały krok, który zrobi w domu. Wolontariusze dzielą się z grupą.", en: "Everyone writes one small step they will take at home. Volunteers share with the group." },
      purpose: { pl: "Przeniesienie wniosku z sali do codziennego życia.", en: "Carrying the insight from the room into everyday life." },
      materials: { pl: "Karteczki \"Jedna rzecz\"", en: "\"One thing\" cards" },
    },
  ],
  embedUrl: "",
  externalUrl: "",
};
