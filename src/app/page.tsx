import { HeroScrollDemo } from "@/components/BannerRegister";
import { HeroHighlightDemo } from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
    <HeroHighlightDemo/> 
    <HeroScrollDemo/>
    </div>
  );
}
