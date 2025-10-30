
import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative h-80 bg-gray-900">
        <img src="/images/about-us-banner.png" alt="Craftsmanship" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white tracking-tight">Hashamat San'ati, Qulaylik Falsafasi</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-20">
        {/* Our Story & Philosophy */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="prose lg:prose-lg max-w-none text-gray-600">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Bizning hikoyamiz va Falsafamiz</h2>
              <p><span className="font-semibold text-gray-700">CasaBellaUz</span> - go'zallik va qulaylik uyg'unligi. Biz har bir uyni zamonaviy, shinam va o'ziga xos maskanga aylantirishni maqsad qilganmiz.</p><br />
              <p>Sifat, nafislik va soddalik - bizning asosiy qadriyatlarimiz. Har bir mahsulot sizning uyingizdagi iliqlik va uslub ramzi.</p>
            </div>
            <div>
              <img src="/images/about-us-2.jpg" alt="Our design process" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 prose lg:prose-lg max-w-none text-gray-600">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Sizga bo'lgan sadoqatimiz</h2>
              <p><span className="font-semibold text-gray-700">CasaBellaUz</span> har bir mijozni qadrlaydi. Biz uchun bu faqat savdo emas — bu ishonch va g'amxo'rlik aloqasi.</p><br />
              <p>Siz tanlagan har bir mahsulot sifat va qulaylik kafolatiga ega. Biz doimo sizning ehtiyojlaringizni eshitamiz va har bir detaldan mukammallik yaratishga intilamiz.</p>
            </div>
            <div className="md:order-1">
              <img src="/images/about-us-3.jpg" alt="Sustainable materials" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
