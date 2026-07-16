"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { taskService } from "../services/task.service";

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: taskService.createTask,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });
}