"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { myFont } from "@/fontsPages/fonts";
import { Button } from "@/components/ui/button";

function NavBar() {
  return (
    <nav className="flex justify-between items-center px-8 h-16">
      {/* Sheet Icon */}
      <Sheet>
        <SheetTrigger className="lg:hidden">
          <Image src="/icons/menuIcon.svg" width={20} height={20} />
        </SheetTrigger>
        <SheetContent
          className="sm:w-[250px] w-[200px] bg-gradient-to-b from-[#0D0760] from-20% to-[#5746F4] to-100%"
          side="left"
        >
          <SheetHeader className="text-left">
            <SheetTitle className="font-lufga font-extrabold text-[#FFFFFF]">
              magnet<span className="text-[#FFF45C]">.</span>
            </SheetTitle>
            <SheetDescription className="text-[#FFFFFF]/50 font-grotesk">
              Creando nuevas experiencias.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-10 flex flex-col space-y-2 text-left">
            <Link href="/nosotros">
              <p className="text-white hover:text-[#FFF45C] transition-colors duration-300 ease-in-out font-grotesk">
                Nosotros
              </p>
            </Link>
            <Link href="/servicios">
              <p className="text-white hover:text-[#FFF45C] transition-colors duration-300 ease-in-out font-grotesk">
                Servicios
              </p>
            </Link>
            <Link href="/ourwork">
              <p className="text-white hover:text-[#FFF45C] transition-colors duration-300 ease-in-out font-grotesk">
                Our Work
              </p>
            </Link>
            <Link href="/precios">
              <p className="text-white hover:text-[#FFF45C] transition-colors duration-300 ease-in-out font-grotesk">
                Precios
              </p>
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      {/* Brand Name */}
      <div className="font-lufga font-extrabold text-[#FFFFFF] lg:hidden">
        magnet<span className="text-[#FFF45C]">.</span>
      </div>

      <div className="hidden lg:flex lg:flex-row lg:items-center lg:space-x-2">
        <div>
          <Image src="/logos/magnetLogoBlanco.png" width={18} height={18} />
        </div>
        <div>
          <p className="font-lufga font-extrabold text-2xl text-[#FFFFFF] ">
            magnet<span className="text-[#FFF45C]">.</span>
          </p>
        </div>
      </div>

      {/* Routes */}
      <div className="hidden lg:flex flex-row space-x-10">
        <div>
          <Link href="/nosotros">
            <p className="text-white hover:text-[#FFF45C] transition-colors duration-300 ease-in-out font-grotesk">
              Nosotros
            </p>
          </Link>
        </div>
        <div>
          <Link href="/servicios">
            <p className="text-white hover:text-[#FFF45C] transition-colors duration-300 ease-in-out font-grotesk">
              Servicios
            </p>
          </Link>
        </div>
        <div>
          <Link href="/ourwork">
            <p className="text-white hover:text-[#FFF45C] transition-colors duration-300 ease-in-out font-grotesk">
              Our Work
            </p>
          </Link>
        </div>
        <div>
          <Link href="/precios">
            <p className="text-white hover:text-[#FFF45C] transition-colors duration-300 ease-in-out font-grotesk">
              Precios
            </p>
          </Link>
        </div>
      </div>

      {/* Contact Button */}
      <Button className="rounded-[40px] text-[10px] text-[#0D0760] bg-[#F4FFF8] h-8 px-3 md:hidden hover:bg-[#F4FFF8]/70">
        <Link
          href={`https://wa.me/51999936189?text=${encodeURIComponent(
            "Hola!, vengo de magnetperu.com y quisiera más información sobre ."
          )}`}
        >
          <Image src="/icons/whatsappIcon.png" width={18} height={18} />
        </Link>
      </Button>

      <div className="hidden md:block">
        <Button className="rounded-[40px] text-[12px] text-[#0D0760] bg-[#F4FFF8] h-9 px-3 hidden md:block xl:h-10 xl:px-3 xl:w-32 xl:text-base hover:bg-[#F4FFF8]/80 font-grotesk">
          <Link
            href={`https://wa.me/51999936189?text=${encodeURIComponent(
              "Hola!, vengo de magnetperu.com y quisiera más información sobre ."
            )}`}
          >
            Contáctanos
          </Link>
        </Button>
      </div>
    </nav>
  );
}

export default NavBar;
