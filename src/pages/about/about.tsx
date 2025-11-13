import { ShootingStarsAndStarsBackgroundDemo } from "../shared/aboutBackground";
import { motion } from "motion/react";

import mainPic from "../../../public/assets/main.jpg";
import "../../App.css";
export default function About() {
  return (
    <>
      <ShootingStarsAndStarsBackgroundDemo />
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute text-center md:text-left text-white top-33 translate-x-[-50%] left-[50%] z-10 my-container w-full md:w-auto p-4 md:p-0"
      >
        <h2 className="text-4xl md:text-6xl">About Me</h2>
        <div className="flex gap-7 mt-12 md:flex-row flex-col">
          <div>
            <img
              src={mainPic}
              alt=""
              className="rounded-full w-40 mx-auto md:mx-0 md:w-180"
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="mb-4 text-[1.3rem] font-semibold">
              👋 Hi, I'm Ali Elbhhery Front-End Developer
            </p>
            <p>
              🎯 I'm a passionate Frontend Developer focused on building
              interactive and responsive web experiences. Skilled in React,
              TypeScript, Tailwind CSS, and modern frontend patterns, I enjoy
              turning complex problems into elegant solutions. Currently
              exploring Next.js, performance optimization, and advanced
              animation techniques to enhance user interfaces. I pay great
              attention to detail, love experimenting with new tools and
              libraries, and continuously strive to improve both my code quality
              and the user experience. Always eager to collaborate, learn from
              the dev community, and contribute to meaningful projects.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
