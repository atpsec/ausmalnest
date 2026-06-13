export type Difficulty = "einfach" | "mittel" | "detailreich";

export type Category = {
  slug: string;
  name: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  audience: string[];
  learningFocus: string[];
  faq: {
    question: string;
    answer: string;
  }[];
};

export type ColoringPage = {
  slug: string;
  categorySlug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  shortDescription: string;
  intro: string;
  learningGoal: string;
  usageIdea: string;
  printTip: string;
  materials: string[];
  ageMin: number;
  ageMax: number;
  difficulty: Difficulty;
  tags: string[];
  relatedSlugs: string[];
};

export const siteConfig = {
  name: "AusmalNest",
  description:
    "Kostenlose Lern-Ausmalbilder fÃ¼r Kita, Kindergarten, Vorschule und Grundschule.",
  licenseText:
    "Die kostenlosen Ausmalbilder dÃ¼rfen fÃ¼r private Zwecke, Kita, Kindergarten und Schule ausgedruckt werden. Eine kommerzielle Weiterverbreitung, der Verkauf oder das Hochladen auf andere Plattformen ist nicht erlaubt.",
};

export const categories: Category[] = [
  {
    slug: "buchstaben",
    name: "Buchstaben",
    title: "Buchstaben Ausmalbilder kostenlos als PDF",
    seoTitle: "Buchstaben Ausmalbilder kostenlos herunterladen",
    seoDescription:
      "Kostenlose Buchstaben Ausmalbilder fÃ¼r Kinder. PDF-Malvorlagen fÃ¼r Kita, Kindergarten, Vorschule und Zuhause.",
    intro:
      "Mit Buchstaben Ausmalbildern lernen Kinder spielerisch erste Buchstaben kennen. Die Vorlagen verbinden klare Buchstabenformen mit einfachen Motiven wie Apfel, Ball oder Elefant. So entstehen kleine Lernmomente fÃ¼r Kita, Kindergarten, Vorschule und Zuhause.",
    audience: ["Kita", "Kindergarten", "Vorschule", "Zuhause"],
    learningFocus: [
      "Erste Buchstabenerkennung",
      "Wortschatz erweitern",
      "Feinmotorik Ã¼ben",
      "Laute und Anfangsbuchstaben entdecken",
    ],
    faq: [
      {
        question: "FÃ¼r welches Alter sind Buchstaben Ausmalbilder geeignet?",
        answer:
          "Die Vorlagen eignen sich besonders fÃ¼r Kinder zwischen 4 und 7 Jahren, die erste Buchstaben kennenlernen.",
      },
      {
        question: "Kann ich die Buchstaben Vorlagen in der Kita nutzen?",
        answer:
          "Ja, die kostenlosen Vorlagen dÃ¼rfen fÃ¼r private und pÃ¤dagogische Zwecke in Kita, Kindergarten und Schule ausgedruckt werden.",
      },
      {
        question: "Sind die Buchstaben Ausmalbilder kostenlos?",
        answer:
          "Ja, die einzelnen Ausmalbilder kÃ¶nnen kostenlos heruntergeladen und ausgedruckt werden.",
      },
    ],
  },
  {
    slug: "zahlen",
    name: "Zahlen",
    title: "Zahlen Ausmalbilder kostenlos als PDF",
    seoTitle: "Zahlen Ausmalbilder kostenlos fÃ¼r Kinder",
    seoDescription:
      "Kostenlose Zahlen Ausmalbilder von 1 bis 10. PDF-Vorlagen zum Ausdrucken fÃ¼r Vorschule, Kita und Zuhause.",
    intro:
      "Zahlen Ausmalbilder helfen Kindern, erste Mengen und Ziffern kennenzulernen. Jede Vorlage kombiniert eine Zahl mit einfachen Objekten, damit Kinder zÃ¤hlen, ausmalen und vergleichen kÃ¶nnen.",
    audience: ["Kita", "Kindergarten", "Vorschule", "1. Klasse"],
    learningFocus: [
      "Zahlen erkennen",
      "Mengen erfassen",
      "ZÃ¤hlen Ã¼ben",
      "Konzentration fÃ¶rdern",
    ],
    faq: [
      {
        question: "Welche Zahlen sind enthalten?",
        answer:
          "Die ersten Vorlagen konzentrieren sich auf die Zahlen 1 bis 10. Weitere Zahlen kÃ¶nnen spÃ¤ter ergÃ¤nzt werden.",
      },
      {
        question: "Sind die Vorlagen fÃ¼r Vorschulkinder geeignet?",
        answer:
          "Ja, die Zahlen Ausmalbilder sind besonders fÃ¼r Vorschule und Kindergarten geeignet.",
      },
      {
        question: "Wie kann ich die Zahlen Vorlagen einsetzen?",
        answer:
          "Kinder kÃ¶nnen zuerst die Objekte zÃ¤hlen, danach die Zahl nachfahren und anschlieÃŸend das Bild ausmalen.",
      },
    ],
  },
  {
    slug: "tiere",
    name: "Tiere",
    title: "Tiere Ausmalbilder kostenlos als PDF",
    seoTitle: "Tiere Ausmalbilder kostenlos zum Ausdrucken",
    seoDescription:
      "Kindgerechte Tiere Ausmalbilder als kostenlose PDF-Malvorlagen fÃ¼r Kita, Kindergarten und Zuhause.",
    intro:
      "Tiere gehÃ¶ren zu den beliebtesten Motiven fÃ¼r Kinder. Mit einfachen Tier-Ausmalbildern kÃ¶nnen Kinder bekannte Haustiere, Wildtiere und Lieblingstiere entdecken, benennen und farbig gestalten.",
    audience: ["Kita", "Kindergarten", "Vorschule", "Zuhause"],
    learningFocus: [
      "Tiernamen lernen",
      "Farben benennen",
      "Formen erkennen",
      "ErzÃ¤hlen und Beschreiben Ã¼ben",
    ],
    faq: [
      {
        question: "Welche Tiere gibt es als Ausmalbild?",
        answer:
          "Zum Start gibt es einfache Vorlagen wie Katze, Hund, Elefant, LÃ¶we, Giraffe, Fuchs, Hase, BÃ¤r, Vogel und Fisch.",
      },
      {
        question: "Sind die Tier Ausmalbilder fÃ¼r kleine Kinder geeignet?",
        answer:
          "Ja, die Motive haben klare Linien und sind besonders fÃ¼r Kinder zwischen 3 und 7 Jahren gedacht.",
      },
      {
        question: "Darf ich die Tierbilder in der Kita verwenden?",
        answer:
          "Ja, fÃ¼r pÃ¤dagogische Zwecke dÃ¼rfen die kostenlosen Vorlagen ausgedruckt und genutzt werden.",
      },
    ],
  },
  {
    slug: "formen",
    name: "Formen",
    title: "Formen Ausmalbilder fÃ¼r Kinder",
    seoTitle: "Formen Ausmalbilder kostenlos als PDF",
    seoDescription:
      "Kostenlose Formen Ausmalbilder fÃ¼r Kinder. Kreis, Quadrat, Dreieck und weitere Formen zum Ausdrucken.",
    intro:
      "Formen Ausmalbilder unterstÃ¼tzen Kinder dabei, einfache geometrische Formen zu erkennen. Kreis, Quadrat, Dreieck und Herz werden durch klare Konturen sichtbar und kÃ¶nnen farbig gestaltet werden.",
    audience: ["Kita", "Kindergarten", "Vorschule"],
    learningFocus: [
      "Grundformen erkennen",
      "Farben zuordnen",
      "Hand-Auge-Koordination Ã¼ben",
      "Erste mathematische Begriffe kennenlernen",
    ],
    faq: [
      {
        question: "Welche Formen werden geÃ¼bt?",
        answer:
          "Die ersten Vorlagen enthalten einfache Formen wie Kreis, Quadrat, Dreieck, Rechteck, Stern und Herz.",
      },
      {
        question: "Sind Formen Ausmalbilder pÃ¤dagogisch sinnvoll?",
        answer:
          "Ja, sie helfen Kindern, Grundformen spielerisch zu erkennen und zu benennen.",
      },
      {
        question: "Kann ich die Formen farbig sortieren lassen?",
        answer:
          "Ja, eine gute Ãœbung ist zum Beispiel: Alle Kreise rot, alle Dreiecke blau und alle Quadrate gelb ausmalen.",
      },
    ],
  },
  {
    slug: "berufe",
    name: "Berufe",
    title: "Berufe Ausmalbilder fÃ¼r Kinder",
    seoTitle: "Berufe Ausmalbilder kostenlos zum Ausdrucken",
    seoDescription:
      "Kostenlose Berufe Ausmalbilder fÃ¼r Kinder. Einfache Malvorlagen zu Ã„rztin, Lehrer, Feuerwehr und weiteren Berufen.",
    intro:
      "Berufe Ausmalbilder regen Kinder zum ErzÃ¤hlen an. Sie lernen verschiedene TÃ¤tigkeiten kennen und kÃ¶nnen darÃ¼ber sprechen, was Menschen in ihrem Alltag tun.",
    audience: ["Kindergarten", "Vorschule", "Grundschule", "Zuhause"],
    learningFocus: [
      "Alltagswissen erweitern",
      "Berufe benennen",
      "Sprachentwicklung fÃ¶rdern",
      "Rollen und Aufgaben verstehen",
    ],
    faq: [
      {
        question: "Welche Berufe sind enthalten?",
        answer:
          "Geplant sind Vorlagen zu Ã„rztin, Lehrer, Feuerwehr, Polizei, BÃ¤ckerei, Gartenarbeit, Pilot und weiteren Berufen.",
      },
      {
        question: "FÃ¼r welches Alter sind Berufe Ausmalbilder geeignet?",
        answer:
          "Die Motive eignen sich besonders fÃ¼r Kinder zwischen 4 und 8 Jahren.",
      },
      {
        question: "Wie kann ich Berufe Ausmalbilder im Unterricht nutzen?",
        answer:
          "Nach dem Ausmalen kÃ¶nnen Kinder erzÃ¤hlen, was die Person macht und welche Werkzeuge sie benutzt.",
      },
    ],
  },
  {
    slug: "fahrzeuge",
    name: "Fahrzeuge",
    title: "Fahrzeuge Ausmalbilder kostenlos als PDF",
    seoTitle: "Fahrzeuge Ausmalbilder kostenlos herunterladen",
    seoDescription:
      "Kostenlose Fahrzeuge Ausmalbilder fÃ¼r Kinder. Auto, Bus, Zug, Flugzeug und weitere Fahrzeuge als PDF.",
    intro:
      "Fahrzeuge Ausmalbilder sind ideal fÃ¼r Kinder, die Autos, Busse, ZÃ¼ge oder Flugzeuge mÃ¶gen. Die Vorlagen verbinden bekannte Alltagsmotive mit einfachen Linien.",
    audience: ["Kita", "Kindergarten", "Vorschule", "Zuhause"],
    learningFocus: [
      "Fahrzeuge benennen",
      "Unterschiede erkennen",
      "Alltagswortschatz erweitern",
      "Feinmotorik trainieren",
    ],
    faq: [
      {
        question: "Welche Fahrzeuge gibt es?",
        answer:
          "Zum Start sind Motive wie Auto, Bus, Zug, Flugzeug, Fahrrad, Feuerwehr und Traktor geplant.",
      },
      {
        question: "Sind die Fahrzeugbilder einfach gehalten?",
        answer:
          "Ja, die Vorlagen sind kindgerecht und fÃ¼r jÃ¼ngere Kinder gut ausmalbar.",
      },
      {
        question: "Kann ich die Vorlagen kostenlos drucken?",
        answer:
          "Ja, die kostenlosen Fahrzeug-Ausmalbilder kÃ¶nnen als PDF heruntergeladen und gedruckt werden.",
      },
    ],
  },
  {
    slug: "jahreszeiten",
    name: "Jahreszeiten",
    title: "Jahreszeiten Ausmalbilder fÃ¼r Kinder",
    seoTitle: "Jahreszeiten Ausmalbilder kostenlos als PDF",
    seoDescription:
      "Kostenlose Ausmalbilder zu FrÃ¼hling, Sommer, Herbst und Winter fÃ¼r Kita, Kindergarten und Zuhause.",
    intro:
      "Jahreszeiten Ausmalbilder helfen Kindern, VerÃ¤nderungen in der Natur zu entdecken. Blumen, Sonne, BlÃ¤tter und Schnee werden zu einfachen GesprÃ¤chsanlÃ¤ssen.",
    audience: ["Kita", "Kindergarten", "Vorschule", "Grundschule"],
    learningFocus: [
      "Jahreszeiten unterscheiden",
      "Natur beobachten",
      "Wetterbegriffe lernen",
      "ErzÃ¤hlanlÃ¤sse schaffen",
    ],
    faq: [
      {
        question: "Welche Jahreszeiten sind enthalten?",
        answer:
          "Die Kategorie umfasst FrÃ¼hling, Sommer, Herbst und Winter sowie einfache Wetter- und Naturmotive.",
      },
      {
        question: "Sind die Vorlagen fÃ¼r Projektwochen geeignet?",
        answer:
          "Ja, sie passen gut zu Themenwochen Ã¼ber Wetter, Natur und Jahreszeiten.",
      },
      {
        question: "Kann ich die Bilder als A4 drucken?",
        answer:
          "Ja, die Vorlagen sind fÃ¼r den Druck auf A4-Papier vorgesehen.",
      },
    ],
  },
  {
    slug: "ostern",
    name: "Ostern",
    title: "Ostern Ausmalbilder kostenlos",
    seoTitle: "Ostern Ausmalbilder kostenlos zum Ausdrucken",
    seoDescription:
      "Kostenlose Ostern Ausmalbilder mit Osterei, Osterhase, KÃ¼ken und Osterkorb als PDF-Malvorlagen.",
    intro:
      "Ostern Ausmalbilder eignen sich fÃ¼r kreative FrÃ¼hlings- und FeiertagsaktivitÃ¤ten. Kinder kÃ¶nnen Ostereier, Hasen, KÃ¼ken und kleine Nester farbig gestalten.",
    audience: ["Kita", "Kindergarten", "Vorschule", "Zuhause"],
    learningFocus: [
      "Feiertagsthemen entdecken",
      "Muster ausmalen",
      "KreativitÃ¤t fÃ¶rdern",
      "FrÃ¼hlingswortschatz erweitern",
    ],
    faq: [
      {
        question: "Sind die Osterbilder kostenlos?",
        answer:
          "Ja, die einzelnen Oster-Ausmalbilder kÃ¶nnen kostenlos als PDF heruntergeladen werden.",
      },
      {
        question: "FÃ¼r welche AktivitÃ¤ten eignen sich Oster Ausmalbilder?",
        answer:
          "Sie eignen sich fÃ¼r Kita-Projekte, Bastelstunden, Zuhause und kleine Osterkarten.",
      },
      {
        question: "Gibt es einfache Motive fÃ¼r jÃ¼ngere Kinder?",
        answer:
          "Ja, die ersten Motive sind bewusst einfach und mit klaren Linien gestaltet.",
      },
    ],
  },
  {
    slug: "weihnachten",
    name: "Weihnachten",
    title: "Weihnachten Ausmalbilder kostenlos",
    seoTitle: "Weihnachten Ausmalbilder kostenlos als PDF",
    seoDescription:
      "Kostenlose Weihnachts-Ausmalbilder mit Baum, Stern, Geschenk, Kerze und Schneemann zum Ausdrucken.",
    intro:
      "Weihnachts-Ausmalbilder schaffen ruhige kreative Momente in der Adventszeit. Die Vorlagen eignen sich fÃ¼r Zuhause, Kita und Schule.",
    audience: ["Kita", "Kindergarten", "Vorschule", "Grundschule"],
    learningFocus: [
      "Feiertagswortschatz erweitern",
      "Muster und Formen ausmalen",
      "Konzentration fÃ¶rdern",
      "Kreative Karten gestalten",
    ],
    faq: [
      {
        question: "Welche Weihnachtsmotive gibt es?",
        answer:
          "Geplant sind Weihnachtsbaum, Stern, Geschenk, Schneemann, Kerze, Rentier und Weihnachtskarte.",
      },
      {
        question: "Kann ich die Bilder fÃ¼r Weihnachtskarten nutzen?",
        answer:
          "Ja, fÃ¼r private und pÃ¤dagogische Zwecke kÃ¶nnen die Vorlagen ausgedruckt und gestaltet werden.",
      },
      {
        question: "Sind die Motive fÃ¼r Kindergartenkinder geeignet?",
        answer:
          "Ja, die ersten Weihnachtsmotive sind einfach und kindgerecht aufgebaut.",
      },
    ],
  },
  {
    slug: "vorschule",
    name: "Vorschule",
    title: "Vorschule Malvorlagen und SchwungÃ¼bungen",
    seoTitle: "Vorschule Malvorlagen kostenlos als PDF",
    seoDescription:
      "Kostenlose Vorschule Malvorlagen mit Linien, Kreisen, SchwungÃ¼bungen und Punkt-zu-Punkt Ãœbungen.",
    intro:
      "Vorschule Malvorlagen verbinden Ausmalen mit ersten Ãœbungen fÃ¼r StiftfÃ¼hrung, Konzentration und Orientierung. Sie eignen sich fÃ¼r Kinder, die sich spielerisch auf die Schule vorbereiten.",
    audience: ["Vorschule", "Kindergarten", "1. Klasse", "Zuhause"],
    learningFocus: [
      "StiftfÃ¼hrung Ã¼ben",
      "Feinmotorik stÃ¤rken",
      "Konzentration fÃ¶rdern",
      "Erste Arbeitsblatt-Routinen kennenlernen",
    ],
    faq: [
      {
        question: "Was sind Vorschule Malvorlagen?",
        answer:
          "Das sind einfache Arbeits- und AusmalblÃ¤tter, die Kinder auf Schreiben, ZÃ¤hlen und konzentriertes Arbeiten vorbereiten.",
      },
      {
        question: "Sind SchwungÃ¼bungen enthalten?",
        answer:
          "Ja, die Kategorie enthÃ¤lt Linien, Kreise, Wellenlinien, Zickzack-Ãœbungen und Punkt-zu-Punkt Aufgaben.",
      },
      {
        question: "FÃ¼r welches Alter sind Vorschule Vorlagen geeignet?",
        answer:
          "Die meisten Vorlagen eignen sich fÃ¼r Kinder zwischen 4 und 7 Jahren.",
      },
    ],
  },
];

