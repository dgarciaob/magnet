"use client";

import React from "react";
import { useState } from "react";
import RouteTitle from "./RouteTitle";

function PricingTab(props) {
  return (
    <div className={`font-grotesk h-full ${props.popular ? "dark" : ""}`}>
      <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
        {props.popular && (
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">
              Recomendado
            </div>
          </div>
        )}
        <div className="mb-5">
          <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">
            {props.planName}
          </div>
          <div className="inline-flex items-baseline mb-2">
            <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">
              $
            </span>
            <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl">
              {props.yearly ? props.price.yearly : props.price.monthly}
            </span>
            <span className="text-slate-500 font-medium">/mes</span>
          </div>
          <div className="text-sm text-slate-500 mb-5">
            {props.planDescription}
          </div>
          <a
            className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-[#D68FD6] px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-[#E767E7] focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
            href="#0"
          >
            Adquirir Plan
          </a>
        </div>
        <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">
          Incluye:
        </div>
        <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
          {props.features.map((feature, index) => {
            return (
              <li key={index} className="flex items-center">
                <svg
                  className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function Suscripcion() {
  const [yearly, setYearly] = useState(true);

  return (
    <div className="px-8 mt-20">
      {/* Título y Descripción */}
      <RouteTitle
        title="Planes de Suscripción"
        description="¿Quieres diseños y desarrollo ilimitados? Tenemos planes para ti. Pausa o cancela cuándo quieras."
      />

      <div className="mt-10 font-grotesk">
        {/* Pricing toggle */}
        <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
          <div className="relative flex w-full p-1 bg-white dark:bg-slate-900 rounded-full">
            <span
              className="absolute inset-0 m-1 pointer-events-none"
              aria-hidden="true"
            >
              <span
                className={`absolute inset-0 w-1/2 bg-[#D68FD6] rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${
                  yearly ? "translate-x-0" : "translate-x-full"
                }`}
              ></span>
            </span>
            <button
              className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
                yearly ? "text-white" : "text-slate-500 dark:text-slate-400"
              }`}
              onClick={() => setYearly(true)}
            >
              Anual
              <span
                className={`${
                  yearly ? "text-white" : "text-slate-400 dark:text-slate-500"
                }`}
              >
                &nbsp;-&nbsp;20%
              </span>
            </button>
            <button
              className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
                yearly ? "text-slate-500 dark:text-slate-400" : "text-white"
              }`}
              onClick={() => setYearly(false)}
            >
              Mensual
            </button>
          </div>
        </div>

        <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 items-start lg:max-w-none">
          {/* Pricing tab 1 */}
          <PricingTab
            yearly={yearly}
            planName="Básico"
            price={{ yearly: 960, monthly: 1200 }}
            planDescription="Comencemos de a pocos. Ideal para early start-ups"
            features={[
              "3 diseños/desarrollos de página Web/App",
              "6 Revisiones de diseño/desarrollo",
              "Soporte 24/7",
              "SLA 5-6 días",
              "Hosting 6 meses",
            ]}
          />

          {/* Pricing tab 2 */}
          <PricingTab
            yearly={yearly}
            popular={true}
            planName="Estándar"
            price={{ yearly: 1600, monthly: 2000 }}
            planDescription="Todo lo que incluye el Plan Básico y más. Publica entre 1 - 3 habitaciones."
            features={[
              "6 diseños/desarrollos de página Web/App",
              "12 Revisiones de diseño/desarrollo",
              "Soporte 24/7",
              "SLA 5-6 días",
              "Hosting 1 año",
            ]}
          />

          {/* Pricing tab 3 */}
          <PricingTab
            yearly={yearly}
            planName="Premium"
            price={{ yearly: 2400, monthly: 3000 }}
            planDescription="El más completo. Diseños, Desarrollo, Mantenimiento y más ilimitados."
            features={[
              "Diseños Ilimitados de Web/App",
              "Revisiones de diseño ilimitadas",
              "Mantenimiento Web Ilimitado",
              "Soporte 24/7",
              "SLA 3-4 días",
              "Hosting ilimitado",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Suscripcion;
