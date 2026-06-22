export default function Footer() {
  return (
    <footer className="bg-bbespresso text-bbcream mt-20">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="font-serif text-3xl">B&amp;B BOUTIQUE</div>
          <p className="mt-4 text-sm text-bbcream/70 max-w-xs">
            B&amp;B Beauty Boutique LLC — modern apparel curated for the everyday wardrobe.
          </p>
        </div>
        <div>
          <div className="uppercase text-xs tracking-widest mb-4">Shop</div>
          <ul className="space-y-2 text-sm text-bbcream/80">
            <li>Dresses</li>
            <li>Tops</li>
            <li>Outerwear</li>
            <li>Bottoms</li>
          </ul>
        </div>
        <div>
          <div className="uppercase text-xs tracking-widest mb-4">Support</div>
          <ul className="space-y-2 text-sm text-bbcream/80">
            <li>Shipping &amp; Returns</li>
            <li>Size Guide</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <div className="uppercase text-xs tracking-widest mb-4">Newsletter</div>
          <p className="text-sm text-bbcream/70 mb-3">
            Receive new arrivals and seasonal updates.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex border border-bbcream/30"
          >
            <input
              type="email"
              required
              placeholder="Email address"
              className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-bbcream/40"
            />
            <button className="px-4 text-xs uppercase tracking-widest bg-bbpink text-bbespresso">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-bbcream/15 px-6 py-5 text-xs text-bbcream/60 flex flex-col md:flex-row gap-2 justify-between max-w-7xl mx-auto">
        <div>© {new Date().getFullYear()} B&amp;B Beauty Boutique LLC. All rights reserved.</div>
        <div>Privacy · Terms · Accessibility</div>
      </div>
    </footer>
  );
}
