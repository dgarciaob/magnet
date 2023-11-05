import React from "react";
import RouteTitle from "./RouteTitle";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

function Preguntas() {
  return (
    <div className="px-8 mt-20 xl:mt-32">
      {/* Título y Descripción */}
      <RouteTitle
        title="Preguntas Frecuentes"
        description="La mejor forma de que trabajes con nosotros. Explora nuestro trabajo"
      />

      <div className="py-8 px-8 font-grotesk">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>¿Puedo cancelar el plan?</AccordionTrigger>
            <AccordionContent>
              Puedes cancelar, pausar o cambiar el plan cuando quieras. Te
              devolvemos el dinero.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>¿Qué herramientas usan?</AccordionTrigger>
            <AccordionContent>
              Figma, Adobe Illustrator, Adobe Photoshop, NextJS, React Native,
              Expo, Tailwind, PostgreSQL, MongoDB, entre otros.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Métodos de Pago</AccordionTrigger>
            <AccordionContent>
              Puedes pagar de la manera que quieras. Conoce más&nbsp;
              <Link
                href="/precios"
                className="hover:underline hover:underline-offset-2 hover:text-[#0D0760]"
              >
                aquí.
              </Link>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>¿Cuál es el costo?</AccordionTrigger>
            <AccordionContent>
              Depende del servicio y de la complejidad del proyecto. Conoce más
              acerca de nuestros precios por servicio&nbsp;
              <Link
                href="/precios"
                className="hover:underline hover:underline-offset-2 hover:text-[#0D0760]"
              >
                aquí.
              </Link>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>¿Cuál es el proceso?</AccordionTrigger>
            <AccordionContent>
              <strong>Suscripciones:</strong> al adquirir un plan,
              automáticamente entras en contacto con nuestro equipo de Diseño
              y/o Desarrollo para atender tus solicitudes y enviar los
              entregables según SLA correspondiente. <br />
              <Separator className="my-4" />
              <strong>Independientes:</strong> al adquirir un servicio,
              automáticamente entras en contacto con nuestro equipo de Diseño
              y/o Desarrollo para atender tus solicitudes, definir el costo.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Preguntas;
