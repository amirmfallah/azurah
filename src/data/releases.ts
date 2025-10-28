export interface Release {
  id: string;
  title: string;
  artistIds: string[]; // Array of artist IDs for many-to-many relationship
  image: string;
  releaseDate: string;
  catalogNumber: string;
  description?: string;
  tracks?: string[];
  spotifyUrl?: string;
  soundcloudUrl?: string;
}

export const releases: Release[] = [
  {
    id: "unknown-artist-dizzy",
    title: "Dizzy",
    artistIds: ["adam-beyer", "amelie-lens"],
    image: "/hero.png",
    releaseDate: "2025-01-15",
    catalogNumber: "AZRF001",
    description: "A hypnotic journey through deep techno soundscapes",
    tracks: ["Dizzy (Original Mix)", "Dizzy (Extended Mix)"],
    spotifyUrl: "#",
    soundcloudUrl: "#",
  },
  {
    id: "bart-skils-sakura",
    title: "Sakura",
    artistIds: ["bart-skils"],
    image: "/hero.png",
    releaseDate: "2025-01-10",
    catalogNumber: "AZRF002",
    description: "Ethereal melodies meet driving rhythms",
    tracks: ["Sakura (Original Mix)", "Sakura (Dub Mix)"],
    spotifyUrl: "#",
    soundcloudUrl: "#",
  },
  {
    id: "lift-me-up",
    title: "Lift Me Up",
    artistIds: ["enrico-sangiuliano", "alan-fitzpatrick"],
    image: "/hero.png",
    releaseDate: "2025-01-05",
    catalogNumber: "AZRF003",
    description: "Uplifting techno energy for the dancefloor",
    tracks: ["Lift Me Up (Original Mix)", "Lift Me Up (Peak Time Mix)"],
    spotifyUrl: "#",
    soundcloudUrl: "#",
  },
  {
    id: "build-to-destroy",
    title: "Build to Destroy",
    artistIds: ["metod-hristov"],
    image: "/hero.png",
    releaseDate: "2024-12-20",
    catalogNumber: "AZRF004",
    description: "Raw power and precision collide",
    tracks: ["Build to Destroy (Original Mix)", "Build to Destroy (Tool)"],
    spotifyUrl: "#",
    soundcloudUrl: "#",
  },
  {
    id: "always",
    title: "Always",
    artistIds: ["adam-beyer"],
    image: "/hero.png",
    releaseDate: "2024-12-15",
    catalogNumber: "AZRF005",
    description: "Timeless techno for the ages",
    tracks: ["Always (Original Mix)", "Always (Extended Mix)"],
    spotifyUrl: "#",
    soundcloudUrl: "#",
  },
  {
    id: "midnight-hour",
    title: "Midnight Hour",
    artistIds: ["amelie-lens", "bart-skils"],
    image: "/hero.png",
    releaseDate: "2024-12-10",
    catalogNumber: "AZRF006",
    description: "Dark, driving collaboration between two techno powerhouses",
    tracks: ["Midnight Hour (Original Mix)", "Midnight Hour (Extended)"],
    spotifyUrl: "#",
    soundcloudUrl: "#",
  },
];
