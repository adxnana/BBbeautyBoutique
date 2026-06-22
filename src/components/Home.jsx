import { Link } from "react-router-dom";
import products from "../data/productsData.js";
import ProductCard from "../components/ProductCard.jsx";

export default function Home() {
  const newArrivals = products.slice(0, 6);
  const lookbook = products.slice(0, 4);

  return (
    <div>
      {/* HERO — asymmetric split */}
      <section className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh] border-b border-bbespresso/30">
        <div className="lg:col-span-5 bg-bbpink/30 flex flex-col justify-center px-8 lg:px-16 py-16">
          <div className="text-xs uppercase tracking-[0.3em] text-bbespresso/70">
            Autumn / Winter Edition
          </div>
          <h1 className="font-serif text-6xl lg:text-7xl mt-6 leading-[0.95]">
            Quietly<br />confident<br />pieces.
          </h1>
          <p className="mt-6 max-w-md text-bbespresso/80">
            A focused edit of dresses, tops, outerwear and bottoms designed for everyday wear.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              to="/shop"
              className="px-6 py-3 bg-bbespresso text-bbcream text-sm uppercase tracking-widest"
            >
              Shop the Edit
            </Link>
            <Link
              to="/shop?category=Outerwear"
              className="px-6 py-3 border border-bbespresso text-sm uppercase tracking-widest"
            >
              Outerwear
            </Link>
          </div>
        </div>
        <div className="lg:col-span-7 bg-bbpink img-placeholder text-3xl min-h-[60vh]">
          Featured Lookbook Image
        </div>
      </section>

      {/* NEW ARRIVALS — horizontal scroll */}
      <section className="px-6 lg:px-16 py-20 border-b border-bbespresso/20 bg-bbpink/15">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-bbespresso/60">
              Just In
            </div>
            <h2 className="font-serif text-4xl mt-2">New Arrivals</h2>
          </div>
          <Link to="/shop" className="text-sm underline underline-offset-4">
            View all
          </Link>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 snap-x">
          {newArrivals.map((p) => (
            <div key={p.id} className="min-w-[260px] max-w-[260px] snap-start">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      {/* LOOKBOOK — asymmetric staggered grid */}
      <section className="px-6 lg:px-16 py-20 bg-bbpink border-b border-bbespresso/30">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-bbespresso/80">
            The Lookbook
          </div>
          <h2 className="font-serif text-5xl mt-2">Editorial No. 04</h2>
        </div>
        <div className="grid grid-cols-12 gap-4 mt-10">
          <div className="col-span-12 md:col-span-5 aspect-[3/4] img-placeholder text-2xl">
            {lookbook[0].name}
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-7 aspect-[3/4] mt-0 md:mt-16 img-placeholder text-2xl">
            {lookbook[1].name}
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-2 aspect-[4/3] img-placeholder text-2xl">
            {lookbook[2].name}
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 aspect-[3/4] md:-mt-24 img-placeholder text-2xl">
            {lookbook[3].name}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b border-bbespresso/30 bg-bbpink/25">
        {[
          { title: "Considered Materials", body: "Natural fibers and durable blends sourced for longevity." },
          { title: "Small-Batch Production", body: "Limited runs that reduce waste and preserve fit and finish." },
          { title: "Free Shipping Over $150", body: "Standard delivery on every U.S. order above the threshold." },
        ].map((v, i) => (
          <div
            key={v.title}
            className={`px-8 py-12 ${i < 2 ? "md:border-r border-bbespresso/20" : ""}`}
          >
            <div className="font-serif text-2xl">{v.title}</div>
            <p className="mt-3 text-sm text-bbespresso/75">{v.body}</p>
          </div>
        ))}
      </section>

      {/* GALLERY */}
      <section className="px-6 lg:px-16 py-20">
        <h2 className="font-serif text-4xl mb-10">The Edit</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {products.slice(0, 8).map((p) => (
            <div key={p.id} className="aspect-square img-placeholder text-sm">
              {p.name}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
