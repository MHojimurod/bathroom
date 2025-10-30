import React, { useState } from "react";
import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from "../constants";
const PartnershipPage: React.FC = () => {
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
        "✅ Ariza muvaffaqiyatli topshirildi! Tez orada siz bilan bog'lanamiz."
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
            <h1 className="text-5xl font-bold text-white tracking-tight">
              Muvaffaqiyatni Birgalikda Quramiz
            </h1>
            <p className="mt-4 text-xl text-gray-200 max-w-3xl">
              Biz doimo sifat va hashamatga oid qarashlarimizni baham
              ko'radiganlar bilan mazmunli hamkorlikni o'rnatishga intilamiz.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        {/* Why Partner with Us */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Hamkorlikning afzalliklari
            </h2>
            <ul className="space-y-4 text-gray-600 list-disc list-inside">
              <li>
                Yuqori sifatli, talab yuqori bo'lgan mahsulot liniyasiga kirish.
              </li>
              <li>Raqobatbardosh narxlar va jozibador marja imkoniyatlari.</li>
              <li>
                Maxsus hamkorlarni qo'llab-quvvatlash va marketing resurslari.
              </li>
              <li>Maxsus loyihalar va maxsus yechimlar bo'yicha hamkorlik.</li>
              <li>
                Bizning o'sib borayotgan global tarmog'imizda ishtirok etish.
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Biz kim bilan ishlaymiz
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Biz mukammallikka sodiqlikni namoyish etadigan, bozorda kuchli
            mavqega ega bo'lgan va premium segmentni aniq tushunadigan
            hamkorlarni qadrlaymiz. Siz taniqli chakana sotuvchi, innovatsion
            dizayn firmasi yoki yuqori darajadagi loyihalarni amalga oshirishni
            boshlayotgan ishlab chiquvchi bo'lishingizdan qat'i nazar, sizni biz
            bilan bog'lanishga taklif qilamiz.
          </p>
        </section>

        {/* Partnership Form */}
        <section>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
              Hamkorlik safaringizni boshlang
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Birgalikda qanday o'sishimiz mumkinligini muhokama qilish uchun
              quyidagi shaklni to'ldiring yoki hamkorlik guruhimiz bilan
              bevosita bog'laning..
            </p>

            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 border rounded-lg shadow-lg space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="companyName"
                  placeholder="Kompaniya nomi"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800"
                />
                <input
                  type="text"
                  name="contactPerson"
                  placeholder="Bog'lanish uchun shaxs"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
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
