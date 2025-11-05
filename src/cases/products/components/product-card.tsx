import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { ProductDTO } from "../dtos/product.dto";
import { useCart } from "@/cases/cart/context/cart-context";

interface ProductCardProps {
  product: ProductDTO;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="flex flex-col justify-between h-full hover:shadow-lg transition-all duration-200">
      <div>
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

          <div className="flex flex-col">
            <span className="font-bold text-lg text-green-600">
              R$ {product.price}
            </span>

            <span className="text-xs text-gray-500">
              Categoria: {product.category?.name ?? "Sem categoria"}
            </span>
          </div>
        </CardContent>
      </div>

      <CardFooter className="mt-auto">
        <Button className="w-full cursor-pointer" onClick={() => addToCart(product)}>
          Adicionar ao carrinho
        </Button>
      </CardFooter>
    </Card>
  );
}
