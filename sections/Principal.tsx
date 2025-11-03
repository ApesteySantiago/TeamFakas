import { motion, useScroll } from "motion/react";

export default function Principal() {

  return (
    <section id="principal" className="">
      <motion.div
        initial={{ opacity: 0, x: -100 }}   // 100% opacidad, fuera de la izquierda
        animate={{ opacity: 1, x: 0 }}      // 0% opacidad, llega al centro
        transition={{ duration: 1.5, ease: "easeOut" }} // tiempo y suavizado
        className="flex flex-col rounded-lg items-center justify-center"
      >
        <h1 id="titulo" className="flex justify-center ml-6">TEAM FAKAS</h1>
        <h2 id="subtitulo" className="flex justify-center ml-10">PERSONAL TRAINERS</h2>
        <h3 id="lista" className="flex justify-center ml-6">
          - Planes Personalizados - Nutrición - Seguimiento - Coaching Psicologico -
        </h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-col items-center justify-center mt-20"
      >
        <div className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg text-center w-fit max-w-[90%] mx-auto">
          <h2
            id="frase"
            className="text-2xl md:text-4xl [text-shadow:_2px_2px_8px_rgba(0,0,0,0.8)]"
          >
            ¿ESTÁS LISTO/A PARA TU MEJOR VERSIÓN?
          </h2>
        </div>
      </motion.div>


    </section>
  );
}
