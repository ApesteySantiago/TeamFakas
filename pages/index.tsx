import Head from 'next/head';
import Principal from '../sections/Principal';
import NavBar from '../sections/navBar';
import Section2 from '../sections/sectionsOld/Seccion2';
import Section3 from '../sections/sectionsOld/Seccion3';
import AcercaDe from '../sections/sectionsOld/AcercaDe';
import Footer from '../sections/sectionsOld/Footer';

export default function Page() {
  return (
    <>
      <Head>
        <title>Welcome to TeamFakas</title>
        <meta name="description" content="Bienvenido a TeamFakas" />
        <meta name='stylesheet' content='styles/globals.css'/>
        <link href="https://fonts.cdnfonts.com/css/impact?styles=138957" rel="stylesheet"></link>
        <link href="https://fonts.cdnfonts.com/css/codec-pro" rel="stylesheet"></link>
      </Head>
      <body>
        <NavBar />
        <Principal />
      </body>
    </>
  );
}