import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

export async function getServerSideProps() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
  const res = await fetch(`${apiUrl}/api/products`);
  const products = await res.json();
  return { props: { products } };
}

export default function Home({ products }) {
  return (
    <>
      <Header />
      <main className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(p => (
          <ProductCard key={p._id} product={p} />
        ))}
      </main>
      <Footer />
    </>
  );
}
