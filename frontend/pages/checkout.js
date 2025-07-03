import Header from '../components/Header';
import Footer from '../components/Footer';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useRouter } from 'next/router';

export default function Checkout() {
  const { cart, total, clearCart } = useContext(CartContext);
  const router = useRouter();

  const placeOrder = async () => {
    const res = await fetch('http://localhost:5000/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cart, total }),
    });
    if (res.ok) {
      clearCart();
      router.push('/thankyou');
    }
  };

  return (
    <>
      <Header />
      <main className="p-4">
        <h2 className="text-xl font-bold mb-4">Checkout</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="mb-4">
              {cart.map(item => (
                <li key={item.id}>
                  {item.name} × {item.qty} = ${item.price * item.qty}
                </li>
              ))}
            </ul>
            <div className="font-semibold mb-2">Total: ${total}</div>
            <button
              onClick={placeOrder}
              className="bg-primary text-white px-4 py-2 rounded"
            >
              Place Order
            </button>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
