import graffitiface from '@/assets/projects/graffiti-face.jpg';
import flowersPainting from '@/assets/projects/flowers-painting.jpg';
import watercolorFlowers from '@/assets/projects/watercolor-flowers.jpg';
import varoomMagazine from '@/assets/projects/varoom-magazine.jpg';
import palmDigital from '@/assets/projects/palm-digital.jpg';
import catIllustration from '@/assets/projects/cat-illustration.jpg';
import birdIllustration from '@/assets/projects/bird-illustration.jpg';
import goldenJewelry from '@/assets/projects/golden-jewelry.jpg';
import echo1 from '@/assets/projects/echo-1.jpg';
import echo2 from '@/assets/projects/echo-2.jpg';
import echo3 from '@/assets/projects/echo-3.jpg';
import echo4 from '@/assets/projects/echo-4.jpg';
import forma1 from '@/assets/projects/forma-1.jpg';
import forma2 from '@/assets/projects/forma-2.jpg';
import forma3 from '@/assets/projects/forma-3.jpg';
import forma4 from '@/assets/projects/forma-4.jpg';
import awansHero from '@/assets/projects/awans-hero.jpg';
import type { Localized } from '@/i18n/translations';

export interface Project {
  id: string;
  title: string;
  client: string;
  category: Localized;
  year: string;
  description: Localized;
  challenge: Localized;
  solution: Localized;
  image: string;
  images: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "fundacja-tab",
    title: "Instrukcja Obsługi Człowieka_",
    client: "Fundacja TAB",
    category: {
      pl: "Learning Design · Projekty społeczne · Edukacja",
      en: "Learning Design · Social Projects · Education",
    },
    year: "2022–2024",
    description: {
      pl: "Projekty edukacyjne i społeczne realizowane przez Fundację TAB — warsztaty, programy rozwojowe i materiały edukacyjne tworzone z myślą o dzieciach, młodzieży i osobach dorosłych wspierających ich rozwój.",
      en: "Educational and social projects delivered by Fundacja TAB — workshops, development programmes and learning materials created for children, young people and the adults who support their growth.",
    },
    challenge: {
      pl: "Działania fundacji obejmowały bardzo różne grupy odbiorców i tematy. Wyzwaniem było stworzenie spójnego podejścia edukacyjnego, które daje strukturę, a jednocześnie zostawia przestrzeń na potrzeby konkretnej grupy.",
      en: "The foundation's work covered very different audiences and topics. The challenge was to create a coherent educational approach that provides structure while leaving room for the needs of each specific group.",
    },
    solution: {
      pl: "Zaprojektowałam powtarzalne ramy scenariuszy: jasny cel, aktywności oparte na doświadczeniu, refleksja i materiały do samodzielnej pracy. Dzięki temu każdy warsztat można było szybko dopasować do grupy bez utraty jakości merytorycznej.",
      en: "I designed a repeatable scenario framework: a clear goal, experience-based activities, reflection and take-away materials. This allowed each workshop to be adapted quickly to a group without losing pedagogical quality.",
    },
    image: graffitiface,
    images: [graffitiface, flowersPainting, watercolorFlowers],
    featured: true
  },
  {
    id: "awans",
    title: "AWANS_",
    client: "Małopolski Związek Piłki Ręcznej",
    category: {
      pl: "Learning Design · Edukacja sportowa · Program rozwojowy",
      en: "Learning Design · Sports Education · Development Programme",
    },
    year: "2023–2024",
    description: {
      pl: "AWANS to program rozwojowy wspierający młodych sędziów piłki ręcznej w drodze od pierwszych doświadczeń na boisku do certyfikacji i sędziowania na wyższym poziomie. Program łączy warsztaty, treningi praktyczne, mecze, informację zwrotną, mentoring i ocenę w jedną spójną ścieżkę uczenia się.",
      en: "AWANS is a development programme designed to support young handball referees in progressing from their first experiences on court towards certification and higher-level refereeing. The programme combines workshops, practical training, matches, feedback, mentoring and assessment into one structured learning journey.",
    },
    challenge: {
      pl: "Młodzi sędziowie często znają przepisy, ale bycie pewnym siebie sędzią wymaga znacznie więcej niż wiedza teoretyczna. Potrzebują przestrzeni, w której mogą ćwiczyć decyzje, otrzymywać konstruktywny feedback i stopniowo budować samodzielność.",
      en: "Young referees often know the rules, but becoming a confident referee requires much more than theoretical knowledge. They need a space to practise decisions, receive constructive feedback and gradually build independence.",
    },
    solution: {
      pl: "AWANS został zaprojektowany jako uporządkowana ścieżka rozwoju: od pierwszego gwizdka, przez praktykę i refleksję, aż po egzamin końcowy. Połączenie teorii, realnych sytuacji meczowych, mentoringu i oceny zamienia wiedzę w zawodową kompetencję.",
      en: "AWANS was designed as a structured development pathway: from the first whistle, through practice and reflection, to the final exam. The combination of theory, real match situations, mentoring and assessment turns knowledge into professional competence.",
    },
    image: awansHero,
    images: [awansHero],
    featured: true
  },
  {
    id: "open-future",
    title: "Open Future_",
    client: "Open Future",
    category: {
      pl: "Learning Design · Program rozwojowy · Przyszłość pracy",
      en: "Learning Design · Development Programme · Future of Work",
    },
    year: "2023",
    description: {
      pl: "Program rozwojowy i warsztaty dla młodych ludzi przygotowujących się do przyszłości pracy. Open Future łączy rozwój kompetencji przyszłości, projektowanie ścieżek kariery i narzędzia uczenia się przez całe życie.",
      en: "A development programme and workshops for young people preparing for the future of work. Open Future combines future-ready skills, career-path design and lifelong learning tools.",
    },
    challenge: {
      pl: "Młodzi uczestnicy mieli różne doświadczenia edukacyjne i niepewność co do własnych możliwości. Wyzwaniem było stworzenie przestrzeni, w której każdy czuje się gotów eksplorować swoje mocne strony i próbować nowych ról.",
      en: "Participants came with varied educational experiences and uncertainty about their own potential. The challenge was to create a space where everyone felt ready to explore their strengths and try on new roles.",
    },
    solution: {
      pl: "Zaprojektowałam cykl warsztatów oparty na refleksji, prototypowaniu i realnych sytuacjach. Uczestnicy odkrywali swoje kompetencje, tworzyli osobiste mapy rozwoju i ćwiczyli podejmowanie decyzji w warunkach zmiany.",
      en: "I designed a workshop cycle built on reflection, prototyping and real-life scenarios. Participants discovered their competencies, created personal development maps and practised decision-making in conditions of change.",
    },
    image: flowersPainting,
    images: [flowersPainting, birdIllustration, goldenJewelry],
    featured: true
  },
  {
    id: "silniejsza-fundacja",
    title: "Silniejsza Fundacja - lepsza pomoc szczeniakom i kociakom_",
    client: "Fundacja TAB",
    category: {
      pl: "Learning Design · Projekty społeczne · Ochrona zwierząt",
      en: "Learning Design · Social Projects · Animal Welfare",
    },
    year: "2023",
    description: {
      pl: "Program edukacyjny i kampania społeczna dla Fundacji TAB, wspierająca opiekunów małych zwierząt oraz osoby pracujące w schroniskach. Celem jest budowanie wiedzy, umiejętności i sieci wsparcia, które poprawiają jakość pomocy szczeniakom i kociakom.",
      en: "An educational programme and social campaign for Fundacja TAB supporting caregivers of young animals and shelter workers. The goal is to build knowledge, skills and a support network that improves the quality of help for puppies and kittens.",
    },
    challenge: {
      pl: "Wiele osób pomagających zwierzętom działa spontanicznie, bez dostępu do sprawdzonych metod i wiedzy eksperckiej. Wyzwaniem było stworzenie materiałów, które są praktyczne, empatyczne i łatwe do wykorzystania w codziennej pracy.",
      en: "Many people helping animals act spontaneously, without access to proven methods or expert knowledge. The challenge was to create materials that are practical, empathetic and easy to use in everyday work.",
    },
    solution: {
      pl: "Zaprojektowałam ścieżkę edukacyjną łączącą warsztaty, scenariusze zajęć i materiały do samodzielnej pracy. Treści oparte na wiedzy weterynaryjnej i behawioralnej zostały przekute w przystępne narzędzia, które wzmacniają kompetencje opiekunów.",
      en: "I designed a learning journey combining workshops, session scenarios and self-study materials. Veterinary and behavioural knowledge was turned into accessible tools that strengthen caregivers' competencies.",
    },
    image: catIllustration,
    images: [catIllustration, birdIllustration, flowersPainting]
  },
  {
    id: "make-your-vote",
    title: "Make your vote!_",
    client: "FORMAC S.A.",
    category: {
      pl: "Learning Design · Edukacja obywatelska · Kampania społeczna",
      en: "Learning Design · Civic Education · Social Campaign",
    },
    year: "2023",
    description: {
      pl: "Kampania edukacyjna i program warsztatowy dla FORMAC S.A., zachęcający młodych ludzi do aktywnego udziału w wyborach i życiu publicznym. Projekt łączy edukację obywatelską, narzędzia krytycznego myślenia i praktyczne scenariusze rozmów o demokracji.",
      en: "An educational campaign and workshop programme for FORMAC S.A. encouraging young people to take an active part in elections and public life. The project combines civic education, critical thinking tools and practical scenarios for conversations about democracy.",
    },
    challenge: {
      pl: "Młode osoby często postrzegają politykę jako odległą i nieprzystępną. Wyzwaniem było stworzenie formatu, który tłumaczy znaczenie głosu, nie moralizując i nie narzucając gotowych opinii.",
      en: "Young people often see politics as distant and inaccessible. The challenge was to create a format that explains the meaning of a vote without preaching or imposing ready-made opinions.",
    },
    solution: {
      pl: "Zaprojektowałam warsztaty oparte na realnych dylematach, symulacjach wyborczych i analizie informacji. Materiały łączą teorię z praktyką, pomagając uczestnikom odkryć własne wartości i podejmować świadome decyzje.",
      en: "I designed workshops based on real dilemmas, election simulations and information analysis. The materials combine theory with practice, helping participants discover their own values and make informed decisions.",
    },
    image: palmDigital,
    images: [palmDigital, varoomMagazine, goldenJewelry]
  },
  {
    id: "centrum-rozwoju-bez-stresu",
    title: "Centrum rozwoju bez stresu_",
    client: "Własna działalność",
    category: {
      pl: "Learning Design · Rozwój osobisty · Wellbeing",
      en: "Learning Design · Personal Development · Wellbeing",
    },
    year: "2023–2024",
    description: {
      pl: "Centrum Rozwoju Bez Stresu to moja autorska przestrzeń edukacyjna, w której projektuję doświadczenia rozwojowe bez presji i pośpiechu. Łączę wiedzę o uczeniu się, psychologii oraz wellbeing, tworząc warsztaty, programy i materiały, które wspierają ludzi w zmianie w ich własnym tempie.",
      en: "Centrum Rozwoju Bez Stresu is my own educational space where I design development experiences free from pressure and rush. I combine knowledge of learning, psychology and wellbeing to create workshops, programmes and materials that support people in changing at their own pace.",
    },
    challenge: {
      pl: "Wiele osób chce się rozwijać, ale spotykają je programy oparte na presji, szybkich efektach i porównywaniu się do innych. Wyzwaniem było stworzenie formatu, który motywuje do działania, jednocześnie szanując potrzeby, tempo i ograniczenia uczestników.",
      en: "Many people want to grow, but they encounter programmes built on pressure, quick results and comparison with others. The challenge was to create a format that motivates action while respecting participants' needs, pace and limits.",
    },
    solution: {
      pl: "Zaprojektowałam koncepcję Centrum opartą na małych krokach, refleksji i budowaniu nawyków. Każdy program ma jasną strukturę, przestrzeń na pomyłki i cele dopasowane do uczestnika, a nie odwrotne. Do tego ciepła estetyka i język zachęty zamiast wymogu.",
      en: "I designed the Centre concept around small steps, reflection and habit-building. Every programme has a clear structure, room for mistakes and goals adapted to the participant, not the other way around. Plus a warm aesthetic and language of encouragement instead of demands.",
    },
    image: forma1,
    images: [forma1, forma2, forma3, forma4]
  }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectById = (id: string) => projects.find(p => p.id === id);
