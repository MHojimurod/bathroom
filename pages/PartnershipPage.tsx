import React, { useState } from "react";
import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from "../constants";
import { useLanguage } from '../context/LanguageContext';

const PartnershipPage: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    website: "",
    partnershipType: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("Ariza yuborilmoqda...");

    const message = `
  📝 Yangi hamkorlik arizasi:
  
  🏢 Kompaniya: ${formData.companyName}
  👤 Aloqa shaxs: ${formData.contactPerson}
  📧 Email: ${formData.email}
  📞 Telefon: ${formData.phone}
  🌐 Sayt: ${formData.website}
  🤝 Hamkorlik turi: ${formData.partnershipType}
  💬 Xabar: ${formData.message}
    `;

    try {
      await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "HTML",
          }),
        }
      );

      setFormStatus(
        `${t.partner.form.formSuccess}`
      );
      setFormData({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        website: "",
        partnershipType: "",
        message: "",
      });
    } catch (error) {
      console.error("Telegramga yuborishda xatolik:", error);
      setFormStatus("❌ Xatolik yuz berdi. Iltimos, keyinroq urinib ko'ring.");
    }
  };

  return (
    <div className="bg-white">
      <div className="relative h-80 bg-gray-900">
        <img
          src="/images/partner-banner.png"
          alt="Partnership"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              {t.partner.title}
            </h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">

        <section className="flex justify-center mb-20">
          <div className="relative bg-gray-50 border-l-4 border-purple-500 rounded-xl shadow-md p-6 max-w-3xl">
            <p>
              {t.partner.quote}
            </p>
          </div>
        </section>


        {/* Why Partner with Us */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t.partner.offer}
            </h2>
            <ul className="space-y-4 text-gray-600 list-disc list-inside">
              <li>
                {t.partner.offer1}
              </li>
              <li>
                {t.partner.offer2}
              </li>
              <li>
                {t.partner.offer3}
              </li>
              <li>
                {t.partner.offer4}
              </li>
            </ul>
          </div>
          <img
            src="/images/partner.png"
            className="rounded-lg shadow-xl"
            alt="Collaboration"
          />
        </section>

        {/* Who We Work With */}
        <section className="bg-gray-50 -mx-6 px-6 py-16 text-center mb-20">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.partner.slogan}

          </p>
        </section>

        <section>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
              {t.partner.form.title}
            </h2>
            <p className="text-gray-600 text-center mb-8">
              {t.partner.form.desc}
            </p>

            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 border rounded-lg shadow-lg space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="companyName"
                  placeholder={t.partner.form.companyName}
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800"
                />
                <input
                  type="text"
                  name="contactPerson"
                  placeholder={t.partner.form.person}
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t.partner.form.email}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefon"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800"
                />
              </div>
              <input
                type="url"
                name="website"
                placeholder="Kompaniya websayti (Ixtiyoriy)"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800"
              />
              <select
                name="partnershipType"
                value={formData.partnershipType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800 bg-white"
              >
                <option value="" disabled>
                  Hamkorlik turi...
                </option>
                <option value="Chakana sotuvchi">Chakana sotuvchi</option>
                <option value="Distribyutor">Distribyutor</option>
                <option value="Interyer dizayneri">Interyer dizayneri</option>
                <option value="Arxitektor">Arxitektor</option>
              </select>
              <textarea
                name="message"
                placeholder="Kompaniyangiz va maqsadlaringiz haqida bizga xabar bering"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800"
              ></textarea>
              <div>
                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white font-semibold py-3 rounded-md hover:bg-gray-900 transition-colors"
                >
                  Murojaatni yuborish
                </button>
                {formStatus && (
                  <p className="mt-4 text-center text-gray-600">{formStatus}</p>
                )}
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PartnershipPage;
