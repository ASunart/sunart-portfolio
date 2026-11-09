export interface SocialMedia {
  id: "linkedin" | "github" | "behance";
  label: string;
  link: string;
}

export const SOCIAL_MEDIA: SocialMedia[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/jasolarter",
  },
  {
    id: "github",
    label: "GitHub",
    link: "https://github.com/ASunart",
  },
  {
    id: "behance",
    label: "Behance",
    link: "https://www.behance.net/alejandsolarte1",
  },
];
