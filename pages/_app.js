import '../style/style.scss';

import Head from 'next/head';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DCP COVID-19</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
