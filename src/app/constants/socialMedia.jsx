import { BehanceTag, GithubCircle, Linkedin } from "iconoir-react";

export const SOCIAL_MEDIA = [
   {
      id: 1,
      label: "Linkedin",
      icon: <IconComponent>
         <Linkedin />
      </IconComponent>
      ,

      link: "https://www.linkedin.com/in/sunartdev-ux/"
   },
   {
      id: 2,
      label: "GitHub",
      icon: <IconComponent>
         <GithubCircle />
      </IconComponent>,
      link: "https://github.com/ASunart"

   },
   {
      id: 3,
      label: "Behance",
      icon: <IconComponent>
         <BehanceTag />
      </IconComponent>,
      link: "https://www.behance.net/alejandsolarte1"
   },
]

function IconComponent({ children }) {
   return children
}