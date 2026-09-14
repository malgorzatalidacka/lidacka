export const LANGUAGES = [
  { code: "pl", label: "PL", name: "Polski" },
  { code: "en", label: "EN", name: "English" },
] as const;

export type Language = (typeof LANGUAGES)[number]["code"];

export const DEFAULT_LANGUAGE: Language = "pl";

/** A string translated into every supported language. */
export type Localized = Record<Language, string>;

export const translations = {
  pl: {
    "nav.work": "Projekty",
    "nav.showroom": "Jak pracuję",

    "nav.passion": "Inspiracje",
    "nav.about": "O mnie",
    "nav.contact": "Kontakt",
    "nav.language": "Wybór języka",
    "nav.languageShort": "Język",

    "showroom.label": "Jak pracuję",
    "passion.label": "Inspiracje",
    "passion.title": "Rzeczy, które kształtują sposób, w jaki projektuję_",
    "passion.intro":
      "Zbiór inspiracji, zainteresowań i drobnych historii spoza pracy zawodowej — ruch, rzemiosło, książki, obserwacje i eksperymenty, które wracają potem w moich projektach edukacyjnych.",
    "passion.outro": "Kolekcja rośnie — nowe wpisy dochodzą, gdy coś mnie zaciekawi.",
    "passion.featureTag": "Esej wizualny",
    "passion.featureTitle": "Action for Happiness",
    "passion.featureBody":
      "Osobista opowieść o idei, która zmieniła moje podejście do projektowania: dobrostan nie jest dodatkiem do nauki, tylko jej warunkiem.",
    "passion.featureCta": "Przeczytaj esej",
    "happiness.keysLabel": "Sześć kluczy",
    "happiness.keysTitle": "GREAT DREAM — i co z tego robię w projektowaniu",
    "happiness.keysIntro":
      "Action for Happiness porządkuje dobrostan w kilka prostych obszarów. Poniżej moja własna wersja: każdy obszar plus decyzja projektowa, która z niego wynika.",
    "happiness.back": "Wróć do inspiracji",



    "home.intro":
      "Pomagam zespołom budować mocne doświadczenia marki. Jestem Lidacka, niezależna artystka i projektantka z Nowego Jorku. Specjalizuję się w identyfikacji wizualnej i systemach wizualnych dla firm, które cenią przemyślany design i strategiczne myślenie.",
    "home.featured": "Wyróżnione",
    "home.selected": "Wybrane prace",
    "home.viewAll": "Zobacz wszystkie projekty",

    "work.title": "Zrealizowane projekty_",

    "case.label": "Case study",
    "case.overview": "Przegląd",
    "case.challenge": "Wyzwanie",
    "case.solution": "Rozwiązanie",
    "case.latest": "Najnowsze prace",
    "case.image": "Zdjęcie",

    "about.title": "Projektantka tworząca znaczące doświadczenia cyfrowe_",
    "about.imageAlt": "Przestrzeń pracy Lidacka Studio",
    "about.bio1":
      "Jestem Lidacka, niezależna artystka i projektantka z Nowego Jorku. Mam ponad 8 lat doświadczenia we współpracy ze startupami, agencjami i uznanymi markami, dzięki czemu dobrze rozumiem, co sprawia, że marka trafia do swoich odbiorców.",
    "about.bio2":
      "Moje podejście łączy myślenie strategiczne z dbałością o rzemiosło — każda decyzja projektowa ma swój cel, przy zachowaniu najwyższych standardów wizualnych. Kiedy nie projektuję, przeglądam archiwa typograficzne, fotografuję miejskie krajobrazy albo mentoruję początkujących projektantów.",
    "about.experience": "Doświadczenie",
    "about.services": "Usługi",

    "contact.title": "Stwórzmy razem coś wyjątkowego_",
    "contact.lead":
      "Zawsze chętnie słucham o nowych projektach, kreatywnych pomysłach i możliwościach współpracy przy Twoich wizjach.",
    "contact.emailLabel": "E-mail",
    "contact.locationLabel": "Lokalizacja",
    "contact.location": "Nowy Jork",
    "contact.locationSub": "Współpracuję na całym świecie",
    "contact.formTitle": "Napisz wiadomość",
    "contact.form.name": "Imię i nazwisko",
    "contact.form.namePlaceholder": "Twoje imię",
    "contact.form.email": "E-mail",
    "contact.form.emailPlaceholder": "twoj@email.com",
    "contact.form.message": "Wiadomość",
    "contact.form.messagePlaceholder": "Opowiedz o swoim projekcie",
    "contact.form.submit": "Wyślij wiadomość",
    "contact.form.success": "Dziękuję! Odezwę się wkrótce.",

    "footer.stayInTouch": "Bądźmy w kontakcie",
    "footer.location": "Lokalizacja",
    "footer.locationValue": "Nowy Jork",
    "footer.locationSub": "Współpracuję na całym świecie",
    "footer.partner": "Współpraca",
    "footer.cta": "Porozmawiajmy",
    "footer.newsletter": "Newsletter",
    "footer.newsletterCopy":
      "Bądź na bieżąco z naszymi fascynacjami kreatywnością i technologią",
    "footer.emailPlaceholder": "Podaj e-mail",
    "footer.submit": "Zapisz się",
    "footer.rights": "Wszelkie prawa zastrzeżone.",
    "footer.privacy": "Polityka prywatności",

    "notFound.title": "404",
    "notFound.text": "Ups! Nie znaleziono strony",
    "notFound.home": "Wróć na stronę główną",
  },
  en: {
    "nav.work": "Work",
    "nav.showroom": "How I work",

    "nav.passion": "Passion & Play",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.language": "Language selection",
    "nav.languageShort": "Language",

    "showroom.label": "How I work",
    "passion.label": "Passion & Play",
    "passion.title": "The things that shape the way I design_",
    "passion.intro":
      "A curated collection of inspirations, interests and small stories from outside my professional work — movement, craft, books, observations and experiments that find their way back into the learning experiences I design.",
    "passion.outro": "The collection keeps growing — new entries appear whenever something catches my attention.",
    "passion.featureTag": "Visual essay",
    "passion.featureTitle": "Action for Happiness",
    "passion.featureBody":
      "A personal story about an idea that changed the way I design: wellbeing is not an add-on to learning — it is its precondition.",
    "passion.featureCta": "Read the essay",
    "happiness.keysLabel": "Six keys",
    "happiness.keysTitle": "GREAT DREAM — and what I do with it as a designer",
    "happiness.keysIntro":
      "Action for Happiness organises wellbeing into a few simple areas. Below is my own version: each area plus the design decision that follows from it.",
    "happiness.back": "Back to inspirations",



    "home.intro":
      "I help teams build strong brand experiences. I'm Lidacka, an independent artist and designer based in New York City. I specialize in brand identity and visual systems for companies that value thoughtful design and strategic thinking.",
    "home.featured": "Featured",
    "home.selected": "Selected work",
    "home.viewAll": "View all projects",

    "work.title": "Completed projects_",

    "case.label": "Case study",
    "case.overview": "Overview",
    "case.challenge": "Challenge",
    "case.solution": "Solution",
    "case.latest": "Latest work",
    "case.image": "Image",

    "about.title": "Designer focused on meaningful digital experiences_",
    "about.imageAlt": "Lidacka Studio workspace",
    "about.bio1":
      "I'm Lidacka, an independent artist and designer based in New York City. With over 8 years of experience working with startups, agencies, and established brands, I've developed a deep understanding of what makes a brand resonate with its audience.",
    "about.bio2":
      "My approach combines strategic thinking with meticulous craft—ensuring that every design decision serves a purpose while maintaining the highest standards of visual excellence. When I'm not designing, you'll find me exploring typography archives, photographing urban landscapes, or mentoring emerging designers.",
    "about.experience": "Experience",
    "about.services": "Services",

    "contact.title": "Let's create something great together_",
    "contact.lead":
      "I'm always interested in hearing about new projects, creative ideas, or opportunities to be part of your visions.",
    "contact.emailLabel": "Email",
    "contact.locationLabel": "Location",
    "contact.location": "Based in New York City",
    "contact.locationSub": "Available worldwide",
    "contact.formTitle": "Send a message",
    "contact.form.name": "Name",
    "contact.form.namePlaceholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "you@email.com",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Tell me about your project",
    "contact.form.submit": "Send message",
    "contact.form.success": "Thank you! I'll be in touch soon.",

    "footer.stayInTouch": "Stay in Touch",
    "footer.location": "Location",
    "footer.locationValue": "New York City",
    "footer.locationSub": "Available worldwide",
    "footer.partner": "Partner with Us",
    "footer.cta": "Let's Chat",
    "footer.newsletter": "Newsletters",
    "footer.newsletterCopy":
      "Stay in the loop with our latest fixations on creativity and technology",
    "footer.emailPlaceholder": "Enter Email",
    "footer.submit": "Submit",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",

    "notFound.title": "404",
    "notFound.text": "Oops! Page not found",
    "notFound.home": "Return to Home",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["pl"];
