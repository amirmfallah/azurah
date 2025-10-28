export interface SocialLink {
  name: string;
  url: string;
}

export interface SiteConfig {
  siteName: string;
  socialLinks: SocialLink[];
}

export const siteConfig: SiteConfig = {
  siteName: "Azurah Frequency",
  socialLinks: [
    {
      name: "Instagram",
      url: "https://instagram.com/azurahfrequency",
    },
    {
      name: "Soundcloud",
      url: "https://soundcloud.com/azurahfrequency",
    },
    {
      name: "Youtube",
      url: "https://youtube.com/@azurahfrequency",
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/user/azurahfrequency",
    },
  ],
};
