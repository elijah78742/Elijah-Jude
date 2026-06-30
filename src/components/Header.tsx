import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, GraduationCap, Lock, ArrowRight, BookOpen, User, Phone, Info } from 'lucide-react';
import { schoolInfo } from '../data';

interface HeaderProps {
  activePage: string;
  setActivePage: (page: string) => void;
  onOpenPortal: (tab?: 'student' | 'parent') => void;
  onOpenAdmission: () => void;
}

interface SearchResult {
  title: string;
  category: string;
  description: string;
  targetPage: string;
}

export default function Header({ activePage, setActivePage, onOpenPortal, onOpenAdmission }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Search Index covering the school website's key highlights
  const searchIndex: SearchResult[] = [
    { title: 'Junior Secondary School (JSS1-JSS3)', category: 'Academics', description: 'Curriculum and core subjects for foundation years.', targetPage: 'academics' },
    { title: 'Science Department / Engineering / Medicine Prep', category: 'Academics', description: 'SS1-SS3 biology, chemistry, physics programs.', targetPage: 'academics' },
    { title: 'Arts & Humanities Department / Legal Prep', category: 'Academics', description: 'SS1-SS3 government, literature, history programs.', targetPage: 'academics' },
    { title: 'Commercial Department / Accountancy / Business', category: 'Academics', description: 'SS1-SS3 accounting, commerce, economics.', targetPage: 'academics' },
    { title: 'WAEC, NECO & JAMB preparation', category: 'Academics', description: 'Intensive academic guidelines and mock reviews.', targetPage: 'academics' },
    { title: 'Admission Requirements & Age Limits', category: 'Admissions', description: 'Guidelines for enrollment into JSS1 and transfers.', targetPage: 'admissions' },
    { title: 'Admission Registration Form PDF', category: 'Admissions', description: 'Downloadable form for physical submissions.', targetPage: 'admissions' },
    { title: 'Tuition Fees and Financial Structuring', category: 'Admissions', description: 'School fees schedule, plans, and requirements.', targetPage: 'admissions' },
    { title: 'Principal profile: Deacon Isaiah O. Oladele', category: 'Staff', description: 'Principal’s academic leadership, M.Ed (UI).', targetPage: 'staff' },
    { title: 'School Teachers & HOD Directory', category: 'Staff', description: 'Meet our qualified secondary education instructors.', targetPage: 'staff' },
    { title: 'Extracurricular Clubs & Press Club', category: 'Student Life', description: 'Press, JET, drama, and young farmers societies.', targetPage: 'student-life' },
    { title: 'Inter-House Sports & Athletic Championships', category: 'Student Life', description: 'Football, track field, athletics, table tennis.', targetPage: 'student-life' },
    { title: 'Campus Photo Gallery', category: 'Student Life', description: 'Photos of classrooms, science labs, and cultural events.', targetPage: 'student-life' },
    { title: 'School Location Map & Address in Soka Ibadan', category: 'Contact', description: 'Directions to Soka Campground Soka Ibadan.', targetPage: 'contact' },
    { title: 'Contact Support (Phone & Email)', category: 'Contact', description: 'Contact administrative desks directly.', targetPage: 'contact' },
    { title: 'WhatsApp Chat & Direct Advisory Desk', category: 'Contact', description: 'Chat live with an admissions advisor.', targetPage: 'contact' },
    { title: 'School History and Vision', category: 'About Us', description: 'Foundational history since 2008 and our mission.', targetPage: 'about-us' },
  ];

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const filtered = searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered.slice(0, 5));
  };

  const handleResultClick = (targetPage: string) => {
    setActivePage(targetPage);
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
    setIsMobileMenuOpen(false);
    
    // Smooth scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about-us', label: 'About Us' },
    { id: 'academics', label: 'Academics' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'staff', label: 'Our Staff' },
    { id: 'student-life', label: 'Student Life' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <>
      <header id="main-header" className="bg-white border-b border-slate-100 shadow-sm sticky top-0 z-40 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Brand Block */}
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => handleResultClick('home')}
            >
              {/* Shield Logo SVG Icon */}
              <div className="w-12 h-12 bg-school-blue rounded-xl flex items-center justify-center border-2 border-school-yellow transition-transform duration-300 group-hover:scale-105 shadow shadow-school-blue/20">
                <svg className="w-7 h-7 text-school-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M12 6a3 3 0 0 1 3 3c0 1.25-.56 2.5-1.5 3l.5 3h-4l.5-3c-.94-.5-1.5-1.75-1.5-3a3 3 0 0 1 3-3z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-school-blue tracking-tight text-sm sm:text-base leading-none">
                  NEW LIFE
                </span>
                <span className="font-display font-bold text-school-blue tracking-wider text-[11px] sm:text-[12px] leading-tight">
                  COMPREHENSIVE COLLEGE
                </span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-none mt-0.5">
                  Ibadan, Nigeria
                </span>
              </div>
            </div>

            {/* Desktop Navigation links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleResultClick(item.id)}
                  className={`relative px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                    activePage === item.id
                      ? 'text-school-blue-light'
                      : 'text-slate-600 hover:text-school-blue'
                  }`}
                >
                  {item.label}
                  {activePage === item.id && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-school-yellow rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Search Trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-slate-500 hover:text-school-blue-light hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                title="Search website"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Portal Login Dropdown Trigger */}
              <button
                onClick={() => onOpenPortal('student')}
                className="flex items-center gap-1.5 border border-slate-200 hover:border-school-blue text-slate-700 hover:text-school-blue font-semibold text-xs py-2 px-3.5 rounded-lg transition-all cursor-pointer bg-white"
              >
                <Lock className="w-3.5 h-3.5 text-school-yellow-dark" />
                Portal
              </button>

              {/* Apply Now CTA */}
              <button
                onClick={onOpenAdmission}
                className="bg-school-blue hover:bg-school-blue-light text-white font-bold text-xs py-2 px-4 rounded-lg shadow-sm shadow-school-blue/10 transition-all flex items-center gap-1 group cursor-pointer"
              >
                Apply Now
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Mobile Actions / Toggles */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-slate-500 hover:text-school-blue rounded-lg transition-colors cursor-pointer"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={() => onOpenPortal('student')}
                className="flex items-center gap-1 border border-slate-200 text-slate-700 font-semibold text-xs py-1.5 px-2.5 rounded-lg transition-all cursor-pointer bg-white"
              >
                <Lock className="w-3 h-3 text-school-yellow-dark" />
                Portal
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-school-blue focus:outline-none cursor-pointer"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1.5">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleResultClick(item.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      activePage === item.id
                        ? 'bg-school-blue-bg text-school-blue font-bold border-l-4 border-school-yellow'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-school-blue'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5 px-4">
                  <button
                    onClick={onOpenAdmission}
                    className="w-full bg-school-blue hover:bg-school-blue-light text-white text-center font-bold text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-1 cursor-pointer"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Search Overlay Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-[10vh]">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSearchOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Search Box */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden relative z-10 border border-slate-100"
            >
              <div className="p-4 flex items-center gap-3 border-b border-slate-100">
                <Search className="w-5 h-5 text-slate-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="What would you like to search? (e.g. Science, Admission, Fees)"
                  className="flex-1 bg-transparent border-none outline-none text-slate-800 placeholder-slate-400 text-sm py-1"
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="text-slate-400 hover:text-slate-600 p-1 hover:bg-slate-50 rounded-full transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search Suggestions and Results list */}
              <div className="max-h-[350px] overflow-y-auto p-4">
                {searchQuery.trim() === '' ? (
                  <div className="space-y-3">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Popular Searches
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Admissions', 'Science', 'School Fees', 'Principal', 'Sports', 'Location'].map((tag) => (
                        <button
                          key={tag}
                          onClick={() => {
                            setSearchQuery(tag);
                            const event = { target: { value: tag } } as React.ChangeEvent<HTMLInputElement>;
                            handleSearchChange(event);
                          }}
                          className="bg-slate-100 hover:bg-school-blue-bg hover:text-school-blue text-slate-600 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Matching Results ({searchResults.length})
                    </p>
                    <div className="divide-y divide-slate-100">
                      {searchResults.map((result, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleResultClick(result.targetPage)}
                          className="w-full text-left py-3 px-2 rounded-xl hover:bg-slate-50 flex gap-3 items-start transition-all cursor-pointer"
                        >
                          <div className="p-2 bg-school-blue-bg text-school-blue rounded-lg mt-0.5">
                            {result.category === 'Academics' ? (
                              <BookOpen className="w-4 h-4" />
                            ) : result.category === 'Admissions' ? (
                              <GraduationCap className="w-4 h-4" />
                            ) : result.category === 'Staff' ? (
                              <User className="w-4 h-4" />
                            ) : result.category === 'Contact' ? (
                              <Phone className="w-4 h-4" />
                            ) : (
                              <Info className="w-4 h-4" />
                            )}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-slate-800 text-sm leading-tight">
                                {result.title}
                              </span>
                              <span className="bg-school-yellow/10 text-school-yellow-dark text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">
                                {result.category}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 mt-1 leading-normal">
                              {result.description}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <p className="text-slate-400 text-sm">No results found for "{searchQuery}".</p>
                    <p className="text-slate-500 text-xs mt-1">Try checking your spelling or search for general keywords.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
