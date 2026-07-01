import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, GraduationCap, Clock, Phone, MapPin, Code } from 'lucide-react';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Footer from './components/Footer';
import PortalsModal from './components/PortalsModal';
import AdmissionFormModal from './components/AdmissionFormModal';
import VanillaCodeModal from './components/VanillaCodeModal';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Staff from './pages/Staff';
import StudentLife from './pages/StudentLife';
import Contact from './pages/Contact';
import { schoolInfo } from './data';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false);
  const [portalDefaultTab, setPortalDefaultTab] = useState<'student' | 'parent'>('student');
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [isVanillaModalOpen, setIsVanillaModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to toggle the scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenPortal = (tab: 'student' | 'parent' = 'student') => {
    setPortalDefaultTab(tab);
    setIsPortalModalOpen(true);
  };

  const handleOpenAdmission = () => {
    setIsAdmissionModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Select current page view component
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home onOpenAdmission={handleOpenAdmission} setActivePage={setActivePage} />;
      case 'about-us':
        return <AboutUs />;
      case 'academics':
        return <Academics />;
      case 'admissions':
        return <Admissions onOpenAdmission={handleOpenAdmission} />;
      case 'staff':
        return <Staff />;
      case 'student-life':
        return <StudentLife />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onOpenAdmission={handleOpenAdmission} setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-school-yellow selection:text-school-blue relative font-sans text-slate-800">
      
      {/* 1. Announcement notification bar ribbon */}
      <AnnouncementBar />

      {/* 2. Primary Navigation Header */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenPortal={handleOpenPortal}
        onOpenAdmission={handleOpenAdmission}
        onOpenVanilla={() => setIsVanillaModalOpen(true)}
      />

      {/* 3. Main Page views with responsive entry animation container */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. Complete footer block */}
      <Footer
        setActivePage={setActivePage}
        onOpenPortal={handleOpenPortal}
        onOpenAdmission={handleOpenAdmission}
      />

      {/* 5. Modals for Admissions, Portal simulations and Vanilla Code Studio */}
      <PortalsModal
        isOpen={isPortalModalOpen}
        onClose={() => setIsPortalModalOpen(false)}
        defaultTab={portalDefaultTab}
      />
      
      <AdmissionFormModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />

      <VanillaCodeModal
        isOpen={isVanillaModalOpen}
        onClose={() => setIsVanillaModalOpen(false)}
      />

      {/* 6. Floating Action Widgets */}
      {/* Floating Pure HTML/CSS/JS Viewer Button (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-2">
        <button
          onClick={() => setIsVanillaModalOpen(true)}
          className="bg-slate-900 hover:bg-slate-800 text-school-yellow border-2 border-school-yellow/60 font-display font-black text-xs py-3 px-5 rounded-2xl shadow-2xl flex items-center gap-2.5 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer group"
        >
          <div className="w-6 h-6 rounded-lg bg-school-yellow text-school-blue flex items-center justify-center font-bold">
            <Code className="w-4 h-4" />
          </div>
          <div className="text-left">
            <span className="block text-white text-[11px] leading-tight font-extrabold">View HTML, CSS & JS Only</span>
            <span className="block text-[9px] text-school-yellow font-mono">100% Vanilla Code Export</span>
          </div>
        </button>
      </div>

      {/* WhatsApp Quick Chat bubble */}
      <a
        href={`https://wa.me/${schoolInfo.whatsapp.replace('+', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-emerald-500/25 group cursor-pointer border border-emerald-400/20"
        title="Chat with Admissions Support"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="absolute right-14 bg-emerald-600 text-white font-extrabold text-[10px] uppercase py-1.5 px-3 rounded-lg shadow-md tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          Chat Admissions Desk
        </span>
      </a>

      {/* Scroll-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-40 bg-school-blue hover:bg-school-blue-light text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all hover:-translate-y-1 hover:shadow-school-blue/25 border border-white/10 cursor-pointer"
            title="Scroll to Top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
