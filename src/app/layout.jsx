import { TopBar } from "./components/TopBar";
import "./globals.css";

export const metadata = {
  title: "Sunart",
  description: "Sunart Front-end developer & UX/UI Designer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
