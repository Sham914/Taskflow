"use client";

import { useState } from "react";
import { useTasks } from "./hooks/useTasks";
import { useCreateTask } from "./hooks/useCreateTask";

export default function Home() {
  const [title, setTitle] = useState("");

  const { data: tasks } = useTasks();

  const createTask = useCreateTask();

  return (
    <main className="max-w-xl mx-auto mt-10 space-y-4">

      <h1 className="text-3xl font-bold">
        TaskFlow
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          createTask.mutate(title);

          setTitle("");
        }}
      >
        <input
          className="border p-2 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task..."
        />
      </form>

      <div className="space-y-2">
        {tasks?.map((task) => (
          <div
            key={task.id}
            className="border rounded p-3"
          >
            {task.title}
          </div>
        ))}
      </div>

    </main>
  );
}