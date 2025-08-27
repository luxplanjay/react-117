import { Suspense } from "react";
// import CategorySidebar from "./CategorySidebar";

export default function ProductsLayout({
  children,
  sidebar,
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
}>) {
  return (
    <div style={{ backgroundColor: "teal", display: "flex", gap: 12 }}>
      {/* <Suspense fallback={<div>Loading categories...</div>}>
        <CategorySidebar />
      </Suspense> */}
      <Suspense fallback={<div>Loading categories...</div>}>{sidebar}</Suspense>
      {children}
    </div>
  );
}
