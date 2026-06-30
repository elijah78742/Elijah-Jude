import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Facebook, Twitter, Instagram, Youtube, HelpCircle } from 'lucide-react';
import { schoolInfo } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Admissions Inquiry',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [msgCode, setMsgCode] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsLoading(true);

    // Simulate sending email/message to school administrative server
    setTimeout(() => {
      setIsLoading(false);
      const uniqueCode = `MSG-2026-${Math.floor(100 + Math.random() * 900)}`;
      setMsgCode(uniqueCode);
      setIsSent(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Admissions Inquiry',
        message: '',
      });
      // Dismiss success state after 7 seconds
      setTimeout(() => setIsSent(false), 7000);
    }, 1500);
  };

  return (
    <div id="contact-page">
      {/* Page Hero */}
      <section className="bg-school-blue text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/30" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <span className="text-[10px] font-bold text-school-yellow uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/10">
            Open Communication
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Contact Campus Directory
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Have inquiries? Reach our administrative team, finance office, or register for a physical tour of the Campground.
          </p>
        </div>
      </section>

      {/* Main Grid: Info Channels vs. Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact details list */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-2">
                <h2 className="font-display font-black text-2xl text-school-blue tracking-tight">
                  Reach Our Desks Directly
                </h2>
                <div className="h-1 w-16 bg-school-yellow rounded-full" />
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  Our administrative and finance offices are open throughout the week to provide counseling and guide registrations.
                </p>
              </div>

              {/* Channels Grid list */}
              <div className="space-y-4">
                {/* Address block */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100/80 flex gap-4">
                  <div className="p-3 bg-school-blue-bg border border-blue-50 text-school-blue rounded-xl flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-800 text-sm">Physical Address</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      {schoolInfo.address}
                    </p>
                  </div>
                </div>

                {/* Telephone block */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100/80 flex gap-4">
                  <div className="p-3 bg-school-blue-bg border border-blue-50 text-school-blue rounded-xl flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-800 text-sm">Phone Line Support</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Admissions: {schoolInfo.phone1} <br />
                      Accounts: {schoolInfo.phone2}
                    </p>
                  </div>
                </div>

                {/* Email block */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100/80 flex gap-4">
                  <div className="p-3 bg-school-blue-bg border border-blue-50 text-school-blue rounded-xl flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-800 text-sm">Email Channels</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Admissions: <a href={`mailto:${schoolInfo.email}`} className="hover:text-school-blue font-semibold">{schoolInfo.email}</a> <br />
                      Careers Desk: <span className="font-semibold text-slate-700">careers@newlifecollege.edu.ng</span>
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100/80 flex gap-4">
                  <div className="p-3 bg-school-blue-bg border border-blue-50 text-school-blue rounded-xl flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-800 text-sm">Office Working Hours</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Monday - Friday: 8:00 AM - 4:00 PM <br />
                      Saturdays (During Admission Cycles): 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Contact Form block */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-3xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-school-yellow/5 rounded-full blur-xl" />
              
              <div className="space-y-2 mb-6">
                <h3 className="font-display font-black text-xl text-school-blue">
                  Send an Electronic Message
                </h3>
                <p className="text-xs text-slate-500">
                  Fill in your details below and we will route your query to the appropriate administrative desk.
                </p>
              </div>

              {isSent && (
                <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 p-4 rounded-xl mb-6 flex gap-3 text-xs leading-normal">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <div>
                    <span className="font-bold">Message Sent Successfully!</span> <br />
                    Thank you for reaching out. Your message has been logged inside our administrative registry with Reference ID: <strong className="font-mono">{msgCode}</strong>. We will revert shortly.
                  </div>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-school-blue text-slate-800"
                      placeholder="e.g. Alhaji Abdul-Lateef"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Active Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-school-blue text-slate-800"
                      placeholder="e.g. parent@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Mobile Contact Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-school-blue text-slate-800"
                      placeholder="e.g. +234 803 123 4567"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Department Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-school-blue text-slate-800"
                    >
                      <option value="Admissions Inquiry">Admissions Inquiry</option>
                      <option value="Tuition & Accounts">Tuition & Accounts</option>
                      <option value="Academic Performance">Academic Performance</option>
                      <option value="Principal Direct Line">Principal's Office</option>
                      <option value="Careers / Vacancies">Careers / Vacancies</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Inquiry Description Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-school-blue text-slate-800"
                    placeholder="Enter detailed description of what you would like to know..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-school-blue hover:bg-school-blue-light text-white font-semibold py-2.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow shadow-school-blue/15 disabled:opacity-50 cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending message securely...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-school-yellow" />
                      Send Electronic Message
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* WhatsApp Click-to-Chat Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-emerald-600 rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-xl flex flex-col sm:flex-row items-center gap-6">
            {/* Ambient circle glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl" />
            
            <div className="p-4 bg-white/10 rounded-2xl text-white flex-shrink-0">
              <MessageSquare className="w-10 h-10" />
            </div>

            <div className="space-y-3 text-center sm:text-left flex-1">
              <span className="bg-emerald-500 text-white font-bold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded">
                Instant Chat Channels
              </span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-white leading-tight">
                Chat Directly on WhatsApp
              </h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Connect instantly with our admissions counseling desk on WhatsApp. We are available to answer admissions guidelines, book Campground school tours, and guide form applications in real-time.
              </p>
              
              <div className="pt-1.5">
                <a
                  href={`https://wa.me/${schoolInfo.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-slate-50 text-emerald-700 font-extrabold text-xs px-6 py-3 rounded-xl transition-all inline-flex items-center gap-1.5 cursor-pointer uppercase shadow shadow-emerald-800/10"
                >
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.734-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.59 2.019 14.111.996 11.993.996 6.556.996 2.13 5.365 2.127 10.796c-.001 1.637.45 3.238 1.31 4.61l-.994 3.635 3.73-.974z" />
                  </svg>
                  Connect to Advisory Desk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google map location placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="font-display font-black text-2xl text-school-blue">Physical Location Map</h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              We are nestled safely in the serene, distraction-free environment of the New Life Campground, Soka, Ibadan.
            </p>
          </div>

          {/* Map box */}
          <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-250 rounded-3xl p-4 sm:p-6 shadow-xl relative overflow-hidden">
            <div className="h-[380px] bg-sky-50 rounded-2xl border border-sky-100/50 flex flex-col justify-center items-center text-center p-6 space-y-4 relative">
              {/* Fake stylized map background lines */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="w-14 h-14 rounded-full bg-school-blue text-school-yellow flex items-center justify-center shadow-lg relative z-10">
                <MapPin className="w-7 h-7" />
              </div>
              
              <div className="max-w-md relative z-10 space-y-2">
                <h4 className="font-display font-black text-slate-800 text-sm sm:text-base">NEW LIFE CAMP GROUND, SOKA AREA, IBADAN</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Turn off at Soka Junction along the Lagos-Ibadan Expressway, proceed down Soka Road towards Oloola, Campground main gate. The campus is secure, walled, and gated with extensive parking spaces.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center pt-2 relative z-10">
                <button
                  onClick={() => {
                    window.open(`https://maps.google.com/?q=New+Life+Camp+Ground+Soka+Ibadan+Nigeria`, '_blank');
                  }}
                  className="bg-school-blue hover:bg-school-blue-light text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  View Coordinates on Google Maps
                </button>
                <button
                  onClick={() => alert('Campus blueprint details are available for inspection at the Physical Admin Office during standard working hours.')}
                  className="bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-all border border-slate-200 cursor-pointer"
                >
                  Download Campus Blueprint Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
