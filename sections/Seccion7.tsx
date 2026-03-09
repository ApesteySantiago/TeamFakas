import Image from "next/image";

export default function Section6() {
    return (
        <section id="section8" className="flex flex-col h-[80vh] snap-start items-center">
            <div
                className="flex flex-col items-center gap-4 mt-10"
            >
                <h1 id="titulo6" className="flex justify-center text-center [-webkit-text-stroke:1px_white]">¡PROTOCOLO DESPERTAR!</h1>
                <h2 id="subtitulo6" className="flex justify-center ">¡ÚNETE AL EQUIPO!</h2>
            </div>
            <div id="descripcion" className="mt-20 translate-y-0 flex flex-col items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg text-center max-w-[90%] mx-auto">
                <p className="text-start p-4">
                    En TEAMFAKAS, no creemos en las soluciones a medias.<br></br><br></br>  Antes de que elijas un plan, queremos darte las herramientas para que dejes de ser un espectador y empieces a ser el protagonista de tu cambio.<br></br><br></br>   Descarga nuestra guía exclusiva sin costo:
                </p>
                <a href="/ebook.pdf" download>
                    <Image
                        src="/eBook.webp"
                        alt="Descargar Ebook"
                        width={150}
                        height={150}
                        className="cursor-pointer hover:scale-105 transition rounded-xl mb-5"
                    />
                </a>

            </div>


        </section>
    );
}