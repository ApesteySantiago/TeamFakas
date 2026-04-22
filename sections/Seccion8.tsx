import Image from 'next/image';
import XLogo from '../public/assets/logo-white.png';
import InstagramLogo from '../public/assets/instagram-icon.svg';
import GmailLogo from '../public/assets/gmail.svg';


export default function Section8() {
  return (
    <section className="min-h-screen bg-[url('/Planes.png')] bg-center bg-[length:120%_100%] flex flex-col h-screen snap-start items-center justify-center">
      <div
        className="flex flex-col rounded-lg items-center justify-center"
      >
        <h1 className="font-[Impact] text-red-600 text-4xl sm:text-5xl lg:text-6xl flex justify-center text-center [-webkit-text-stroke:1px_white]">¡GRACIAS POR VISITAR TEAM FAKAS!</h1>
        <h2 className="font-[Codec Pro] text-white tracking-[7px] -mt-4 text-sm sm:text-base md:text-lg flex justify-center pt-2 ">¡TE ESPERAMOS PRONTO!</h2>

        <ul className="flex flex-row justify-center space-x-6 mt-4">
          <li>
            <a href="https://www.instagram.com/teamfakas/" target="_blank" rel="noopener noreferrer">  
              <Image src={InstagramLogo} alt="Instagram" width={32} height={32} className="h-8 w-8 hover:scale-150 transition-transform duration-300" /> 
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">  
              <Image src={GmailLogo} alt="Gmail" width={32} height={32} className="h-8 w-8 hover:scale-150 transition-transform duration-300" /> 
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/teamfakas" target="_blank" rel="noopener noreferrer">  
              <Image src={XLogo} alt="Twitter" width={32} height={32} className="h-8 w-8 hover:scale-150 transition-transform duration-300" /> 
            </a>
          </li>
        </ul>
      </div>

    </section>
  );
}