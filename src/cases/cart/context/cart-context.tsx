import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { ProductDTO } from "@/cases/products/dtos/product.dto";
import { toast } from "react-toastify";

interface CartContextData {
  cart: ProductDTO[];
  addToCart: (product: ProductDTO) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextData | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ProductDTO[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("cart");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) setCart(parsed);
      }
    } catch (err) {
      console.error("Erro ao carregar carrinho:", err);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product: ProductDTO) {
    setCart((prev) => {
      const alreadyExists = prev.some((p) => p.id === product.id);
      if (alreadyExists) {
        toast.info("Produto já está no carrinho!");
        return prev;
      }
      toast.success(`${product.name} adicionado ao carrinho!`);
      return [...prev, product];
    });
  }

  function removeFromCart(productId: string) {
    setCart((prev) => {
      const product = prev.find((p) => p.id === productId);
      if (!product) {
        toast.error("Produto não encontrado!");
        return prev;
      }
      toast.info(`${product.name} removido do carrinho.`);
      return prev.filter((p) => p.id !== productId);
    });
  }

  function clearCart() {
    if (cart.length === 0) {
      toast.info("O carrinho já está vazio!");
      return;
    }
    setCart([]);
    toast.info("Carrinho limpo com sucesso!");
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
}
