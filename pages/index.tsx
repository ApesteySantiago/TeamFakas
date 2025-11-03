import Head from 'next/head';
import Principal from '../sections/Principal';
import NavBar from '../sections/navBar';
import Section2 from '../sections/Seccion2';
import Section3 from '../sections/Seccion3';
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
        <NavBar />
        <Principal />
        <Section2 />
        <Section3 />
        <AcercaDe />
        <Footer />
        
      </body>
    </>
  );
}