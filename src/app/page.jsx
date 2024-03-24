import Image from "next/image";
import { Hero } from "./components/Hero";
import { TopBar } from "./components/TopBar";
import { About } from "./components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
