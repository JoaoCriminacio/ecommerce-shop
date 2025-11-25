import { useQuery } from "@tanstack/react-query";
import type { ProductDTO } from "../dtos/product.dto";
import { ProductService } from "../services/product.service";

export function useProducts() {
    return useQuery<ProductDTO[]>({
        queryKey: ["products"],
        queryFn: ProductService.list
    });
} 