import { fetchTaskById } from "@/lib/tasks-api";

export default async function SingleTask({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) {
  const { taskId } = await params;

  console.log("1 - SingleTask BEFORE fetchTaskById");

  const task = await fetchTaskById(taskId);

  console.log("5 - SingleTask AFTER fetchTaskById");

  return (
    <div>
      <p>{task.text}</p>
    </div>
  );
}
