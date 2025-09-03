export default async function SingleTask({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) {
  const { taskId } = await params;

  return (
    <div>
      <h1>Single task {taskId} page</h1>
    </div>
  );
}
