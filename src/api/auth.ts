import api from "./axios";
import { TloginData } from "../types";

export const login = async (body: TloginData) => {
    const { data } = await api.post("/auth/login", body);
    return data;
};
