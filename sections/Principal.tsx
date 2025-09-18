import { motion, useScroll } from "motion/react";


export default function Principal() {

  return (
    <section className="">
      <motion.div>
        <h1 id="titulo" className="ml-4">TEAM FAKAS</h1>
        <h2 id="subtitulo" className="ml-6">PERSONAL TRAINERS</h2>
      </motion.div>

      
      <h3 id="lista">- Planificación Personalizada - Mindset - Nutrición - Seguimiento -</h3>
    </section>
  );
}
