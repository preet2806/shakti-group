import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { sendEmail } from '../services/emailService';
import { NavLink } from 'react-router-dom';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    type: 'Sales Inquiry',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      await sendEmail(formData);
      setStatus('success');
      setFormData({ name: '', company: '', email: '', phone: '', type: 'Sales Inquiry', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error: any) {
      console.error("Submission failed", error);
      setStatus('error');
      setErrorMessage(error.message || "Failed to connect to email service. Please contact us at info@shaktigases.com");
    }
  };

  return (
    <div className="bg-white font-sans text-slate-900">
      {/* React 19 SEO Hoisting */}
      <title>Contact Shakti Gases | Industrial Gas Supplier in Gujarat & West India</title>
      <meta
        name="description"
        content="Contact Shakti Gases, a leading industrial gas supplier in Gujarat. Get in touch for Liquid CO2, Oxygen, Nitrogen, Argon supply, logistics and technical support across West India."
      />
      <meta
        name="keywords"
        content="Shakti Gases Contact, Industrial Gas Supplier Gujarat, Gas Supplier Vadodara, Liquid CO2 Supplier India, Oxygen Nitrogen Argon Gujarat, Oxygen Nitrogen Argon India"
      />

      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Shakti Industrial Gases",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "45, Maruti Complex, Ranoli GIDC",
            "addressLocality": "Vadodara",
            "addressRegion": "Gujarat",
            "postalCode": "391350",
            "addressCountry": "IN"
          },
          "telephone": "+91-9727783440",
          "email": "info@shaktigases.com",
          "areaServed": "India"
        })}
      </script>

      {/* Header */}
      <div className="bg-slate-950 text-white py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-2">
            Get In Touch
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            We're here to help with your industrial gas and logistics needs. Reach out to our team today for technical excellence and unmatched reliability.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-xs">
            <div className="mb-6 pb-4 border-b border-slate-100">
              <span className="text-sky-700 font-bold uppercase tracking-widest text-xs block mb-1">Direct Communication</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Send Us a Message</h2>
            </div>

            {status === 'success' && (
              <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-900 px-4 py-3 rounded-lg flex items-start gap-3">
                <CheckCircle className="w-5 h-5 shrink-0 text-emerald-600 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <h4 className="font-bold">Message Sent Successfully!</h4>
                  <p className="text-emerald-700 mt-0.5">
                    Thank you for contacting us. An email has been generated to <strong>info@shaktigases.com</strong> with your details. Our team will get back to you shortly.
                  </p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 bg-rose-50 border border-rose-200 text-rose-900 px-4 py-3 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 shrink-0 text-rose-600 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <h4 className="font-bold">Submission Failed</h4>
                  <p className="text-rose-700 mt-0.5">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition text-sm bg-white disabled:opacity-70 disabled:cursor-not-allowed"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition text-sm bg-white disabled:opacity-70 disabled:cursor-not-allowed"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition text-sm bg-white disabled:opacity-70 disabled:cursor-not-allowed"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition text-sm bg-white disabled:opacity-70 disabled:cursor-not-allowed"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Inquiry Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition text-sm bg-white disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <option>Sales Inquiry</option>
                  <option>Logistics Query</option>
                  <option>Engineered Solutions</option>
                  <option>Media</option>
                  <option>HR/Careers</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Your Message *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition text-sm bg-white disabled:opacity-70 disabled:cursor-not-allowed"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold uppercase tracking-wider py-3 rounded-lg transition flex justify-center items-center gap-2 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed text-xs"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <span className="text-sky-700 font-bold uppercase tracking-widest text-xs block mb-1">Corporate Details</span>
              <h2 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">Contact Information</h2>

              <div className="space-y-4 text-slate-700">
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-sky-50 text-sky-700 rounded-lg border border-sky-100 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Email</div>
                    <a
                      href="mailto:info@shaktigases.com"
                      className="text-sm font-semibold text-slate-900 hover:text-sky-700 transition"
                    >
                      info@shaktigases.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-sky-50 text-sky-700 rounded-lg border border-sky-100 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Phone</div>
                    <a
                      href="tel:+919727783440"
                      className="text-sm font-semibold text-slate-900 hover:text-sky-700 transition"
                    >
                      +91 9727783440
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-sky-50 text-sky-700 rounded-lg border border-sky-100 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Address</div>
                    <p className="text-xs font-medium text-slate-900 leading-relaxed">
                      45, Maruti Complex, Ranoli GIDC, Ranoli, Dist: Vadodara-391350, Gujarat
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Map Card */}
            <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-100 relative group">
              <a
                href="https://maps.app.goo.gl/TGuzKakRvxbDB9dCA"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-48 relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=600&auto=format&fit=crop"
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-90 transition"
                  alt="Shakti Industrial Gases office location in Ranoli GIDC Vadodara Gujarat"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-slate-950/90 text-white border border-slate-700 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md">
                    Open Google Maps ↗
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
