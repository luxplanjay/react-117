"use client";

import { fetchProductsByCategory } from "@/lib/products-api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function Products() {
  const { slug } = useParams<{ slug: string[] }>();
  const category = slug[0];

  const { data: products } = useQuery({
    queryKey: ["products", { category }],
    queryFn: () => fetchProductsByCategory(category),
    refetchOnMount: false,
  });

  return (
    <ul>
      {products?.map((product) => (
        <li key={product.id}>
          <Link href={`/product-details/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}
