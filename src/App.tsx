import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProductLayout from "./cases/products/components/product-layout";

function App() {

  return (
    <div className="wrapper">

      <main>
        <Routes>
          <Route path="/products" element={<ProductLayout />}>
          </Route>
        </Routes>
      </main>
      
      <ToastContainer />

    </div>
  )
}

export default App
