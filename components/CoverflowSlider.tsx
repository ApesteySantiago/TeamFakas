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
        <h1 className="font-[Impact] text-red-600 text-4xl sm:text-5xl md:text-6xl text-center [-webkit-text-stroke:1px_white]">
          QUE TE OFRECEMOS
        </h1>

        <h2 className="font-[Codec Pro] text-white tracking-[7px] -mt-4 text-sm sm:text-base md:text-lg text-center">
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
            <div className="p-4 border border-white/20 rounded-xl shadow-lg text-center h-[570px] flex flex-col justify-between "
              style={{
                backgroundImage: "url('/Perfil_derecho.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <h3 className="font-[Impact] text-red-600 text-4xl sm:text-5xl md:text-6xl titulo-cards [-webkit-text-stroke:1px_white]">ENTRENAMIENTO</h3>
              <p className="font-[Codec Pro] text-white text-base text-start p-2 mb-10 ml-3">
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
            <div className="p-6 border border-white/20 rounded-xl shadow-lg text-center h-[570px] flex flex-col justify-between"
              style={{
                backgroundImage: "url('/acercade2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <h3 className="titulo-cards [-webkit-text-stroke:1px_white]">NUTRICIÓN</h3>
              <p className="font-[Codec Pro] tracking-[2px] text-white -mt-4 bg-black/50 rounded-xl text-start text-base mb-10 ml-5">
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
            <div className="p-6 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg text-center h-[570px] flex flex-col justify-between"
              style={{
                backgroundImage: "url('/consuler2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <h3 className="titulo-cards [-webkit-text-stroke:1px_white]">
                COACHING 1 A 1
              </h3>
              <p className="font-[Codec Pro] tracking-[2px] text-white -mt-4 text-start text-base mb-10 ml-5">
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
    </motion.div >
  );
}
