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
import PrincipalBis from '../sections/PrincipalBis';

export default function Page() {
  return (
    <>
      <Head>
        <title>Team Fakas</title>
        <meta name="description" content="Bienvenido a Team Fakas" />
      </Head>

      <main className="h-[100dvh] overflow-y-scroll snap-y snap-proximity scroll-smooth overscroll-y-none">
        <PrincipalBis />
        <Section2 />
        <Section3 />
        <Section6 />
        <Section5 />
        <Section7 />
        <Section9 />
        <Section8 />
        <Footer />
      </main>
    </>
  );
}
