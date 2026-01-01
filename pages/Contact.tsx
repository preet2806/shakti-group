import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { sendEmail } from '../services/emailService';

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

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error: any) {
      console.error("Submission failed", error);
      setStatus('error');
      setErrorMessage(error.message || "Failed to connect to email service. Please contact us at info@shaktigases.com");
    }
  };

  return (
    <div className="bg-white">
      {/* React 19 SEO Hoisting */}
      <title>Contact Shakti Gases | Industrial Gas Supply & Support Gujarat</title>
      <meta name="description" content="Contact Shakti Gases in Ranoli GIDC, Vadodara. Inquire about sales, technical support, or logistics for Liquid CO2 and Argon, Nitrogen, Oxygen gases across India." />
      <meta name="keywords" content="Shakti Gases Contact, Gas Supplier Vadodara, Industrial Gas Support Gujarat, Industrial Gases India, Shakti Group Phone Number" />
      {/* Header */}
      <div className="bg-shakti-dark relative overflow-hidden h-[350px] flex items-center justify-center">
         <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-blue-900 opacity-90"></div>
         {/* Abstract Lines */}
         <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>

         <div className="relative text-center px-4 max-w-4xl">
            <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-blue-100 text-xl leading-relaxed">
              We're here to help with your industrial gas and logistics needs. Reach out to our team today for technical excellence and unmatched reliability.
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-24 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">

          {/* Form */}
          <div className="lg:w-3/5 p-10 md:p-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>

            {status === 'success' && (
              <div className="mb-8 bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-xl flex items-start gap-3 animate-fade-in-up">
                <CheckCircle className="w-6 h-6 shrink-0 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-bold text-lg">Message Sent Successfully!</h4>
                  <p className="text-green-700 mt-1">
                    Thank you for contacting us. An email has been generated to <strong>info@shaktigases.com</strong> with your details. Our team will get back to you shortly.
                  </p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-8 bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-xl flex items-start gap-3 animate-fade-in-up">
                <AlertCircle className="w-6 h-6 shrink-0 text-red-600 mt-0.5" />
                <div>
                  <h4 className="font-bold text-lg">Submission Failed</h4>
                  <p className="text-red-700 mt-1">
                    {errorMessage}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-shakti-blue focus:border-transparent outline-none transition bg-gray-50 focus:bg-white disabled:opacity-70 disabled:cursor-not-allowed"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-shakti-blue focus:border-transparent outline-none transition bg-gray-50 focus:bg-white disabled:opacity-70 disabled:cursor-not-allowed"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-shakti-blue focus:border-transparent outline-none transition bg-gray-50 focus:bg-white disabled:opacity-70 disabled:cursor-not-allowed"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-shakti-blue focus:border-transparent outline-none transition bg-gray-50 focus:bg-white disabled:opacity-70 disabled:cursor-not-allowed"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">How can we help you?</label>
                <div className="relative">
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-shakti-blue focus:border-transparent outline-none transition bg-white appearance-none disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <option>Sales Inquiry</option>
                    <option>Technical Support</option>
                    <option>Logistics Query</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-shakti-blue focus:border-transparent outline-none transition bg-gray-50 focus:bg-white disabled:opacity-70 disabled:cursor-not-allowed"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-shakti-blue text-white font-bold py-4 rounded-lg hover:bg-blue-600 transition flex justify-center items-center gap-2 shadow-lg shadow-blue-200 hover:shadow-blue-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:w-2/5 bg-gray-50 p-10 md:p-16 border-l border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Contact Information</h2>
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="bg-white p-4 rounded-xl text-shakti-blue shadow-sm group-hover:shadow-md transition shrink-0 border border-gray-100">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Communication Office</h3>
                  <p className="text-gray-600 leading-relaxed">
                    45, Maruti Complex, Ranoli GIDC,<br/> Ranoli, Dist: Vadodara-391350,<br/> Gujarat
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-white p-4 rounded-xl text-shakti-blue shadow-sm group-hover:shadow-md transition shrink-0 border border-gray-100">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Phone</h3>
                  <p className="text-gray-600 font-medium">9727783440</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-white p-4 rounded-xl text-shakti-blue shadow-sm group-hover:shadow-md transition shrink-0 border border-gray-100">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Email</h3>
                  <p className="text-gray-600 font-medium">info@shaktigases.com</p>
                </div>
              </div>
            </div>

            <div className="mt-16 rounded-2xl overflow-hidden shadow-lg h-64 relative bg-gray-200 group">
                <a
                  href="https://maps.app.goo.gl/TGuzKakRvxbDB9dCA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=600&auto=format&fit=crop"
                    className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition duration-500"
                    alt="Map Location"
                  />
                </a>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold text-shakti-blue shadow-lg">
                     Ranoli GIDC, Gujarat
                   </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;