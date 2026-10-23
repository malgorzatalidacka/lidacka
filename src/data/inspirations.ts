import type { Localized } from "@/i18n/translations";
export const text = (pl: string, en: string): Localized => ({ pl, en });
export interface InspirationMedia { src?: string; placeholder: string; alt: Localized; caption?: Localized; }
export interface InspirationBook { id: string; title: Localized; author: Localized; cover?: string; coverAlt: Localized; thought: Localized; learned: Localized; why: Localized; }
// Add confirmed titles, covers and personal notes here. Extend the array to add books.
export const inspirationBooks: InspirationBook[] = [1, 2, 3].map(n => ({
  id: `book-${n}`, title: text(`[TYTUŁ KSIĄŻKI ${n}]`, `[BOOK TITLE ${n}]`), author: text("[AUTOR / AUTORKA]", "[AUTHOR]"),
  coverAlt: text("[ALT: opisz rzeczywistą okładkę]", "[ALT: describe the actual cover]"),
  thought: text("[NOTATKA: myśl po lekturze]", "[NOTE: a thought after reading]"),
  learned: text("[NOTATKA: czego nauczyła mnie książka]", "[NOTE: what this book taught me]"),
  why: text("[NOTATKA: dlaczego jest na mojej półce]", "[NOTE: why it is on my shelf]"),
}));
export const inspirationMedia: Record<string, InspirationMedia> = {
  community: { placeholder: "[PHOTO: Action for Happiness local group]", alt: text("[ALT: opisz rzeczywiste spotkanie lokalnej grupy]", "[ALT: describe the actual local group meeting]") },
  artifact: { placeholder: "[ARTIFACT: Action for Happiness meeting material]", alt: text("[ALT: opisz rzeczywisty materiał ze spotkania]", "[ALT: describe the actual meeting material]"), caption: text("[PODPIS: jak korzystamy z materiału na spotkaniu]", "[CAPTION: how we use this material during a meeting]") },
  care: { placeholder: "[PHOTO: Polish Puppy Rescue — care at the shelter]", alt: text("[ALT: opisz czynność opiekuńczą i zwierzę]", "[ALT: describe the care activity and animal]"), caption: text("[HISTORIA: kogo widać i co robiliśmy w tej chwili]", "[STORY: who is pictured and what we were doing]") },
  everyday: { placeholder: "[PHOTO: Polish Puppy Rescue — everyday work]", alt: text("[ALT: opisz codzienną pracę w przytulisku]", "[ALT: describe everyday work at the shelter]"), caption: text("[HISTORIA: mały moment z codziennej pracy w przytulisku]", "[STORY: a small moment from everyday shelter work]") },
  sport: { placeholder: "[PHOTO: Handball refereeing — in the arena]", alt: text("[ALT: opisz rzeczywistą sytuację sędziowską i boisko]", "[ALT: describe the actual refereeing situation and court]") },
};
export const inspirations = {
  title: text("Wartości, które motywują mnie do działania_", "Values that motivate me to act_"),
  lead: text("Ludzie, z którymi rozmawiam. Działania, w których biorę udział. Idee, do których wracam.", "People I talk with. Things I take part in. Ideas I return to."),
  community: { title: "Action for Happiness", subtitle: text("Ludzie i relacje", "Community & facilitation"), body: text("Jako wolontariuszka i facylitatorka spotkań lokalnej grupy Action for Happiness współtworzę przestrzeń do rozmowy, refleksji i budowania relacji. Życzliwość, wdzięczność i szczęście traktujemy jako praktyki, które można rozwijać w codziennym życiu.", "As a volunteer and facilitator of local Action for Happiness group meetings, I help make space for conversation, reflection and connection. Kindness, gratitude and happiness are practices we can develop in everyday life."), note: text("Wolontariat · Facylitacja lokalnych spotkań", "Volunteering · Facilitating local meetings") },
  care: { title: "Polish Puppy Rescue", subtitle: text("Troska w działaniu", "Care in practice"), body: text("Pomagam w przytulisku w ramach Polish Puppy Rescue / Fundacji TAB. To opieka i odpowiedzialność, ale też zwyczajna, fizyczna praca. Dla mnie wartości stają się widoczne w tym, co robimy — również wtedy, gdy nikt nie patrzy.", "I help at the shelter through Polish Puppy Rescue / Fundacja TAB. It is care and responsibility, and also ordinary, physical work. For me, values become visible in what we do — including when nobody is watching.") },
  books: { title: text("Moja półka z książkami", "My bookshelf"), subtitle: text("Idee, do których zaglądam", "What I’m reading"), body: text("Niektóre książki zostawiają pytanie. Inne zmieniają sposób patrzenia. Otwórz okładkę, żeby zajrzeć do moich notatek.", "Some books leave a question. Others change a perspective. Open a cover to look at my notes."), empty: text("Półka czeka na moje tytuły, okładki i osobiste notatki.", "The shelf is waiting for my titles, covers and personal notes."), labels: { thought: text("Myśl po lekturze", "A thought after reading"), learned: text("Czego mnie nauczyła", "What it taught me"), why: text("Dlaczego jest na półce", "Why it is on the shelf") } },
  sport: { title: text("Sport", "Sport"), subtitle: text("Doświadczenie i działanie", "Experience & action"), body: text("Piłka ręczna i sędziowanie od lat kształtują mój sposób działania. Na boisku decyzja ma swój moment. Po meczu jest miejsce na refleksję.", "Handball and refereeing have shaped how I act for years. On court, a decision has its moment. After the match, there is room for reflection."), reflections: [
    { title: text("Decyzja pod presją", "Deciding under pressure"), body: text("Koncentracja na tym, co dzieje się teraz. Odpowiedzialność za decyzję.", "Focus on what is happening now. Responsibility for the decision.") },
    { title: text("Komunikacja i współpraca", "Communication & teamwork"), body: text("Jasny komunikat. Współpraca z drugą osobą. Uwaga na całe boisko.", "A clear message. Working with another person. Attention to the whole court.") },
    { title: text("Błąd i następna próba", "A mistake & the next attempt"), body: text("Refleksja po działaniu. Informacja zwrotna. Ciągłe uczenie się.", "Reflection after action. Feedback. Continuous learning.") },
  ] },
  joy: { title: "JOY & CURIOSITY", subtitle: text("Sposób patrzenia na świat", "Lenses through which I see the world"), body: text("Radość pozwala zauważać małe dobre rzeczy. Ciekawość zatrzymuje przy pytaniu: co jest dalej? Spójrz przez obie na ten sam fragment świata.", "Joy notices small good things. Curiosity pauses at a question: what lies beyond? Look at the same little world through both."), cta: text("Wejdź do eksperymentu →", "Step into the experiment →") },
  closing: text("Te doświadczenia wracają do mojego warsztatu: w pytaniach, które zadaję, w przestrzeni na próbę i w uwadze poświęconej osobie, która się uczy.", "These experiences return to my design practice: in the questions I ask, in the space for trying, and in the attention I give to the person learning."),
};






