export default function handler(req, res) {
  if (req.method === 'GET') {
    const products = [
      { _id: '1', name: 'Coffee', price: 200 },
      { _id: '2', name: 'Butter', price: 150 },
      { _id: '3', name: 'Egg', price: 10 },
      { _id: '4', name: 'Orange Juice', price: 120 },
    ];
    res.status(200).json(products);
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
