import { Link } from "react-router-dom";
import { Plus, Minus, Trash2 } from "lucide-react";
import { useCart, FREE_SHIPPING_THRESHOLD } from "../context/CartContext.jsx";

export default function Cart() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  if (items.length === 0) {
    return (
      <div className="px-6 lg:px-16 py-24 text-center">
        <h1 className="font-serif text-5xl">Your Bag is Empty</h1>
        <p className="mt-4 text-bbespresso/70">Start with the latest arrivals.</p>
        <Link
          to="/shop"
          className="inline-block mt-8 px-6 py-3 bg-bbespresso text-bbcream text-sm uppercase tracking-widest"
        >
          Shop the Edit
        </Link>
      </div>
    );
  }

  return (
    <div className="px-6 lg:px-16 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-8">
        <h1 className="font-serif text-5xl border-b border-bbespresso/30 pb-6">Your Bag</h1>
        <ul className="divide-y divide-bbespresso/15">
          {items.map((item) => (
            <li key={item.key} className="py-6 flex gap-6">
              <div className="w-28 h-36 bg-bbpink img-placeholder text-xs shrink-0">
                {item.name}
              </div>
              <div className="flex-1">
                <div className="flex justify-between gap-4">
                  <div className="font-serif text-xl">{item.name}</div>
                  <div className="text-sm">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
                <div className="text-xs text-bbespresso/70 mt-1">
                  Size {item.selectedSize} · {item.selectedColor}
                </div>
                <div className="mt-4 flex items-center justify-between max-w-xs">
                  <div className="flex items-center border border-bbespresso/40">
                    <button onClick={() => updateQuantity(item.key, item.quantity - 1)} className="px-3 py-2">
                      <Minus size={14} />
                    </button>
                    <input
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.key, parseInt(e.target.value || "1", 10))}
                      className="w-12 text-center bg-transparent py-2 outline-none"
                    />
                    <button onClick={() => updateQuantity(item.key, item.quantity + 1)} className="px-3 py-2">
                      <Plus size={14} />
                    </button>
                  </div>
                  <button onClick={() => removeItem(item.key)} aria-label="Remove">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <aside className="lg:col-span-4 bg-bbpink p-8 h-fit">
        <div className="font-serif text-2xl mb-6">Order Summary</div>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{subtotal >= FREE_SHIPPING_THRESHOLD ? "Free" : "Calculated at checkout"}</span>
          </div>
          {remaining > 0 && (
            <div className="text-xs text-bbespresso/80 pt-2">
              Add ${remaining.toFixed(2)} more for free shipping.
            </div>
          )}
        </div>
        <Link
          to="/checkout"
          className="block text-center mt-6 py-3 bg-bbespresso text-bbcream text-sm uppercase tracking-widest"
        >
          Checkout
        </Link>
      </aside>
    </div>
  );
}
