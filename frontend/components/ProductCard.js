import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img src={product.image || '/logo.png'} alt={product.name} className="h-40 w-full object-contain mb-2" />
      <h3 className="font-semibold">{product.name}</h3>
      <p>${product.price}</p>
      <Link href={`/product/${product._id}`}>
        <a className="text-primary underline mt-2 block">View Details</a>
      </Link>
    </div>
  );
}
