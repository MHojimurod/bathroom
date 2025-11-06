import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { CheckIcon } from "../components/IconComponents";
import { ENDPOINT } from "../constants";
import { useLanguage } from "../context/LanguageContext";

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { t } = useLanguage();
  const [product, setProduct] = useState<any | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState<string>("");

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        const lang = localStorage.getItem("lang") || "uz";

        // Fetch product detail
        const { data } = await axios.get(`${ENDPOINT}/api/v1/products/${productId}`, {
          headers: { "Accept-Language": lang },
        });
        setProduct(data);
        if (data.image_urls?.length) setMainImage(data.image_urls[0]);

        // Fetch related products by category
        if (data.category_key) {
          const relatedRes = await axios.get(
            `${ENDPOINT}/api/v1/products?category_key=${data.category_key}`,
            {
              headers: { "Accept-Language": lang },
            }
          );
          const related = relatedRes.data.filter((p: any) => p.id !== data.id).slice(0, 4);
          setRelatedProducts(related);
        }
      } catch (err) {
        console.error("Error fetching product details:", err);
      } finally {
        setLoading(false);
      }
    };

    if (productId) fetchProductData();
  }, [productId]);

  const productFeatures = useMemo(() => {
    try {
      return Array.isArray(product?.characteristics)
        ? product.characteristics
        : JSON.parse(product?.characteristics || "[]");
    } catch {
      return [];
    }
  }, [product]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh] text-gray-600 text-lg">
        Yuklanmoqda...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Mahsulot topilmadi</h1>
        <p className="text-gray-600 mt-4">
          Siz qidirayotgan mahsulot mavjud emas yoki o‘chirilgan.
        </p>
        <Link
          to="/products"
          className="mt-8 inline-block bg-gray-800 text-white font-semibold py-3 px-8 rounded-md hover:bg-gray-900"
        >
          Mahsulotlarga qaytish
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-gray-800">{t.header.navLinks.home}</Link> &gt;
          <Link to="/products" className="hover:text-gray-800"> {t.header.navLinks.products}</Link> &gt;
          <span className="text-gray-800"> {product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="border rounded-lg overflow-hidden mb-4">
              <img
                src={ENDPOINT + mainImage}
                alt={product.name}
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.image_urls?.map((img: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`border rounded-md overflow-hidden transition-all duration-200 ${mainImage === img ? "ring-2 ring-gray-800" : "hover:opacity-80"
                    }`}
                >
                  <img
                    src={ENDPOINT + img}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-auto object-cover aspect-square"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            {product.price && (
              <p className="text-3xl text-gray-800 mb-6">{product.price} UZS</p>
            )}
            <p className="text-gray-600 leading-relaxed mb-8">{product.desc}</p>

            {productFeatures.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                  {t.product.mainFeatures}
                </h3>
                <ul className="space-y-3 text-gray-600">
                  {productFeatures.map((feature: any, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-gray-800 mr-3 mt-1 flex-shrink-0" />
                      <span>{feature.name || feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-8">
              <a
                href="tel:+998773164444"
                className="w-full bg-gray-800 text-white font-semibold py-4 px-8 rounded-md hover:bg-gray-900 transition-colors duration-300 text-lg block text-center"
              >
                {t.product.contactNow}
              </a>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              O‘xshash mahsulotlar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
