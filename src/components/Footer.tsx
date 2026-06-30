import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Send, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { schoolInfo } from '../data';

interface FooterProps {
  setActivePage: (page: string) => void;
  onOpenPortal: (tab?: 'student' | 'parent') => void;
  onOpenAdmission: () => void;
}

export default function Footer({ setActivePage, onOpenPortal, onOpenAdmission }: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate server subscription
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
      // Dismiss success message after 5 seconds
      setTimeout(() => setIsSubscribed(false), 5000);
    }, 1200);
  };

  const handleLinkClick = (pageId: string) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-school-blue text-white pt-16 pb-8 border-t-4 border-school-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand & Address Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-school-yellow flex-shrink-0">
              <svg className="w-6 h-6 text-school-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <h4 className="font-display font-extrabold text-sm tracking-tight text-white leading-none">NEW LIFE</h4>
              <p className="font-display font-bold text-xs text-school-yellow uppercase tracking-widest mt-0.5">COLLEGE</p>
            </div>
          </div>
          
          <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
            Nurturing future giants in academics, skill, and outstanding moral standing since {schoolInfo.established}. Driven by academic excellence, integrity, and disciplined development.
          </p>

          <div className="space-y-2.5 pt-2 text-xs text-slate-300">
            <div className="flex gap-2.5 items-start">
              <MapPin className="w-4 h-4 text-school-yellow flex-shrink-0 mt-0.5" />
              <span className="leading-tight">{schoolInfo.address}</span>
            </div>
            <div className="flex gap-2.5 items-center">
              <Phone className="w-4 h-4 text-school-yellow flex-shrink-0" />
              <span>{schoolInfo.phone1}</span>
            </div>
            <div className="flex gap-2.5 items-center">
              <Mail className="w-4 h-4 text-school-yellow flex-shrink-0" />
              <a href={`mailto:${schoolInfo.email}`} className="hover:text-school-yellow transition-colors">{schoolInfo.email}</a>
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-4">
          <h5 className="font-display font-bold text-sm text-school-yellow uppercase tracking-wider border-b border-white/10 pb-2">
            Quick Navigation
          </h5>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>
              <button onClick={() => handleLinkClick('home')} className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer">
                <ArrowRight className="w-3 h-3 text-school-yellow" />
                Home Page
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('about-us')} className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer">
                <ArrowRight className="w-3 h-3 text-school-yellow" />
                History & Core Values
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('academics')} className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer">
                <ArrowRight className="w-3 h-3 text-school-yellow" />
                Curriculum & Divisions
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('admissions')} className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer">
                <ArrowRight className="w-3 h-3 text-school-yellow" />
                Admission Guidelines
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('student-life')} className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer">
                <ArrowRight className="w-3 h-3 text-school-yellow" />
                Sports, Clubs & Societies
              </button>
            </li>
          </ul>
        </div>

        {/* Portals & Admissions Column */}
        <div className="space-y-4">
          <h5 className="font-display font-bold text-sm text-school-yellow uppercase tracking-wider border-b border-white/10 pb-2">
            Portals & Registration
          </h5>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>
              <button onClick={onOpenAdmission} className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer">
                <ArrowRight className="w-3 h-3 text-school-yellow" />
                Online Admission Portal
              </button>
            </li>
            <li>
              <button onClick={() => onOpenPortal('student')} className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer">
                <ArrowRight className="w-3 h-3 text-school-yellow" />
                Student Portal LogIn
              </button>
            </li>
            <li>
              <button onClick={() => onOpenPortal('parent')} className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer">
                <ArrowRight className="w-3 h-3 text-school-yellow" />
                Parent Portal LogIn
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('staff')} className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer">
                <ArrowRight className="w-3 h-3 text-school-yellow" />
                Our Faculty Directory
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('contact')} className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer">
                <ArrowRight className="w-3 h-3 text-school-yellow" />
                Campus Contact Info
              </button>
            </li>
          </ul>
        </div>

        {/* Newsletter column */}
        <div className="space-y-4">
          <h5 className="font-display font-bold text-sm text-school-yellow uppercase tracking-wider border-b border-white/10 pb-2">
            Newsletter Bulletin
          </h5>
          <p className="text-xs text-slate-300 leading-relaxed">
            Subscribe to receive term updates, events, and academic calendars directly to your inbox.
          </p>

          <form onSubmit={handleSubscribe} className="space-y-2">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full bg-slate-900/50 border border-white/10 rounded-lg text-xs py-2.5 pl-3 pr-10 focus:outline-none focus:border-school-yellow text-white"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="absolute right-1 top-1 bottom-1 bg-school-yellow hover:bg-school-yellow-dark text-school-blue px-2.5 rounded-md flex items-center justify-center transition-colors cursor-pointer"
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-3.5 w-3.5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  <Send className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
            
            {isSubscribed && (
              <div className="text-[10px] font-semibold text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Subscription registered! Check your email soon.
              </div>
            )}
          </form>

          {/* Social Icons */}
          <div className="pt-3 space-y-1.5">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Connect with NLCC</p>
            <div className="flex gap-2">
              <a href={schoolInfo.facebook} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/5 hover:bg-school-yellow hover:text-school-blue rounded-lg transition-all text-slate-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={schoolInfo.twitter} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/5 hover:bg-school-yellow hover:text-school-blue rounded-lg transition-all text-slate-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={schoolInfo.instagram} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/5 hover:bg-school-yellow hover:text-school-blue rounded-lg transition-all text-slate-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={schoolInfo.youtube} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/5 hover:bg-school-yellow hover:text-school-blue rounded-lg transition-all text-slate-300">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Baseline credits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
        <span>© {new Date().getFullYear()} {schoolInfo.name}. All Rights Reserved.</span>
        <div className="flex gap-4">
          <a href="#main-header" className="hover:text-white transition-colors">Back to Top</a>
          <span>Approved by Oyo State Ministry of Education</span>
        </div>
      </div>
    </footer>
  );
}
