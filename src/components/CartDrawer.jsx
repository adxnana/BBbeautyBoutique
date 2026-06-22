import { Link } from "react-router-dom";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart, FREE_SHIPPING_THRESHOLD } from "../context/CartContext.jsx";

export default function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    updateQuantity,
    removeItem,
    subtotal,
  } = useCart();

  if (!isOpen) return null;

  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="flex-1 bg-bbespresso/40 animate-fade-in"
        onClick={closeCart}
      />
      <aside className="w-full max-w-md bg-bbcream h-full flex flex-col animate-slide-in shadow-2xl">
        <div className="flex items-center justify-between px-6 py-5 border-b border-bbespresso/30">
          <h2 className="font-serif text-2xl">Your Bag</h2>
          <button onClick={closeCart} aria-label="Close cart">
            <X size={22} />
          </button>
        </div>

        <div className="px-6 py-4 border-b border-bbespresso/20">
          <div className="text-xs uppercase tracking-widest mb-2">
            {remaining > 0
              ? `Add $${remaining.toFixed(2)} for free shipping`
              : "You qualify for free shipping"}
          </div>
          <div className="h-1 bg-bbespresso/15 relative">
            <div
              className="absolute inset-y-0 left-0 bg-bbespresso transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 && (
            <div className="text-center mt-20 font-serif text-xl text-bbespresso/60">
              Your bag is empty
            </div>
          )}
          <ul className="space-y-6">
            {items.map((item) => (
              <li key={item.key} className="flex gap-4 pb-6 border-b border-bbespresso/15">
                <div className="w-20 h-24 bg-bbpink img-placeholder text-xs shrink-0">
                  {item.name}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-2">
                    <div className="font-serif text-lg leading-tight">{item.name}</div>
                    <div className="text-sm">${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                  <div className="text-xs text-bbespresso/70 mt-1">
                    Size {item.selectedSize} · {item.selectedColor}
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center border border-bbespresso/40">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="px-2 py-1"
                        aria-label="Decrease"
                      >
                        <Minus size={14} />
                      </button>
                      <input
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.key, parseInt(e.target.value || "1", 10))
                        }
                        className="w-10 text-center bg-transparent text-sm py-1 outline-none"
                      />
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="px-2 py-1"
                        aria-label="Increase"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.key)}
                      className="text-bbespresso/70 hover:text-bbespresso"
                      aria-label="Remove"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-bbespresso/30 px-6 py-5 space-y-4">
          <div className="flex justify-between font-serif text-xl">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <Link
            to="/checkout"
            onClick={closeCart}
            className={`block text-center py-3 uppercase tracking-widest text-sm ${
              items.length === 0
                ? "bg-bbespresso/30 text-bbcream pointer-events-none"
                : "bg-bbespresso text-bbcream hover:bg-bbespresso/90"
            }`}
          >
            Checkout
          </Link>
          <Link
            to="/cart"
            onClick={closeCart}
            className="block text-center text-sm underline underline-offset-4"
          >
            View full bag
          </Link>
        </div>
      </aside>
    </div>
  );
}
