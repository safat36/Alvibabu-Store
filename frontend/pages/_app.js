import '../styles/globals.css';
import CartProvider from '../context/CartContext';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Alvibabu Store</title>
      </Head>
      <Component {...pageProps} />
    </CartProvider>
  );
}
