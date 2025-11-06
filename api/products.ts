import axios from "axios";
import { ENDPOINT } from "@/constants";

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
  const lang = localStorage.getItem("lang") || "uz";
  const url = categoryKey && categoryKey !== "all"
    ? `${ENDPOINT}/api/v1/products?category_key=${categoryKey}`
    : `${ENDPOINT}/api/v1/products`;
  
  
    const response = await axios.get(url, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return response.data;
};