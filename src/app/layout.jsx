import { TopBar } from "./components/TopBar";
import "./globals.css";

export const metadata = {
  title: "Sunart",
  description: "Juan Alejandro Solarte Rodriguez (Sunart) Front-end developer & UX/UI Designer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <main className="flex flex-col gap-16 px-4 lg:px-16">
          {children}
        </main>
      </body>
    </html>
  );
}
