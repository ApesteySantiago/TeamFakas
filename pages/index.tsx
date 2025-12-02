import Head from 'next/head';
import Principal from '../sections/Principal';
import NavBar from '../sections/navBar';
import Section2 from '../sections/Seccion2';
import Section3 from '../sections/Seccion3';
import Section4 from '../sections/Seccion4';
import AcercaDe from '../sections/AcercaDe';
import Footer from '../sections/Footer';

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
        <Footer />
        
      </body>
    </>
  );
}