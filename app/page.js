import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import Servicios from "@/components/Servicios";
import Proyectos from "@/components/Proyectos";
import Equipo from "@/components/Equipo";
import Suscripcion from "@/components/Suscripcion";
import Preguntas from "@/components/Preguntas";
import Footer from "@/components/Footer";
import { myFont } from "@/fontsPages/fonts";

export default function Home() {
  return (
    <div>
      {/* Main Blue Div */}
      <div className="xl:h-[550px] lg:h-[500px] h-[410px] rounded-b-[50px] bg-gradient-to-b from-[#0D0760] from-20% to-[#5746F4] to-100%">
        <NavBar />
        <HeroSection />
      </div>

      {/* Servicios */}
      <div>
        <Servicios />
      </div>

      {/* Nuestros Proyectos */}
      <div>
        <Proyectos />
      </div>

      {/* Quiénes Somos */}
      <div>
        <Equipo />
      </div>

      {/* Planes de Suscripción */}
      <div>
        <Suscripcion />
      </div>

      {/* Preguntas Frecuentes */}
      <div>
        <Preguntas />
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
