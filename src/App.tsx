import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProductLayout from "./cases/products/components/product-layout";
import { Header } from "./components/layout/header";
import CartLayout from "./cases/cart/components/cart-layout";
import { CartProvider } from "./cases/cart/context/cart-context";

function App() {

  return (
    <CartProvider>
      <div className="wrapper">
        <Header />

        <main>
          <Routes>
            <Route path="/products" element={<ProductLayout />} />
            <Route path="/cart" element={<CartLayout />} />
          </Routes>
        </main>
        
        <ToastContainer />

      </div>
    </CartProvider>
  );
}

export default App
