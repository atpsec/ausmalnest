export type Category = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
};

export type ColoringPage = {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  age: string;
  difficulty: "Einfach" | "Mittel";
  usage: string[];
  tags: string[];
  illustration: "cat" | "apple" | "number" | "dino" | "car" | "shape" | "tree" | "gift" | "rabbit" | "lines";
  premium?: boolean;
};

export const categories: Category[] = [
  {
    slug: "buchstaben",
    name: "Buchstaben Ausmalbilder",
    shortName: "Buchstaben",
    description: "Einfache Buchstaben-Malvorlagen mit klaren Motiven für Vorschule und 1. Klasse.",
    seoTitle: "Buchstaben Ausmalbilder kostenlos als Druckvorlage",
    seoDescription: "Kostenlose Buchstaben Ausmalbilder für Kinder. Druckfertige Malvorlagen für Kita, Vorschule und Grundschule.",
  },
  {
    slug: "zahlen",
    name: "Zahlen Ausmalbilder",
    shortName: "Zahlen",
    description: "Zahlen von 1 bis 10 mit kindgerechten Motiven zum Ausmalen und Zählen.",
    seoTitle: "Zahlen Ausmalbilder kostenlos herunterladen",
    seoDescription: "Zahlen Ausmalbilder für Kinder als einfache Druckvorlagen für Kindergarten, Vorschule und Zuhause.",
  },
  {
    slug: "tiere",
    name: "Tiere Ausmalbilder",
    shortName: "Tiere",
    description: "Tiermotive mit ruhigen Linien, großen Flächen und kurzen Lernimpulsen.",
    seoTitle: "Tiere Ausmalbilder kostenlos für Kinder",
    seoDescription: "Kostenlose Tiere Ausmalbilder zum Ausdrucken für Kita, Kindergarten und Zuhause.",
  },
  {
    slug: "formen",
    name: "Formen Ausmalbilder",
    shortName: "Formen",
    description: "Grundformen erkennen, benennen und spielerisch ausmalen.",
    seoTitle: "Formen Ausmalbilder für Kindergarten und Vorschule",
    seoDescription: "Einfache Formen Ausmalbilder und Lernvorlagen für Kinder im Kindergartenalter.",
  },
  {
    slug: "berufe",
    name: "Berufe Ausmalbilder",
    shortName: "Berufe",
    description: "Kindgerechte Berufsbilder für Gespräche über Alltag, Helfer und Interessen.",
    seoTitle: "Berufe Ausmalbilder kostenlos als PDF-Vorlage",
    seoDescription: "Berufe Ausmalbilder für Kinder: einfache Malvorlagen für Kita, Kindergarten und Grundschule.",
  },
  {
    slug: "fahrzeuge",
    name: "Fahrzeuge Ausmalbilder",
    shortName: "Fahrzeuge",
    description: "Autos, Busse und Einsatzfahrzeuge als klare Malvorlagen für kleine Kinder.",
    seoTitle: "Fahrzeuge Ausmalbilder kostenlos zum Ausdrucken",
    seoDescription: "Fahrzeuge Ausmalbilder für Kinder als kostenlose Druckvorlagen für Zuhause und Kita.",
  },
  {
    slug: "jahreszeiten",
    name: "Jahreszeiten Ausmalbilder",
    shortName: "Jahreszeiten",
    description: "Motive zu Frühling, Sommer, Herbst und Winter für saisonale Lernmomente.",
    seoTitle: "Jahreszeiten Ausmalbilder für Kinder",
    seoDescription: "Kostenlose Jahreszeiten Ausmalbilder für Kindergarten, Vorschule und Grundschule.",
  },
  {
    slug: "ostern",
    name: "Ostern Ausmalbilder",
    shortName: "Ostern",
    description: "Ostereier, Hasen und Frühlingsmotive als freundliche Druckvorlagen.",
    seoTitle: "Ostern Ausmalbilder kostenlos für Kinder",
    seoDescription: "Ostern Ausmalbilder und einfache Malvorlagen zum Ausdrucken für Kinder.",
  },
  {
    slug: "weihnachten",
    name: "Weihnachten Ausmalbilder",
    shortName: "Weihnachten",
    description: "Weihnachtliche Motive mit großen Flächen für ruhige Bastel- und Malzeiten.",
    seoTitle: "Weihnachten Ausmalbilder kostenlos zum Ausdrucken",
    seoDescription: "Kostenlose Weihnachten Ausmalbilder für Kinder, Kita und Grundschule.",
  },
  {
    slug: "vorschule",
    name: "Vorschule Malvorlagen",
    shortName: "Vorschule",
    description: "Erste Schwungübungen, Linien und einfache Aufgaben für die Vorschule.",
    seoTitle: "Vorschule Malvorlagen und Schwungübungen",
    seoDescription: "Kostenlose Vorschule Malvorlagen für Kinder: Linien, Formen und einfache Übungen.",
  },
];