export const coloringPages: ColoringPage[] = [
  // Buchstaben
  {
    slug: "a-wie-apfel",
    categorySlug: "buchstaben",
    title: "A wie Apfel Ausmalbild",
    seoTitle: "A wie Apfel Ausmalbild kostenlos herunterladen",
    seoDescription:
      "Kostenloses A wie Apfel Ausmalbild als PDF. Einfache Buchstaben-Malvorlage fÃ¼r Kita, Vorschule und Zuhause.",
    shortDescription:
      "Eine einfache Buchstaben-Vorlage mit dem Buchstaben A und einem Apfelmotiv.",
    intro:
      "Dieses A wie Apfel Ausmalbild hilft Kindern, den ersten Buchstaben des Alphabets spielerisch kennenzulernen. Der groÃŸe Buchstabe A und das Apfelmotiv bieten einen klaren Einstieg in Buchstaben und Anfangslaute.",
    learningGoal:
      "Kinder erkennen den Buchstaben A, verbinden ihn mit dem Wort Apfel und Ã¼ben gleichzeitig ihre StiftfÃ¼hrung.",
    usageIdea:
      "Sprich vor dem Ausmalen den Laut A gemeinsam mit dem Kind. Danach kann das Kind weitere WÃ¶rter suchen, die mit A beginnen.",
    printTip:
      "Auf A4-Papier drucken. FÃ¼r jÃ¼ngere Kinder eignen sich dicke Buntstifte oder Wachsmalstifte.",
    materials: ["A4-Papier", "Buntstifte", "Wachsmalstifte"],
    ageMin: 4,
    ageMax: 7,
    difficulty: "einfach",
    tags: ["Buchstaben", "Alphabet", "Apfel", "Vorschule"],
    relatedSlugs: ["b-wie-ball", "c-wie-clown", "zahl-1-mit-apfel"],
  },
  {
    slug: "b-wie-ball",
    categorySlug: "buchstaben",
    title: "B wie Ball Ausmalbild",
    seoTitle: "B wie Ball Ausmalbild kostenlos als PDF",
    seoDescription:
      "B wie Ball Ausmalbild fÃ¼r Kinder. Kostenlose PDF-Malvorlage fÃ¼r Kindergarten, Vorschule und Zuhause.",
    shortDescription:
      "Eine kindgerechte Buchstaben-Vorlage mit B und einem einfachen Ball.",
    intro:
      "Das B wie Ball Ausmalbild verbindet einen groÃŸen Buchstaben mit einem bekannten Alltagsmotiv. Kinder kÃ¶nnen den Buchstaben betrachten, den Ball ausmalen und erste WÃ¶rter mit B sammeln.",
    learningGoal:
      "Kinder lernen den Buchstaben B kennen und stÃ¤rken beim Ausmalen ihre Feinmotorik.",
    usageIdea:
      "Lass das Kind nach dem Ausmalen Dinge im Raum suchen, die ebenfalls mit B beginnen.",
    printTip:
      "FÃ¼r den Einsatz in der Kita mehrere Kopien vorbereiten und die Kinder verschiedene Ballmuster gestalten lassen.",
    materials: ["A4-Papier", "Buntstifte", "Filzstifte"],
    ageMin: 4,
    ageMax: 7,
    difficulty: "einfach",
    tags: ["Buchstaben", "B", "Ball", "Kindergarten"],
    relatedSlugs: ["a-wie-apfel", "c-wie-clown", "d-wie-dino"],
  },
  {
    slug: "c-wie-clown",
    categorySlug: "buchstaben",
    title: "C wie Clown Ausmalbild",
    seoTitle: "C wie Clown Ausmalbild kostenlos herunterladen",
    seoDescription:
      "Kostenloses C wie Clown Ausmalbild fÃ¼r Kinder. PDF-Vorlage fÃ¼r Buchstabenlernen und kreatives Ausmalen.",
    shortDescription:
      "Eine frÃ¶hliche Buchstaben-Vorlage mit C und einem Clownmotiv.",
    intro:
      "Mit dem C wie Clown Ausmalbild lernen Kinder einen weiteren Buchstaben kennen. Das Motiv lÃ¤dt zu bunten Farben ein und eignet sich gut fÃ¼r kreative GesprÃ¤chsanlÃ¤sse.",
    learningGoal:
      "Kinder erkennen den Buchstaben C und verbinden ihn mit einem einfachen Bildwort.",
    usageIdea:
      "Nach dem Ausmalen kÃ¶nnen Kinder beschreiben, welche Farben der Clown trÃ¤gt und ob er frÃ¶hlich aussieht.",
    printTip:
      "Bei Filzstiften etwas dickeres Papier verwenden, damit die Farben nicht durchdrÃ¼cken.",
    materials: ["A4-Papier", "Buntstifte", "Filzstifte"],
    ageMin: 4,
    ageMax: 7,
    difficulty: "mittel",
    tags: ["Buchstaben", "C", "Clown", "Ausmalbild"],
    relatedSlugs: ["a-wie-apfel", "b-wie-ball", "d-wie-dino"],
  },
  {
    slug: "d-wie-dino",
    categorySlug: "buchstaben",
    title: "D wie Dino Ausmalbild",
    seoTitle: "D wie Dino Ausmalbild kostenlos als PDF",
    seoDescription:
      "D wie Dino Ausmalbild fÃ¼r Kinder. Kostenlose Buchstaben-Malvorlage zum Ausdrucken.",
    shortDescription:
      "Ein Buchstaben-Ausmalbild mit D und einem kindgerechten Dinosaurier.",
    intro:
      "Das D wie Dino Ausmalbild ist besonders motivierend fÃ¼r Kinder, die Dinosaurier mÃ¶gen. Der Buchstabe D wird mit einem einfachen Dino-Motiv kombiniert.",
    learningGoal:
      "Kinder erkennen den Anfangsbuchstaben D und Ã¼ben beim Ausmalen konzentriertes Arbeiten.",
    usageIdea:
      "Frage das Kind, welche Farbe sein Dino haben soll und ob der Dino freundlich, schnell oder groÃŸ ist.",
    printTip:
      "Das Motiv eignet sich gut als Einstieg in eine kleine Dino-Themenstunde.",
    materials: ["A4-Papier", "Buntstifte"],
    ageMin: 4,
    ageMax: 7,
    difficulty: "einfach",
    tags: ["Buchstaben", "Dino", "D", "Vorschule"],
    relatedSlugs: ["c-wie-clown", "e-wie-elefant", "tiere-elefant"],
  },
  {
    slug: "e-wie-elefant",
    categorySlug: "buchstaben",
    title: "E wie Elefant Ausmalbild",
    seoTitle: "E wie Elefant Ausmalbild kostenlos herunterladen",
    seoDescription:
      "Kostenloses E wie Elefant Ausmalbild. Buchstaben-Vorlage fÃ¼r Kita, Vorschule und Kindergarten.",
    shortDescription:
      "Eine Lern-Malvorlage mit dem Buchstaben E und einem Elefanten.",
    intro:
      "Dieses E wie Elefant Ausmalbild verbindet Buchstabenlernen mit einem beliebten Tiermotiv. Die klare Gestaltung unterstÃ¼tzt Kinder beim ruhigen Ausmalen.",
    learningGoal:
      "Kinder erkennen den Buchstaben E und erweitern ihren Wortschatz rund um Tiere.",
    usageIdea:
      "Nach dem Ausmalen kann das Kind erzÃ¤hlen, was ein Elefant frisst und wo Elefanten leben.",
    printTip:
      "FÃ¼r jÃ¼ngere Kinder die Vorlage auf normalem A4-Papier mit dicken Stiften verwenden.",
    materials: ["A4-Papier", "Buntstifte", "Wachsmalstifte"],
    ageMin: 4,
    ageMax: 7,
    difficulty: "einfach",
    tags: ["Buchstaben", "E", "Elefant", "Tiere"],
    relatedSlugs: ["d-wie-dino", "f-wie-fisch", "tiere-elefant"],
  },

  // Zahlen
  {
    slug: "zahl-1-mit-apfel",
    categorySlug: "zahlen",
    title: "Zahl 1 mit Apfel Ausmalbild",
    seoTitle: "Zahl 1 Ausmalbild mit Apfel kostenlos",
    seoDescription:
      "Kostenloses Zahl 1 Ausmalbild mit einem Apfel. PDF-Vorlage zum ZÃ¤hlen, Ausmalen und Drucken.",
    shortDescription:
      "Eine einfache Zahlen-Vorlage mit der Zahl 1 und einem Apfel.",
    intro:
      "Dieses Ausmalbild zur Zahl 1 hilft Kindern, eine erste Ziffer mit einer einfachen Menge zu verbinden. Der Apfel macht die Zahl sichtbar und greifbar.",
    learningGoal:
      "Kinder erkennen die Zahl 1 und verstehen, dass ein einzelnes Objekt zu dieser Zahl gehÃ¶rt.",
    usageIdea:
      "Lege vor dem Ausmalen einen echten Apfel oder ein Spielzeug daneben und lass das Kind die Menge vergleichen.",
    printTip:
      "Die Vorlage eignet sich gut fÃ¼r den Einstieg in eine Zahlenreihe von 1 bis 10.",
    materials: ["A4-Papier", "Buntstifte"],
    ageMin: 3,
    ageMax: 6,
    difficulty: "einfach",
    tags: ["Zahlen", "Zahl 1", "Apfel", "Vorschule"],
    relatedSlugs: ["zahl-2-mit-baellen", "zahl-3-mit-sternen", "a-wie-apfel"],
  },
  {
    slug: "zahl-2-mit-baellen",
    categorySlug: "zahlen",
    title: "Zahl 2 mit BÃ¤llen Ausmalbild",
    seoTitle: "Zahl 2 Ausmalbild kostenlos als PDF",
    seoDescription:
      "Zahl 2 Ausmalbild mit zwei BÃ¤llen. Kostenlose Zahlen-Malvorlage fÃ¼r Kinder.",
    shortDescription:
      "Eine Zahlen-Vorlage mit der Zahl 2 und zwei einfachen BÃ¤llen.",
    intro:
      "Das Zahl 2 Ausmalbild zeigt zwei BÃ¤lle und eine groÃŸe Ziffer. Kinder kÃ¶nnen zÃ¤hlen, vergleichen und anschlieÃŸend die BÃ¤lle farbig gestalten.",
    learningGoal:
      "Kinder erkennen die Zahl 2 und ordnen ihr zwei Objekte zu.",
    usageIdea:
      "Lass das Kind nach zwei GegenstÃ¤nden im Raum suchen und sie neben die Vorlage legen.",
    printTip:
      "FÃ¼r Gruppenarbeit mehrere Kopien drucken und unterschiedliche Farbkombinationen ausprobieren lassen.",
    materials: ["A4-Papier", "Buntstifte", "Filzstifte"],
    ageMin: 3,
    ageMax: 6,
    difficulty: "einfach",
    tags: ["Zahlen", "Zahl 2", "BÃ¤lle", "Kindergarten"],
    relatedSlugs: ["zahl-1-mit-apfel", "zahl-3-mit-sternen", "b-wie-ball"],
  },
  {
    slug: "zahl-3-mit-sternen",
    categorySlug: "zahlen",
    title: "Zahl 3 mit Sternen Ausmalbild",
    seoTitle: "Zahl 3 Ausmalbild mit Sternen kostenlos",
    seoDescription:
      "Kostenloses Zahl 3 Ausmalbild mit drei Sternen. PDF-Malvorlage fÃ¼r Kita, Vorschule und Zuhause.",
    shortDescription:
      "Eine einfache Zahlen-Vorlage mit drei Sternen zum Ausmalen.",
    intro:
      "Mit diesem Zahl 3 Ausmalbild kÃ¶nnen Kinder die Ziffer 3 und die Menge drei kennenlernen. Die Sterne sind klar gezeichnet und einfach auszumalen.",
    learningGoal:
      "Kinder zÃ¤hlen drei Objekte und verbinden die Menge mit der passenden Ziffer.",
    usageIdea:
      "Nach dem Ausmalen kann das Kind drei weitere Dinge malen oder drei Sterne am Himmel suchen.",
    printTip:
      "Die Sterne kÃ¶nnen mit verschiedenen Farben ausgemalt werden, um Muster zu Ã¼ben.",
    materials: ["A4-Papier", "Buntstifte"],
    ageMin: 3,
    ageMax: 6,
    difficulty: "einfach",
    tags: ["Zahlen", "Zahl 3", "Sterne", "Vorschule"],
    relatedSlugs: ["zahl-1-mit-apfel", "zahl-2-mit-baellen", "stern-form-ausmalbild"],
  },
  {
    slug: "zahl-4-mit-blumen",
    categorySlug: "zahlen",
    title: "Zahl 4 mit Blumen Ausmalbild",
    seoTitle: "Zahl 4 Ausmalbild kostenlos zum Ausdrucken",
    seoDescription:
      "Zahl 4 Ausmalbild mit vier Blumen. Kostenlose PDF-Vorlage fÃ¼r Vorschule und Kindergarten.",
    shortDescription:
      "Eine Zahlen-Malvorlage mit vier Blumen und der Zahl 4.",
    intro:
      "Das Zahl 4 Ausmalbild verbindet ZÃ¤hlen mit einem freundlichen Blumenmotiv. Kinder kÃ¶nnen die vier Blumen zÃ¤hlen und farbig gestalten.",
    learningGoal:
      "Kinder erkennen die Zahl 4, zÃ¤hlen vier Objekte und Ã¼ben genaues Hinsehen.",
    usageIdea:
      "Nutze die Vorlage im FrÃ¼hling und lass Kinder echte Blumen oder BlÃ¤tter zÃ¤hlen.",
    printTip:
      "FÃ¼r eine kleine Ausstellung kÃ¶nnen alle Kinder ihre Blumen in unterschiedlichen Farben gestalten.",
    materials: ["A4-Papier", "Buntstifte", "Wachsmalstifte"],
    ageMin: 4,
    ageMax: 6,
    difficulty: "einfach",
    tags: ["Zahlen", "Zahl 4", "Blumen", "FrÃ¼hling"],
    relatedSlugs: ["zahl-3-mit-sternen", "zahl-5-mit-fischen", "fruehling-blumen"],
  },
  {
    slug: "zahl-5-mit-fischen",
    categorySlug: "zahlen",
    title: "Zahl 5 mit Fischen Ausmalbild",
    seoTitle: "Zahl 5 Ausmalbild mit Fischen kostenlos",
    seoDescription:
      "Kostenloses Zahl 5 Ausmalbild mit fÃ¼nf Fischen. PDF-Vorlage zum ZÃ¤hlen und Ausmalen.",
    shortDescription:
      "Eine Zahlen-Vorlage mit fÃ¼nf Fischen fÃ¼r Vorschulkinder.",
    intro:
      "Dieses Zahl 5 Ausmalbild zeigt fÃ¼nf Fische und eine groÃŸe Ziffer. Es eignet sich gut, um ZÃ¤hlen und Ausmalen miteinander zu verbinden.",
    learningGoal:
      "Kinder erfassen die Menge fÃ¼nf und trainieren beim Ausmalen Konzentration und StiftfÃ¼hrung.",
    usageIdea:
      "Lass jedes Kind die fÃ¼nf Fische in verschiedenen Farben gestalten und anschlieÃŸend noch einmal laut zÃ¤hlen.",
    printTip:
      "Die Vorlage passt gut zu Themen wie Wasser, Meer oder Tiere.",
    materials: ["A4-Papier", "Buntstifte", "Filzstifte"],
    ageMin: 4,
    ageMax: 7,
    difficulty: "mittel",
    tags: ["Zahlen", "Zahl 5", "Fische", "Tiere"],
    relatedSlugs: ["zahl-4-mit-blumen", "tiere-fisch", "zahl-3-mit-sternen"],
  },

  // Tiere
  {
    slug: "tiere-katze",
    categorySlug: "tiere",
    title: "Katze Ausmalbild fÃ¼r Kinder",
    seoTitle: "Katze Ausmalbild kostenlos als PDF",
    seoDescription:
      "Einfaches Katze Ausmalbild fÃ¼r Kinder. Kostenlose PDF-Malvorlage zum Ausdrucken fÃ¼r Kita und Zuhause.",
    shortDescription:
      "Ein kindgerechtes Katzenmotiv mit klaren Linien zum Ausmalen.",
    intro:
      "Dieses Katze Ausmalbild eignet sich gut fÃ¼r Kinder im Kindergarten- und Vorschulalter. Die klaren Linien helfen beim Ausmalen, ohne Kinder zu Ã¼berfordern.",
    learningGoal:
      "Kinder Ã¼ben Feinmotorik, erkennen ein bekanntes Haustier und erweitern ihren Wortschatz rund um Tiere.",
    usageIdea:
      "Nach dem Ausmalen kann das Kind erzÃ¤hlen, welche Farbe die Katze hat, wie sie heiÃŸt und was sie gerne frisst.",
    printTip:
      "Am besten auf A4-Papier drucken. FÃ¼r jÃ¼ngere Kinder eignen sich dickere Buntstifte.",
    materials: ["A4-Papier", "Buntstifte", "Wachsmalstifte"],
    ageMin: 3,
    ageMax: 6,
    difficulty: "einfach",
    tags: ["Tiere", "Katze", "Haustiere", "Kindergarten"],
    relatedSlugs: ["tiere-hund", "tiere-hase", "tiere-fuchs"],
  },
  {
    slug: "tiere-hund",
    categorySlug: "tiere",
    title: "Hund Ausmalbild fÃ¼r Kinder",
    seoTitle: "Hund Ausmalbild kostenlos herunterladen",
    seoDescription:
      "Kostenloses Hund Ausmalbild als PDF. Einfache Malvorlage fÃ¼r Kinder in Kita, Kindergarten und Zuhause.",
    shortDescription:
      "Ein freundliches Hundemotiv zum Ausdrucken und Ausmalen.",
    intro:
      "Das Hund Ausmalbild zeigt ein vertrautes Haustier und eignet sich fÃ¼r ruhige Malmomente. Kinder kÃ¶nnen Farben auswÃ¤hlen und Ã¼ber Hunde sprechen.",
    learningGoal:
      "Kinder erkennen den Hund als Haustier, Ã¼ben Tierbegriffe und stÃ¤rken ihre Hand-Auge-Koordination.",
    usageIdea:
      "Frage das Kind, ob es einen Hund kennt und welche GerÃ¤usche ein Hund macht.",
    printTip:
      "FÃ¼r jÃ¼ngere Kinder eine grÃ¶ÃŸere Druckansicht wÃ¤hlen und einfache Farben anbieten.",
    materials: ["A4-Papier", "Buntstifte"],
    ageMin: 3,
    ageMax: 6,
    difficulty: "einfach",
    tags: ["Tiere", "Hund", "Haustiere", "Kita"],
    relatedSlugs: ["tiere-katze", "tiere-hase", "tiere-baer"],
  },
  {
    slug: "tiere-elefant",
    categorySlug: "tiere",
    title: "Elefant Ausmalbild fÃ¼r Kinder",
    seoTitle: "Elefant Ausmalbild kostenlos als PDF",
    seoDescription:
      "Kostenloses Elefant Ausmalbild zum Ausdrucken. Kindgerechte Tier-Malvorlage fÃ¼r Vorschule und Kita.",
    shortDescription:
      "Ein einfacher Elefant mit groÃŸen Formen und klaren Konturen.",
    intro:
      "Dieses Elefant Ausmalbild bietet groÃŸe FlÃ¤chen und klare Linien. Es eignet sich besonders fÃ¼r Kinder, die Tiere aus Zoo und Natur kennenlernen.",
    learningGoal:
      "Kinder lernen den Elefanten als Tier kennen und Ã¼ben das Ausmalen grÃ¶ÃŸerer FlÃ¤chen.",
    usageIdea:
      "Sprich mit dem Kind Ã¼ber den RÃ¼ssel, die groÃŸen Ohren und darÃ¼ber, wo Elefanten leben.",
    printTip:
      "Graue, blaue oder fantasievolle Farben sind mÃ¶glich. Es muss nicht realistisch sein.",
    materials: ["A4-Papier", "Buntstifte", "Wachsmalstifte"],
    ageMin: 3,
    ageMax: 7,
    difficulty: "einfach",
    tags: ["Tiere", "Elefant", "Zoo", "Vorschule"],
    relatedSlugs: ["tiere-loewe", "tiere-giraffe", "e-wie-elefant"],
  },
  {
    slug: "tiere-loewe",
    categorySlug: "tiere",
    title: "LÃ¶we Ausmalbild fÃ¼r Kinder",
    seoTitle: "LÃ¶we Ausmalbild kostenlos zum Ausdrucken",
    seoDescription:
      "Kostenloses LÃ¶we Ausmalbild als PDF. Einfache Tier-Malvorlage fÃ¼r Kindergarten und Zuhause.",
    shortDescription:
      "Ein kindgerechter LÃ¶we mit MÃ¤hne zum Ausmalen.",
    intro:
      "Das LÃ¶we Ausmalbild bringt ein beliebtes Wildtier auf das Papier. Die MÃ¤hne bietet Kindern die MÃ¶glichkeit, mit warmen Farben und Mustern zu arbeiten.",
    learningGoal:
      "Kinder lernen ein Wildtier kennen, benennen KÃ¶rperteile und Ã¼ben kreatives Ausmalen.",
    usageIdea:
      "Nach dem Ausmalen kann das Kind erzÃ¤hlen, ob der LÃ¶we laut, leise, freundlich oder mutig wirkt.",
    printTip:
      "Die MÃ¤hne kann mit Gelb, Orange, Braun oder Fantasiefarben gestaltet werden.",
    materials: ["A4-Papier", "Buntstifte", "Filzstifte"],
    ageMin: 4,
    ageMax: 7,
    difficulty: "mittel",
    tags: ["Tiere", "LÃ¶we", "Wildtiere", "Zoo"],
    relatedSlugs: ["tiere-elefant", "tiere-giraffe", "tiere-baer"],
  },
  {
    slug: "tiere-giraffe",
    categorySlug: "tiere",
    title: "Giraffe Ausmalbild fÃ¼r Kinder",
    seoTitle: "Giraffe Ausmalbild kostenlos als PDF",
    seoDescription:
      "Kostenloses Giraffe Ausmalbild fÃ¼r Kinder. PDF-Malvorlage mit einfachem Tiermotiv.",
    shortDescription:
      "Eine freundliche Giraffe mit langen Beinen und Flecken.",
    intro:
      "Dieses Giraffe Ausmalbild eignet sich gut, um Ã¼ber groÃŸe Tiere, lange HÃ¤lse und Muster zu sprechen. Die Flecken laden zum genauen Ausmalen ein.",
    learningGoal:
      "Kinder erkennen typische Merkmale einer Giraffe und Ã¼ben das Ausmalen kleinerer Formen.",
    usageIdea:
      "Lass das Kind die Flecken zÃ¤hlen oder mit verschiedenen BrauntÃ¶nen gestalten.",
    printTip:
      "FÃ¼r jÃ¼ngere Kinder kann die Vorlage mit wenigen Farben begonnen und spÃ¤ter ergÃ¤nzt werden.",
    materials: ["A4-Papier", "Buntstifte"],
    ageMin: 4,
    ageMax: 7,
    difficulty: "mittel",
    tags: ["Tiere", "Giraffe", "Zoo", "Muster"],
    relatedSlugs: ["tiere-elefant", "tiere-loewe", "g-wie-giraffe"],
  },
  {
    slug: "tiere-fuchs",
    categorySlug: "tiere",
    title: "Fuchs Ausmalbild fÃ¼r Kinder",
    seoTitle: "Fuchs Ausmalbild kostenlos herunterladen",
    seoDescription:
      "Kostenloses Fuchs Ausmalbild als PDF. Einfache Malvorlage fÃ¼r Kinder im Kindergartenalter.",
    shortDescription:
      "Ein freundlicher Fuchs mit klaren Konturen zum Ausmalen.",
    intro:
      "Das Fuchs Ausmalbild eignet sich gut fÃ¼r Themen rund um Waldtiere. Kinder kÃ¶nnen den Fuchs orange, braun oder ganz fantasievoll gestalten.",
    learningGoal:
      "Kinder lernen ein Waldtier kennen und erweitern ihren Wortschatz zu Natur und Tieren.",
    usageIdea:
      "Sprich nach dem Ausmalen darÃ¼ber, wo ein Fuchs lebt und welche anderen Tiere im Wald vorkommen.",
    printTip:
      "Das Motiv passt gut zu Herbst- oder Waldprojekten.",
    materials: ["A4-Papier", "Buntstifte", "Wachsmalstifte"],
    ageMin: 4,
    ageMax: 7,
    difficulty: "mittel",
    tags: ["Tiere", "Fuchs", "Waldtiere", "Herbst"],
    relatedSlugs: ["tiere-hase", "tiere-baer", "tiere-katze"],
  },
  {
    slug: "tiere-hase",
    categorySlug: "tiere",
    title: "Hase Ausmalbild fÃ¼r Kinder",
    seoTitle: "Hase Ausmalbild kostenlos als PDF",
    seoDescription:
      "Kostenloses Hase Ausmalbild fÃ¼r Kinder. PDF-Malvorlage fÃ¼r Kita, Ostern und Zuhause.",
    shortDescription:
      "Ein einfacher Hase mit langen Ohren zum Ausmalen.",
    intro:
      "Dieses Hase Ausmalbild passt zu Tierprojekten, FrÃ¼hling und Ostern. Die groÃŸen Formen machen das Motiv auch fÃ¼r jÃ¼ngere Kinder gut geeignet.",
    learningGoal:
      "Kinder erkennen typische Merkmale eines Hasen und Ã¼ben das Ausmalen einfacher Tierformen.",
    usageIdea:
      "Frage das Kind, was ein Hase frisst und wie er sich bewegt.",
    printTip:
      "Das Bild kann auch als einfache OsteraktivitÃ¤t verwendet werden.",
    materials: ["A4-Papier", "Buntstifte"],
    ageMin: 3,
    ageMax: 6,
    difficulty: "einfach",
    tags: ["Tiere", "Hase", "Ostern", "FrÃ¼hling"],
    relatedSlugs: ["tiere-fuchs", "tiere-katze", "ostern-osterhase"],
  },
  {
    slug: "tiere-baer",
    categorySlug: "tiere",
    title: "BÃ¤r Ausmalbild fÃ¼r Kinder",
    seoTitle: "BÃ¤r Ausmalbild kostenlos zum Ausdrucken",
    seoDescription:
      "Kostenloses BÃ¤r Ausmalbild als PDF. Kindgerechte Tier-Malvorlage mit klaren Linien.",
    shortDescription:
      "Ein einfacher BÃ¤r zum Ausdrucken und Ausmalen.",
    intro:
      "Das BÃ¤r Ausmalbild ist ein ruhiges Tiermotiv mit groÃŸen FlÃ¤chen. Es eignet sich gut fÃ¼r jÃ¼ngere Kinder und fÃ¼r Themen rund um Waldtiere.",
    learningGoal:
      "Kinder lernen den BÃ¤ren als Tier kennen und Ã¼ben gleichmÃ¤ÃŸiges Ausmalen.",
    usageIdea:
      "Nach dem Ausmalen kann das Kind erzÃ¤hlen, ob der BÃ¤r schlÃ¤ft, lÃ¤uft oder Honig sucht.",
    printTip:
      "Braun, Beige oder fantasievolle Farben sind mÃ¶glich. KreativitÃ¤t ist wichtiger als Realismus.",
    materials: ["A4-Papier", "Buntstifte", "Wachsmalstifte"],
    ageMin: 3,
    ageMax: 7,
    difficulty: "einfach",
    tags: ["Tiere", "BÃ¤r", "Waldtiere", "Kita"],
    relatedSlugs: ["tiere-fuchs", "tiere-hase", "tiere-loewe"],
  },
  {
    slug: "tiere-vogel",
    categorySlug: "tiere",
    title: "Vogel Ausmalbild fÃ¼r Kinder",
    seoTitle: "Vogel Ausmalbild kostenlos als PDF",
    seoDescription:
      "Kostenloses Vogel Ausmalbild fÃ¼r Kinder. Einfache PDF-Malvorlage zum Drucken.",
    shortDescription:
      "Ein freundlicher Vogel mit einfachen Formen zum Ausmalen.",
    intro:
      "Dieses Vogel Ausmalbild lÃ¤dt Kinder ein, mit vielen Farben zu arbeiten. Es passt gut zu FrÃ¼hling, Natur und Tierprojekten.",
    learningGoal:
      "Kinder lernen ein bekanntes Tier kennen, benennen FlÃ¼gel und Schnabel und Ã¼ben kreative Farbwahl.",
    usageIdea:
      "Lass das Kind Ã¼berlegen, ob der Vogel singt, fliegt oder in einem Nest sitzt.",
    printTip:
      "Das Motiv kann mit bunten Federn, Mustern oder einfachen Farbfeldern gestaltet werden.",
    materials: ["A4-Papier", "Buntstifte", "Filzstifte"],
    ageMin: 3,
    ageMax: 7,
    difficulty: "einfach",
    tags: ["Tiere", "Vogel", "Natur", "FrÃ¼hling"],
    relatedSlugs: ["tiere-fisch", "tiere-hase", "fruehling-blumen"],
  },
  {
    slug: "tiere-fisch",
    categorySlug: "tiere",
    title: "Fisch Ausmalbild fÃ¼r Kinder",
    seoTitle: "Fisch Ausmalbild kostenlos herunterladen",
    seoDescription:
      "Kostenloses Fisch Ausmalbild als PDF. Einfache Tier-Malvorlage fÃ¼r Kita und Zuhause.",
    shortDescription:
      "Ein einfacher Fisch mit klaren Linien und groÃŸen FlÃ¤chen.",
    intro:
      "Das Fisch Ausmalbild eignet sich gut fÃ¼r Themen wie Wasser, Meer oder Tiere. Kinder kÃ¶nnen Schuppen, Flossen und Farben frei gestalten.",
    learningGoal:
      "Kinder lernen ein Wassertier kennen und Ã¼ben das Ausmalen von FlÃ¤chen und Mustern.",
    usageIdea:
      "Nach dem Ausmalen kÃ¶nnen Kinder erzÃ¤hlen, ob ihr Fisch im See, Fluss oder Meer lebt.",
    printTip:
      "Blaues Papier als Hintergrund oder ausgeschnittene Fische kÃ¶nnen fÃ¼r eine Gruppenarbeit genutzt werden.",
    materials: ["A4-Papier", "Buntstifte", "Filzstifte"],
    ageMin: 3,
    ageMax: 7,
    difficulty: "einfach",
    tags: ["Tiere", "Fisch", "Wasser", "Meer"],
    relatedSlugs: ["zahl-5-mit-fischen", "f-wie-fisch", "tiere-vogel"],
  },

  // Vorschule
  {
    slug: "linien-nachspuren",
    categorySlug: "vorschule",
    title: "Linien nachspuren Vorlage",
    seoTitle: "Linien nachspuren kostenlos als PDF",
    seoDescription:
      "Kostenlose Linien nachspuren Vorlage fÃ¼r Vorschule und Kindergarten. PDF-Arbeitsblatt zum Ausdrucken.",
    shortDescription:
      "Eine einfache VorschulÃ¼bung zum Nachspuren gerader Linien.",
    intro:
      "Diese Linien-nachspuren Vorlage unterstÃ¼tzt Kinder beim Ãœben der StiftfÃ¼hrung. Gerade Linien sind ein guter Einstieg in erste Schreibbewegungen.",
    learningGoal:
      "Kinder Ã¼ben kontrollierte Stiftbewegungen und verbessern ihre Feinmotorik.",
    usageIdea:
      "Lass das Kind die Linien erst mit dem Finger nachfahren und danach mit einem Stift.",
    printTip:
      "FÃ¼r mehrfache Nutzung kann die Seite laminiert und mit abwischbarem Stift verwendet werden.",
    materials: ["A4-Papier", "Bleistift", "Buntstifte"],
    ageMin: 4,
    ageMax: 7,
    difficulty: "einfach",
    tags: ["Vorschule", "SchwungÃ¼bung", "Linien", "Feinmotorik"],
    relatedSlugs: ["kreise-nachspuren", "zickzack-linien", "wellenlinien"],
  },
  {
    slug: "kreise-nachspuren",
    categorySlug: "vorschule",
    title: "Kreise nachspuren Vorlage",
    seoTitle: "Kreise nachspuren kostenlos als PDF",
    seoDescription:
      "Kostenlose Kreise nachspuren Vorlage fÃ¼r Kinder. Vorschule Arbeitsblatt zum Drucken.",
    shortDescription:
      "Eine einfache Ãœbung zum Nachfahren runder Formen.",
    intro:
      "Die Kreise-nachspuren Vorlage hilft Kindern, runde Bewegungen mit dem Stift zu Ã¼ben. Das ist eine wichtige Grundlage fÃ¼r spÃ¤tere Buchstabenformen.",
    learningGoal:
      "Kinder trainieren runde Stiftbewegungen, Konzentration und Hand-Auge-Koordination.",
    usageIdea:
      "Nach dem Nachspuren kÃ¶nnen die Kreise in verschiedene Farben ausgemalt oder zu kleinen Gesichtern ergÃ¤nzt werden.",
    printTip:
      "FÃ¼r AnfÃ¤nger grÃ¶ÃŸere Kreise verwenden und langsam nachspuren lassen.",
    materials: ["A4-Papier", "Bleistift", "Buntstifte"],
    ageMin: 4,
    ageMax: 7,
    difficulty: "einfach",
    tags: ["Vorschule", "Kreise", "Nachspuren", "Feinmotorik"],
    relatedSlugs: ["linien-nachspuren", "wellenlinien", "kreis-form-ausmalbild"],
  },
  {
    slug: "zickzack-linien",
    categorySlug: "vorschule",
    title: "Zickzack-Linien nachspuren",
    seoTitle: "Zickzack Linien nachspuren kostenlos",
    seoDescription:
      "Kostenlose Zickzack-Linien Vorlage zum Nachspuren. Vorschule Arbeitsblatt fÃ¼r StiftfÃ¼hrung und Konzentration.",
    shortDescription:
      "Eine VorschulÃ¼bung mit einfachen Zickzack-Linien.",
    intro:
      "Zickzack-Linien fÃ¶rdern genaues Hinsehen und kontrollierte Richtungswechsel. Die Vorlage eignet sich fÃ¼r Kinder, die bereits einfache Linien nachfahren kÃ¶nnen.",
    learningGoal:
      "Kinder Ã¼ben Richtungswechsel, Stiftkontrolle und konzentriertes Arbeiten.",
    usageIdea:
      "Lass das Kind die Linie langsam nachfahren und an jeder Ecke kurz stoppen.",
    printTip:
      "Bei jÃ¼ngeren Kindern zuerst mit dem Finger Ã¼ben, dann mit einem dicken Stift.",
    materials: ["A4-Papier", "Bleistift", "Buntstifte"],
    ageMin: 4,
    ageMax: 7,
    difficulty: "mittel",
    tags: ["Vorschule", "Zickzack", "SchwungÃ¼bung", "Nachspuren"],
    relatedSlugs: ["linien-nachspuren", "wellenlinien", "kreise-nachspuren"],
  },
  {
    slug: "wellenlinien",
    categorySlug: "vorschule",
    title: "Wellenlinien nachspuren",
    seoTitle: "Wellenlinien nachspuren kostenlos als PDF",
    seoDescription:
      "Kostenlose Wellenlinien Vorlage fÃ¼r Vorschulkinder. Arbeitsblatt zum Nachspuren und Ausmalen.",
    shortDescription:
      "Eine SchwungÃ¼bung mit weichen Wellenlinien.",
    intro:
      "Wellenlinien helfen Kindern, flieÃŸende Stiftbewegungen zu Ã¼ben. Die Vorlage eignet sich gut als ruhige Feinmotorik-Ãœbung.",
    learningGoal:
      "Kinder verbessern flieÃŸende Bewegungen, Stiftkontrolle und Konzentration.",
    usageIdea:
      "Die Wellen kÃ¶nnen nach dem Nachspuren als Wasser, HÃ¼gel oder Muster ausgemalt werden.",
    printTip:
      "Das Arbeitsblatt kann mehrfach genutzt werden, wenn es in eine KlarsichthÃ¼lle gelegt wird.",
    materials: ["A4-Papier", "Bleistift", "Buntstifte"],
    ageMin: 4,
    ageMax: 7,
    difficulty: "mittel",
    tags: ["Vorschule", "Wellenlinien", "SchwungÃ¼bung", "Feinmotorik"],
    relatedSlugs: ["linien-nachspuren", "zickzack-linien", "kreise-nachspuren"],
  },
  {
    slug: "punkte-verbinden-1-10",
    categorySlug: "vorschule",
    title: "Punkte verbinden 1 bis 10",
    seoTitle: "Punkte verbinden 1 bis 10 kostenlos",
    seoDescription:
      "Kostenlose Punkte verbinden Vorlage von 1 bis 10. Vorschule PDF-Arbeitsblatt zum Ausdrucken.",
    shortDescription:
      "Eine einfache Punkt-zu-Punkt Ãœbung mit den Zahlen 1 bis 10.",
    intro:
      "Diese Punkte-verbinden Vorlage kombiniert Zahlenfolge und StiftfÃ¼hrung. Kinder verbinden die Punkte von 1 bis 10 und entdecken dabei ein einfaches Motiv.",
    learningGoal:
      "Kinder Ã¼ben Zahlenreihenfolge, Konzentration und kontrollierte Stiftbewegungen.",
    usageIdea:
      "Vor dem Verbinden gemeinsam von 1 bis 10 zÃ¤hlen. Danach kann das entstandene Bild ausgemalt werden.",
    printTip:
      "FÃ¼r Kinder, die Zahlen noch nicht sicher kennen, die Zahlenreihe vorher laut wiederholen.",
    materials: ["A4-Papier", "Bleistift", "Buntstifte"],
    ageMin: 5,
    ageMax: 7,
    difficulty: "mittel",
    tags: ["Vorschule", "Punkte verbinden", "Zahlen", "1 bis 10"],
    relatedSlugs: ["zahl-1-mit-apfel", "zahl-2-mit-baellen", "linien-nachspuren"],
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getPage(slug: string) {
  return coloringPages.find((page) => page.slug === slug);
}

export function getColoringPage(slug: string) {
  return getPage(slug);
}

export function getPagesByCategory(categorySlug: string) {
  return coloringPages.filter((page) => page.categorySlug === categorySlug);
}

export function getRelatedPages(page: ColoringPage) {
  return page.relatedSlugs
    .map((slug) => getPage(slug))
    .filter((relatedPage): relatedPage is ColoringPage => Boolean(relatedPage));
}

export function getDifficultyLabel(difficulty: Difficulty) {
  const labels: Record<Difficulty, string> = {
    einfach: "Einfach",
    mittel: "Mittel",
    detailreich: "Detailreich",
  };

  return labels[difficulty];
}
