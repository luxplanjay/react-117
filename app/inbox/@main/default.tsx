export default async function InboxPage() {
  await new Promise((r) => setTimeout(r, 2000));

  return (
    <div>
      <h1>Main inbox content</h1>
    </div>
  );
}
