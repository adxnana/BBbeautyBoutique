import { Link } from "react-router-dom";
import products from "../data/productsData.js";
import ProductCard from "../components/ProductCard.jsx";

export default function Home() {
  const newArrivals = products.slice(0, 6);
  const lookbook = products.slice(0, 4);

  // Pick a dynamic, striking main image for the primary hero asset
  const heroProduct = products.find((p) => p.id === "beaumont-trench") || products[0];
  const heroImage = heroProduct?.images?.[0];

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
        {/* Container defines the visual boundary */}
        <div className="lg:col-span-7 bg-bbpink img-placeholder text-3xl min-h-[60vh] relative overflow-hidden">
          <span className="absolute inset-0 flex items-center justify-center p-4">Featured Lookbook Image</span>
          {heroImage && (
            <img
              src={heroImage}
              alt="B&B Boutique Hero Look"
              loading="eager"
              // `object-cover` crops the image into the space safely without squishing it
              className="absolute inset-0 h-full w-full object-cover object-center"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          )}
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
          {lookbook.map((p, idx) => {
            // These aspect ratios (3/4 and 4/3) strict-lock the layout dimensions
            const layoutClasses = [
              "col-span-12 md:col-span-5 aspect-[3/4]",
              "col-span-12 md:col-span-4 md:col-start-7 aspect-[3/4] mt-0 md:mt-16",
              "col-span-12 md:col-span-6 md:col-start-2 aspect-[4/3]",
              "col-span-12 md:col-span-4 md:col-start-9 aspect-[3/4] md:-mt-24"
            ];

            return (
              <Link 
                to={`/product/${p.id}`} 
                key={p.id} 
                className={`${layoutClasses[idx] || "col-span-6"} img-placeholder text-2xl relative overflow-hidden block group`}
              >
                <span className="absolute inset-0 flex items-center justify-center text-center p-4 z-10 bg-bbespresso/0 group-hover:bg-bbespresso/10 transition-colors duration-300">
                  {p.name}
                </span>
                {p.images?.[0] && (
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    loading="lazy"
                    // Absolute positioning + full width/height + object-cover guarantees sizing compliance
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-102"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </section>

      {/* VALUES */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b border-bbespresso/30 bg-bbpink/25">
        {[
          { title: "Considered Materials", body: "Natural fibers and durable blends sourced for longevity." },
          { title: "Small-Batch Production", body: "Limited runs that reduce waste and preserve fit and finish." },
          { title: "Free Shipping Over $150", body: "Standard delivery on every order above the threshold." },
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
            <Link 
              to={`/product/${p.id}`} 
              key={p.id} 
              className="aspect-square img-placeholder text-sm relative overflow-hidden block group"
            >
              <span className="absolute bottom-3 left-3 bg-bbcream text-bbespresso text-[10px] uppercase tracking-widest px-2 py-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {p.name}
              </span>
              {p.images?.[0] && (
                <img
                  src={p.images[0]}
                  alt={p.name}
                  loading="lazy"
                  // Forces perfect squares out of any raw image shape
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              )}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
