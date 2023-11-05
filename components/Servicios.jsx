import React from "react";
import Image from "next/image";
import RouteTitle from "./RouteTitle";
import { serviciosDetalle } from "@/Services/servicios";
import { tools } from "@/Services/herramientas";
import { Button } from "./ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function Servicios() {
  return (
    <div className="px-8 mt-20 xl:mt-32">
      {/* Título y Descripción */}
      <RouteTitle
        title="¿Cómo podemos ayudarte?"
        description="Somos un equipo con amplia experiencia en diseño moderno y simple, orientado a generar mayor atracción hacia tu plataforma."
      />

      {/* Service Cards */}
      <div>
        <div className="flex flex-col space-y-10 mt-10 items-center xl:flex xl:flex-row xl:space-x-14 xl:space-y-0 xl:mt-16 xl:items-center xl:justify-center">
          {serviciosDetalle.map((servicio, index) => (
            <div
              key={servicio.title + index}
              className="bg-gradient-to-br from-blue-500 to-purple-400 p-6 rounded-xl shadow-md text-white font-grotesk max-w-[280px]"
            >
              <h2 className="text-2xl font-semibold mb-4">{servicio.title}</h2>
              <p className="text-sm">{servicio.description}</p>
              <div className="mt-8 flex justify-between">
                <Button className="rounded-[40px] text-[12px] text-[#F4FFF8] bg-transparent h-7 px-3 w-24 border border-white font-grotesk">
                  Ver más
                </Button>
                <Button className="rounded-[40px] text-[12px] text-[#0D0760] bg-[#F4FFF8] h-7 px-3 w-24 hover:bg-[#F4FFF8]/80 font-grotesk">
                  Comprar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Herramientas */}
      {/* <div className="mt-20 xl:mt-32">
        <RouteTitle
          title="Lo que usamos"
          description="Las mejores herramientas para proyectos de alto impacto y calidad, alineadas a tus objetivos."
        />

        <ScrollArea>
          <div className="mt-10 flex flex-row space-x-10 xl:justify-center">
            {tools.map((herramienta, index) => {
              return (
                <div
                  key={herramienta.nombre + index}
                  className="flex flex-col space-y-4 h-auto w-auto flex-shrink-0"
                >
                  <div className="text-sm text-center">
                    {herramienta.nombre}
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={herramienta.imagen}
                      width={herramienta.width}
                      height={herramienta.height}
                      alt={herramienta.nombre}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div> */}
    </div>
  );
}

export default Servicios;
