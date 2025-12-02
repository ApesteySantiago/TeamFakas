import { motion } from "framer-motion";

export default function Section4() {
  return (
    <section id="section4" className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, x: -100 }}   // 100% opacidad, fuera de la izquierda
        animate={{ opacity: 1, x: 0 }}      // 0% opacidad, llega al centro
        transition={{ duration: 1.5, ease: "easeOut" }} // tiempo y suavizado
        className="flex flex-col rounded-lg items-center justify-center"
      >
        <h1 id="titulo4" className="flex justify-center text-center font-2xl">QUE TE OFRECEMOS</h1>
        <h2 id="subtitulo4" className="flex justify-center pt-2 ">QUEREMOS INCULCARTE EL ARTE DEL TREINO</h2>

        <div id="descripcion" className="p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg text-center w-fit max-w-[90%] mx-auto">
          <h3 className="titulo-cards">📌ENTRENAMIENTO</h3>
          <p className="text-start">

            • Planes adaptados a tu nivel y objetivo<br></br>
            • Programas de alta intensidad<br></br>
            • Corrección técnica y biomecánica aplicada<br></br>
            • Periodización inteligente para progreso continuo.<br></br>
            • Análisis de ejecución por video<br></br></p>
        </div>

        <div id="descripcion" className="p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg text-center w-fit max-w-[90%] mx-auto">
          <h3 className="titulo-cards">📌 NUTRICIÓN</h3>
          <p className="text-start">
            • Guía alimentaria personalizada según tus necesidades<br></br>
            • Guía de Macronutrientres y Micronutrientes<br></br>
            • Estrategias para recomposición corporal<br></br>
            • Optimización del rendimiento antes, durante y después del entrenamiento.<br></br>
            • Suplementación basada en tus necesidades<br></br>
          </p>
        </div>

        <div id="descripcion" className="p-2 mb-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg text-center w-fit max-w-[90%] mx-auto">
          <h3 className="titulo-cards">📌 MENTALIDAD Y PSICOLOGÍA DEL ATLETA</h3>
          <p className="text-start">
            • Manejo de emociones y estrés durante el proceso.<br></br>
            • Construcción de mentalidad disciplinada y orientada a objetivos.<br></br>
            • Hábitos sostenibles a largo plazo.<br></br>
            • Acompañamiento motivacional<br></br>
            • Trabajo en bloqueos, ansiedad, falta de constancia y autoboicot.<br></br></p>
        </div>



      </motion.div>

    </section>
  )
}