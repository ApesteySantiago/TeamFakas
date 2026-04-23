"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Section2() {
  return (
    <section className="h-dvh bg-[url('/Fondo_Gym.jpg')] bg-center bg-[length:100%_100%] px-0 py-4 snap-start flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto w-full overflow-y-auto max-h-[calc(100dvh-2rem)]">

        {/* TITULOS */}
        <div className="text-center mb-2">
          <h1 className="[-webkit-text-stroke:1px_white] font-[Impact] text-red-600 text-[clamp(2rem,15vw,4rem)]">
            ENTRENADORES
          </h1>

          <h2 className="font-['Codec_Pro'] text-white tracking-[0px] min-[375px]:tracking-[1px] min-[425px]:tracking-[2px] -mt-2 text-sm">
            QUIENES ESTAN DETRAS DE TEAMFAKAS
          </h2>

          {/* Ocultar descripción en mobile muy chico */}
          <div className="hidden min-[375px]:flex justify-center font-['Codec_Pro'] text-white text-base p-1">
            <div className="w-[90%] md:w-[70%] p-2 bg-white/10 border border-white/20 rounded-xl shadow-md text-center">
              <p className="text-xs md:text-sm leading-relaxed">
                Somos un equipo profesional dedicado a brindarte herramientas y
                asesoría para alcanzar tus metas.
              </p>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

          {/* TARJETA 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-[90%] md:w-[85%] mx-auto h-[200px] min-[375px]:h-[240px] min-[425px]:h-[260px] rounded-xl overflow-hidden shadow-md flex items-end justify-end p-4 text-white border border-black"
          >
            <Image
              src="/faka1.jpg"
              alt="Facundo Ariel Cejas"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative z-10 flex flex-col items-end gap-0 text-end max-w-full">
              <h3 className="font-[Impact] text-red-600 text-xl min-[375px]:text-2xl [-webkit-text-stroke:0.5px_white]">
                FACUNDO ARIEL CEJAS
              </h3>
              <span className="font-['Codec_Pro'] text-white text-xs opacity-90 mb-2 max-w-[75%]">
                Entrenador Personal & Instructor en musculación
              </span>
              <p className="text-xs leading-relaxed">
                Certificación Internacional Mr. Olympia - Bodybuilding & Fitness Trainer.<br />
                Certificación Internacional High Fitness Trainer.<br />
                Estudiante de Licenciatura en Nutrición (UNTREF).<br />
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
            className="relative w-[90%] md:w-[85%] mx-auto h-[200px] min-[375px]:h-[240px] min-[425px]:h-[260px] rounded-xl overflow-hidden shadow-md flex flex-col justify-end p-4 text-white"
          >
            <Image
              src="/faka2.jpg"
              alt="Facundo Pedro Traba"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative z-10 flex flex-col items-start gap-0 text-start max-w-[95%]">
              <h3 className="font-[Impact] text-red-600 text-xl min-[375px]:text-2xl [-webkit-text-stroke:0.5px_white]">
                FACUNDO PEDRO TRABA
              </h3>
              <span className="font-['Codec_Pro'] text-white text-xs opacity-90 mb-2 max-w-[70%]">
                Entrenador & Counselor Psicológico Deportivo
              </span>
              <p className="text-xs leading-relaxed">
                Certificación Internacional Mr. Olympia - Fitness Trainer.<br />
                Counseling y acompañamiento emocional para deportistas.<br />
                Especialista en mentalidad, adherencia al plan y hábitos sostenibles.<br />
                Trabajo en superación personal, ansiedad de rendimiento y resiliencia.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}