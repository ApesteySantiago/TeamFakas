"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Section3() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{
        duration: 3,
        ease: "easeOut",
      }}
      className="grid h-full w-full grid-rows-[auto_1fr] overflow-visible"
    >
      {/* Bloque superior */}
      <div className="flex flex-col items-center pt-10 gap-2">
        <h1 id="titulo4" className="text-2xl">
          QUE TE OFRECEMOS
        </h1>

        <h2 id="subtitulo4" className="text-center">
          QUEREMOS INCULCARTE EL ARTE DEL TREINO
        </h2>
      </div>

      {/* Zona del slider centrada */}
      <div className="flex items-center justify-center overflow-visible">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 60,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="w-[90vw] max-w-4xl py-10 overflow-visible"
        >
          {/* ENTRENAMIENTO */}
          <SwiperSlide className="w-[240px]">
            <div className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg text-center h-[420px] flex flex-col justify-start">
              <h3 className="titulo-cards">📌 ENTRENAMIENTO</h3>
              <p className="text-start mt-3 text-sm">
                • Planes adaptados a tu nivel y objetivo<br />
                • Programas de alta intensidad<br />
                • Corrección técnica y biomecánica aplicada<br />
                • Periodización inteligente para progreso continuo.<br />
                • Análisis de ejecución por video<br />
              </p>
            </div>
          </SwiperSlide>

          {/* NUTRICIÓN */}
          <SwiperSlide className="w-[240px]">
            <div className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg text-center h-[420px] flex flex-col justify-start">
              <h3 className="titulo-cards">📌 NUTRICIÓN</h3>
              <p className="text-start mt-3 text-sm">
                • Guía alimentaria personalizada<br />
                • Guía de macronutrientes y micronutrientes<br />
                • Estrategias para recomposición corporal<br />
                • Optimización del rendimiento<br />
                • Suplementación basada en tus necesidades<br />
              </p>
            </div>
          </SwiperSlide>

          {/* MINDSET */}
          <SwiperSlide className="w-[240px]">
            <div className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg text-center h-[420px] flex flex-col justify-start">
              <h3 className="titulo-cards">
                📌 MINDSET & TRANSFORMACIÓN
              </h3>
              <p className="text-start mt-3 text-sm">
                • Manejo de emociones y estrés<br />
                • Mentalidad disciplinada y orientada a objetivos<br />
                • Hábitos sostenibles a largo plazo<br />
                • Acompañamiento motivacional<br />
                • Trabajo en ansiedad y autoboicot<br />
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  );
}
