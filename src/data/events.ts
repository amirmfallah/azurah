export interface Event {
  id: string;
  title: string;
  venue: string;
  city: string;
  country: string;
  date: string;
  time?: string;
  artistIds: string[];
  ticketUrl?: string;
  description?: string;
  image?: string;
}

export const events: Event[] = [
  {
    id: "azurah-frequency-berlin-2025",
    title: "Azurah Frequency Showcase",
    venue: "Berghain",
    city: "Berlin",
    country: "Germany",
    date: "2026-03-15",
    time: "23:00",
    artistIds: ["adam-beyer", "amelie-lens"],
    ticketUrl: "#",
    description: "An unforgettable night featuring Azurah Frequency artists",
    image: "/hero.png",
  },
  {
    id: "warehouse-sessions-amsterdam-2025",
    title: "Warehouse Sessions",
    venue: "Warehouse Elementenstraat",
    city: "Amsterdam",
    country: "Netherlands",
    date: "2026-02-28",
    time: "22:00",
    artistIds: ["bart-skils", "enrico-sangiuliano"],
    ticketUrl: "#",
    description: "Deep techno sounds in Amsterdam's iconic warehouse",
    image: "/hero.png",
  },
  {
    id: "frequency-festival-london-2025",
    title: "Frequency Festival",
    venue: "Printworks",
    city: "London",
    country: "United Kingdom",
    date: "2025-04-20",
    time: "20:00",
    artistIds: ["alan-fitzpatrick", "metod-hristov"],
    ticketUrl: "#",
    description: "Multi-room techno experience at London's Printworks",
    image: "/hero.png",
  },
  {
    id: "techno-night-brussels-2025",
    title: "Techno Night Brussels",
    venue: "C12",
    city: "Brussels",
    country: "Belgium",
    date: "2025-05-10",
    time: "22:30",
    artistIds: ["amelie-lens", "adam-beyer"],
    ticketUrl: "#",
    description: "Belgian techno powerhouse night at C12",
    image: "/hero.png",
  },
  {
    id: "summer-open-air-barcelona-2025",
    title: "Summer Open Air",
    venue: "Parc del Fòrum",
    city: "Barcelona",
    country: "Spain",
    date: "2025-06-15",
    time: "18:00",
    artistIds: ["bart-skils", "alan-fitzpatrick", "metod-hristov"],
    ticketUrl: "#",
    description: "Outdoor techno festival by the Mediterranean",
    image: "/hero.png",
  },
  {
    id: "past-event-barcelona-2024",
    title: "Barcelona Underground",
    venue: "Razzmatazz",
    city: "Barcelona",
    country: "Spain",
    date: "2024-12-10",
    time: "23:30",
    artistIds: ["amelie-lens", "bart-skils"],
    ticketUrl: "#",
    description: "Epic night in Barcelona's legendary venue",
    image: "/hero.png",
  },
  {
    id: "past-event-rome-2024",
    title: "Eternal Techno",
    venue: "Spazio Novecento",
    city: "Rome",
    country: "Italy",
    date: "2024-11-22",
    time: "22:00",
    artistIds: ["enrico-sangiuliano"],
    ticketUrl: "#",
    description: "Hometown show featuring Enrico Sangiuliano",
    image: "/hero.png",
  },
  {
    id: "past-event-berlin-2024",
    title: "Berlin Calling",
    venue: "Tresor",
    city: "Berlin",
    country: "Germany",
    date: "2024-10-18",
    time: "23:00",
    artistIds: ["adam-beyer", "alan-fitzpatrick"],
    ticketUrl: "#",
    description: "Underground techno at Berlin's legendary Tresor",
    image: "/hero.png",
  },
];
