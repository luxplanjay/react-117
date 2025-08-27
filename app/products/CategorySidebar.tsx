import Link from "next/link";
import { fetchCategories } from "@/lib/products-api";

export default async function CategorySidebar() {
  // await new Promise((r) => setTimeout(r, 6000));

  const categories = await fetchCategories();

  return (
    <aside style={{ backgroundColor: "orange" }}>
      <ul>
        {categories.map((category) => (
          <li key={category.slug}>
            <Link href={`/products/${category.slug}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
