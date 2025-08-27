import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchProductsByCategory } from "@/lib/products-api";
import ProductsClient from "./Products";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function Products({ params }: Props) {
  const { slug } = await params;
  const category = slug[0];

  // await new Promise((r) => setTimeout(r, 2000));

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products", { category }],
    queryFn: () => fetchProductsByCategory(category),
  });

  return (
    <div style={{ backgroundColor: "skyblue" }}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProductsClient />
      </HydrationBoundary>
    </div>
  );
}
