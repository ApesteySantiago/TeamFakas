import { motion, useScroll } from "motion/react";


export default function Principal() {

  return (
    <section className="">
      <motion.div
      initial={{ opacity: 0, x: -100 }}   // 100% opacidad, fuera de la izquierda
      animate={{ opacity: 1, x: 0 }}      // 0% opacidad, llega al centro
      transition={{ duration: 1.5, ease: "easeOut" }} // tiempo y suavizado
      >
        <h1 id="titulo" className="flex justify-start ml-8">TEAM FAKAS</h1>
        <h2 id="subtitulo" className="flex justify-start ml-10">PERSONAL TRAINERS</h2>
        <h3 id="lista" className="flex justify-start">
        - Planificación Personalizada - Mindset - Nutrición - Seguimiento -
        </h3>
      </motion.div>
      
    </section>
  );
}
