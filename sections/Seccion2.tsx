"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Section2() {
  return (
    <section
      id="section2"
      className="px-0 py-6 bg-gray-100 min-h-screen snap-start flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* TITULOS */}
        <div className="text-center mb-2">
          <h1
            id="titulo2"
            className="[-webkit-text-stroke:1px_white]"
          >
            ENTRENADORES
          </h1>

          <h2 id="subtitulo2">
            QUIENES ESTAN DETRAS DE TEAMFAKAS
          </h2>

          <div
            id="descripcion"
            className="flex justify-center"
          >
            <div
              className="w-[90%] md:w-[70%] p-3 
               bg-white/10 md:backdrop-blur-sm 
               border border-white/20 
               rounded-xl shadow-md text-center"
            >
              <p className="text-sm md:text-base leading-relaxed">
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
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-[90%] md:w-[85%] mx-auto h-70 rounded-xl overflow-hidden shadow-md flex items-end justify-end p-4 text-white"
          >
            <Image
              src="/faka1.jpg"
              alt="Facundo Ariel Cejas"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 40vw"
            />

            <div className="absolute inset-0 bg-black/0" />

            <div className="relative z-10 text-end">
              <p id="nombres" className="text-2xl [-webkit-text-stroke:0.3px_white]">
                FACUNDO ARIEL CEJAS
              </p>

              <p id="pieDeNombre" className="text-xs mb-3">
                Entrenador Personal & Instructor en musculación
              </p>

              <p className="text-xs">Certificación Internacional Mr. Olympia - Bodybuilding & Fitness Trainer. <br />
              Certificación Internacional High Fitness Trainer.<br />
              Estudiante de Licenciatura en Nutrición (UNTREF).<br />
              Especialista en entrenamiento de alta intensidad.</p>
            </div>
          </motion.div>

          {/* TARJETA 2 */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-[90%] md:w-[85%] mx-auto h-70 rounded-xl overflow-hidden shadow-md flex flex-col justify-center p-4 text-white"
          >
            <Image
              src="/faka2.jpg"
              alt="Facundo Pedro Traba"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 40vw"
            />

            <div className="absolute inset-0 bg-black/0" />

            <div className="relative z-10 ">
              <p id="nombres" className="text-2xl [-webkit-text-stroke:0.3px_white]">
                FACUNDO PEDRO TRABA
              </p>

              <p id="pieDeNombre" className="text-xs mb-3">
                Entrenador & Counselor Psicológico Deportivo
              </p>

              <p className="text-xs">Certificación Internacional Mr. Olympia - Fitness Trainer. <br />
              Formado en Counseling y acompañamiento emocional para deportistas. <br />
              Especialista en mentalidad, adherencia al plan y hábitos sostenibles. <br />
              Trabajo con procesos de superación personal, ansiedad de rendimiento y resiliencia deportiva.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}