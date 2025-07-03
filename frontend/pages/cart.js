import Header from '../components/Header';
import Footer from '../components/Footer';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Link from 'next/link';

export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty, total } = useContext(CartContext);

  return (
    <>
      <Header />
      <main className="p-4">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="mb-4">
              {cart.map(item => (
                <li key={item.id} className="mb-2 flex justify-between items-center">
                  <span>{item.name} - ${item.price} × {item.qty}</span>
                  <div className="flex gap-2">
                    <button onClick={() => decreaseQty(item.id)} className="px-2 bg-gray-200">−</button>
                    <button onClick={() => increaseQty(item.id)} className="px-2 bg-gray-200">+</button>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="font-semibold mb-2">Subtotal: ${total}</div>
            <Link href="/checkout">
              <a className="inline-block bg-primary text-white px-4 py-2 rounded">Proceed to Checkout</a>
            </Link>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
