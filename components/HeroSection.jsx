"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

import Lottie from "lottie-react";
import animationData from "../public/assets/AnimationPhone";

function HeroSection() {
  return (
    <div className="lg:px-28 px-8 mt-12">
      {/* Brand Slogan & Hero Image */}
      <div className="flex flex-row space-x-4 sm:justify-between">
        {/* Brand Slogan */}
        <div className="font-lufga font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl align-middle h-auto">
          Creamos
          <br />
          nuevas
          <br />
          experiencias<span className="text-[#FFF45C]">.</span>
        </div>

        {/* Hero Image */}
        <div className="flex items-center max-w-[150px] max-h-[150px] sm:max-w-[200px] sm:max-h-[200px] md:max-w-[140px] md:max-h-[140px] lg:max-w-[160px] lg:max-h-[160px] xl:max-w-[240px] xl:max-h-[240px]">
          <Lottie animationData={animationData} />
        </div>
      </div>

      {/* Brand Descripton & CTA Buttons */}
      <div>
        {/* Description */}
        <div className="mt-3">
          <p className="font-grotesk text-white/60 text-sm max-w-[350px] xl:text-lg xl:max-w-[500px]">
            A través de un equipo experimentado, diseñamos y desarrollamos
            páginas web, apps y lo que te imagines.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row space-x-5 mt-12">
          <div>
            <Button className="rounded-[40px] text-[12px] text-[#F4FFF8] bg-transparent h-7 px-3 w-24 xl:h-10 xl:px-6 xl:w-32 xl:text-base border border-white font-grotesk">
              Servicios
            </Button>
          </div>
          <div>
            <Button className="rounded-[40px] text-[12px] text-[#0D0760] bg-[#F4FFF8] h-7 px-3 w-24 xl:h-10 xl:px-6 xl:w-32 xl:text-base hover:bg-[#F4FFF8]/80 font-grotesk">
              <Link
                href={`https://wa.me/51999936189?text=${encodeURIComponent(
                  "Hola!, vengo de magnetperu.com y quisiera más información sobre ."
                )}`}
              >
                Contáctanos
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
