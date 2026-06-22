import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, Search } from "lucide-react";
import products from "../data/productsData.js";

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  if (!open) return null;

  const results = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-bbcream animate-fade-in flex flex-col">
      <div className="border-b border-bbespresso/30 px-6 py-5 flex items-center gap-4">
        <Search size={20} className="text-bbespresso" />
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search dresses, tops, outerwear…"
          className="flex-1 bg-transparent text-xl outline-none font-serif placeholder:text-bbespresso/40"
        />
        <button onClick={onClose} aria-label="Close search">
          <X size={22} className="text-bbespresso" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-8">
        {!query && (
          <div className="text-center text-bbespresso/60 font-serif text-2xl mt-20">
            Search the collection
          </div>
        )}
        {query && results.length === 0 && (
          <div className="text-center text-bbespresso/60 font-serif text-xl mt-20">
            No items matched "{query}"
          </div>
        )}
        {results.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {results.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                onClick={onClose}
                className="group"
              >
                <div className="aspect-[3/4] bg-bbpink img-placeholder text-base">
                  {p.name}
                </div>
                <div className="mt-2 font-serif text-lg">{p.name}</div>
                <div className="text-sm">${p.price.toFixed(2)}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
