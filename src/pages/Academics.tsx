import { useState } from 'react';
import { BookOpen, CheckCircle, GraduationCap, Award, HelpCircle, Code, Award as AwardIcon, Microscope, Check, RefreshCw, ChevronRight } from 'lucide-react';
import { academicPrograms, schoolInfo } from '../data';

export default function Academics() {
  const [activeTab, setActiveTab] = useState(0);

  const learningMethods = [
    { title: 'Experimental Practical Labs', description: 'Weekly intensive physics, chemistry, and biology laboratory sessions where students run experiments individually to master scientific principles.', icon: <Microscope className="w-5 h-5 text-school-blue" /> },
    { title: 'Digital Programming & Tech Integration', description: 'Standard programming sessions (Scratch, Python) and computer hardware diagnostics in our digital computer center.', icon: <Code className="w-5 h-5 text-school-blue" /> },
    { title: 'Structured Continuous Assessment', description: 'We administer weekly tests and research assignments, providing regular progress feedback and preventing standard end-of-term examination panic.', icon: <Award className="w-5 h-5 text-school-blue" /> },
    { title: 'Free Remedial Coaching', description: 'Teachers run daily diagnostic reviews and voluntary afternoon coaching sessions to guide students struggling in crucial areas like Mathematics and English.', icon: <RefreshCw className="w-5 h-5 text-school-blue" /> },
  ];

  const examPreps = [
    { name: 'Oyo State & National BECE', scope: 'Junior Secondary JSS3', focus: 'Provides students with 100% preparation in basic sciences, mathematics, civic education, and languages to clear the Oyo State and Federal Basic Education Certificate Examination.' },
    { name: 'WAEC / WASSCE', scope: 'Senior Secondary SS3', focus: 'Highly intensive revisions, WAEC-style mock practicals, past-question diagnostics, and strict exam discipline to maintain our 98% credit success rate.' },
    { name: 'NECO / SSCE', scope: 'Senior Secondary SS3', focus: 'Complete alignments with national NECO syllabuses. Our candidates are trained on answer formatting, speed, and precision across sciences, commercial and art choices.' },
    { name: 'JAMB / UTME', scope: 'Senior Secondary SS3', focus: 'Computer-Based Test (CBT) simulations in our computer laboratory, training students on speed, logic, time-management, and high-scoring strategies.' },
  ];

  const currentProgram = academicPrograms[activeTab];

  return (
    <div id="academics-page">
      {/* Page Hero */}
      <section className="bg-school-blue text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/30" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <span className="text-[10px] font-bold text-school-yellow uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/10">
            Pinnacle of Learning
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Academic Programs & Divisions
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Delve into our comprehensive, NERDC-aligned curriculum structured to spark intellect, discipline, and creative innovation.
          </p>
        </div>
      </section>

      {/* Curriculum Divisions (Interactive Tab block) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-school-blue">Our Curriculum & Departments</h2>
            <div className="h-1 w-12 bg-school-yellow mx-auto rounded-full" />
            <p className="text-slate-500 text-xs sm:text-sm">
              We offer highly intensive programs spanning Junior Secondary and specialized divisions within Senior Secondary education.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Tab Buttons Side Column */}
            <div className="lg:col-span-4 flex flex-col gap-2 bg-slate-50 p-2.5 rounded-2xl border border-slate-100 h-fit">
              {academicPrograms.map((prog, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left px-4 py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-between gap-3 border ${
                    activeTab === idx
                      ? 'bg-school-blue border-school-blue text-white shadow-lg shadow-school-blue/10 font-bold'
                      : 'bg-white border-transparent text-slate-600 hover:text-school-blue hover:bg-slate-50'
                  }`}
                >
                  <span className="truncate">{prog.title.split(' - ')[0]}</span>
                  <ChevronRight className={`w-4 h-4 flex-shrink-0 ${activeTab === idx ? 'text-school-yellow' : 'text-slate-400'}`} />
                </button>
              ))}
            </div>

            {/* Selected Tab Content Panel */}
            <div className="lg:col-span-8 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-school-yellow/5 rounded-full blur-xl" />
              
              <div className="space-y-1">
                <span className="bg-school-yellow/15 text-school-yellow-dark text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Academic Department
                </span>
                <h3 className="font-display font-black text-slate-800 text-lg sm:text-xl md:text-2xl pt-1">
                  {currentProgram.title}
                </h3>
                <p className="text-xs sm:text-sm text-school-blue font-semibold italic">
                  "{currentProgram.subtitle}"
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentProgram.description}
              </p>

              {/* Grid split: Focus Areas vs. Subjects */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {/* Subjects Column */}
                <div className="bg-white p-5 rounded-xl border border-slate-200/50 space-y-3 shadow-sm">
                  <h4 className="font-display font-bold text-slate-800 text-xs sm:text-sm flex items-center gap-1.5 border-b border-slate-100 pb-2">
                    <BookOpen className="w-4.5 h-4.5 text-school-blue" />
                    Subjects Offered ({currentProgram.subjects.length})
                  </h4>
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-[11px] text-slate-600 font-medium">
                    {currentProgram.subjects.map((subj, sIdx) => (
                      <li key={sIdx} className="flex gap-1 items-start">
                        <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="truncate" title={subj}>{subj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Focus Areas */}
                <div className="bg-white p-5 rounded-xl border border-slate-200/50 space-y-3 shadow-sm">
                  <h4 className="font-display font-bold text-slate-800 text-xs sm:text-sm flex items-center gap-1.5 border-b border-slate-100 pb-2">
                    <GraduationCap className="w-4.5 h-4.5 text-school-blue" />
                    Key Pedagogical Focus
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    {currentProgram.keyFocus.map((focus, fIdx) => (
                      <li key={fIdx} className="flex gap-2 items-start">
                        <span className="w-5 h-5 rounded-full bg-school-blue-bg text-school-blue text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                          {fIdx + 1}
                        </span>
                        <span>{focus}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Learning Methods Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-school-blue">Modern Learning Methods</h2>
            <div className="h-1 w-12 bg-school-yellow mx-auto rounded-full" />
            <p className="text-slate-500 text-xs sm:text-sm">
              We reject standard theoretical passive reading. Our teachers actively employ structural techniques to stimulate mental performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningMethods.map((met, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex gap-4">
                <div className="p-3 bg-school-blue-bg border border-blue-50 text-school-blue rounded-xl flex-shrink-0 h-11 w-11 flex items-center justify-center mt-0.5">
                  {met.icon}
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-slate-800 text-sm">{met.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{met.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examination Preparation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-school-blue">Rigorous Examination Preparation</h2>
            <div className="h-1 w-12 bg-school-yellow mx-auto rounded-full" />
            <p className="text-slate-500 text-xs sm:text-sm">
              We run intensive assessment preparation cycles to verify that our students excel on first attempts in state and national exams.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {examPreps.map((prep, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[9px] font-bold text-school-yellow-dark uppercase bg-school-yellow/15 px-2 py-0.5 rounded-full tracking-wider">
                    {prep.scope}
                  </span>
                  <h3 className="font-display font-bold text-slate-800 text-sm pt-1">
                    {prep.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {prep.focus}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-school-blue pt-4 border-t border-slate-200/50 mt-4">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Comprehensive Prep</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar Block */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-school-blue rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-school-yellow/10 rounded-full blur-2xl" />
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/10 pb-4 gap-2">
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white">2026 Academic Term Highlights</h3>
                  <p className="text-xs text-slate-300">Third Term (May - July 2026)</p>
                </div>
                <span className="bg-school-yellow/25 text-school-yellow text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Active Session
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                  <div className="flex gap-2 items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-school-yellow" />
                    <strong>Third Term Mock Examinations (SS3)</strong>
                  </div>
                  <span className="text-slate-300">June 15 - June 24, 2026</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                  <div className="flex gap-2 items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-school-yellow" />
                    <strong>Internal Basic Education Examination (BECE)</strong>
                  </div>
                  <span className="text-slate-300">June 29 - July 8, 2026</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                  <div className="flex gap-2 items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-school-yellow" />
                    <strong>Terminal Promotion Exams (JSS1-2, SS1-2)</strong>
                  </div>
                  <span className="text-slate-300">July 13 - July 22, 2026</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex gap-2 items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-school-yellow" />
                    <strong>Graduation, Prize Giving & Valedictory Ceremony</strong>
                  </div>
                  <span className="text-slate-300">July 29, 2026</span>
                </div>
              </div>

              <div className="pt-2 text-[10px] text-slate-300 flex items-center gap-1.5 bg-white/5 p-3 rounded-lg border border-white/10">
                <HelpCircle className="w-4.5 h-4.5 text-school-yellow flex-shrink-0" />
                <span>Notice: Dates are subject to slight changes depending on guidelines from Oyo State Ministry of Education. Parents will be notified via SMS.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
