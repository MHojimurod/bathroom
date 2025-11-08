import React from "react";
import { useLanguage } from "../context/LanguageContext";

const AboutUsPage: React.FC = () => {
  const { t } = useLanguage();
  const parts = t.aboutUs.advantageDesc.split("{name}");
  const quote = t.aboutUs.quote
    .replace("{name}", "Casabella")
    .replace(
      /<b>(.*?)<\/b>/g,
      '<span class="font-semibold text-gray-900">$1</span>'
    );

  return (
    <div className="bg-white">
      <div className="relative h-80 bg-gray-900">
        <img
          src="/images/about-us-banner.png"
          alt="Craftsmanship"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white tracking-tight">
            {t.aboutUs.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
      <section className="bg-gray-50 -mx-6 px-6 py-16 text-center mb-20">
      <p
              className="text-lg md:text-xl text-gray-700 leading-relaxed italic"
              dangerouslySetInnerHTML={{ __html: quote }}
            />
        </section>
        {/* <section className="flex justify-center mb-20">
          <div className="relative bg-gray-50 border-l-4 border-purple-500 rounded-xl shadow-md p-6 max-w-3xl">
            <p
              className="text-lg md:text-xl text-gray-700 leading-relaxed italic"
              dangerouslySetInnerHTML={{ __html: quote }}
            />
          </div>
        </section> */}
        {/* Our Story & Philosophy */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="prose lg:prose-lg max-w-none text-gray-600">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {t.aboutUs.missionTitle}
              </h2>
              <p className="text-justify">
                <span className="font-semibold text-gray-700">CasaBellaUz</span>
                {t.aboutUs.missionDesc}
              </p>
              <br />
              <p className="text-justify">{t.aboutUs.missionDesc2}</p>
            </div>
            <div>
              <img
                src="/images/about-us-1.jpg"
                alt="Our design process"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="md:order-2 prose lg:prose-lg max-w-none text-gray-600">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {t.aboutUs.visionTitle}
              </h2>
              <p className="text-justify">
                <span className="font-semibold text-gray-700">CasaBellaUz</span>
                {t.aboutUs.visionDesc}
              </p>
              <br />
              <p className="text-justify">{t.aboutUs.visionDesc2}</p>
            </div>
            <div className="md:order-1">
              <img
                src="/images/about-us-2.jpg"
                alt="Sustainable materials"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="prose lg:prose-lg max-w-none text-gray-600">
              <p className="text-justify">
                {parts[0]}
                <span className="font-semibold text-gray-700">CasaBellaUz</span>
                {parts[1]}
              </p>
            </div>
            <div>
              <img
                src="/images/about-us-3.jpg"
                alt="Our design process"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
