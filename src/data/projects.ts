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
    id: "lumina-brand",
    title: "Lumina_",
    client: "Lumina Technologies",
    category: {
      pl: "Identyfikacja marki",
      en: "Brand Identity",
    },
    year: "2024",
    description: {
      pl: "Kompleksowy system identyfikacji wizualnej dla firmy nowej generacji zajmującej się zrównoważonymi technologiami i rozwiązaniami z zakresu energii odnawialnej.",
      en: "A comprehensive brand identity system for a next-generation sustainable technology company focused on renewable energy solutions.",
    },
    challenge: {
      pl: "Lumina potrzebowała identyfikacji wizualnej, która komunikowałaby innowacyjne podejście do zrównoważonego rozwoju i wyróżniałaby się na zatłoczonym rynku zielonych technologii.",
      en: "Lumina needed a visual identity that would communicate their innovative approach to sustainability while standing out in a crowded market of green tech companies.",
    },
    solution: {
      pl: "Stworzyliśmy dynamiczny system identyfikacji oparty na koncepcji światła i transformacji energii. Język wizualny wykorzystuje formy geometryczne, które zmieniają się i adaptują, odzwierciedlając elastyczne podejście firmy.",
      en: "We developed a dynamic identity system built around the concept of light and energy transformation. The visual language uses geometric forms that shift and adapt, representing the company's flexible approach to energy solutions.",
    },
    image: graffitiface,
    images: [graffitiface, flowersPainting, watercolorFlowers],
    featured: true
  },
  {
    id: "verso-studio",
    title: "Verso Studio_",
    client: "Verso Architecture",
    category: {
      pl: "Identyfikacja wizualna",
      en: "Visual Identity",
    },
    year: "2024",
    description: {
      pl: "Pełny redesign identyfikacji wizualnej butikowej pracowni architektonicznej specjalizującej się w adaptacji budynków i ochronie zabytków.",
      en: "Complete visual identity redesign for a boutique architecture firm specializing in adaptive reuse and historic preservation.",
    },
    challenge: {
      pl: "Verso musiało pogodzić głęboki szacunek dla architektury historycznej z nowoczesną, przyszłościową obecnością marki.",
      en: "Verso needed to balance their deep respect for historical architecture with a contemporary, forward-thinking brand presence.",
    },
    solution: {
      pl: "Identyfikacja czerpie z rysunków architektonicznych i dokumentacji budowlanej, wykorzystując precyzyjną kreskę i powściągliwą paletę barw łączącą dziedzictwo z nowoczesnością.",
      en: "The identity draws from architectural blueprints and construction documents, using precise linework and a restrained color palette that speaks to both heritage and modernity.",
    },
    image: holographicBust,
    images: [holographicBust, palmDigital, deerForest],
    featured: true
  },
  {
    id: "haven-wellness",
    title: "Haven_",
    client: "Haven Wellness",
    category: {
      pl: "Strategia marki",
      en: "Brand Strategy",
    },
    year: "2023",
    description: {
      pl: "Strategia marki i identyfikacja wizualna dla luksusowego ośrodka wellness skupionego na cyfrowym detoksie i uważnym życiu.",
      en: "Brand strategy and visual identity for a luxury wellness retreat focused on digital detox and mindful living.",
    },
    challenge: {
      pl: "Stworzyć identyfikację, która jest jednocześnie luksusowa i przyziemna, unikając klisz typowych dla marek wellness.",
      en: "Create an identity that feels both luxurious and grounded, avoiding the clichés often associated with wellness brands.",
    },
    solution: {
      pl: "Zbudowaliśmy markę opartą na japońskich koncepcjach Ma (przestrzeń negatywna) i Wabi-sabi (piękno niedoskonałości), z organicznymi teksturami i stonowaną, ziemistą paletą.",
      en: "We developed a brand rooted in Japanese concepts of Ma (negative space) and Wabi-sabi (beauty in imperfection), using organic textures and a muted, earthy palette.",
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
