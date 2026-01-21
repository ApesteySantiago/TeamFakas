import papiro1 from '../public/el_codigo_del_salón.png';
import papiro2 from '../public/combustible_real.png';
import papiro3 from '../public/el_motor_mental.png';

export default function Section6() {
    return (
        <section id="section8" className="flex flex-col items-center justify-center">
            <div
                className="-translate-y-0 flex flex-col rounded-lg items-center justify-between"
            >
                <h1 id="titulo6" className="flex justify-center text-center font-xl">¡PROTOCOLO DESPERTAR!</h1>
                <h2 id="subtitulo6" className="flex justify-center pt-2 ">¡ÚNETE AL EQUIPO!</h2>

                <div id="descripcion" className="translate-y-0 flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg text-center w-fit max-w-[90%] mx-auto">
                    <p className="text-start p-4">
                        En Teamfakas, no creemos en las soluciones a medias.<br></br><br></br>  Antes de que elijas un plan, queremos darte las herramientas para que dejes de ser un espectador y empieces a ser el protagonista de tu cambio.<br></br><br></br>   Descarga nuestras guías exclusivas sin costo:
                    </p>
                </div>
                <div id="descripcion" className="translate-y-0 flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg text-center w-fit max-w-[90%] mx-auto">
                    <div className="flex justify-center gap-6 mt-4">
                        <div className="flex flex-col items-center">
                            <img className="w-30 rounded-xl" src={papiro1.src} alt="" />
                            <span className="mt-2 text-sm">El Código del Salón</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <img className="w-30 rounded-xl" src={papiro2.src} alt="" />
                            <span className="mt-2 text-sm">Combustible Real</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <img className="w-30 rounded-xl" src={papiro3.src} alt="" />
                            <span className="mt-2 text-sm">El Motor Mental</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}