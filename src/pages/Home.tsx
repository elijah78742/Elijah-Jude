import { motion } from 'motion/react';
import { BookOpen, Award, Users, ShieldCheck, ChevronRight, GraduationCap, Flame, ArrowRight, Calendar, Landmark, MapPin, Sparkles, Volume2 } from 'lucide-react';
import { schoolInfo, facilities, testimonials, calendarEvents, newsAnnouncements, staffMembers } from '../data';

interface HomeProps {
  onOpenAdmission: () => void;
  setActivePage: (page: string) => void;
}

export default function Home({ onOpenAdmission, setActivePage }: HomeProps) {
  // Take first 3 news items and first 2 calendar events for the home summary
  const recentNews = newsAnnouncements.slice(0, 3);
  const nextEvents = calendarEvents.slice(0, 2);
  const teacherTeaser = staffMembers.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div id="home-page" className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white min-h-[85vh] flex items-center justify-center py-20 px-4 md:px-8">
        {/* Immersive background image with high-contrast overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(rgba(15, 48, 87, 0.85), rgba(17, 24, 39, 0.9)), url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1600')` 
          }}
        />
        
        {/* Subtle geometric gold grids */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-school-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-school-blue-light/20 rounded-full blur-2xl" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          {/* School Shield Crest Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex p-3 bg-white/10 backdrop-blur-md rounded-2xl border-2 border-school-yellow mb-2 shadow-lg"
          >
            <svg className="w-12 h-12 text-school-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m12 8-2 4h4l-2 4" />
            </svg>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-school-yellow bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
              Government Approved • Co-Educational Secondary Institution
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-tight">
              NEW LIFE <br />
              <span className="text-school-yellow">COMPREHENSIVE COLLEGE</span>
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              "{schoolInfo.tagline}"
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <button
              onClick={onOpenAdmission}
              className="w-full sm:w-auto bg-school-yellow hover:bg-school-yellow-dark text-school-blue hover:text-white font-extrabold text-xs sm:text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-school-yellow/10 hover:shadow-school-yellow/20 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
            >
              <GraduationCap className="w-5 h-5" />
              Apply Online Now
            </button>
            <button
              onClick={() => {
                setActivePage('about-us');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs sm:text-sm px-8 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-6 text-slate-300 text-xs flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4 text-school-yellow" />
            <span>Campus: New Life Camp Ground, Oloola, Soka Area, Ibadan</span>
          </motion.div>
        </div>
      </section>

      {/* 2. WELCOME ADDRESS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Principal Photo with stylized card frame */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-school-yellow rounded-3xl transform rotate-3 scale-95 opacity-80" />
              <div className="relative bg-school-blue rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500" 
                  alt="Principal Deacon Isaiah O. Oladele" 
                  className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-school-blue to-transparent p-6 text-white pt-16">
                  <h4 className="font-display font-bold text-lg leading-tight">Deacon Isaiah O. Oladele</h4>
                  <p className="text-xs text-school-yellow font-semibold">School Principal & Proprietor</p>
                </div>
              </div>
            </div>

            {/* Principal Welcome Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-extrabold uppercase text-school-blue-light tracking-wider flex items-center gap-1.5">
                <Volume2 className="w-4 h-4" /> Welcome to NLCC
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-school-blue tracking-tight leading-tight">
                Nurturing Excellent Leaders of Tomorrow
              </h2>
              <div className="h-1 w-20 bg-school-yellow rounded-full" />
              
              <div className="text-slate-600 text-sm sm:text-base space-y-4 leading-relaxed">
                <p className="font-medium italic text-slate-700">
                  "Dear Parents, Guardians, and Friends, it is my absolute pleasure to welcome you to New Life Comprehensive College. We believe that every child is a unique bundle of possibilities."
                </p>
                <p>
                  Since our inception in 2008, our goal has been to provide an environment where academic curiosity is ignited and character is fortified. We do not just prepare students to pass examinations; we prepare them to navigate and lead in a rapidly changing world.
                </p>
                <p>
                  Our campus, situated at the serene New Life Camp Ground in the Soka Area of Ibadan, offers a distraction-free, securely guarded environment perfectly suited for holistic development. With state-of-the-art sciences and computer labs, and a team of deeply devoted educators, we assure you that your child's future is secure with us.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <button
                  onClick={() => {
                    setActivePage('about-us');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-school-blue hover:bg-school-blue-light text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  Read Full Welcome Message
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div className="text-xs border-l-2 border-school-yellow pl-4">
                  <p className="font-bold text-slate-800">Deacon Isaiah O. Oladele</p>
                  <p className="text-slate-500">M.Ed Educational Admin (UI)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE OUR SCHOOL SECTION (Value propositions) */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-school-blue-light uppercase tracking-widest bg-school-blue-light/5 px-3 py-1 rounded-full">
              Our Foundations
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-school-blue tracking-tight">
              Why Parents Trust NLCC
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              We stand apart in our commitment to combining premium learning tools with strict moral character and discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 border border-blue-100 text-school-blue-light rounded-xl flex items-center justify-center mb-5">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-slate-800 text-base mb-2">Academic Intensity</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Extensive tutoring hours, regular CA feedback, and free remedial programs ensuring high performance in WAEC, NECO and JAMB.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-amber-50 border border-amber-100 text-school-yellow-dark rounded-xl flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-slate-800 text-base mb-2">Character & Discipline</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Zero tolerance for indiscipline, examination malpractice, and bullying. We instill honest Christian and civic ethics in every child.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-50 border border-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-slate-800 text-base mb-2">Future-Ready Skills</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Computer studies focus, coding workshops, art dye-crafting, and robotic projects integrated directly with secondary sciences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-slate-800 text-base mb-2">Qualified Devoted Teachers</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Our faculty consists of certified education specialists, subject specialists, and compassionate mentors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACADEMIC EXCELLENCE HIGHLIGHTS */}
      <section className="py-20 bg-school-blue text-white relative">
        <div className="absolute inset-0 bg-slate-900/40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold text-school-yellow uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                Performance Track Record
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Our Students Do Not Just Succeed; <br />
                <span className="text-school-yellow">They Lead Oyo State</span>
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                New Life Comprehensive College maintains an incredible reputation for top-tier results in both external academic exams and inter-school science/debate tournaments.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="border-l-4 border-school-yellow pl-4 py-2">
                  <p className="text-3xl md:text-4xl font-extrabold text-white font-display">98%</p>
                  <p className="text-xs text-slate-300 mt-1 uppercase font-bold tracking-wider">WAEC Credit Success</p>
                </div>
                <div className="border-l-4 border-school-yellow pl-4 py-2">
                  <p className="text-3xl md:text-4xl font-extrabold text-white font-display">1st</p>
                  <p className="text-xs text-slate-300 mt-1 uppercase font-bold tracking-wider">State Debate Series Winner</p>
                </div>
                <div className="border-l-4 border-school-yellow pl-4 py-2">
                  <p className="text-3xl md:text-4xl font-extrabold text-white font-display">250+</p>
                  <p className="text-xs text-slate-300 mt-1 uppercase font-bold tracking-wider">Average JAMB Score</p>
                </div>
                <div className="border-l-4 border-school-yellow pl-4 py-2">
                  <p className="text-3xl md:text-4xl font-extrabold text-white font-display">18Yrs</p>
                  <p className="text-xs text-slate-300 mt-1 uppercase font-bold tracking-wider">Of Academic Trust</p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setActivePage('academics');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white hover:bg-slate-100 text-school-blue font-bold text-xs py-3 px-6 rounded-xl transition-all cursor-pointer inline-flex items-center gap-1.5"
                >
                  Explore Academic Divisions
                  <ArrowRight className="w-4 h-4 text-school-yellow-dark" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {newsAnnouncements.slice(0, 2).map((news) => (
                <div key={news.id} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all flex gap-4">
                  <div className="w-16 h-16 rounded-xl bg-slate-800 overflow-hidden flex-shrink-0">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-[10px] text-school-yellow uppercase font-bold tracking-widest">{news.category}</span>
                    <h4 className="font-display font-semibold text-sm text-white hover:text-school-yellow transition-colors cursor-pointer mt-0.5" onClick={() => setActivePage('student-life')}>
                      {news.title}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1.5 line-clamp-2">
                      {news.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. MODERN FACILITIES PREVIEW SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-school-blue-light uppercase tracking-widest bg-school-blue-light/5 px-3 py-1 rounded-full">
              Modern Campus Infrastructure
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-school-blue tracking-tight">
              World-Class Facilities for Holistic Development
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Situated at the spacious New Life Camp Ground, our campus provides safe, advanced facilities for modern secondary education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.slice(0, 3).map((fac, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img src={fac.image} alt={fac.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-school-blue/80 text-school-yellow text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                    Infrastructure
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-display font-bold text-slate-800 text-sm">{fac.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{fac.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-10">
            <button
              onClick={() => {
                setActivePage('student-life');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-school-blue hover:text-school-blue-light border-b-2 border-school-yellow hover:border-school-blue transition-colors cursor-pointer pb-1"
            >
              View More Facilities & Image Gallery
            </button>
          </div>
        </div>
      </section>

      {/* 6. UPCOMING EVENTS & RECENT NEWS SECTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Events Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-school-blue-light uppercase tracking-widest block">NLCC Calendar</span>
                <h3 className="font-display font-black text-2xl text-school-blue">Upcoming School Events</h3>
              </div>

              <div className="space-y-4">
                {nextEvents.map((ev) => (
                  <div key={ev.id} className="bg-white rounded-2xl p-4 border border-slate-200/60 shadow-sm hover:shadow-md transition-all flex gap-4">
                    {/* Date Block */}
                    <div className="p-3 bg-school-blue-bg border border-blue-100 rounded-xl text-center w-20 flex-shrink-0 flex flex-col justify-center">
                      <span className="text-slate-500 text-[10px] uppercase font-bold font-mono">2026</span>
                      <span className="text-school-blue-light text-sm font-black font-display mt-0.5 leading-none">
                        {ev.date.split(',')[0].split(' ')[1] || '11'}
                      </span>
                      <span className="text-slate-600 text-[10px] uppercase font-bold mt-0.5">
                        {ev.date.split(',')[0].split(' ')[0]?.substring(0, 3) || 'Jul'}
                      </span>
                    </div>

                    {/* Event Info */}
                    <div className="space-y-1">
                      <span className="bg-school-yellow/15 text-school-yellow-dark text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider">
                        {ev.category}
                      </span>
                      <h4 className="font-display font-bold text-slate-800 text-xs sm:text-sm pt-1">
                        {ev.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 line-clamp-2">
                        {ev.description}
                      </p>
                      <div className="flex gap-4 text-[10px] text-slate-400 font-medium pt-1.5">
                        <span className="flex items-center gap-1">
                          <svg className="w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          {ev.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setActivePage('admissions');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                View Full Academic Admissions Calendar
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* News Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-school-blue-light uppercase tracking-widest block">NLCC Bulletin</span>
                <h3 className="font-display font-black text-2xl text-school-blue">Latest News & Announcements</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {recentNews.slice(0, 2).map((news) => (
                  <div key={news.id} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col">
                    <div className="h-40 overflow-hidden relative">
                      <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                      <div className="absolute bottom-3 left-3 bg-school-blue/90 text-white text-[9px] font-bold px-2 py-0.5 rounded">
                        {news.category}
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-1.5">
                        <span className="text-[10px] text-slate-400 font-semibold">{news.date}</span>
                        <h4 className="font-display font-bold text-slate-800 text-xs sm:text-sm line-clamp-2 hover:text-school-blue transition-colors cursor-pointer" onClick={() => setActivePage('student-life')}>
                          {news.title}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                          {news.summary}
                        </p>
                      </div>
                      <button onClick={() => setActivePage('student-life')} className="text-[11px] font-extrabold text-school-blue-light hover:text-school-blue inline-flex items-center gap-1 cursor-pointer self-start">
                        Read Story
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. PARENT/STUDENT TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-school-blue-light uppercase tracking-widest bg-school-blue-light/5 px-3 py-1 rounded-full">
              Community Voices
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-school-blue tracking-tight">
              What Parents & Alumni Say About Us
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Read real feedback from parents and former students whose paths have been transformed by New Life Comprehensive College.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-school-yellow fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                    "{test.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 border-t border-slate-200/50 pt-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-slate-200 border-2 border-school-yellow">
                    <img src={test.image} alt={test.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 text-xs sm:text-sm">{test.name}</h5>
                    <p className="text-[10px] text-slate-500 font-semibold">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION ENROLLMENT BLOCK */}
      <section className="bg-school-blue text-white py-16 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-school-blue to-slate-900 opacity-90" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-school-yellow/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Secure Your Child's Academic and Moral Future Today
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Our admissions are actively open for JSS1, JSS2, and SS1 divisions for the 2026/2027 Academic Session. Download syllabus specs or register online immediately.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <button
              onClick={onOpenAdmission}
              className="w-full sm:w-auto bg-school-yellow hover:bg-school-yellow-dark text-school-blue hover:text-white font-extrabold text-xs px-6 py-3.5 rounded-xl transition-all shadow-md cursor-pointer uppercase tracking-wider"
            >
              Start Online Admission Form
            </button>
            <button
              onClick={() => {
                setActivePage('admissions');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs px-6 py-3.5 rounded-xl transition-all cursor-pointer"
            >
              Admission Requirements
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
