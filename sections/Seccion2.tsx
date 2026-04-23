"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Section2() {
  return (
    <section className="h-dvh bg-[url('/Fondo_Gym.jpg')] bg-center bg-[length:100%_100%] px-0 py-0 snap-start flex items-start overflow-hidden">
      <div className="max-w-6xl mx-auto w-full overflow-y-auto max-h-[calc(100dvh-2rem)] pt-6">

        {/* TITULOS */}
        <div className="text-center mb-6">
          <h1 className="[-webkit-text-stroke:1px_white] font-[Impact] text-red-600 text-[clamp(2rem,15vw,4rem)]">
            ENTRENADORES
          </h1>
          <h2 className="font-['Codec_Pro'] text-white tracking-[1px] -mt-2 text-sm">
            QUIENES ESTAN DETRAS DE TEAMFAKAS
          </h2>
          {/* LÍNEA SEPARADORA */}
          <div className="h-[15px]" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

          {/* TARJETA 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-[90%] md:w-[85%] mx-auto h-[190px] min-[375px]:h-[215px] min-[425px]:h-[250px] rounded-xl overflow-hidden shadow-md border border-black"
          >
            <Image
              src="/faka1.jpg"
              alt="Facundo Ariel Cejas"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 40vw"
            />

            {/* ZONA SUPERIOR — Nombre + Rol */}
            <div className="absolute top-0 right-0 z-10 p-3 flex flex-col items-end text-end w-full">
              <h3 className="font-[Impact] text-red-600 text-xl min-[375px]:text-2xl [-webkit-text-stroke:0px_white]">
                FACUNDO ARIEL CEJAS
              </h3>
              <span className="font-['Codec_Pro'] text-white text-[10px] opacity-90">
                Entrenador & Instructor en musculación
              </span>
            </div>

            {/* ZONA INFERIOR — Certificaciones */}
            <div className="absolute bottom-0 right-0 z-10 p-3 text-end w-full">
              <p className="text-[10px] leading-snug text-white/90">
                Cert. Internacional Mr. Olympia - Bodybuilding & Fitness Trainer.<br />
                Cert. Internacional High Fitness Trainer.<br />
                Estudiante de Lic. en Nutrición (UNTREF).<br />
                Especialista en entrenamiento de alta intensidad.
              </p>
            </div>
          </motion.div>

          {/* TARJETA 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-[90%] md:w-[85%] mx-auto h-[190px] min-[375px]:h-[215px] min-[425px]:h-[235px] rounded-xl overflow-hidden shadow-md"
          >
            <Image
              src="/faka2.jpg"
              alt="Facundo Pedro Traba"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 40vw"
            />

            {/* ZONA SUPERIOR — Nombre + Rol */}
            <div className="absolute top-0 left-0 z-10 p-3 flex flex-col items-start text-start w-full">
              <h3 className="font-[Impact] text-red-600 text-xl min-[375px]:text-2xl [-webkit-text-stroke:0px_white]">
                FACUNDO PEDRO TRABA
              </h3>
              <span className="font-['Codec_Pro'] text-white text-[10px] opacity-90">
                Entrenador & Counselor Psicológico Deportivo
              </span>
            </div>

            {/* ZONA INFERIOR — Certificaciones */}
            <div className="absolute bottom-0 left-0 z-10 p-3 text-start w-full">
              <p className="text-[10px] leading-snug text-white/90">
                Cert. Internacional Mr. Olympia - Fitness Trainer.<br />
                Counseling y acompañamiento emocional para deportistas.<br />
                Especialista en mentalidad, adherencia y hábitos sostenibles.<br />
                Trabajo en superación personal y resiliencia deportiva.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}