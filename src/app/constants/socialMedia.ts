export interface SocialMedia {
   id: string,
   label: string,
   icon: string,
   link: string
}

export const SOCIAL_MEDIA: SocialMedia[] = [
   {
      id: crypto.randomUUID(),
      label: "Linkedin",
      icon: "/svg/linkedin-icon.svg",
      link: "https://www.linkedin.com/in/sunartdev-ux/"
   },
   {
      id: crypto.randomUUID(),
      label: "GitHub",
      icon: "/svg/github-social-icon.svg",
      link: "https://github.com/ASunart"

   },
   {
      id: crypto.randomUUID(),
      label: "Behance",
      icon: "/svg/behance-icon.svg",
      link: "https://www.behance.net/alejandsolarte1"
   },
   
]