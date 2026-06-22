import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const lowStock = product.stock > 0 && product.stock < 3;
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="aspect-[3/4] bg-bbpink relative overflow-hidden">
        <div className="img-placeholder absolute inset-0 text-lg">
          <span className="px-4 text-center">{product.name}</span>
        </div>
        {lowStock && (
          <span className="absolute top-3 left-3 bg-bbespresso text-bbcream text-[10px] uppercase tracking-widest px-2 py-1">
            Low Stock
          </span>
        )}
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <div className="font-serif text-xl leading-tight">{product.name}</div>
          <div className="text-xs uppercase tracking-widest text-bbespresso/60 mt-1">
            {product.category}
          </div>
        </div>
        <div className="text-sm font-medium">${product.price.toFixed(2)}</div>
      </div>
    </Link>
  );
}
