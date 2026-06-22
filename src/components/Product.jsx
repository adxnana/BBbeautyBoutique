import { useMemo, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import products from "../data/productsData.js";
import { useCart } from "../context/CartContext.jsx";
import SizeGuideModal from "../components/SizeGuideModal.jsx";
import ProductCard from "../components/ProductCard.jsx";

const COLOR_HEX = {
  Pink: "#E8B4B8",
  Black: "#111",
  Cream: "#F5EFE6",
  Espresso: "#2B1D14",
  Ivory: "#F8F4EC",
  Blush: "#F2D3D1",
  Indigo: "#2C3E66",
  Stone: "#B9AE99",
  White: "#FFFFFF",
};

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState(product?.sizes[0] ?? "");
  const [color, setColor] = useState(product?.colors[0] ?? "");
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  const related = useMemo(
    () => products.filter((p) => p.category === product?.category && p.id !== id).slice(0, 4),
    [product, id]
  );

  if (!product) return <Navigate to="/shop" replace />;

  const lowStock = product.stock > 0 && product.stock < 3;

  return (
    <div className="px-6 lg:px-16 py-10">
      <div className="text-xs uppercase tracking-widest text-bbespresso/60 mb-6">
        <Link to="/shop">Shop</Link> / {product.category} / {product.name}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Image gallery */}
        <div className="lg:col-span-7 grid grid-cols-6 gap-4">
          <div className="col-span-1 flex lg:flex-col gap-3 order-2 lg:order-1">
            {product.images.map((img, idx) => (
              <button
                key={img}
                onClick={() => setActiveImage(idx)}
                className={`aspect-[3/4] w-full img-placeholder text-[10px] border ${
                  idx === activeImage ? "border-bbespresso" : "border-transparent"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
          <div className="col-span-5 aspect-[3/4] img-placeholder text-2xl order-1 lg:order-2">
            {product.name} — View {activeImage + 1}
          </div>
        </div>

        {/* Details */}
        <div className="lg:col-span-5 lg:pl-8">
          <div className="text-xs uppercase tracking-[0.3em] text-bbespresso/60">
            {product.category}
          </div>
          <h1 className="font-serif text-4xl mt-2">{product.name}</h1>
          <div className="text-lg mt-3">${product.price.toFixed(2)}</div>

          <p className="mt-6 text-sm text-bbespresso/80 leading-relaxed">
            {product.description}
          </p>

          {lowStock && (
            <div className="mt-4 inline-block bg-bbespresso text-bbcream text-[10px] uppercase tracking-widest px-2 py-1">
              Low Stock — Only {product.stock} left
            </div>
          )}

          {/* Color */}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase tracking-widest">Color: {color}</div>
            </div>
            <div className="flex gap-3 mt-3">
              {product.colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  title={c}
                  className={`h-9 w-9 rounded-full border-2 ${
                    color === c ? "border-bbespresso ring-2 ring-bbespresso/40" : "border-bbespresso/30"
                  }`}
                  style={{ backgroundColor: COLOR_HEX[c] || "#ccc" }}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase tracking-widest">Size</div>
              <button
                onClick={() => setSizeGuideOpen(true)}
                className="text-xs underline underline-offset-4"
              >
                Size Guide
              </button>
            </div>
            <div className="grid grid-cols-5 gap-2 mt-3">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`py-2 text-sm border ${
                    size === s
                      ? "bg-bbespresso text-bbcream border-bbespresso"
                      : "border-bbespresso/40"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addItem(product, { size, color, quantity: 1 })}
            className="mt-8 w-full py-4 bg-bbespresso text-bbcream uppercase tracking-widest text-sm"
          >
            Add to Bag
          </button>

          <dl className="mt-10 border-t border-bbespresso/20 pt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-bbespresso/60">Material</dt>
              <dd className="text-right max-w-[60%]">{product.material}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-bbespresso/60">Care</dt>
              <dd className="text-right max-w-[60%]">{product.care}</dd>
            </div>
          </dl>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24 border-t border-bbespresso/20 pt-12">
          <h2 className="font-serif text-3xl mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      <SizeGuideModal open={sizeGuideOpen} onClose={() => setSizeGuideOpen(false)} />
    </div>
  );
}
