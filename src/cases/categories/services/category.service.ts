import { api } from "../../../lib/axios";
import type { CategoryDTO } from "../dtos/category.dto";

const _ENDPOINT = "/categories";

export const CategoryService = {

    async list(): Promise<CategoryDTO[]> {
        const result = await api.get(_ENDPOINT);
        return result.data;
    }
};