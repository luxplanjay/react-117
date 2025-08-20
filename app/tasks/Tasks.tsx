"use client";

import { deleteTask, fetchTasks } from "@/lib/tasks-service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";

// localhost:3000/tasks
// Next server виконує компонент TasksPage
// Виконується запит з queryClient.prefetchQuery
// Результат запиту зберігається у кеші queryClient
// Виконується компонент Tasks
// Отримує дані від queryClient
// В браузер відправляється сторінка
// В браузері ініціалізується useQuery
// useQuery вже використовує кеш queryClient ["tasks"]
// refetchOnMount: false щоб не робити зайвий запит тому що
// ці дані вже є в кеші queryClient ["tasks"]

export default function Tasks() {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState("");

  const { data } = useQuery({
    queryKey: ["tasks", { search: searchQuery }],
    queryFn: () => fetchTasks(searchQuery),
    refetchOnMount: false,
  });

  const mutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {data?.map((task) => (
        <div key={task.id}>
          {task.text} <Link href={`/tasks/${task.id}`}>Details</Link>
          <button onClick={() => mutation.mutate(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
