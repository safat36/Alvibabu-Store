import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('cart');
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const found = prev.find(p => p.id === product.id);
      if (found) {
        return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + 1 } : p);
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const increaseQty = (id) => {
    setCart(prev => prev.map(p => p.id === id ? { ...p, qty: p.qty + 1 } : p));
  };

  const decreaseQty = (id) => {
    setCart(prev => prev.map(p =>
      p.id === id ? { ...p, qty: p.qty > 1 ? p.qty - 1 : 1 } : p
    ));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}
