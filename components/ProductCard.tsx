import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useLanguage();
  return (
    <Link to={`/products/${product.id}`} className="block group">
      <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white h-full flex flex-col">
        <div className="overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-6 h-10 flex-grow">{product.description}</p>
          {product.price && <p className="font-semibold text-gray-800 mb-4">{product.price}</p>}
          <div className="mt-auto w-full text-center bg-gray-800 text-white font-semibold py-2 px-4 rounded-md group-hover:bg-gray-900 transition-colors duration-300">
            {t.product.moreDetails}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;