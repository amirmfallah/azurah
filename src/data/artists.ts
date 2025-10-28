export interface Artist {
  id: string;
  name: string;
  genres: string[];
  image: string;
  bio?: string;
  country?: string;
  spotifyUrl?: string;
  soundcloudUrl?: string;
  instagramUrl?: string;
}

export const artists: Artist[] = [
  {
    id: "adam-beyer",
    name: "Adam Beyer",
    genres: ["Techno", "Peak Time"],
    image: "/hero.png",
    bio: `<p>Pioneer of Swedish techno and founder of Drumcode Records, Adam Beyer has been at the forefront of the global techno scene for over two decades. His journey began in the underground clubs of Stockholm in the early 1990s, where he developed his signature sound—powerful, driving, and uncompromisingly focused on the dancefloor.</p>

<p>As a DJ, Beyer is known for his ability to read a crowd and deliver sets that build tension and release energy with surgical precision. His productions have become anthems in clubs worldwide, with tracks like "Your Mind" and "Remainings III" considered classics of the genre.</p>

<p>Through Drumcode Records, Beyer has nurtured a global community of techno artists and helped shape the sound of modern techno. His radio show, Drumcode Radio, reaches millions of listeners weekly, showcasing both established names and emerging talent in the scene.</p>`,
    country: "Sweden",
    spotifyUrl: "#",
    soundcloudUrl: "#",
    instagramUrl: "#",
  },
  {
    id: "bart-skils",
    name: "Bart Skils",
    genres: ["Techno", "House"],
    image: "/hero.png",
    bio: `<p>Dutch techno maestro Bart Skils has built his reputation on dynamic sets and powerful productions that seamlessly blend driving rhythms with melodic elements. His approach to techno is both cerebral and visceral, creating experiences that engage both mind and body.</p>

<p>Since his breakthrough in the mid-2000s, Skils has become a fixture at major festivals and clubs worldwide. His productions on labels like Drumcode and his own Voltt imprint showcase his versatility and technical skill, ranging from peak-time bangers to more introspective, atmospheric cuts.</p>

<p>What sets Skils apart is his musicality—a quality that shines through in both his productions and his DJ sets. Whether he's playing at a massive festival or an intimate club, his ability to craft a narrative through music remains constant.</p>`,
    country: "Netherlands",
    spotifyUrl: "#",
    soundcloudUrl: "#",
    instagramUrl: "#",
  },
  {
    id: "metod-hristov",
    name: "Metod Hristov",
    genres: ["Techno", "Tech House"],
    image: "/hero.png",
    bio: `<p>Bulgarian producer Metod Hristov has carved out a distinctive niche in the techno landscape with his raw, energetic sound. His productions are characterized by precision engineering and an intuitive understanding of what works on the dancefloor.</p>

<p>Starting his career in the vibrant Sofia underground scene, Hristov quickly gained attention for his technical prowess and innovative approach to production. His tracks have found homes on respected labels worldwide, and his collaborations with other artists have consistently pushed boundaries.</p>

<p>Known for his relentless work ethic and constant evolution, Hristov continues to explore new sonic territories while maintaining the driving energy that first put him on the map.</p>`,
    country: "Bulgaria",
    spotifyUrl: "#",
    soundcloudUrl: "#",
    instagramUrl: "#",
  },
  {
    id: "alan-fitzpatrick",
    name: "Alan Fitzpatrick",
    genres: ["Techno", "Peak Time"],
    image: "/hero.png",
    bio: `<p>UK techno powerhouse Alan Fitzpatrick delivers relentless energy and emotion through his signature hard-hitting sound. His rise through the ranks of techno has been marked by a series of powerful releases and unforgettable DJ performances.</p>

<p>Fitzpatrick's productions are immediately recognizable—tough, driving, but always musical. Tracks like "We Do What We Want" and "Skeksis" have become staples in techno DJ sets worldwide, while his more recent work shows an artist unafraid to experiment and evolve.</p>

<p>Beyond his solo work, Fitzpatrick is known for his collaborative spirit and his role in fostering new talent. His performances at venues like Berghain and festivals across Europe have cemented his status as one of techno's most reliable forces.</p>`,
    country: "United Kingdom",
    spotifyUrl: "#",
    soundcloudUrl: "#",
    instagramUrl: "#",
  },
  {
    id: "enrico-sangiuliano",
    name: "Enrico Sangiuliano",
    genres: ["Techno", "Melodic Techno"],
    image: "/hero.png",
    bio: `<p>Italian producer Enrico Sangiuliano crafts intricate soundscapes that merge technical prowess with emotional depth. His approach to techno is uniquely holistic, treating each track as a complete sonic experience rather than just a functional tool.</p>

<p>Sangiuliano's breakthrough came with releases on Drumcode, where his distinctive sound—characterized by complex rhythmic structures and carefully crafted atmospheres—quickly caught attention. His album "Biomorph" showcased his ability to work at both the micro and macro level, creating tracks that work on the dancefloor while rewarding close listening.</p>

<p>As a live performer, Sangiuliano brings his studio expertise to the booth, often incorporating live elements and improvisation into his sets. His performances at major festivals have earned him a devoted following and recognition as one of techno's most innovative voices.</p>`,
    country: "Italy",
    spotifyUrl: "#",
    soundcloudUrl: "#",
    instagramUrl: "#",
  },
  {
    id: "amelie-lens",
    name: "Amelie Lens",
    genres: ["Techno", "Industrial"],
    image: "/hero.png",
    bio: `<p>Belgian DJ and producer Amelie Lens has become one of techno's most compelling forces through her intense, hypnotic sets and unwavering dedication to underground techno. Her rapid ascent has been fueled by an authentic passion for the music and an instinctive understanding of dancefloor dynamics.</p>

<p>Lens discovered techno relatively late but made up for lost time with fierce determination. Within a few years, she went from local resident to headlining major festivals worldwide. Her productions on her own LENSKE imprint and other respected labels reflect her DJ aesthetic—dark, driving, and uncompromising.</p>

<p>What sets Lens apart is her complete commitment to the underground ethos. Despite her mainstream success, she remains deeply connected to techno's roots, using her platform to champion emerging artists and maintain the culture's integrity. Her marathon sets at clubs like Berghain have become legendary for their intensity and focus.</p>`,
    country: "Belgium",
    spotifyUrl: "#",
    soundcloudUrl: "#",
    instagramUrl: "#",
  },
];
