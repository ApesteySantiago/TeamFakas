export default function Section9() {
    return (
        <section id="section8" className="flex flex-col h-screen snap-start items-center justify-center">
            <div
                className="-translate-y-0 flex flex-col rounded-lg items-center justify-between"
            >
                <h1 id="titulo6" className="flex justify-center text-center font-xl">TU TRANSFORMACIÓN EMPIEZA AHORA</h1>
                <h2 id="subtitulo6" className="flex justify-center pt-2 ">¡ÚNETE!</h2>

                <div id="descripcion" className="translate-y-0 flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg text-center w-fit max-w-[90%] mx-auto">
                    <p className="text-start p-4">
                        Las guías te dan la dirección, pero el seguimiento real te garantiza la meta. No dejes tu progreso al azar de un papel estático: transformá el conocimiento en resultados con nuestro apoyo profesional.<br /><br />
                        ¿QUERÉS CONOCER NUESTROS VALORES? <br /><br />

                        Nuestros planes están diseñados para adaptarse a diferentes niveles de compromiso y presupuestos. <br /> <br /> Consultanos ahora para recibir la lista de precios actualizada y encontrar la opción ideal para vos.
                    </p>
                </div>
                <button className="mt-4 bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
                    ¡ÚNETE AHORA!
                </button>
            </div>
        </section>
    );
}