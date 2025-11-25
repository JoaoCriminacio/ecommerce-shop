import { api } from "../../../lib/axios";
import type { OrderItemDTO } from "../dtos/order-item.dto";

const _ENDPOINT = '/order-items';

export const OrderItemService = {

    async create(orderItem: OrderItemDTO): Promise<OrderItemDTO> {
        const result = await api.post(_ENDPOINT, orderItem);
        return result.data;
    },
};