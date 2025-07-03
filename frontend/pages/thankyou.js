import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ThankYou() {
  return (
    <>
      <Header />
      <main className="p-4">
        <h2 className="text-2xl font-bold text-primary mb-4">Thank you for your purchase!</h2>
        <p>Your order has been placed successfully.</p>
      </main>
      <Footer />
    </>
  );
}
