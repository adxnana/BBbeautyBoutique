import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart, FREE_SHIPPING_THRESHOLD } from "../context/CartContext.jsx";

export default function Checkout() {
  const navigate = useNavigate();
  const { items, subtotal, clearCart } = useCart();

  const [guest, setGuest] = useState(true);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
  });
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState(null);

  function applyCoupon(e) {
    e.preventDefault();
    setCouponError("");
    if (coupon.trim().toUpperCase() === "BB10") {
      setAppliedCoupon({ code: "BB10", percent: 10 });
    } else {
      setAppliedCoupon(null);
      setCouponError("That code is not valid.");
    }
  }

  const discount = appliedCoupon ? subtotal * (appliedCoupon.percent / 100) : 0;
  const shipping = subtotal - discount >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 9.99;
  const tax = (subtotal - discount) * 0.08;
  const total = Math.max(0, subtotal - discount + shipping + tax);

  async function handleCheckoutSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    // ----------------------------------------------------------------
    // PAYMENT PROCESSOR WEBHOOK INTEGRATION POINT
    // ----------------------------------------------------------------
    // Drop the live payment processor call here. The payload below is the
    // shape expected to be forwarded to the chosen processor's create-order
    // or create-payment-intent endpoint. Replace the simulated await with
    // the real fetch / SDK call (Stripe, Square, Authorize.net, etc.).
    //
    // Example:
    //   const res = await fetch("/api/payments/create", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(payload),
    //   });
    //   const data = await res.json();
    //   // Redirect to data.checkoutUrl or confirm intent.
    // ----------------------------------------------------------------

    const payload = {
      merchant: "B&B Beauty Boutique LLC",
      email,
      guest,
      address,
      coupon: appliedCoupon?.code ?? null,
      items: items.map((i) => ({
        id: i.id,
        size: i.selectedSize,
        color: i.selectedColor,
        quantity: i.quantity,
        unitPrice: i.price,
      })),
      totals: { subtotal, discount, shipping, tax, total },
    };

    // Simulated network round trip so the UI feels real until a processor is wired up.
    await new Promise((r) => setTimeout(r, 800));
    const orderId = `BB-${Date.now().toString().slice(-8)}`;

    setSubmitting(false);
    setConfirmation({ orderId, total, payload });
    clearCart();
  }

  if (confirmation) {
    return (
      <div className="px-6 lg:px-16 py-24 max-w-2xl mx-auto text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-bbespresso/60">
          Confirmation
        </div>
        <h1 className="font-serif text-5xl mt-3">Thank You</h1>
        <p className="mt-4 text-bbespresso/80">
          Order <span className="font-medium">{confirmation.orderId}</span> received.
          A receipt has been sent to your email.
        </p>
        <p className="mt-2 text-sm text-bbespresso/60">
          Total charged: ${confirmation.total.toFixed(2)}
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-8 px-6 py-3 bg-bbespresso text-bbcream text-sm uppercase tracking-widest"
        >
          Return Home
        </button>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="px-6 lg:px-16 py-24 text-center">
        <h1 className="font-serif text-4xl">Nothing to Checkout</h1>
        <Link to="/shop" className="mt-6 inline-block underline underline-offset-4">
          Browse the collection
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleCheckoutSubmit}
      className="px-6 lg:px-16 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12"
    >
      <div className="lg:col-span-7 space-y-10">
        <div>
          <h1 className="font-serif text-4xl border-b border-bbespresso/30 pb-4">Checkout</h1>
        </div>

        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="font-serif text-2xl">Contact</div>
            <label className="text-xs uppercase tracking-widest flex items-center gap-2">
              <input
                type="checkbox"
                checked={guest}
                onChange={(e) => setGuest(e.target.checked)}
                className="accent-bbespresso"
              />
              Continue as guest
            </label>
          </div>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full border border-bbespresso/30 px-4 py-3 bg-bbcream outline-none"
          />
          {!guest && (
            <input
              type="password"
              required
              placeholder="Password"
              className="w-full mt-3 border border-bbespresso/30 px-4 py-3 bg-bbcream outline-none"
            />
          )}
        </section>

        <section>
          <div className="font-serif text-2xl mb-4">Shipping Address</div>
          <div className="grid grid-cols-2 gap-3">
            <input
              required
              placeholder="First name"
              value={address.firstName}
              onChange={(e) => setAddress({ ...address, firstName: e.target.value })}
              className="border border-bbespresso/30 px-4 py-3 bg-bbcream outline-none"
            />
            <input
              required
              placeholder="Last name"
              value={address.lastName}
              onChange={(e) => setAddress({ ...address, lastName: e.target.value })}
              className="border border-bbespresso/30 px-4 py-3 bg-bbcream outline-none"
            />
            <input
              required
              placeholder="Address line 1"
              value={address.line1}
              onChange={(e) => setAddress({ ...address, line1: e.target.value })}
              className="col-span-2 border border-bbespresso/30 px-4 py-3 bg-bbcream outline-none"
            />
            <input
              placeholder="Apartment, suite (optional)"
              value={address.line2}
              onChange={(e) => setAddress({ ...address, line2: e.target.value })}
              className="col-span-2 border border-bbespresso/30 px-4 py-3 bg-bbcream outline-none"
            />
            <input
              required
              placeholder="City"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
              className="border border-bbespresso/30 px-4 py-3 bg-bbcream outline-none"
            />
            <input
              required
              placeholder="State / Region"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
              className="border border-bbespresso/30 px-4 py-3 bg-bbcream outline-none"
            />
            <input
              required
              placeholder="ZIP / Postal code"
              value={address.zip}
              onChange={(e) => setAddress({ ...address, zip: e.target.value })}
              className="border border-bbespresso/30 px-4 py-3 bg-bbcream outline-none"
            />
            <input
              value={address.country}
              onChange={(e) => setAddress({ ...address, country: e.target.value })}
              className="border border-bbespresso/30 px-4 py-3 bg-bbcream outline-none"
            />
          </div>
        </section>

        <section>
          <div className="font-serif text-2xl mb-4">Payment</div>
          <div className="border border-bbespresso/30 p-6 bg-bbcream text-sm text-bbespresso/70">
            A secure payment field will appear here once the payment processor
            webhook is connected. The order will be authorized upon submission.
          </div>
        </section>
      </div>

      <aside className="lg:col-span-5 lg:pl-8">
        <div className="bg-bbpink p-8">
          <div className="font-serif text-2xl mb-6">Order Summary</div>
          <ul className="space-y-4 mb-6">
            {items.map((item) => (
              <li key={item.key} className="flex gap-3 text-sm">
                <div className="w-14 h-16 bg-bbcream/40 img-placeholder text-[10px] shrink-0">
                  {item.name}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-xs text-bbespresso/70">
                    {item.selectedSize} · {item.selectedColor} · Qty {item.quantity}
                  </div>
                </div>
                <div>${(item.price * item.quantity).toFixed(2)}</div>
              </li>
            ))}
          </ul>

          <form onSubmit={applyCoupon} className="flex gap-2 mb-4">
            <input
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Discount code"
              className="flex-1 border border-bbespresso/40 px-3 py-2 bg-bbcream text-sm outline-none"
            />
            <button className="px-4 py-2 bg-bbespresso text-bbcream text-xs uppercase tracking-widest">
              Apply
            </button>
          </form>
          {couponError && <div className="text-xs text-red-700 mb-3">{couponError}</div>}
          {appliedCoupon && (
            <div className="text-xs mb-3">
              Code <span className="font-medium">{appliedCoupon.code}</span> applied — {appliedCoupon.percent}% off
            </div>
          )}

          <div className="space-y-2 text-sm border-t border-bbespresso/30 pt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between">
                <span>Discount</span>
                <span>− ${discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-serif text-xl pt-3 border-t border-bbespresso/30">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-6 py-4 bg-bbespresso text-bbcream uppercase tracking-widest text-sm disabled:opacity-60"
          >
            {submitting ? "Processing…" : "Place Order"}
          </button>
        </div>
      </aside>
    </form>
  );
}
