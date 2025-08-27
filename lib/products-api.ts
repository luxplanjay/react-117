import axios from "axios";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

export const fetchProductsByCategory = async (category: string) => {
  const res = await axios.get<{ products: Product[] }>(
    `https://dummyjson.com/products/category/${category}`
  );

  return res.data.products;
};

export const fetchProductById = async (productId: Product["id"]) => {
  const res = await axios.get<Product>(
    `https://dummyjson.com/products/${productId}`
  );
  return res.data;
};

export interface Category {
  slug: string;
  name: string;
}

export const fetchCategories = async () => {
  const res = await axios.get<Category[]>(
    "https://dummyjson.com/products/categories"
  );
  return res.data;
};
