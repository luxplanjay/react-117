export default function InboxLayout({
  // children,
  sidebar,
  main,
}: Readonly<{
  // children: React.ReactNode;
  sidebar: React.ReactNode;
  main: React.ReactNode;
}>) {
  return (
    <div style={{ border: "1px solid orangered", display: "flex", gap: 12 }}>
      <aside style={{ backgroundColor: "lightblue" }}>{sidebar}</aside>
      <div style={{ backgroundColor: "teal" }}>{main}</div>
    </div>
  );
}

// /inbox
// /inbox/folders
// /inbox/settings
// layout + @main/default.tsx + @sidebar/??/page.tsx

// /inbox > /inbox/page.tsx + /inbox/@sidebar/page.tsx
// /inbox/settings > /inbox/page.tsx + /inbox/@sidebar/settings/page.tsx
// /inbox/folders > /inbox/page.tsx + /inbox/@sidebar/folders/page.tsx
// /inbox/filters > /inbox/page.tsx + /inbox/@sidebar/filters/page.tsx
