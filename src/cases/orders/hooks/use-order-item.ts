import { useMutation } from "@tanstack/react-query";
import { OrderItemService } from "../services/order-item.service";
import type { OrderItemDTO } from "../dtos/order-item.dto";

export function useCreateOrderItem() {
    return useMutation<OrderItemDTO, Error, Omit<OrderItemDTO, 'id'>>({
        mutationFn: (orderItem: Omit<OrderItemDTO, 'id'>) => OrderItemService.create(orderItem)
    });
}