import { motion, useScroll } from "motion/react";

export default function Section2() {
  return (
    <section id="section2" className="">
      <motion.div
        initial={{ opacity: 0, x: -100 }}   // 100% opacidad, fuera de la izquierda
        animate={{ opacity: 1, x: 0 }}      // 0% opacidad, llega al centro
        transition={{ duration: 1.5, ease: "easeOut" }} // tiempo y suavizado
        className="flex flex-col rounded-lg items-center justify-center"
      >
        <h1 id="titulo2" className="flex justify-center ml-0">ENTRENADORES</h1>
        <h2 id="subtitulo2" className="flex justify-center ml-0">QUIENES ESTAN DETRAS DE TEAMFAKAS</h2>

        <div id="descripcion" className="p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg text-center w-fit max-w-[90%] mx-auto">
          <p>Somos un equipo profesional dedicado a brindarte herramientas y asesoría para alcanzar tus metas.</p>
        </div>

        <div
          id="entrenadores"
          className="w-[90%] h-140 mx-auto mt-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg text-center flex items-baseline justify-center"
        >
          <p className="mt-2">"El musculo se construye en el Gym, la mentalidad que lo sostiene tambien"</p>
        </div>



      </motion.div>
    </section>
  )
}
