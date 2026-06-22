import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import products from "../data/productsData.js";
import ProductCard from "../components/ProductCard.jsx";
import FilterDrawer from "../components/FilterDrawer.jsx";

export default function Shop() {
  const [params] = useSearchParams();
  const initialCategory = params.get("category");

  const [filters, setFilters] = useState({
    categories: initialCategory ? [initialCategory] : [],
    sizes: [],
    colors: [],
    maxPrice: 400,
  });
  const [sort, setSort] = useState("newest");
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setFilters((f) => ({ ...f, categories: [initialCategory] }));
    }
  }, [initialCategory]);

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (filters.categories.length && !filters.categories.includes(p.category)) return false;
      if (filters.sizes.length && !p.sizes.some((s) => filters.sizes.includes(s))) return false;
      if (filters.colors.length && !p.colors.some((c) => filters.colors.includes(c))) return false;
      if (p.price > filters.maxPrice) return false;
      return true;
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [filters, sort]);

  return (
    <div className="px-6 lg:px-16 py-12">
      <div className="border-b border-bbespresso/30 pb-8 mb-8">
        <div className="text-xs uppercase tracking-[0.3em] text-bbespresso/60">Collection</div>
        <h1 className="font-serif text-5xl mt-2">Shop All</h1>
      </div>

      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => setFilterOpen(true)}
          className="flex items-center gap-2 text-sm uppercase tracking-widest"
        >
          <SlidersHorizontal size={16} /> Filter
        </button>
        <div className="flex items-center gap-3 text-sm">
          <span className="uppercase tracking-widest text-xs text-bbespresso/60">Sort</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-transparent border-b border-bbespresso/40 py-1 outline-none"
          >
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="py-24 text-center font-serif text-2xl text-bbespresso/60">
          No items match the current filters.
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}

      <FilterDrawer
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
}
