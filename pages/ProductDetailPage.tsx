import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ALL_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { CheckIcon } from '../components/IconComponents';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = useMemo(() => ALL_PRODUCTS.find(p => p.id === productId), [productId]);
  
  const [mainImage, setMainImage] = useState(product?.gallery[0]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return ALL_PRODUCTS.filter(
      p => p.category === product.category && p.id !== product.id
    ).slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Product Not Found</h1>
        <p className="text-gray-600 mt-4">We couldn't find the product you're looking for.</p>
        <Link to="/products" className="mt-8 inline-block bg-gray-800 text-white font-semibold py-3 px-8 rounded-md hover:bg-gray-900">
          Back to Products
        </Link>
      </div>
    );
  }

  // Set initial main image when product loads
  if (mainImage !== product.gallery[0]) {
      setMainImage(product.gallery[0]);
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-gray-800">Bosh sahifa</Link> &gt; 
          <Link to="/products" className="hover:text-gray-800"> Mahsulotlar</Link> &gt; 
          <span className="text-gray-800"> {product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="border rounded-lg overflow-hidden mb-4">
              <img src={mainImage} alt={product.name} className="w-full h-auto object-cover aspect-square" />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.gallery.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`border rounded-md overflow-hidden transition-all duration-200 ${mainImage === img ? 'ring-2 ring-gray-800' : 'hover:opacity-80'}`}
                >
                  <img src={img} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-auto object-cover aspect-square" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            {product.price && <p className="text-3xl text-gray-800 mb-6">{product.price}</p>}
            <p className="text-gray-600 leading-relaxed mb-8">{product.longDescription}</p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Asosiy xususiyatlar</h3>
              <ul className="space-y-3 text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-gray-800 mr-3 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
                 <a href="tel:+998773164444" className="w-full bg-gray-800 text-white font-semibold py-4 px-8 rounded-md hover:bg-gray-900 transition-colors duration-300 text-lg">
                    Hoziroq bog'laning
                 </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Texnik xususiyatlar</h3>
              <div className="space-y-2">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="font-semibold text-gray-700">{spec.name}:</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">O'xshash mahsulotlar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(related => (
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