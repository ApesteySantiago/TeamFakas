export default function Section9() {
    return (
        <section className="bg-[url('/acercade3.jpg')] bg-center bg-[length:120%_100%] flex flex-col h-screen snap-start items-center justify-center">
            <div
                className="-translate-y-0 flex flex-col rounded-lg items-center justify-between"
            >
                <h1 className="flex justify-center text-center font-[Impact] text-red-600 text-4xl [-webkit-text-stroke:1px_white]">TU TRANSFORMACIÓN EMPIEZA AHORA</h1>
                <h2 className="flex justify-center pt-2 font-['Codec_Pro'] text-white tracking-[2px] -mt-4 text-[0.8rem]">¡ÚNETE!</h2>

                <div className="translate-y-0 flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg text-center w-fit max-w-[90%] mx-auto font-['Codec_Pro'] text-white text-base p-2">
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