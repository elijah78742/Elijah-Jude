import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles, Award, Globe, Users, Flame, BookOpen, ChevronRight, Camera, Trophy, Medal } from 'lucide-react';
import { gallery, schoolInfo } from '../data';

export default function StudentLife() {
  const [activeGalleryFilter, setActiveGalleryFilter] = useState<'all' | 'campus' | 'academics' | 'sports' | 'events' | 'cultural'>('all');

  const galleryFilters: Array<{ id: 'all' | 'campus' | 'academics' | 'sports' | 'events' | 'cultural'; label: string }> = [
    { id: 'all', label: 'All Photos' },
    { id: 'campus', label: 'Our Campus' },
    { id: 'academics', label: 'Academics & Labs' },
    { id: 'sports', label: 'Sports & Track' },
    { id: 'cultural', label: 'Cultural Day' },
    { id: 'events', label: 'School Events' },
  ];

  const filteredGallery = activeGalleryFilter === 'all'
    ? gallery
    : gallery.filter((item) => item.category === activeGalleryFilter);

  const clubs = [
    { name: 'JET Club (Sciences)', desc: 'Focuses on robotics, basic electrical wiring experiments, and quiz preparatories.', icon: '🧪' },
    { name: 'Press & Media Club', desc: 'Trains students in campus news reporting, public reading, and termly newsletter publishing.', icon: '🎤' },
    { name: 'Drama & Debating Society', desc: 'Builds public eloquence, critical analysis, theatrical acting, and argumentative debating.', icon: '🎭' },
    { name: 'Young Farmers Society', desc: 'Promotes agricultural science, campus soil cultivation, and poultry-rearing practices.', icon: '🌱' },
    { name: 'Music & Creative Orchestra', desc: 'Teaches music notation, standard keyboard piano, traditional drums, and choir harmony.', icon: '🎹' },
  ];

  const sports = [
    { name: 'NLCC Football League', desc: 'Our premier sport. Students participate in inter-class tournaments and friendly inter-school derbies.', icon: '⚽' },
    { name: 'Track & Field Athletics', desc: 'Covers sprints, relays, high jump, and shot put during the highly anticipated annual Inter-House Sports.', icon: '🏃' },
    { name: 'Basketball & Volleyball', desc: 'Outdoor courts designed for hand-eye coordination, teamwork drills, and tactical game sessions.', icon: '🏀' },
    { name: 'Indoor Table Tennis', desc: 'Reflex-honing indoor tables available for recreational hours and friendly tournaments.', icon: '🏓' }
  ];

  const achievements = [
    { title: 'Gold Trophy: Oyo State Debate Championship', scope: 'Literary & Debate Society (May 2026)', desc: 'NLCC won overall first place among top schools in Ibadan for eloquence and structure.' },
    { title: '1st Runner Up: Ibadan Inter-School Physics Olympiad', scope: 'JET Science Club (February 2026)', desc: 'Our senior science representatives built a mini-hydraulic generator and cleared theoretical tests.' },
    { title: 'Oyo State Youth Sports Association Merit Placement', scope: 'Athletic Relay Team (November 2025)', desc: 'NLCC JSS boys relay squad secured overall silver in the 4x100m Ibadan Invitational.' }
  ];

  return (
    <div id="student-life-page">
      {/* Page Hero */}
      <section className="bg-school-blue text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/30" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <span className="text-[10px] font-bold text-school-yellow uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/10">
            Enriched Experience
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Student Life & Extracurriculars
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Nurturing talents outside classroom walls. We believe balanced children grow to become resilient, creative leaders.
          </p>
        </div>
      </section>

      {/* Clubs and Societies section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-school-blue">Clubs & Creative Societies</h2>
            <div className="h-1 w-12 bg-school-yellow mx-auto rounded-full" />
            <p className="text-slate-500 text-xs sm:text-sm">
              We mandate every student to participate in at least one academic or creative club to build teamwork, hobbies, and early career interests.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 flex gap-4 items-start">
                <span className="text-3xl flex-shrink-0 mt-0.5">{club.icon}</span>
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-slate-800 text-sm leading-tight">{club.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{club.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports & Physical development */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-school-blue">Sports & Athletics Programs</h2>
            <div className="h-1 w-12 bg-school-yellow mx-auto rounded-full" />
            <p className="text-slate-500 text-xs sm:text-sm">
              A healthy body breeds a healthy mind. Our Campground features multiple spaces for athletics, football, and recreation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {sports.map((sport, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-100 flex gap-4 items-start shadow-sm hover:shadow-md transition-all">
                <span className="text-3xl flex-shrink-0 mt-0.5">{sport.icon}</span>
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-slate-800 text-sm">{sport.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{sport.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Leadership block */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-school-blue rounded-3xl transform -rotate-3 scale-95 opacity-80" />
              <div className="relative bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=500" alt="Students in leadership" className="w-full h-80 object-cover" />
                <div className="p-4 bg-school-blue text-white text-xs">
                  <strong>NLCC Prefect Induction Assembly (2025/2026 Session)</strong>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-school-blue-light uppercase tracking-widest bg-school-blue-bg px-3 py-1 rounded-full border border-blue-100">
                Early Responsibility
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-school-blue leading-tight">
                Prefect Council & Leadership Development
              </h2>
              <div className="h-1 w-16 bg-school-yellow rounded-full" />
              <div className="text-slate-600 text-xs sm:text-sm space-y-4 leading-relaxed font-normal">
                <p>
                  At New Life Comprehensive College, leadership is not taught in passive seminars; it is active responsibility. We run a rigorous Prefect Council system that empowers Senior Secondary students to oversee daily assemblies, classroom audits, cafeteria coordination, and athletic events.
                </p>
                <p>
                  Prefects are inducted through strict nominations based on academic excellence, punctuality, moral character, and a popular student voting round. This early introduction to democracy, administrative coordination, and group responsibility equips our graduates with outstanding social intelligence.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Student Achievements spotlight */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-school-blue">Recent Student Milestones</h2>
            <div className="h-1 w-12 bg-school-yellow mx-auto rounded-full" />
            <p className="text-slate-500 text-xs sm:text-sm">
              Recent trophies and merit medals cleared by our brilliant students in Ibadan and Oyo State events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((ach, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-150 p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-amber-50 text-school-yellow-dark flex items-center justify-center">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-slate-800 text-sm leading-tight">{ach.title}</h3>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase">{ach.scope}</p>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">{ach.desc}</p>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 border-t border-slate-100 pt-4 mt-4">
                  <Medal className="w-4 h-4" />
                  <span>Gold Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Photo Gallery with filters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-school-blue flex items-center justify-center gap-2">
              <Camera className="w-6 h-6 text-school-yellow" />
              NLCC Campus Photo Gallery
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Filter and view photographs of physical lab sessions, athletics, and student interactions across the Soka Campground.
            </p>

            {/* Gallery Filter buttons */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 pt-4">
              {galleryFilters.map((filt) => (
                <button
                  key={filt.id}
                  onClick={() => setActiveGalleryFilter(filt.id)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer border ${
                    activeGalleryFilter === filt.id
                      ? 'bg-school-blue border-school-blue text-white shadow-sm'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-school-blue hover:bg-slate-50'
                  }`}
                >
                  {filt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200/50 group relative hover:shadow-xl transition-all"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-white">
                      <span className="text-[9px] text-school-yellow uppercase font-bold tracking-widest">{item.category}</span>
                      <h4 className="font-display font-semibold text-xs leading-snug mt-1">{item.title}</h4>
                    </div>
                  </div>
                  {/* Static footer for accessibility on hoverless touch screens */}
                  <div className="p-3 bg-white border-t border-slate-100 sm:hidden">
                    <span className="text-[8px] text-school-blue font-bold uppercase tracking-wider">{item.category}</span>
                    <h4 className="font-display font-bold text-slate-800 text-[10px] leading-snug truncate mt-0.5">{item.title}</h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
