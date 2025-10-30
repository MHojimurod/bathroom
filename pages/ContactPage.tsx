
import React, { useState } from 'react';
import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from "../constants";

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('Yuborilmoqda...');
      
        const message = `
      📩 Yangi xabar veb-saytdan:
      
      👤 Ism: ${formData.name}
      📧 Email: ${formData.email}
      📞 Telefon: ${formData.phone}
      📝 Mavzu: ${formData.subject}
      💬 Xabar: ${formData.message}
        `;
      
        try {
          // Telegram API orqali yuborish
          await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: TELEGRAM_CHAT_ID,
              text: message,
              parse_mode: 'HTML',
            }),
          });
      
          // Muvaffaqiyatli yuborilgandan keyin
          setFormStatus('✅ Xabar muvaffaqiyatli yuborildi!');
          setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } catch (error) {
          console.error('Telegramga yuborishda xatolik:', error);
          setFormStatus('❌ Xabar yuborilmadi. Iltimos, keyinroq urinib ko‘ring.');
        }
      };

    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Mutaxassislarimiz bilan bog'laning</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
                        Mahsulotlarimiz haqida savolingiz bo'ladimi, dizayn bo'yicha maslahatga muhtojmisiz yoki yordamga muhtojmisiz, bizning jamoamiz sizga yordam berishga tayyor.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info and Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Bog'laning</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <input type="text" name="name" placeholder="Ism" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800 focus:outline-none" />
                                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800 focus:outline-none" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <input type="tel" name="phone" placeholder="Telefon (Ixtiyoriy)" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800 focus:outline-none" />
                                <input type="text" name="subject" placeholder="Mavzu" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800 focus:outline-none" />
                            </div>
                            <textarea name="message" placeholder="Habar" rows={5} value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800 focus:outline-none"></textarea>
                            <div>
                                <button type="submit" className="w-full bg-gray-800 text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-900 transition-colors duration-300">
                                Xabar yuborish
                                </button>
                                {formStatus && <p className="mt-4 text-center text-gray-600">{formStatus}</p>}
                            </div>
                        </form>
                    </div>

                    {/* Contact Details and Map */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg space-y-4">
                            <p><strong>Telefon: </strong> <a href="tel:+998773164444" className="text-gray-600 hover:text-gray-900"> +998 77 316 44 44</a></p>
                            <p><strong>Email: </strong> <a href="mailto:casabella@gmail.com" className="text-gray-600 hover:text-gray-900"> casabella@gmail.com</a></p>
                            <p><strong>Manzil: </strong> O'zbekiston, Toshkent shahri, Usta Shirin ko'chasi, 122A-uy</p>
                            <hr />
                            <h3 className="font-semibold pt-2">Ish vaqti</h3>
                            <p className="text-gray-600">Dushanba - Juma: 9:00 - 18:00</p>
                            <p className="text-gray-600">Shanba: 10:00 - 16:00</p>
                            <p className="text-gray-600">Yakshanba: Yopiq</p>
                        </div>
                        <div className="bg-white p-2 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold text-gray-800 p-6">Bizning Filiallarimiz</h2>

                            <div className="p-6 space-y-3 text-gray-700">
                                <div>
                                    <p>
                                        <a
                                            href="https://yandex.uz/maps/10335/tashkent/?ll=69.251884%2C41.355584&mode=poi&poi%5Bpoint%5D=69.251416%2C41.355703&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D80544779686&utm_source=share&z=1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            Usta Shirin ko‘chasi, 122-uy, Toshkent
                                        </a>
                                    </p>
                                </div>

                                <div>
                                    <p>
                                        <a
                                            href="https://yandex.uz/maps/10335/tashkent/?ll=69.311347%2C41.333027&mode=poi&poi%5Bpoint%5D=69.311414%2C41.333098&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D220119228016&utm_source=share&z=21"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            Katta Darxon ko‘chasi, 15-uy, 53–54-do‘kon, Toshkent
                                        </a>
                                    </p>
                                </div>

                                <div>
                                    <p>
                                        <a
                                            href="https://yandex.uz/maps/10335/tashkent/house/YkAYdANlQEYEQFprfX90dHplZw==/?ll=69.245933%2C41.355663&utm_source=share&z=16"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            Usta Shirin ko‘chasi, 125-uy, 1–39-do‘kon, Toshkent
                                        </a>
                                    </p>
                                </div>

                                <div>
                                    <p>
                                        <a
                                            href="https://yandex.uz/maps/-/CHs8R6Ns"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            Bek Tupi bozori, 53-do‘kon va 1–32-do‘konlar, Toshkent
                                        </a>
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
