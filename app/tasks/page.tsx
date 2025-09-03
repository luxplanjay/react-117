import { fetchTasks } from "@/lib/tasks-api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Tasks from "./Tasks";
import Link from "next/link";

export default async function TasksPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });

  return (
    <div>
      <Link href="/tasks/create">Create new task</Link>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Tasks />
      </HydrationBoundary>
    </div>
  );
}
