"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function PlanCard({ title, image, features, price }: {
  title: string;
  image: string;
  features: string[];
  price: string;
}) {
  return (

    <div
      className="p-5 border border-white/20 rounded-xl shadow-lg h-[620px] flex flex-col"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3 className="titulo-cards mb-5 text-center [-webkit-text-stroke:1px_white]">
        {title}
      </h3>

      <div className="mt-auto">
        <ul className="subtitulo-cards text-sm text-white space-y-0">
          {features.map((item, index) => (
            <li key={index}>✔ {item}</li>
          ))}
        </ul>
      </div>

      {/* Zona inferior fija */}
      <div className="mb-5 mt-5 text-center">
        <button className="bg-white/20 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
          Elegir Plan
        </button>
      </div>
    </div>
  );
}

export default function Section5() {
  return (
    <section className="h-screen snap-start">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="grid grid-rows-[auto_1fr] h-full w-full"
      >
        {/* Zona superior: títulos */}
        <div className="flex flex-col items-center justify-center pt-10">
          <h1
            id="titulo5"
            className="text-center text-2xl [-webkit-text-stroke:1px_white]"
          >
            PLANES
          </h1>

          <h2 id="subtitulo5" className="pt-2 text-center">
            ELEGÍ TU MEJOR OPCIÓN
          </h2>
        </div>

        {/* Zona inferior: tarjetas */}
        <div className="w-full flex items-center justify-center">
          <div className="w-full flex justify-center">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 40,
                stretch: 0,
                depth: 120,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Pagination]}
              className="w-[90vw] max-w-4xl"
            >
              <SwiperSlide className="w-[280px]">
                <PlanCard
                  title="BRONZE"
                  image="/bronce.png"
                  price="$20.000 / mes"
                  features={[
                    "Guía de entrenamiento personalizado",
                    "Guía nutricional general",
                    "Lista de compras y porciones",
                    "2 consultas por chat al mes",
                    "Ajustes mensuales",
                  ]}
                />
              </SwiperSlide>

              <SwiperSlide className="w-[280px]">
                <PlanCard
                  title="SILVER"
                  image="/plata.png"
                  price="$35.000 / mes"
                  features={[
                    "Incluye todo del Básico",
                    "Nutrición personalizada",
                    "Corrección técnica semanal",
                    "Ajustes quincenales",
                    "Soporte 24/48h",
                    "2 consultorías de 50 min",
                  ]}
                />
              </SwiperSlide>

              <SwiperSlide className="w-[280px]">
                <PlanCard
                  title="GOLD"
                  image="/oro.png"
                  price="$50.000 / mes"
                  features={[
                    "Incluye todo del Standard",
                    "Seguimiento semanal 1 a 1",
                    "Correcciones ilimitadas",
                    "Videollamada mensual",
                    "Programación tipo atleta",
                    "Material avanzado",
                  ]}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
