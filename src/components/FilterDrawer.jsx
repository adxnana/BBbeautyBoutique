import { X } from "lucide-react";

const ALL_SIZES = ["XS", "S", "M", "L", "XL", "24", "26", "28", "30", "32"];
const ALL_COLORS = [
  { name: "Pink", hex: "#E8B4B8" },
  { name: "Black", hex: "#111" },
  { name: "Cream", hex: "#F5EFE6" },
  { name: "Espresso", hex: "#2B1D14" },
  { name: "Ivory", hex: "#F8F4EC" },
  { name: "Blush", hex: "#F2D3D1" },
  { name: "Indigo", hex: "#2C3E66" },
  { name: "Stone", hex: "#B9AE99" },
  { name: "White", hex: "#FFFFFF" },
];

export default function FilterDrawer({
  open,
  onClose,
  filters,
  setFilters,
}) {
  if (!open) return null;

  function toggle(field, value) {
    setFilters((f) => {
      const set = new Set(f[field]);
      set.has(value) ? set.delete(value) : set.add(value);
      return { ...f, [field]: Array.from(set) };
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="flex-1 bg-bbespresso/40 animate-fade-in" onClick={onClose} />
      <aside className="w-full max-w-sm bg-bbcream h-full flex flex-col animate-slide-in">
        <div className="flex items-center justify-between px-6 py-5 border-b border-bbespresso/30">
          <h2 className="font-serif text-2xl">Filter</h2>
          <button onClick={onClose} aria-label="Close filter">
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-8">
          <section>
            <div className="uppercase text-xs tracking-widest mb-3">Category</div>
            <div className="space-y-2">
              {["Dresses", "Tops", "Outerwear", "Bottoms"].map((c) => (
                <label key={c} className="flex items-center gap-3 text-sm">
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(c)}
                    onChange={() => toggle("categories", c)}
                    className="accent-bbespresso"
                  />
                  {c}
                </label>
              ))}
            </div>
          </section>

          <section>
            <div className="uppercase text-xs tracking-widest mb-3">Size</div>
            <div className="grid grid-cols-5 gap-2">
              {ALL_SIZES.map((s) => {
                const active = filters.sizes.includes(s);
                return (
                  <button
                    key={s}
                    onClick={() => toggle("sizes", s)}
                    className={`text-xs py-2 border ${
                      active
                        ? "bg-bbespresso text-bbcream border-bbespresso"
                        : "border-bbespresso/40"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </section>

          <section>
            <div className="uppercase text-xs tracking-widest mb-3">Color</div>
            <div className="flex flex-wrap gap-3">
              {ALL_COLORS.map((c) => {
                const active = filters.colors.includes(c.name);
                return (
                  <button
                    key={c.name}
                    onClick={() => toggle("colors", c.name)}
                    title={c.name}
                    className={`h-8 w-8 rounded-full border-2 ${
                      active ? "border-bbespresso ring-2 ring-bbespresso/40" : "border-bbespresso/30"
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                );
              })}
            </div>
          </section>

          <section>
            <div className="uppercase text-xs tracking-widest mb-3">
              Max Price: ${filters.maxPrice}
            </div>
            <input
              type="range"
              min={40}
              max={400}
              step={10}
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters((f) => ({ ...f, maxPrice: parseInt(e.target.value, 10) }))
              }
              className="w-full accent-bbespresso"
            />
          </section>
        </div>
        <div className="border-t border-bbespresso/30 px-6 py-4 flex gap-3">
          <button
            onClick={() =>
              setFilters({ categories: [], sizes: [], colors: [], maxPrice: 400 })
            }
            className="flex-1 py-2 border border-bbespresso/40 text-sm uppercase tracking-widest"
          >
            Reset
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-2 bg-bbespresso text-bbcream text-sm uppercase tracking-widest"
          >
            Apply
          </button>
        </div>
      </aside>
    </div>
  );
}
