import Image from "next/image";
import { Hero } from "./components/Hero";
import { TopBar } from "./components/TopBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <Hero />

    </>
  );
}
