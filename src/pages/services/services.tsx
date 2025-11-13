"use client";
import UserData from "../../../data.json";
import { BackgroundRippleEffect } from "../../components/ui/background-ripple-effect";
import { useParams } from "react-router-dom";
import { motion } from "motion/react";
import "../../App.css";
import HomeBtn from "../shared/HomeBtn";
export function BackgroundRippleEffectDemo() {
  const { slug } = useParams();

  const Data = UserData.services.find((item) => item.slug === slug);

  return (
    <div>
      <HomeBtn />
      <BackgroundRippleEffect />
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 3, ease: "easeOut" }}
        className=" text-white overflow-hidden text-left relative z-40 my-container"
      >
        <h1 className="text-center md:text-5xl text-3xl font-bold mt-30">
          {Data ? Data.title : <h1>Can Not Find this Item</h1>}
        </h1>
        {Data ? (
          <>
            {" "}
            <ul className="md:mt-12 mt-6 md:text-lg md:pl-16 p-2 flex gap-8 opacity-80 flex-col">
              <li className="flex items-center gap-6">
                <span className="md:w-4 md:h-4 mt-2 bg-cyan-400 rounded-full shrink-0"></span>{" "}
                <span className="leading-relaxed">{Data.des1}</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="md:w-4 md:h-4 mt-2 bg-cyan-400 rounded-full shrink-0"></span>{" "}
                <span className="leading-relaxed">{Data.des2}</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="md:w-4 md:h-4 mt-2 bg-cyan-400 rounded-full shrink-0"></span>{" "}
                <span className="leading-relaxed">{Data.des3}</span>
              </li>
            </ul>
          </>
        ) : (
          <p className="text-white ">No data found for “{slug}”</p>
        )}
      </motion.div>
    </div>
  );
}
