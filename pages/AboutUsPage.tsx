import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { PARTNERS } from "@/constants";

const AboutUsPage: React.FC = () => {
  const { t } = useLanguage();
  const quote = t.aboutUs.quote
    .replace("{name}", "Casabella")
    .replace(
      /<b>(.*?)<\/b>/g,
      '<span class="font-semibold text-gray-900">$1</span>'
    );

  // Insert brand name into advantage description
  const parts = t.aboutUs.advantageDesc.split("{name}");

  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative h-80 bg-gray-900">
        <img
          src="/images/about-us-banner.webp"
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
        {/* Quote */}
        <section className="bg-gray-50 -mx-6 px-6 py-16 text-center mb-20">
          <p
            className="text-lg md:text-xl text-gray-700 leading-relaxed italic"
            dangerouslySetInnerHTML={{ __html: quote }}
          />
        </section>

        {/* Mission / Our Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="prose lg:prose-lg max-w-none text-gray-600">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {t.aboutUs.missionTitle}
              </h2>
              <p className="text-justify">
                <span className="font-semibold text-gray-700">CasaBella</span>
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

        {/* Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="md:order-2 prose lg:prose-lg max-w-none text-gray-600">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {t.aboutUs.visionTitle}
              </h2>
              <p className="text-justify">
                <span className="font-semibold text-gray-700">CasaBella</span>
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

        {/* Our Advantage / Why CasaBella */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="prose lg:prose-lg max-w-none text-gray-600">
              <p className="text-justify">
                {parts[0]}
                <span className="font-semibold text-gray-700">CasaBella</span>
                {parts[1]}
              </p>
            </div>
            <div>
              <img
                src="/images/about-us-3.jpg"
                alt="Attention to detail"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Our Partners */}
        <section className="mb-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              {t.aboutUs.ourPartners}
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
    {t.aboutUs.ourPartnersDesc}
  </p>
          </div>

          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
  {PARTNERS.map((partner) => (
    <div
      key={partner.name}
      className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center w-36 h-24 md:w-40 md:h-28"
    >
      <img
        src={partner.logo}
        alt={partner.name}
        className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition"
      />
    </div>
  ))}
</div> */}

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
    {PARTNERS.map((partner) => (
      <div
        key={partner.name}
        className="flex items-center justify-center w-40 h-28 md:w-48 md:h-32"
      >
        <img
          src={partner.logo}
          alt={partner.name}
          className="h-14 md:h-16 object-contain grayscale hover:grayscale-0 transition"
        />
      </div>
    ))}
  </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
