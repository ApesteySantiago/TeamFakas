import { motion, useScroll } from "motion/react";

export default function Principal() {

  return (
    <section id="principal" className="">
      <motion.div
      initial={{ opacity: 0, x: -100 }}   // 100% opacidad, fuera de la izquierda
      animate={{ opacity: 1, x: 0 }}      // 0% opacidad, llega al centro
      transition={{ duration: 1.5, ease: "easeOut" }} // tiempo y suavizado
      className="flex flex-col bg-white/40 rounded-lg items-center justify-center"
      >
        <h1 id="titulo" className="flex justify-center ml-6">TEAM FAKAS</h1>
        <h2 id="subtitulo" className="flex justify-center ml-10">PERSONAL TRAINERS</h2>
        <h3 id="lista" className="flex justify-center ml-6">
        - Planes Personalizados - Nutrición - Seguimiento - Coaching Psicologico -
        </h3>
      </motion.div>
      
      <div className="" ></div>
      
      
    </section>
  );
}
