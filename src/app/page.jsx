import { Behance01Icon, Contact01Icon, Github01Icon, Linkedin01Icon } from "hugeicons-react";
import Image from "next/image";

export default function Home() {
  const h2Style = `mb-3 text-2xl font-semibold flex items-center gap-2`
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          This website is under&nbsp;
          <code className="font-mono font-bold animate-pulse text-[#FF4900]">development</code>
        </p>
      </div>

      <div className="relative mt-10 lg:mt-0 flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative"
          src="/logo.svg"
          alt="Sunart Logo"
          width={420}
          height={420}
          priority
        />
      </div>

      <div className="mb-32 grid text-center mt-12 lg:mt-0 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://www.linkedin.com/in/sunartdev-ux"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={h2Style}>
            <Linkedin01Icon />
            Linkedin{" "}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-left`}>
            Here you can find my professional profile in detail, and my experience.</p>
        </a>

        <a
          href="https://www.behance.net/alejandsolarte1"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={h2Style}>
            <Behance01Icon />
            Behance{" "}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-left`}>
            Here you can find some of the projects I have done in my&nbsp;career
          </p>
        </a>

        <a
          href="https://github.com/ASunart"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={h2Style}>
            <Github01Icon />
            GitHub{" "}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-left`}>
            Here are some of the repositories I have worked on, together with their&nbsp;technologies
          </p>
        </a>

        <a
          href="mailto:sunart.devux@gmail.com"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={h2Style}>
            <Contact01Icon />
            Contact{" "}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance text-left`}>
            Feel free to contact me and let&apos;s talk about interesting&nbsp;topics.
          </p>
        </a>
      </div>
    </main>
  );
}
