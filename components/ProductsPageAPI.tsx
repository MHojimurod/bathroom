import React, { useState, useEffect, useMemo } from "react";
import HeroSlider from "../components/HeroSlider";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import { useLanguage } from "../context/LanguageContext";
import { fetchProducts, ApiProduct } from "../api/products";
import { PRODUCTS_HERO_SLIDES, PRODUCT_CATEGORIES } from "../constants";

const ProductsPageAPI: React.FC = () => {
  const { t } = useLanguage();
  const [products, setProducts] = useState<ApiProduct[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [openCategory, setOpenCategory] = useState<string>("");

  // Fetch products from API
  const loadProducts = async (categoryKey?: string) => {
    try {
      const data = await fetchProducts(categoryKey);
      setProducts(data);
    } catch (error) {
      console.error("❌ Failed to fetch products:", error);
      setProducts([]);
    }
  };

  useEffect(() => {
    loadProducts(selectedCategory);
  }, [selectedCategory]);

  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category.unique_key || "all");
    if (category.subcategories?.length > 0) {
      setOpenCategory(openCategory === category.unique_key ? "" : category.unique_key);
    } else {
      setOpenCategory("");
    }
  };

  // Map API data → component-friendly data
  const mappedProducts = useMemo(
    () =>
      products.map((p) => ({
        id: p.id,
        name: p.name,
        description: p.desc,
        price: p.price,
        image: p.image_urls?.[0] || "/no-image.png",
      })),
    [products]
  );

  return (
    <div>
      <HeroSlider slides={PRODUCTS_HERO_SLIDES} />

      <div className="container mx-auto px-6 py-16" id="categories">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <Sidebar
            categories={PRODUCT_CATEGORIES}
            selectedCategory={selectedCategory}
            openCategory={openCategory}
            onCategoryClick={handleCategoryClick}
          />

          {/* Products */}
          <main className="lg:w-3/4">
            {mappedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {mappedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-96 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-700">
                  Hech qanday mahsulot topilmadi
                </h3>
                <p className="text-gray-500 mt-2">
                  Bu ketegoriyada hali hech qanday mahsulot mavjud emas.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsPageAPI;
