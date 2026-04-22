import Image from "next/image";
import { motion } from "framer-motion";

export default function PrincipalBis() {
  return (
    <section
      className="h-dvh bg-[url('/Fondo_Gym.jpg')] bg-no-repeat bg-center bg-[length:100%_100%] snap-start flex items-center justify-center"
    >
      {/* CONTENEDOR PRINCIPAL */}
      <div className="grid gap-1 max-w-md mx-auto text-center">

        {/* IMAGEN */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{
            duration: 1.8,
            ease: "easeOut",
          }}
          className="relative w-screen h-[50dvh] min-[375px]:h-[60dvh] mx-auto mt-4 overflow-hidden rounded-lg z-0">
          <Image
            src="/BienvenidaPrincipal.png"
            alt="Facundos"
            fill
            priority
            className="object-contain w-full h-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{
            duration: 3,
            ease: "easeOut",
          }}
          className="w-[90vw] mx-auto">

          <h1 className="flex justify-center text-[clamp(2.8rem,17vw,4.5rem)] [-webkit-text-stroke:1px_white] font-[Impact] text-red-600">
            TEAM FAKAS
          </h1>
        </motion.div>

        {/* DESCRIPCION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{
            duration: 3,
            ease: "easeOut",
          }}
          className="w-[95vw] mx-auto">

          <h3 className="flex justify-center border rounded-lg border-red-500 p-0.5 font-['Codec_Pro'] text-[0.65rem] text-white">
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
            className="w-[90vw] h-15 mt-4 py-2 border border-black rounded-sm bg-gradient-to-b from-[#02a3ff] via-black to-[#02a3ff] text-white font-bold font-['Codec_Pro']"
          >
            CONÓCENOS
          </button>
          <button
            className="w-[90vw] h-15 mt-2 mb-4 py-3 border border-black rounded-sm bg-gradient-to-b from-[#02a3ff] via-black to-[#02a3ff] text-white font-bold font-['Codec_Pro']"
          >
            CONTACTÁNOS
          </button>
        </motion.div>

      </div>
    </section >
  );
}