import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import { reportBBError } from "./lib/bbError.js";

class BBBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, info) {
    reportBBError(error, { boundary: "app_root", extra: info });
  }
  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex items-center justify-center px-6 text-center">
          <div>
            <h1 className="font-serif text-5xl">Something went wrong</h1>
            <p className="mt-3 text-bbespresso/70">Please refresh the page.</p>
            <button
              onClick={() => this.setState({ error: null })}
              className="mt-6 px-5 py-2 bg-bbespresso text-bbcream text-sm uppercase tracking-widest"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-6">
      <div>
        <div className="font-serif text-7xl">404</div>
        <p className="mt-3 text-bbespresso/70">This page could not be found.</p>
        <Link
          to="/"
          className="inline-block mt-6 px-5 py-2 bg-bbespresso text-bbcream text-sm uppercase tracking-widest"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BBBoundary>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </BBBoundary>
  );
}
