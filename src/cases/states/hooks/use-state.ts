import { useQuery } from "@tanstack/react-query";
import type { StateDTO } from "../dtos/state.dto";
import { StateService } from "../services/state.service";

export function useStates() {
    return useQuery<StateDTO[]>({
        queryKey: ["states"],
        queryFn: StateService.list
    });
}