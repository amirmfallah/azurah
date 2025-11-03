export interface SocialLink {
  name: string;
  url: string;
}

export interface SiteConfig {
  siteName: string;
  isLive: boolean;
  socialLinks: SocialLink[];
}

export const siteConfig: SiteConfig = {
  siteName: "Azurah Frequency",
  isLive: import.meta.env.PUBLIC_IS_LIVE === "true",
  socialLinks: [
    {
      name: "Instagram",
      url: "https://instagram.com/azurahfrequency",
    },
    {
      name: "Soundcloud",
      url: "",
    },
    {
      name: "Youtube",
      url: "",
    },
    {
      name: "Spotify",
      url: "",
    },
    {
      name: "Beatport",
      url: "",
    },
  ],
};
