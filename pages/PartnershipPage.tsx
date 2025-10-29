
import React, { useState } from 'react';

const PartnershipPage: React.FC = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        website: '',
        partnershipType: '',
        message: '',
    });
    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('Submitting application...');
        // Simulate form submission
        setTimeout(() => {
            setFormStatus('Application submitted successfully! We will be in touch soon.');
            setFormData({
                companyName: '', contactPerson: '', email: '', phone: '', website: '', partnershipType: '', message: '',
            });
        }, 2000);
    };

    return (
        <div className="bg-white">
             <div className="relative h-80 bg-gray-900">
                <img src="https://picsum.photos/1920/1080?random=61" alt="Partnership" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div>
                        <h1 className="text-5xl font-bold text-white tracking-tight">Building Success, Together</h1>
                        <p className="mt-4 text-xl text-gray-200 max-w-3xl">We are always looking to forge meaningful partnerships with those who share our vision for quality and luxury.</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20">
                {/* Why Partner with Us */}
                <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Collaboration</h2>
                        <ul className="space-y-4 text-gray-600 list-disc list-inside">
                            <li>Access to a premium, sought-after product line.</li>
                            <li>Competitive pricing and attractive margin opportunities.</li>
                            <li>Dedicated partner support and marketing resources.</li>
                            <li>Collaboration on bespoke projects and custom solutions.</li>
                            <li>Participation in our growing global network.</li>
                        </ul>
                    </div>
                    <img src="https://picsum.photos/800/600?random=62" className="rounded-lg shadow-xl" alt="Collaboration" />
                </section>

                {/* Who We Work With */}
                 <section className="bg-gray-50 -mx-6 px-6 py-16 text-center mb-20">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Work With</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                       We value partners who demonstrate a commitment to excellence, possess strong market presence, and have a clear understanding of the premium segment. Whether you are an established retailer, an innovative design firm, or a developer embarking on high-end projects, we invite you to connect.
                    </p>
                </section>

                {/* Partnership Form */}
                <section>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Begin Your Partnership Journey</h2>
                        <p className="text-gray-600 text-center mb-8">Please fill out the form below or contact our partnership team directly to discuss how we can grow together.</p>

                        <form onSubmit={handleSubmit} className="bg-white p-8 border rounded-lg shadow-lg space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800"/>
                                <input type="text" name="contactPerson" placeholder="Contact Person" value={formData.contactPerson} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800"/>
                                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800"/>
                                <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800"/>
                            </div>
                            <input type="url" name="website" placeholder="Company Website" value={formData.website} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800"/>
                            <select name="partnershipType" value={formData.partnershipType} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800 bg-white">
                                <option value="" disabled>Type of Partnership...</option>
                                <option value="Retailer">Retailer</option>
                                <option value="Distributor">Distributor</option>
                                <option value="Designer">Interior Designer</option>
                                <option value="Architect">Architect</option>
                                <option value="Developer">Developer</option>
                            </select>
                            <textarea name="message" placeholder="Tell us about your company and goals" rows={5} value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800"></textarea>
                            <div>
                                <button type="submit" className="w-full bg-gray-800 text-white font-semibold py-3 rounded-md hover:bg-gray-900 transition-colors">
                                    Submit Application
                                </button>
                                {formStatus && <p className="mt-4 text-center text-gray-600">{formStatus}</p>}
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PartnershipPage;
