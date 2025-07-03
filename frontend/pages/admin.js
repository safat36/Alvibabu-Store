import { useState, useEffect } from 'react';

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  const addProduct = async () => {
    const res = await fetch('http://localhost:5000/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price: Number(price), description, image }),
    });
    const newProduct = await res.json();
    setProducts(prev => [...prev, newProduct]);
    setName('');
    setPrice('');
    setDescription('');
    setImage('');
  };

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5000/api/products/${id}`, { method: 'DELETE' });
    setProducts(prev => prev.filter(p => p._id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Admin Panel</h1>
      <div className="mb-4 space-y-2 max-w-md">
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
          className="border p-2 w-full"
        />
        <input
          value={price}
          onChange={e => setPrice(e.target.value)}
          type="number"
          placeholder="Price"
          className="border p-2 w-full"
        />
        <input
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Description"
          className="border p-2 w-full"
        />
        <input
          value={image}
          onChange={e => setImage(e.target.value)}
          placeholder="Image URL"
          className="border p-2 w-full"
        />
        <button
          onClick={addProduct}
          className="bg-primary px-4 py-2 rounded text-white"
        >
          Add Product
        </button>
      </div>
      <ul>
        {products.map(p => (
          <li key={p._id} className="mb-2 flex justify-between items-center">
            <span>{p.name} (${p.price})</span>
            <button
              onClick={() => deleteProduct(p._id)}
              className="text-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
