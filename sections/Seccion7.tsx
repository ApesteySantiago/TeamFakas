import Image from "next/image";

export default function Section6() {
  return (
    <section className="bg-[url('/acercade3.jpg')] bg-center bg-[length:120%_100%] min-h-screen flex flex-col snap-start items-center">
      <div
        className="flex flex-col items-center gap-2 mt-4"
      >
        <h1 className="font-[Impact] text-red-600 text-4xl sm:text-5xl lg:text-6xl flex justify-center text-center [-webkit-text-stroke:1px_white]">¡PROTOCOLO DESPERTAR!</h1>
        <h2 className="font-[Codec Pro] text-white tracking-[7px] -mt-4 text-sm sm:text-base md:text-lg flex justify-center ">¡ÚNETE AL EQUIPO!</h2>
      </div>
      <div className="font-[Codec Pro] text-white text-base p-2 mt-5 translate-y-0 flex flex-col items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg text-center max-w-[90%] mx-auto">
        <p className="text-start p-4">
          En TEAMFAKAS, no creemos en las soluciones a medias.<br></br><br></br>  Antes de que elijas un plan, queremos darte las herramientas para que dejes de ser un espectador y empieces a ser el protagonista de tu cambio.<br></br><br></br>   Descarga nuestra guía exclusiva sin costo:
        </p>
        <a href="/ebook.pdf" download>
          <Image
            src="/eBook.webp"
            alt="Descargar Ebook"
            width={150}
            height={150}
            className="cursor-pointer hover:scale-105 transition rounded-xl mb-0"
          />
        </a>
        <p className="text-start p-4">
          La guía te da la dirección, pero el seguimiento real te garantiza la meta. No dejes tu progreso al azar de un papel estático, transformá el conocimiento en resultados con nuestro apoyo profesional.<br></br> Consultanos ahora para recibir la lista de precios actualizada y encontrar la opción ideal para vos.
        </p>
        <button className="mt-0 bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
          ¡ÚNETE AHORA!
        </button>
      </div>



    </section>
  );
}