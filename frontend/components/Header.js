import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className="bg-primary p-4 flex justify-between items-center">
      <Link href="/">
        <a className="font-bold text-xl">Alvibabu Store</a>
      </Link>
      <nav>
        <Link href="/cart">
          <a>Cart ({cart.length})</a>
        </Link>
      </nav>
    </header>
  );
}
