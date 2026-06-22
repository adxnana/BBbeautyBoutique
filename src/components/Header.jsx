import { Link, NavLink } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import AnnouncementBar from "./AnnouncementBar.jsx";
import SearchOverlay from "./SearchOverlay.jsx";

const NAV = [
  { to: "/shop", label: "Shop All" },
  { to: "/shop?category=Dresses", label: "Dresses" },
  { to: "/shop?category=Tops", label: "Tops" },
  { to: "/shop?category=Outerwear", label: "Outerwear" },
  { to: "/shop?category=Bottoms", label: "Bottoms" },
];

export default function Header() {
  const { count, openCart } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="sticky top-0 z-40">
      <AnnouncementBar />
      <header className="bg-bbcream border-b border-bbespresso/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex items-center justify-between gap-6">
          <button
            className="md:hidden text-bbespresso"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <Link to="/" className="font-serif text-3xl sm:text-4xl tracking-tight text-bbespresso font-semibold">
            B&amp;B BOUTIQUE
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide uppercase">
            {NAV.map((n) => (
              <NavLink
                key={n.label}
                to={n.to}
                className={({ isActive }) =>
                  `hover:text-bbespresso/70 transition ${isActive ? "text-bbespresso" : "text-bbespresso/80"}`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-bbespresso">
            <button onClick={() => setSearchOpen(true)} aria-label="Search">
              <Search size={20} />
            </button>
            <button onClick={openCart} aria-label="Open cart" className="relative">
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-bbespresso text-bbcream text-[10px] rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="md:hidden border-t border-bbespresso/20 bg-bbcream px-6 py-4 space-y-3 text-sm uppercase tracking-wide">
            {NAV.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                onClick={() => setMobileOpen(false)}
                className="block text-bbespresso"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
