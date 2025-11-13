import React from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import  FeaturedProducts  from "../components/FeaturedProducts";
import { useLanguage } from "../context/LanguageContext";
import Achievement from "../components/AchievementLink";
import type { HeroSlide } from "../types";

const MainPage: React.FC = () => {
  const { t } = useLanguage();
  const WHAT_WE_SELL = [
    { name: t.offer.offer1, image: "/images/photo1.webp" },
    { name: t.offer.offer2, image: "/images/photo2.webp" },
    { name: t.offer.offer3, image: "/images/photo3.webp" },
    { name: t.offer.offer4, image: "/images/photo4.webp" },
  ];

  const MAIN_HERO_SLIDES: HeroSlide[] = [
    {
      image: "/images/slide1.jpg",
      headline: t.mainPage.slide.slide1,
      subHeadline: "",
      ctaText: t.mainPage.slide.slideButton,
      ctaLink: "/products",
    },
    {
      image: "/images/slide2.jpg",
      headline: t.mainPage.slide.slide2,
      subHeadline: "",
      ctaText: t.mainPage.slide.slideButton,
      ctaLink: "/products",
    },
    {
      image: "/images/slide3.webp",
      headline: t.mainPage.slide.slide3,
      subHeadline: "",
      ctaText: t.mainPage.slide.slideButton,
      ctaLink: "/products",
    },
  ];
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
            {WHAT_WE_SELL.map((item) => (
              <div
                key={item.name}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                  <h3 className="text-white text-xl font-semibold">
                    {item.name}
                  </h3>
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
          <FeaturedProducts />
          <div className="text-center">
            <Link
              to="/products"
              className="bg-gray-800 text-white font-semibold py-3 px-8 rounded-md hover:bg-gray-900 transition-colors duration-300"
            >
              {t.mainPage.seeAllProducts}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
