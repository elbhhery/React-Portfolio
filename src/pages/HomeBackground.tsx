import { BackgroundLines } from "../components/ui/background-lines";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-linear-to-b from-neutral-500 to-white  text-4xl md:text-6xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight leading-20">
        <span className="uppercase">Ali Elbhhery</span>
        <br />
        Front-End Developer.
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-400 text-center">
        Front-End Developer Specialized in React, Next.js, and modern UI
        frameworks. Creating fast, scalable, and beautiful web solutions.
      </p>
    </BackgroundLines>
  );
}
