export default function Section9() {
    return (
        <section id="section8" className="flex flex-col h-screen snap-start items-center justify-center">
            <div
                className="-translate-y-0 flex flex-col rounded-lg items-center justify-between"
            >
                <h1 id="titulo6" className="flex justify-center text-center font-xl [-webkit-text-stroke:1px_white]">TU TRANSFORMACIÓN EMPIEZA AHORA</h1>
                <h2 id="subtitulo6" className="flex justify-center pt-2 ">¡ÚNETE!</h2>

                <div id="descripcion" className="translate-y-0 flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg text-center w-fit max-w-[90%] mx-auto">
                    <p className="text-start p-4">
                        <br /><br />
                        ¿QUERÉS CONOCER NUESTROS VALORES? <br /><br />

                        Nuestros planes están diseñados para adaptarse a diferentes niveles de compromiso y presupuestos. <br /> <br /> 
                    </p>
                </div>
                <button className="mt-4 bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
                    ¡ÚNETE AHORA!
                </button>
            </div>
        </section>
    );
}