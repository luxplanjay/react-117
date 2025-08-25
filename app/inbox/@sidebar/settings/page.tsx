export default async function Settings() {
  await new Promise((r) => setTimeout(r, 3000));
  return <div>Setings sidebar</div>;
}
