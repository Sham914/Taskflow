import { api } from "../lib/axios";
import { Task } from "../types/task";

export const taskService = {
  async getTasks() {
    const { data } = await api.get<Task[]>("/tasks");
    return data;
  },

  async createTask(title: string) {
    const { data } = await api.post("/tasks", {
      title,
    });

    return data;
  },
};