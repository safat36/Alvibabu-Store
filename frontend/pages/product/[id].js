import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`http://localhost:5000/api/products/${id}`);
  const product = await res.json();
  return { props: { product } };
}

export default function ProductDetail({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <img src={product.image || '/logo.png'} alt={product.name} className="h-60 w-full object-contain my-4" />
        <p className="mb-2">${product.price}</p>
        <p>{product.description || 'No description available.'}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-primary px-4 py-2 rounded text-white"
        >
          Add to Cart
        </button>
      </main>
      <Footer />
    </>
  );
}
