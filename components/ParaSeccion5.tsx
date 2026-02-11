"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Section5() {
  return (
    <section
      id="section5"
      className="flex flex-col h-screen snap-start items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-col items-center justify-center w-full"
      >
        <h1 id="titulo5" className="text-center text-2xl">
          PLANES
        </h1>

        <h2 id="subtitulo5" className="pt-2 text-center">
          ELEGÍ TU MEJOR OPCIÓN
        </h2>

        {/* SWIPER */}
        <div className="mt-10 w-full flex justify-center">
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
            {/* BÁSICO */}
            <SwiperSlide className="w-[280px]">
              <div className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg text-center h-[460px] overflow-y-auto">
                <h3 className="titulo-cards">💪 BÁSICO</h3>
                <p className="text-start mt-3 text-sm">
                  Incluye:<br />
                  ✔ Guía de entrenamiento personalizado.<br />
                  ✔ Guía nutricional general.<br />
                  ✔ Lista de compras y porciones.<br />
                  ✔ 2 consultas por chat al mes.<br />
                  ✔ Ajustes mensuales.<br />
                </p>
              </div>
            </SwiperSlide>

            {/* STANDARD */}
            <SwiperSlide className="w-[280px]">
              <div className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg text-center h-[460px] overflow-y-auto">
                <h3 className="titulo-cards">🔥 STANDARD</h3>
                <p className="text-start mt-3 text-sm">
                  Incluye todo del Básico y además:<br />
                  ✔ Nutrición personalizada.<br />
                  ✔ Corrección técnica semanal.<br />
                  ✔ Ajustes quincenales.<br />
                  ✔ Soporte por chat 24/48 h.<br />
                  ✔ Material exclusivo.<br />
                  ✔ 2 consultorías de 50 min.<br />
                </p>
              </div>
            </SwiperSlide>

            {/* PREMIUM */}
            <SwiperSlide className="w-[280px]">
              <div className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg text-center h-[460px] overflow-y-auto">
                <h3 className="titulo-cards">🔱 PREMIUM</h3>
                <p className="text-start mt-3 text-sm">
                  Incluye todo del Standard y además:<br />
                  ✔ Seguimiento semanal 1 a 1.<br />
                  ✔ Correcciones ilimitadas.<br />
                  ✔ Videollamada mensual.<br />
                  ✔ Ajustes semanales.<br />
                  ✔ Programación tipo atleta.<br />
                  ✔ Material avanzado.<br />
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
}
