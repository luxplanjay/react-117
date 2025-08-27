import { fetchProductById } from "@/lib/products-api";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  const product = await fetchProductById(Number(productId));

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <img src={product.images[0]} alt={product.title} width="240" />
    </div>
  );
}
