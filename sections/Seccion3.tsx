import { motion, useScroll } from "motion/react";

export default function Section3() {
  return (
    <section id="section3" className="flex flex-col items-center justify-center">

      <div id="tarjeta1" className="w-[90%] h-65 mx-auto mt-0 mb-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg text-end flex flex-col items-end p-4" 
      >
        <motion.div
        initial={{ opacity: 0, x: -100 }}   // 100% opacidad, fuera de la izquierda
        animate={{ opacity: 1, x: 0 }}      // 0% opacidad, llega al centro
        transition={{ duration: 5, ease: "easeOut" }} // tiempo y suavizado
        className="text-shadow-2xl"
        >
          <p className="text-lg mt-3 mr-3">FACUNDO ARIEL CEJAS</p>

          <p className="text- mb-18">Entrenador Personal & Instructor en musculación</p>

          <p className="">Certificación Internacional Mr. Olympia - Bodybuilding & Fitness Trainer.</p>

          <p className="">Certificación Internacional High Fitness Trainer.</p>

          <p className="">Estudiante de Licenciatura en Nutrición (UNTREF).</p>

          <p className="">Especialista en entrenamiento de alta intensidad.</p>

          <p className="">🔥 Filosofía: “El cuerpo cambia cuando tu mente deja de negociar con la comodidad.”</p>
          </motion.div>


      </div>
      <div
        id="tarjeta2"
        className="w-[90%] h-70 mx-auto mt-2 mb-5 p-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg text-start flex items-baseline justify-center"
      >
        <motion.div
        initial={{ opacity: 0, x: -100 }}   // 100% opacidad, fuera de la izquierda
        animate={{ opacity: 1, x: 0 }}      // 0% opacidad, llega al centro
        transition={{ duration: 5, ease: "easeOut" }} // tiempo y suavizado
        className="ml-3"
        >
          <p className="text-lg mt-5">FACUNDO PEDRO TRABA</p>

          <p className="mb-22">Entrenador & Counselor Psicológico Deportivo</p>

          <p className="">Certificación Internacional Mr. Olympia - Fitness Trainer.</p>

          <p className="">Formado en Counseling y acompañamiento emocional para deportistas.</p>

          <p className="">Especialista en mentalidad, adherencia al plan y hábitos sostenibles.</p>

          <p className="">Trabajo con procesos de superación personal, ansiedad de rendimiento y resiliencia deportiva.</p>

          <p className="">🔥 Filosofía: “La fuerza física sin fuerza mental no se sostiene en el tiempo.”</p>
          </motion.div>
      </div>

    </section>
  )
}