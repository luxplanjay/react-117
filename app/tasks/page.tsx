import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Tasks from "./Tasks";
import { fetchTasks } from "@/lib/tasks-service";

export default async function TasksPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["tasks", { search: "" }],
    queryFn: () => fetchTasks(""),
  });

  return (
    <div>
      <h1>Tasks page</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Tasks />
      </HydrationBoundary>
    </div>
  );
}
