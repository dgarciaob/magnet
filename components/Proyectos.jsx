import React from "react";
import Image from "next/image";
import RouteTitle from "./RouteTitle";
import { misProyectos } from "@/Services/proyectos";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function Proyectos() {
  return (
    <div className="px-8 mt-20">
      {/* Título y Descripción */}
      <RouteTitle
        title="Nuestros proyectos"
        description="La mejor forma de que trabajes con nosotros. Explora nuestro trabajo"
      />

      {/* Scroll Horizontal de Proyectos */}
      <div className="mt-10">
        <ScrollArea>
          <div className="flex space-x-10">
            {misProyectos.map((proyecto, index) => {
              return (
                <div
                  key={proyecto.titulo + index}
                  className="flex flex-col h-auto w-auto flex-shrink-0"
                >
                  <p className="font-grotesk text-[12px] text-[#1f1f1f]/50">
                    {proyecto.titulo}
                  </p>
                  <Image
                    src={proyecto.imagen}
                    alt="proyect-image"
                    height={proyecto.height}
                    width={proyecto.width}
                    className="rounded-xl"
                  />
                </div>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}

export default Proyectos;
