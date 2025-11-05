import { useCart } from "@/cases/cart/context/cart-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { toast } from "react-toastify";

export default function CartLayout() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, p) => sum + Number(p.price), 0);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Meu Carrinho</h1>

      {
        cart.length === 0 ? 
            (
                <p className="text-gray-500">Seu carrinho está vazio.</p>
            ) 
        : 
            (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        {
                            cart.map((product) => (
                                <Card key={product.id} 
                                      className="flex flex-col justify-between h-full">
                                    <CardHeader>
                                        <h2 className="text-lg font-semibold">{product.name}</h2>
                                    </CardHeader>

                                    <CardContent>
                                        {
                                            product.description ? 
                                                (<p className="text-sm text-gray-600 mb-2">{product.description}</p>) 
                                            : 
                                                (<div className="mb-6" />)
                                        }

                                        <span className="font-bold text-lg text-green-600">
                                            R$ {product.price}
                                        </span>
                                    </CardContent>

                                    <CardFooter className="mt-auto">
                                        <Button variant="destructive"
                                                className="w-full cursor-pointer"
                                                onClick={() => {
                                                removeFromCart(product.id!);
                                                }}>
                                            Remover
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))
                        }
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t pt-4">
                        <h2 className="text-xl font-semibold">
                            Total: <span className="text-green-600">R$ {total.toFixed(2)}</span>
                        </h2>

                        <div className="flex gap-3">
                            <Button variant="secondary"
                                    className="cursor-pointer"
                                    onClick={() => {
                                    clearCart();
                                    }}>
                                Limpar carrinho
                            </Button>

                            <Button onClick={() => toast.success("Compra finalizada com sucesso!")}
                                    className="cursor-pointer">
                                Finalizar compra
                            </Button>
                        </div>
                    </div>
                </>
            )
      }
    </div>
  );
}
