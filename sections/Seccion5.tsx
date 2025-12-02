import { motion } from 'framer-motion';

export default function Section5() {
  return (
    <section id="section5" className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, x: -100 }}   // 100% opacidad, fuera de la izquierda
        animate={{ opacity: 1, x: 0 }}      // 0% opacidad, llega al centro
        transition={{ duration: 1.5, ease: "easeOut" }} // tiempo y suavizado
        className="flex flex-col rounded-lg items-center justify-center"
      >
        <h1 id="titulo5" className="flex justify-center text-center font-2xl">PLANES</h1>
        <h2 id="subtitulo5" className="flex justify-center pt-2 ">ELEGÍ TU MEJOR OPCIÓN</h2>

        <div id="descripcion" className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg text-center w-fit max-w-[90%] mx-auto">
          <h3 className="titulo-cards">⭐ FREE</h3>
          <p className="text-start ml-2">

            Incluye un mini manual de 5 hojas con:<br></br>
            ✔ Rutina simple pero efectiva (fuerza + hipertrofia).<br></br>
            ✔ Guía nutricional básica para mejorar tu composición corporal.<br></br>
            ✔ Conceptos de mentalidad del atleta: disciplina, constancia y enfoque.<br></br>
            ✔ Consejos para organizar tu semana y progresar sin estancarte.<br></br>
            ✔ Acceso a un grupo de difusión para recibir contenido semanal.<br></br></p>
        </div>

        <div id="descripcion" className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg text-center w-fit max-w-[90%] mx-auto">
          <h3 className="titulo-cards">💪 BÁSICO</h3>
          <p className="text-start ml-2">

            Incluye:<br></br>
            ✔ Plan de entrenamiento personalizado según objetivo.<br></br>
            ✔ Guía nutricional general (no personalizada).<br></br>
            ✔ Lista de compras y guía de porciones.<br></br>
            ✔ Acceso al grupo privado de Telegram.<br></br>
            ✔ 1 consulta por chat al mes.<br></br>
            ✔ Ajustes mensuales del plan de entrenamiento.<br></br></p>
        </div>

        <div id="descripcion" className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg text-center w-fit max-w-[90%] mx-auto">
          <h3 className="titulo-cards">🔥 STANDAR</h3>
          <p className="text-start ml-2">
            Incluye todo del Plan Básico y además:<br></br>
            ✔ Plan nutricional personalizado con cálculo de macros.<br></br>
            ✔ Correcciones de técnica por video 1 vez por semana.<br></br>
            ✔ Ajustes quincenales del entrenamiento y la dieta.<br></br>
            ✔ Soporte por chat 24/48 h (respuesta asegurada).<br></br>
            Material exclusivo:<br></br>
            - Técnicas de alta intensidad<br></br>
            - Guía de suplementos basada en evidencia<br></br>
            - Psicología aplicada al entrenamiento (counseling)<br></br></p>
        </div>

        <div id="descripcion" className="mb-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg text-center w-fit max-w-[90%] mx-auto">
          <h3 className="titulo-cards">🔱 PREMIUM</h3>
          <p className="text-start ml-2">
            Incluye todo del Plan Standard y además:<br></br><br></br>
            ✔ Seguimiento semanal 1 a 1.<br></br>
            ✔ Correcciones ilimitadas por video.<br></br>
            ✔ Videollamada mensual (nutrición + entrenamiento + mentalidad).<br></br>
            ✔ Ajustes semanales de dieta y entrenamiento.<br></br>
            ✔ Planificación mensual tipo “programación de atleta”.<br></br>
            Material avanzado:<br></br>
            - Biomecánica aplicada por ejercicio<br></br>
            - Psicología de la alta exigencia<br></br>
            - Estrategias de recomposición rápida<br></br>
            - Optimización del sueño y recuperación<br></br></p>
        </div>


      </motion.div>
    </section>
  );
}