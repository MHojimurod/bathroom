import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { ENDPOINT } from "@/constants";

interface Product {
  id: number;
  name: string;
  desc: string;
  price: string | number;
  image_urls?: string[];
}

const FeaturedProducts: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true);

        // Get language from localStorage, default to 'uz' if not set
        const lang = localStorage.getItem("lang") || "uz";

        const { data } = await axios.get<Product[]>(`${ENDPOINT}/api/v1/products`, {
          headers: {
            "Accept-Language": lang,
          },
        });

        if (Array.isArray(data)) {
          setFeaturedProducts(
            data.slice(0, 8).map((p) => ({
              ...p,
              image_urls: p.image_urls || ["/no-image.png"], // fallback image
            }))
          );
        } else {
          console.error("API returned unexpected data:", data);
        }
      } catch (err) {
        console.error("Error fetching featured products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);


  if (loading) {
    return (
      <div className="text-center py-20 text-gray-600 text-lg">
        Yuklanmoqda...
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      {featuredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={{
            id: product.id,
            name: product.name,
            description: product.desc,
            price: product.price,
            image: product.image_urls![0],
          }}
        />
      ))}
    </div>
  );
};

export default FeaturedProducts;
