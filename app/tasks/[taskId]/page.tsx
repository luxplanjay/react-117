import { fetchTaskById } from "@/lib/tasks-service";

type Props = {
  params: Promise<{ taskId: string }>;
};

export default async function TaskDetailsPage({ params }: Props) {
  const { taskId } = await params;

  const task = await fetchTaskById(taskId);

  return (
    <div>
      <h1>TaskDetailsPage {taskId}</h1>
      {task.text}
    </div>
  );
}

// ЦЕ ДЛЯ ПРИКЛАДУ ШОБ ПОТРЕНУВАТИСЬ, НАМ ЦЕ НЕ ТРЕБА ТОМУ ЩО КОМПОНЕНТ СТАТИЧНИЙ БЕЗ ДИНАМІКИ

// import { fetchTaskById } from "@/lib/tasks-service";
// import {
//   dehydrate,
//   HydrationBoundary,
//   QueryClient,
// } from "@tanstack/react-query";
// import TaskDetails from "./TaskDetails";

// type Props = {
//   params: Promise<{ taskId: string }>;
// };

// export default async function TaskDetailsPage({ params }: Props) {
//   const { taskId } = await params;

//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ["task", { id: taskId }],
//     queryFn: () => fetchTaskById(taskId),
//   });

//   return (
//     <div>
//       <h1>TaskDetailsPage {taskId}</h1>
//       <HydrationBoundary state={dehydrate(queryClient)}>
//         <TaskDetails />
//       </HydrationBoundary>
//     </div>
//   );
// }
