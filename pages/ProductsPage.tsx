import React, { useState, useMemo } from 'react';
import HeroSlider from '../components/HeroSlider';
import ProductCard from '../components/ProductCard';
import { PRODUCTS_HERO_SLIDES, PRODUCT_CATEGORIES, ALL_PRODUCTS } from '../constants';
import type { Product, ProductCategory } from '../types';

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [openCategory, setOpenCategory] = useState('');

  const handleCategoryClick = (category: ProductCategory) => {
    setSelectedCategory(category.id);
    setSelectedSubCategory(''); // Reset subcategory when main category changes
    if (category.subcategories.length > 0) {
      setOpenCategory(openCategory === category.id ? '' : category.id);
    } else {
      setOpenCategory('');
    }
  };

  const handleSubCategoryClick = (subcategory: string) => {
    setSelectedSubCategory(subcategory);
  };

  const filteredProducts = useMemo<Product[]>(() => {
    let products = ALL_PRODUCTS;
    if (selectedCategory !== 'all') {
      products = products.filter(p => p.category === selectedCategory);
    }
    if (selectedSubCategory) {
      products = products.filter(p => p.subcategory === selectedSubCategory);
    }
    return products;
  }, [selectedCategory, selectedSubCategory]);

  return (
    <div>
      <HeroSlider slides={PRODUCTS_HERO_SLIDES} />
      
      <div className="container mx-auto px-6 py-16" id="categories">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Sidebar */}
          <aside className="lg:w-1/4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Categories</h2>
            <ul className="space-y-1">
              {PRODUCT_CATEGORIES.map(category => (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategoryClick(category)}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 flex justify-between items-center ${
                      selectedCategory === category.id && !selectedSubCategory
                        ? 'bg-gray-800 text-white font-semibold'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {category.name}
                    {category.subcategories.length > 0 && (
                      <svg className={`w-4 h-4 transition-transform duration-300 ${openCategory === category.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    )}
                  </button>
                  {category.subcategories.length > 0 && openCategory === category.id && (
                    <ul className="pl-6 pt-2 space-y-1">
                      {category.subcategories.map(sub => (
                        <li key={sub}>
                          <button
                            onClick={() => handleSubCategoryClick(sub)}
                            className={`w-full text-left px-4 py-1.5 text-sm rounded-md transition-colors duration-200 ${
                              selectedSubCategory === sub
                                ? 'bg-gray-700 text-white font-semibold'
                                : 'text-gray-500 hover:bg-gray-100'
                            }`}
                          >
                            {sub}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Product Display Area */}
          <main className="lg:w-3/4">
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-96 bg-gray-50 rounded-lg">
                    <h3 className="text-2xl font-semibold text-gray-700">No Products Found</h3>
                    <p className="text-gray-500 mt-2">There are no products available in this category yet.</p>
                </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;