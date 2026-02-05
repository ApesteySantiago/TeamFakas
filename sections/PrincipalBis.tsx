import fakas from "../public/BienvenidaPrincipal.png";
import { motion } from "motion/react";

export default function PrincipalBis() {
  return (
    <section
      id="principalBis"
      className="px-4 py-5 bg-gray-100 min-h-screen h-[100dvh] snap-start flex items-center justify-center"
    >
      {/* CONTENEDOR PRINCIPAL */}
      <div className="grid gap-1 max-w-md mx-auto text-center">

        {/* IMAGEN */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{
            duration: 3.5,
            ease: "easeOut",
          }}
          className="w-[100vw] h-[65dvh] mx-auto overflow-hidden rounded-lg z-0 ">
          <img className="object-contain w-full h-full" src={fakas.src} alt="Facundos" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6  }}
          transition={{
            duration: 3,
            ease: "easeOut",
          }}
          className="w-[90vw] mx-auto">

          <h1 id="titulo" className="flex justify-center text-7xl [-webkit-text-stroke:1px_white]">
            TEAM FAKAS
          </h1>
        </motion.div>

        {/* DESCRIPCION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6  }}
          transition={{
            duration: 3,
            ease: "easeOut",
          }}
          className="w-[95vw] mx-auto">

          <h3 id="lista" className="flex justify-center border-1 rounded-lg border-red-500 p-0.5">
            - Planes Personalizados - Nutrición - Seguimiento - Coaching Psicologico -
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{
            duration: 3,
            ease: "easeOut",
          }}
          className="w-[95vw] mx-auto"
        >
          <button
            id="comenzar1"
            className="w-full h-15 mt-4 py-2 opacity-60 border border-black rounded-sm"
          >
            CONÓCENOS
          </button>
          <button
            id="comenzar2"
            className="w-full h-15 mt-2 py-3 opacity-60 border border-black rounded-sm"
          >
            CONTACTÁNOS
          </button>
        </motion.div>

      </div>
    </section >
  );
}