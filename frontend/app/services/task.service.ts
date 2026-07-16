import { api } from "../lib/axios";

export const taskService = {
    getTasks: () => api.get("/tasks"),
};