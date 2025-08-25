import Link from "next/link";

export default async function Sidebar() {
  await new Promise((r) => setTimeout(r, 1000));

  return (
    <div>
      <ul>
        <li>
          <Link href="/inbox">Inbox home</Link>
        </li>
        <li>
          <Link href="/inbox/settings">Settings</Link>
        </li>
        <li>
          <Link href="/inbox/folders">Folders</Link>
        </li>
        <li>
          <Link href="/inbox/filters">Filters</Link>
        </li>
      </ul>
    </div>
  );
}
