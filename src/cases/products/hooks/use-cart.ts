import { useState, useEffect } from "react";
import type { ProductDTO } from "../dtos/product.dto";
import { toast } from "react-toastify";

export function useCart() {
  const [cart, setCart] = useState<ProductDTO[]>([]);

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        const parsed = JSON.parse(storedCart);
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
    const alreadyInCart = cart.some((p) => p.id === product.id);
    if (alreadyInCart) {
      toast.info("Produto já está no carrinho!");
      return;
    }

    setCart([...cart, product]);
    toast.success(`${product.name} adicionado ao carrinho!`);
  }

  function removeFromCart(productId: string) {
    const product = cart.find((p) => p.id === productId);
    if (!product) {
      toast.error("Produto não encontrado no carrinho!");
      return;
    }

    setCart(cart.filter((p) => p.id !== productId));
    toast.info(`${product.name} removido do carrinho.`);
  }

  function clearCart() {
    if (cart.length === 0) {
      toast.info("O carrinho já está vazio!");
      return;
    }

    setCart([]);
    toast.warn("Carrinho limpo com sucesso!");
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };
}
