import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./components/layout/login";
import Register from "./components/layout/register";
import ProductLayout from "./cases/products/components/product-layout";
import { Header } from "./components/layout/header";
import { CartProvider } from "./context/cart-context";
import { Cart } from "./components/layout/cart";
import { PublicRoute } from "./components/public-route";
import { ProtectedRoute } from "./components/protected-route";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login" || location.pathname === "/register";
  const token = localStorage.getItem("token");

  return (
    <CartProvider>
      <div className="wrapper">
        {!isLoginPage && <Header />}

        <main>
          <Routes>
            <Route path="/login" element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } />

            <Route path="/register" element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            } />

            <Route path="/products" element={
              <ProtectedRoute>
                <ProductLayout />
              </ProtectedRoute>
            } />

            <Route path="/cart" element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            } />

            <Route path="*" element={
              <Navigate to={token ? "/products" : "/login"} replace />
            } />
          </Routes>
        </main>

        <ToastContainer />
      </div>
    </CartProvider>
  );
}

export default App;
