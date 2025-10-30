
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import ProductCard from '../components/ProductCard';
import { MAIN_HERO_SLIDES, ACHIEVEMENTS, FEATURED_PRODUCTS, WHAT_WE_SELL } from '../constants';

const AnimatedCounter: React.FC<{ value: number }> = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 1500;
        const startTime = Date.now();
        
        const frame = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const currentCount = Math.floor(progress * value);
            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(frame);
            }
        };

        requestAnimationFrame(frame);
    }, [value]);

    return <span className="text-4xl md:text-5xl font-bold text-gray-900">{count.toLocaleString()}+</span>;
};


const MainPage: React.FC = () => {
  return (
    <div>
      <HeroSlider slides={MAIN_HERO_SLIDES} />

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Mukammallik va ishonch merosi</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">Sifat va mijozlar mamnuniyatiga bo‘lgan sadoqatimiz o‘zini o‘zi namoyon etadi.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {ACHIEVEMENTS.map((ach) => (
              <div key={ach.label} className="p-6 bg-white rounded-lg shadow-md">
                <AnimatedCounter value={ach.value} />
                <p className="text-gray-500 mt-2">{ach.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Sell Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Bizning maxsus to‘plamlarimizni kashf eting</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12">Abadiy klassikalardan tortib zamonaviy dizaynlargacha — biz shakl va qulaylikning mukammal uyg‘unligini taqdim etamiz.</p>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Selections for Discerning Tastes</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">A curated showcase of our most popular and innovative bathroom solutions.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/products" className="bg-gray-800 text-white font-semibold py-3 px-8 rounded-md hover:bg-gray-900 transition-colors duration-300">
              See All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
