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
    title: "Fundacja TAB_",
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
    id: "nova-digital",
    title: "Nova Digital_",
    client: "Nova Ventures",
    category: {
      pl: "Produkt cyfrowy",
      en: "Digital Product",
    },
    year: "2023",
    description: {
      pl: "Projekt produktu cyfrowego i identyfikacji marki dla funduszu venture capital inwestującego we wczesne startupy technologiczne.",
      en: "Digital product design and brand identity for a venture capital firm investing in early-stage technology startups.",
    },
    challenge: {
      pl: "Nova potrzebowała obecności cyfrowej, która przyciągnie founderów, zachowując powagę oczekiwaną przez inwestorów instytucjonalnych.",
      en: "Nova needed a digital presence that would appeal to founders while maintaining the gravitas expected by institutional investors.",
    },
    solution: {
      pl: "Odważna, typograficzna identyfikacja wraz z dopracowaną platformą cyfrową, która stawia treść i storytelling ponad typowy marketing funduszy VC.",
      en: "A bold, typographic-led identity with a sophisticated digital platform that prioritizes content and storytelling over traditional VC marketing approaches.",
    },
    image: palmDigital,
    images: [palmDigital, varoomMagazine, catIllustration]
  },
  {
    id: "echo-magazine",
    title: "Echo_",
    client: "Echo Publications",
    category: {
      pl: "Projekt wydawniczy",
      en: "Editorial Design",
    },
    year: "2023",
    description: {
      pl: "Kierownictwo artystyczne i projekt kwartalnika drukowanego badającego styk kultury, technologii i designu.",
      en: "Art direction and editorial design for a quarterly print magazine exploring the intersection of culture, technology, and design.",
    },
    challenge: {
      pl: "Stworzyć wyrazisty głos wydawniczy, który połączy czytelników wychowanych w cyfrze z dotykowym doświadczeniem druku.",
      en: "Create a distinctive editorial voice that could bridge the gap between digital-native readers and the tactile experience of print.",
    },
    solution: {
      pl: "Modułowy system siatki pozwalający na dynamiczne układy przy zachowaniu spójności, połączony z odważną typografią nagradzającą powolną, uważną lekturę.",
      en: "A modular grid system that allows for dynamic layouts while maintaining consistency, combined with a bold typographic approach that rewards slow, deliberate reading.",
    },
    image: echo1,
    images: [echo1, echo2, echo3, echo4]
  },
  {
    id: "forma-apparel",
    title: "Forma_",
    client: "Forma Apparel",
    category: {
      pl: "Identyfikacja marki",
      en: "Brand Identity",
    },
    year: "2022",
    description: {
      pl: "Kompletna identyfikacja marki dla zrównoważonej marki modowej opartej na zasadach projektowania cyrkularnego i etycznej produkcji.",
      en: "Complete brand identity for a sustainable fashion label committed to circular design principles and ethical manufacturing.",
    },
    challenge: {
      pl: "Ustawić Formę jako poważną alternatywę dla fast fashion, bez moralizowania i bez rezygnacji ze stylu na rzecz ekologii.",
      en: "Position Forma as a serious alternative to fast fashion without appearing preachy or sacrificing style for sustainability.",
    },
    solution: {
      pl: "Minimalistyczna, systemowa identyfikacja skupiona na rzemiośle i materiałach, z opakowaniami zaprojektowanymi do ponownego użycia i recyklingu.",
      en: "A minimal, system-based identity that puts the focus on craftsmanship and materials, with packaging designed for reuse and eventual recycling.",
    },
    image: forma1,
    images: [forma1, forma2, forma3, forma4]
  }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectById = (id: string) => projects.find(p => p.id === id);
