"use client";
import { ShootingStars } from "../../components/ui/shooting-stars";
import { StarsBackground } from "../../components/ui/stars-background";
import HomeBtn from "./HomeBtn";
export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="h-240 md:h-screen bg-neutral-900 flex flex-col items-center justify-center relative w-full">
      <ShootingStars />
      <StarsBackground />
      <HomeBtn />
    </div>
  );
}
