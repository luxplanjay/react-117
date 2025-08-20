// ЦЕ ДЛЯ ПРИКЛАДУ ШОБ ПОТРЕНУВАТИСЬ, НАМ ЦЕ НЕ ТРЕБА ТОМУ ЩО КОМПОНЕНТ СТАТИЧНИЙ БЕЗ ДИНАМІКИ

"use client";

import { fetchTaskById } from "@/lib/tasks-service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function TaskDetails() {
  const { taskId } = useParams();

  const { data: task } = useQuery({
    queryKey: ["task", { id: taskId }],
    queryFn: () => fetchTaskById(taskId as string),
    refetchOnMount: false,
  });

  return <div>{task.text}</div>;
}
