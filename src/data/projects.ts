import graffitiface from '@/assets/projects/graffiti-face.jpg';
import flowersPainting from '@/assets/projects/flowers-painting.jpg';
import watercolorFlowers from '@/assets/projects/watercolor-flowers.jpg';
import varoomMagazine from '@/assets/projects/varoom-magazine.jpg';
import palmDigital from '@/assets/projects/palm-digital.jpg';
import deerForest from '@/assets/projects/deer-forest.jpg';
import holographicBust from '@/assets/projects/holographic-bust.jpg';
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

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  image: string;
  images: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "lumina-brand",
    title: "Lumina_",
    client: "Lumina Technologies",
    category: "Brand Identity",
    year: "2024",
    description: "A comprehensive brand identity system for a next-generation sustainable technology company focused on renewable energy solutions.",
    challenge: "Lumina needed a visual identity that would communicate their innovative approach to sustainability while standing out in a crowded market of green tech companies.",
    solution: "We developed a dynamic identity system built around the concept of light and energy transformation. The visual language uses geometric forms that shift and adapt, representing the company's flexible approach to energy solutions.",
    image: graffitiface,
    images: [graffitiface, flowersPainting, watercolorFlowers],
    featured: true
  },
  {
    id: "verso-studio",
    title: "Verso Studio_",
    client: "Verso Architecture",
    category: "Visual Identity",
    year: "2024",
    description: "Complete visual identity redesign for a boutique architecture firm specializing in adaptive reuse and historic preservation.",
    challenge: "Verso needed to balance their deep respect for historical architecture with a contemporary, forward-thinking brand presence.",
    solution: "The identity draws from architectural blueprints and construction documents, using precise linework and a restrained color palette that speaks to both heritage and modernity.",
    image: holographicBust,
    images: [holographicBust, palmDigital, deerForest],
    featured: true
  },
  {
    id: "haven-wellness",
    title: "Haven_",
    client: "Haven Wellness",
    category: "Brand Strategy",
    year: "2023",
    description: "Brand strategy and visual identity for a luxury wellness retreat focused on digital detox and mindful living.",
    challenge: "Create an identity that feels both luxurious and grounded, avoiding the clichés often associated with wellness brands.",
    solution: "We developed a brand rooted in Japanese concepts of Ma (negative space) and Wabi-sabi (beauty in imperfection), using organic textures and a muted, earthy palette.",
    image: flowersPainting,
    images: [flowersPainting, birdIllustration, goldenJewelry],
    featured: true
  },
  {
    id: "nova-digital",
    title: "Nova Digital_",
    client: "Nova Ventures",
    category: "Digital Product",
    year: "2023",
    description: "Digital product design and brand identity for a venture capital firm investing in early-stage technology startups.",
    challenge: "Nova needed a digital presence that would appeal to founders while maintaining the gravitas expected by institutional investors.",
    solution: "A bold, typographic-led identity with a sophisticated digital platform that prioritizes content and storytelling over traditional VC marketing approaches.",
    image: palmDigital,
    images: [palmDigital, varoomMagazine, catIllustration]
  },
  {
    id: "echo-magazine",
    title: "Echo_",
    client: "Echo Publications",
    category: "Editorial Design",
    year: "2023",
    description: "Art direction and editorial design for a quarterly print magazine exploring the intersection of culture, technology, and design.",
    challenge: "Create a distinctive editorial voice that could bridge the gap between digital-native readers and the tactile experience of print.",
    solution: "A modular grid system that allows for dynamic layouts while maintaining consistency, combined with a bold typographic approach that rewards slow, deliberate reading.",
    image: echo1,
    images: [echo1, echo2, echo3, echo4]
  },
  {
    id: "forma-apparel",
    title: "Forma_",
    client: "Forma Apparel",
    category: "Brand Identity",
    year: "2022",
    description: "Complete brand identity for a sustainable fashion label committed to circular design principles and ethical manufacturing.",
    challenge: "Position Forma as a serious alternative to fast fashion without appearing preachy or sacrificing style for sustainability.",
    solution: "A minimal, system-based identity that puts the focus on craftsmanship and materials, with packaging designed for reuse and eventual recycling.",
    image: forma1,
    images: [forma1, forma2, forma3, forma4]
  }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectById = (id: string) => projects.find(p => p.id === id);
