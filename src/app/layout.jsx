import { Footer } from "./components/Footer";
import { TopBar } from "./components/TopBar";
import { Roboto } from 'next/font/google'
import "./globals.css";

export const metadata = {
  title: "Sunart",
  description: "Juan Alejandro Solarte Rodriguez (Sunart) Front-end developer & UX/UI Designer portfolio",
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})


export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <TopBar />
          <main className={`${roboto.className} flex flex-col gap-16 px-4 pb-4 lg:px-16 lg:gap-36 relative overflow-hidden`}>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </>
  );
}
