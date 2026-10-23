import type { Localized } from "@/i18n/translations";
const text = (pl: string, en: string): Localized => ({ pl, en });

export const professionalExperience = [
  {
    role: text("Kierownik projektów edukacyjnych i społecznych", "Educational and Social Project Manager"),
    company: "Fundacja TAB Tolerancja Asertywność Bezpieczeństwo",
    period: text("2018 – obecnie", "2018 – present"),
    intro: text("Współtworzenie kierunku rozwoju organizacji społecznej:", "Helping shape the development of a social organisation:"),
    points: [
      text("projektowanie programów, scenariuszy i narzędzi edukacyjnych możliwych do adaptacji w różnych grupach i placówkach;", "designing programmes, session plans and learning tools adaptable to different groups and institutions;"),
      text("rozwijanie długofalowej współpracy ze szkołami, organizacjami społecznymi, samorządami i specjalistami z branży edukacyjnej;", "developing long-term collaboration with schools, social organisations, local authorities and education professionals;"),
      text("prowadzenie budżetu, pełnej dokumentacji i sprawozdawczości OPP.", "managing the budget, full documentation and public benefit organisation reporting."),
    ],
  },
  {
    role: text("Koordynator projektów społecznych", "Social Project Coordinator"), company: "FORMAC S.A.", period: text("2023–2024", "2023–2024"),
    intro: text("Kompleksowa obsługa projektów społecznych w ramach różnych modeli finansowania:", "Comprehensive management of social projects under different funding models:"),
    points: [
      text("„Razem możemy więcej” – doświadczenie w zarządzaniu złożonym projektem finansowanym w ramach programu Ministerstwa Rodziny i Polityki Społecznej o budżecie ok. 1 mln zł, wspierającego osoby z doświadczeniem uchodźczym z Ukrainy; praktyka współpracy wielosektorowej;", "‘Razem możemy więcej’ – managing a complex project funded by the Ministry of Family and Social Policy, with a budget of approximately PLN 1 million, supporting people with refugee experience from Ukraine; cross-sector collaboration;"),
      text("„Make your vote!” – koordynacja projektu Erasmus+ skierowanego do młodzieży szkolnej wzmacniającego ich partycypację w demokracji europejskiej;", "‘Make your vote!’ – coordinating an Erasmus+ project for school students to strengthen their participation in European democracy;"),
      text("„Godna praca dla pracowników migrujących w polskim sektorze rolnym” – obsługa grantu Innovation Norway.", "‘Decent work for migrant workers in the Polish agricultural sector’ – administering an Innovation Norway grant."),
    ],
  },
  {
    role: text("Sędzia międzynarodowy piłki ręcznej", "International Handball Referee"), company: "European Handball Federation", period: text("2012 – obecnie", "2012 – present"),
    intro: text("Prowadzenie meczów piłki ręcznej na arenie międzynarodowej na poziomie Ligi Mistrzów:", "Officiating international handball matches at Champions League level:"),
    points: [
      text("profesjonalna komunikacja i wystąpienia publiczne przed tysiącami ludzi;", "professional communication and public speaking in front of thousands of people;"),
      text("praca z mediami i nowymi technologiami typu VR;", "working with media and new technologies such as VR;"),
      text("wysokie kompetencje społeczne zdobyte w międzynarodowym środowisku.", "strong interpersonal skills developed in an international environment."),
    ],
  },
  {
    role: text("Pedagog, trener, właściciel", "Educator, Trainer and Owner"), company: "Centrum Rozwoju Bez Stresu", period: text("10.2011–2015", "10/2011–2015"),
    intro: text("Odpowiedzialność za kierowanie placówką edukacyjną:", "Responsibility for managing an educational centre:"),
    points: [
      text("budowanie partnerstw i prowadzenie współpracy z przedstawicielami różnych środowisk związanych z edukacją;", "building partnerships and collaborating with representatives of different educational communities;"),
      text("organizowanie pracy poradni pedagogicznej;", "organising the work of an educational counselling centre;"),
      text("projektowanie i prowadzenie programów nauczania, zajęć indywidualnych, scenariuszy spotkań oraz wydarzeń dla dzieci, młodzieży i ich rodziców.", "designing and delivering curricula, individual sessions, meeting plans and events for children, young people and their parents."),
    ],
  },
];

export const volunteering = {
  role: text("Wolontariusz", "Volunteer"), company: "Action for Happiness", period: text("2023 – obecnie", "2023 – present"),
  points: [
    text("Moderowanie spotkań szkoleniowych online w środowisku międzykulturowym.", "Moderating online training meetings in an intercultural environment."),
    text("Wdrażanie nowoczesnych metod i treści nauczania.", "Implementing modern teaching methods and learning content."),
    text("Zaangażowanie w zwiększenie poczucia szczęścia poprzez łączenie ludzi i wspieranie ich w podejmowaniu praktycznych działań na rzecz budowania szczęśliwszego społeczeństwa.", "Promoting happiness by connecting people and supporting them in taking practical action to build a happier society."),
  ],
};

export const education = [
  text("Magister pedagogiki, specjalność: dzieci i młodzież, Uniwersytet Jagielloński w Krakowie", "Master’s degree in Education, specialising in children and young people, Jagiellonian University in Kraków"),
  text("Kurs Kwalifikacyjny z zakresu terapii pedagogicznej, Krakowski Instytut Rozwoju Edukacji", "Qualification Course in Educational Therapy, Krakowski Instytut Rozwoju Edukacji"),
  text("„Greater Good Educators”, The Greater Good Science Centre (University of California, Berkeley)", "‘Greater Good Educators’, The Greater Good Science Centre (University of California, Berkeley)"),
  text("An Introduction to Learning Experience Design (University of Michigan) – w trakcie", "An Introduction to Learning Experience Design (University of Michigan) – in progress"),
];

export const relevantCourses = [
  text("Inspiring Leadership through Emotional Intelligence (Case Western Reserve University)", "Inspiring Leadership through Emotional Intelligence (Case Western Reserve University)"),
  text("Superstar Teacher Toolbox Digital Pedagogy Online Course UNICEF", "Superstar Teacher Toolbox Digital Pedagogy Online Course UNICEF"),
  text("„Umiejętność rozpoznawania i reagowania na dramat dziecka krzywdzonego – najskuteczniejszym przeciwdziałaniem przemocy wobec dzieci” (Fundacja Ad Vocem)", "‘Recognising and responding to the suffering of an abused child as an effective way to prevent violence against children’ (Fundacja Ad Vocem)"),
  text("„Szkoła Gier i Symulacji” (Grupa Trenerska Mentor)", "‘School of Games and Simulations’ (Grupa Trenerska Mentor)"),
  text("„Bezpieczeństwo dzieci i młodzieży w Internecie” (Polskie Centrum Programu Safer Internet)", "‘Online Safety for Children and Young People’ (Polish Safer Internet Centre)"),
];
