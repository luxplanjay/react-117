"use client";

import { fetchTasks } from "@/lib/tasks-api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function Tasks() {
  const { data: tasks } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
    refetchOnMount: false,
  });

  return (
    <div>
      <ul>
        {tasks?.map((task) => (
          <li key={task.id}>
            <Link href={`/tasks/${task.id}`}>{task.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
