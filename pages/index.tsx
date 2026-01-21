import Head from 'next/head';
import Principal from '../sections/Principal';
import NavBar from '../sections/navBar';
import Section2 from '../sections/Seccion2';
import Section3 from '../sections/Seccion3';
import Section4 from '../sections/Seccion4';
import Section5 from '../sections/Seccion5';
import Section6 from '../sections/Seccion6';
import Section7 from '../sections/Seccion7';
import Section8 from '../sections/Seccion8';
import AcercaDe from '../sections/AcercaDe';
import Footer from '../sections/Footer';
import Section9 from '../sections/Seccion9';

export default function Page() {
  return (
    <>
      <Head>
        <title>Team Fakas</title>
        <meta name="description" content="Bienvenido a Team Fakas" />
        <meta name='stylesheet' content='styles/globals.css'/>
      </Head>
      <body>
        
        <Principal />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section9 />
        <Section8 />
        <Footer />
        
      </body>
    </>
  );
}