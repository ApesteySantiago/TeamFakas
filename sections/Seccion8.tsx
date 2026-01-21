import XLogo from '../public/assets/logo-white.png';
import InstagramLogo from '../public/assets/instagram-icon.svg';
import GmailLogo from '../public/assets/gmail.svg';


export default function Section6() {
  return (
    <section id="section7" className="flex flex-col items-center justify-center">
      <div
        className="flex flex-col rounded-lg items-center justify-center"
      >
        <h1 id="titulo6" className="flex justify-center text-center font-2xl">¡GRACIAS POR VISITAR TEAM FAKAS!</h1>
        <h2 id="subtitulo6" className="flex justify-center pt-2 ">¡TE ESPERAMOS PRONTO!</h2>



        <ul id="redes" className="flex flex-row justify-center space-x-6 mt-4">
          <li>
            <a href="https://www.instagram.com/teamfakas/" target="_blank" rel="noopener noreferrer">  
              <img src={InstagramLogo.src} alt="Instagram" className="h-8 w-8 hover:scale-150 transition-transform duration-300" /> 
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">  
              <img src={GmailLogo.src} alt="Facebook" className="h-8 w-8 hover:scale-150 transition-transform duration-300" /> 
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/teamfakas" target="_blank" rel="noopener noreferrer">  
              <img src={XLogo.src} alt="Twitter" className="h-8 w-8 hover:scale-150 transition-transform duration-300" /> 
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}