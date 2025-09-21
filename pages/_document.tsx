import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="utf-8" />
        <link href="https://fonts.cdnfonts.com/css/impact?styles=138957" rel="stylesheet"></link>
        <link href="https://fonts.cdnfonts.com/css/codec-pro" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
