import Image from "next/image";
import { Hero } from "./components/Hero";
import { TopBar } from "./components/TopBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <Image
            src="/points-orange.svg"
            alt="Points Vector"
            width={232}
            height={68}
            className="absolute top-24 -left-1/4"/>
      <Hero />
      <Image
            src="/points-blue.svg"
            alt="Points Vector"
            width={232}
            height={68}
            className="absolute bottom-16 -right-1/4"/>
    </>
  );
}
