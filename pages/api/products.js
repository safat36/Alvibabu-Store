// pages/api/products.js

export default function handler(req, res) {
  if (req.method === 'GET') {
    const products = [
      { id: 1, name: 'Coffee', price: 200 },
      { id: 2, name: 'Butter', price: 150 },
      { id: 3, name: 'Egg', price: 10 },
      { id: 4, name: 'Orange Juice', price: 120 }
    ];
    res.status(200).json(products);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