export const coloringPages: ColoringPage[] = [
  {
    slug: "a-wie-apfel",
    category: "buchstaben",
    title: "A wie Apfel Ausmalbild",
    subtitle: "Buchstaben-Malvorlage für Vorschule und 1. Klasse",
    description: "Ein klares A-Motiv mit Apfel zum Ausmalen und ersten Buchstabenlernen.",
    age: "4-7 Jahre",
    difficulty: "Einfach",
    usage: ["Kita", "Vorschule", "Zuhause"],
    tags: ["Buchstaben", "Apfel", "Alphabet"],
    illustration: "apple",
  },
  {
    slug: "d-wie-dino",
    category: "buchstaben",
    title: "D wie Dino Ausmalbild",
    subtitle: "Lern-Ausmalbild mit großem Buchstaben D",
    description: "Ein freundlicher Dino unterstützt Kinder beim Wiedererkennen des Buchstabens D.",
    age: "4-7 Jahre",
    difficulty: "Einfach",
    usage: ["Kindergarten", "Vorschule"],
    tags: ["Buchstaben", "Dino", "Alphabet"],
    illustration: "dino",
  },
  {
    slug: "zahl-1-mit-apfel",
    category: "zahlen",
    title: "Zahl 1 mit Apfel Ausmalbild",
    subtitle: "Einfache Zahlen-Malvorlage für Kinder",
    description: "Die Zahl 1 mit einem Apfel als ruhige Zähl- und Malvorlage.",
    age: "3-6 Jahre",
    difficulty: "Einfach",
    usage: ["Kita", "Kindergarten", "Zuhause"],
    tags: ["Zahlen", "Zählen", "Apfel"],
    illustration: "number",
  },
  {
    slug: "katze-ausmalbild",
    category: "tiere",
    title: "Katze Ausmalbild für Kinder",
    subtitle: "Kostenlose Tier-Malvorlage zum Ausdrucken",
    description: "Eine einfache Katze mit großen Flächen für Kindergarten und Zuhause.",
    age: "3-6 Jahre",
    difficulty: "Einfach",
    usage: ["Kita", "Kindergarten", "Zuhause"],
    tags: ["Katze", "Tiere", "einfach"],
    illustration: "cat",
  },
  {
    slug: "kreis-und-quadrat",
    category: "formen",
    title: "Kreis und Quadrat Ausmalbild",
    subtitle: "Formen erkennen und ausmalen",
    description: "Eine einfache Vorlage, um Kreis und Quadrat spielerisch zu unterscheiden.",
    age: "3-5 Jahre",
    difficulty: "Einfach",
    usage: ["Kita", "Kindergarten"],
    tags: ["Formen", "Kreis", "Quadrat"],
    illustration: "shape",
  },
  {
    slug: "feuerwehrauto-ausmalbild",
    category: "fahrzeuge",
    title: "Feuerwehrauto Ausmalbild",
    subtitle: "Fahrzeug-Malvorlage mit klaren Konturen",
    description: "Ein einfaches Feuerwehrauto als Druckvorlage für Kinder.",
    age: "4-7 Jahre",
    difficulty: "Einfach",
    usage: ["Kindergarten", "Zuhause"],
    tags: ["Fahrzeuge", "Feuerwehr", "Auto"],
    illustration: "car",
  },
  {
    slug: "baum-im-herbst",
    category: "jahreszeiten",
    title: "Baum im Herbst Ausmalbild",
    subtitle: "Saisonale Malvorlage für Kita und Zuhause",
    description: "Ein Herbstbaum mit Blättern als ruhiges Jahreszeitenmotiv.",
    age: "4-7 Jahre",
    difficulty: "Einfach",
    usage: ["Kita", "Grundschule", "Zuhause"],
    tags: ["Herbst", "Jahreszeiten", "Baum"],
    illustration: "tree",
  },
  {
    slug: "osterhase-mit-ei",
    category: "ostern",
    title: "Osterhase mit Ei Ausmalbild",
    subtitle: "Ostern-Malvorlage für Kinder",
    description: "Ein freundlicher Osterhase mit Ei zum Ausmalen und Dekorieren.",
    age: "3-7 Jahre",
    difficulty: "Einfach",
    usage: ["Kita", "Kindergarten", "Zuhause"],
    tags: ["Ostern", "Hase", "Ei"],
    illustration: "rabbit",
  },
  {
    slug: "weihnachtsgeschenk",
    category: "weihnachten",
    title: "Weihnachtsgeschenk Ausmalbild",
    subtitle: "Einfache Weihnachts-Malvorlage",
    description: "Ein Geschenk mit Schleife als einfache Vorlage für die Adventszeit.",
    age: "3-7 Jahre",
    difficulty: "Einfach",
    usage: ["Kindergarten", "Grundschule", "Zuhause"],
    tags: ["Weihnachten", "Geschenk", "Advent"],
    illustration: "gift",
  },
  {
    slug: "linien-nachspuren",
    category: "vorschule",
    title: "Linien nachspuren Malvorlage",
    subtitle: "Schwungübung für Vorschule und Kindergarten",
    description: "Eine einfache Übung mit Linien zum Nachspuren und anschließenden Ausmalen.",
    age: "4-7 Jahre",
    difficulty: "Einfach",
    usage: ["Vorschule", "Grundschule", "Zuhause"],
    tags: ["Vorschule", "Schwungübung", "Linien"],
    illustration: "lines",
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getPagesByCategory(categorySlug: string) {
  return coloringPages.filter((page) => page.category === categorySlug);
}

export function getColoringPage(slug: string) {
  return coloringPages.find((page) => page.slug === slug);
}

export function getCategoryForPage(page: ColoringPage) {
  return getCategory(page.category);
}
