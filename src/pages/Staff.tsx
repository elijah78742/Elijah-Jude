import { useState } from 'react';
import { Award, Mail, Phone, BookOpen, GraduationCap, Users, UserCheck } from 'lucide-react';
import { staffMembers, schoolInfo } from '../data';

export default function Staff() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Administration' | 'Sciences' | 'Arts & Humanities' | 'Commercials'>('All');

  const categories: Array<'All' | 'Administration' | 'Sciences' | 'Arts & Humanities' | 'Commercials'> = [
    'All', 'Administration', 'Sciences', 'Arts & Humanities', 'Commercials'
  ];

  const filteredStaff = activeFilter === 'All'
    ? staffMembers
    : staffMembers.filter((staff) => staff.department === activeFilter);

  // Administrative leaders (Principal & VP) are spotlighted
  const adminLeaders = staffMembers.filter((staff) => staff.department === 'Administration');
  const subjectTeachers = filteredStaff.filter((staff) => staff.department !== 'Administration');

  return (
    <div id="staff-page">
      {/* Page Hero */}
      <section className="bg-school-blue text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/30" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <span className="text-[10px] font-bold text-school-yellow uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/10">
            Nurturers of Giants
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Our Professional Faculty
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Meet the certified educators, administrators, and mentors dedicated to guiding your child's moral and cognitive development.
          </p>
        </div>
      </section>

      {/* Leadership Spotlight section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-school-blue">School Administration Leadership</h2>
            <div className="h-1 w-12 bg-school-yellow mx-auto rounded-full" />
            <p className="text-slate-500 text-xs sm:text-sm">
              Our administration combines decades of secondary school management, curriculum audits, and pastoral guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {adminLeaders.map((leader, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-school-yellow/5 rounded-full blur-xl" />
                
                {/* Image Frame */}
                <div className="w-full sm:w-40 h-48 rounded-2xl overflow-hidden bg-slate-200 border-2 border-school-yellow flex-shrink-0">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                </div>

                {/* Profile Details */}
                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <span className="bg-school-blue text-school-yellow text-[9px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">
                      {leader.role}
                    </span>
                    <h3 className="font-display font-bold text-slate-800 text-base leading-tight">
                      {leader.name}
                    </h3>
                    <p className="text-[11px] font-semibold text-school-blue-light flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-school-yellow-dark flex-shrink-0" />
                      {leader.qualification}
                    </p>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {leader.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Teacher Directory section */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-school-blue">Instructors & Subject Heads</h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Our classrooms are staffed by certified subject specialists who hold professional education credentials and are passionate about instruction.
            </p>

            {/* real-time filter tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeFilter === cat
                      ? 'bg-school-blue text-white shadow shadow-school-blue/10 font-bold'
                      : 'bg-white text-slate-600 hover:text-school-blue hover:bg-slate-100 border border-slate-200/50'
                  }`}
                >
                  {cat === 'All' ? 'Show All Staff' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Directory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeFilter === 'All' || activeFilter === 'Administration' ? (
              // When viewing "All", we show subject teachers only here (admins are highlighted above)
              subjectTeachers.map((teacher, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-150 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  <div className="p-5 space-y-4">
                    <div className="flex gap-4 items-center">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-200 flex-shrink-0 border-2 border-slate-100">
                        <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="bg-school-yellow/15 text-school-yellow-dark text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          {teacher.department}
                        </span>
                        <h4 className="font-display font-bold text-slate-800 text-sm mt-1 leading-tight">{teacher.name}</h4>
                        <p className="text-[10px] text-slate-500 font-semibold">{teacher.role}</p>
                      </div>
                    </div>
                    
                    <div className="text-[10px] text-school-blue bg-school-blue-bg border border-blue-100 p-2 rounded-lg flex items-start gap-1.5 font-medium leading-tight">
                      <GraduationCap className="w-4 h-4 text-school-yellow-dark flex-shrink-0" />
                      <span>{teacher.qualification}</span>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {teacher.description}
                    </p>
                  </div>

                  <div className="bg-slate-50 px-5 py-3 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400 font-semibold">
                    <span>New Life College Faculty</span>
                    <span className="flex items-center gap-1 text-emerald-600">
                      <UserCheck className="w-3.5 h-3.5" />
                      Certified
                    </span>
                  </div>
                </div>
              ))
            ) : (
              // When department filter is active, show matching teachers directly
              filteredStaff.map((teacher, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-150 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  <div className="p-5 space-y-4">
                    <div className="flex gap-4 items-center">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-200 flex-shrink-0 border-2 border-slate-100">
                        <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="bg-school-yellow/15 text-school-yellow-dark text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          {teacher.department}
                        </span>
                        <h4 className="font-display font-bold text-slate-800 text-sm mt-1 leading-tight">{teacher.name}</h4>
                        <p className="text-[10px] text-slate-500 font-semibold">{teacher.role}</p>
                      </div>
                    </div>
                    
                    <div className="text-[10px] text-school-blue bg-school-blue-bg border border-blue-100 p-2 rounded-lg flex items-start gap-1.5 font-medium leading-tight">
                      <GraduationCap className="w-4 h-4 text-school-yellow-dark flex-shrink-0" />
                      <span>{teacher.qualification}</span>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {teacher.description}
                    </p>
                  </div>

                  <div className="bg-slate-50 px-5 py-3 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400 font-semibold">
                    <span>New Life College Faculty</span>
                    <span className="flex items-center gap-1 text-emerald-600">
                      <UserCheck className="w-3.5 h-3.5" />
                      Certified
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Advisory council block */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-school-blue text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-school-yellow/10 rounded-full blur-xl" />
            <div className="p-4 bg-white/10 rounded-2xl text-school-yellow flex-shrink-0">
              <Users className="w-10 h-10" />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="font-display font-bold text-base sm:text-lg">Want to Join our Educator Team?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                New Life Comprehensive College actively recruits passionate, certified educators who hold degree qualifications in their subject domains (B.Ed., B.Sc., B.A. with PGDE). Send your cover CV and qualifications directly to <strong className="text-white">careers@newlifecollege.edu.ng</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
