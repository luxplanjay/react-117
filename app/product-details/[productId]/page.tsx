import { fetchProductById } from "@/lib/products-api";
import Image from "next/image";

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
      <Image
        src={product.images[0]}
        alt={product.title}
        width={240}
        height={240}
      />
    </div>
  );
}
