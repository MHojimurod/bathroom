
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import ProductCard from '../components/ProductCard';
import { MAIN_HERO_SLIDES, FEATURED_PRODUCTS, WHAT_WE_SELL } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import Achievement  from '../components/AchievementLink';


const MainPage: React.FC = () =>{
  const { t } = useLanguage();
  return (
    <div>
      <HeroSlider slides={MAIN_HERO_SLIDES} />
      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {t.mainPage.achievementsTitle}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            {t.mainPage.achievementsDesc}
          </p>
         <Achievement />
        </div>
      </section>

      {/* What We Sell Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {t.mainPage.whatWeSellTitle}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                {t.mainPage.whatWeSellDesc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {WHAT_WE_SELL.map(item => (
                    <div key={item.name} className="group relative overflow-hidden rounded-lg shadow-lg">
                        <img src={item.image} alt={item.name} className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"/>
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                            <h3 className="text-white text-xl font-semibold">{item.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t.mainPage.featuredTitle}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t.mainPage.featuredDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/products" className="bg-gray-800 text-white font-semibold py-3 px-8 rounded-md hover:bg-gray-900 transition-colors duration-300">
              {t.mainPage.seeAllProducts}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
