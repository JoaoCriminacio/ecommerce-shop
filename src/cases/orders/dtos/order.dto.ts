import type { CustomerDTO } from "@/cases/customers/dtos/customer.dto";
import type { OrderItemDTO } from "./order-item.dto";

export interface OrderDTO {
    id?: string;
    custormer: CustomerDTO;
    status: string;
    total: number;
    items: OrderItemDTO[];
    createdAt: Date;
    updatedAt: Date;
}