import axios from "axios";

export interface ApiProduct {
  id: number | string;
  name: string;
  desc: string;
  price: string;
  category_key: string;
  image_urls: string[];
  characteristics: string[];
  technical_characteristics: string[];
  created_at: string;
  updated_at: string;
}

export const fetchProducts = async (categoryKey?: string): Promise<ApiProduct[]> => {
  const url = categoryKey && categoryKey !== "all"
    ? `http://localhost:5000/api/v1/products?category_key=${categoryKey}`
    : `http://localhost:5000/api/v1/products`;
    
  const response = await axios.get(url);
  return response.data;
};
