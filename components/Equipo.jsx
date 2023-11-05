"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import RouteTitle from "./RouteTitle";
import { equipo } from "@/Services/equipo";

function Equipo() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        imagenSeleccionada &&
        !containerRef.current.contains(event.target)
      ) {
        setImagenSeleccionada(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [imagenSeleccionada]);

  function handleImageSelection(nombre) {
    if (imagenSeleccionada === nombre) {
      setImagenSeleccionada(null);
    } else {
      setImagenSeleccionada(nombre);
    }
  }

  return (
    <div className="px-8 mt-20 xl:mt-32">
      {/* Título y Descripción */}
      <RouteTitle
        title="¿Quiénes somos?"
        description="Conoce quiénes están detras de toda la magia"
      />

      {/* Miembros del equipo */}
      <div className="flex flex-col space-y-10 mt-10 items-center xl:flex xl:flex-row xl:space-x-14 xl:space-y-0 xl:mt-16 xl:items-center xl:justify-center">
        {equipo.map((integrante, index) => {
          return (
            <div
              key={integrante.nombre + index}
              className=" flex flex-col"
              ref={containerRef}
            >
              <div className="relative">
                <Image
                  src={integrante.imagen}
                  width={integrante.width}
                  height={integrante.height}
                  alt="foto del integrante"
                  className="rounded-lg cursor-pointer"
                  onClick={() => handleImageSelection(integrante.nombre)}
                />
                {imagenSeleccionada === integrante.nombre && (
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#1f1f1f] bg-opacity-50 rounded-lg">
                    <p className="text-white p-8">{integrante.descripcion}</p>
                  </div>
                )}
              </div>

              <div className="flex flex-row font-grotesk text-sm mt-2 xl:text-base">
                <p>{integrante.nombre}</p>
                <span className="text-[#1F1F1F]/50">&nbsp;&#183;&nbsp;</span>
                <p className="text-[#1F1F1F]/50">{integrante.cargo}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Equipo;
