import { motion } from 'motion/react';
import { Target, Compass, Award, Heart, CheckCircle2, Shield, Milestone, Sparkles, BookOpen } from 'lucide-react';
import { schoolInfo } from '../data';

export default function AboutUs() {
  const coreValues = [
    { title: 'Academic Excellence', description: 'Nurturing deep analytical reasoning, creative curiosity, and consistency to achieve premium ranks globally.', icon: <Award className="w-5 h-5 text-school-yellow-dark" /> },
    { title: 'Moral Discipline', description: 'Zero compromise on character. We enforce strict obedience, polite language, and healthy work ethics.', icon: <Shield className="w-5 h-5 text-school-yellow-dark" /> },
    { title: 'Absolute Integrity', description: 'We believe honesty is the shield of leadership. We teach students to defend the truth always.', icon: <Compass className="w-5 h-5 text-school-yellow-dark" /> },
    { title: 'Creative Innovation', description: 'Expanding standard curriculum with digital literacy, computer coding workshops, and art craft work.', icon: <Sparkles className="w-5 h-5 text-school-yellow-dark" /> },
    { title: 'Faith & Trust', description: 'A robust Christian moral foundation that teaches children reverence for God and genuine respect for humanity.', icon: <Heart className="w-5 h-5 text-school-yellow-dark" /> },
    { title: 'Future Leadership', description: 'Encouraging public speaking, sportsmanship, and student leadership roles through peer mentoring.', icon: <Target className="w-5 h-5 text-school-yellow-dark" /> },
  ];

  const milestones = [
    { year: '2008', title: 'Foundational Beginning', description: 'NLCC was established with 12 pioneer students and 5 devoted teachers at the Soka Campground.' },
    { year: '2012', title: 'Oyo State Accreditation', description: 'Received full Oyo State Ministry of Education approvals for Junior and Senior Secondary examinations.' },
    { year: '2016', title: 'STEM & ICT Laboratory Launch', description: 'Built our fully equipped computer programming laboratory, standardizing digital education.' },
    { year: '2020', title: 'National Science Olympiad Honor', description: 'Represented Ibadan and placed among top institutions in the national secondary science championship.' },
    { year: '2025', title: '98% WASSCE Success Rate', description: 'Celebrated exceptional WAEC results with 98% of students qualifying directly for university admissions.' },
  ];

  return (
    <div id="about-us-page">
      {/* Page Hero Banner */}
      <section className="bg-school-blue text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/30" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <span className="text-[10px] font-bold text-school-yellow uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/10">
            Nurturing Great Minds
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Who We Are
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Discover the history, core objectives, values, and leaders guiding New Life Comprehensive College.
          </p>
        </div>
      </section>

      {/* History and Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display font-black text-2xl sm:text-3xl text-school-blue tracking-tight">
                Our History & Roots
              </h2>
              <div className="h-1 w-16 bg-school-yellow rounded-full" />
              <div className="text-slate-600 text-xs sm:text-sm space-y-4 leading-relaxed">
                <p>
                  Established in <strong>{schoolInfo.established}</strong>, New Life Comprehensive College was born from a deep, divine burden to create a unique co-educational secondary school in Ibadan that serves as an altar for high cognitive pursuit and strong moral development.
                </p>
                <p>
                  Recognizing the moral decline and the loss of practical experimental learning in secondary school frameworks, our founders secured a spacious, safe, and serene location at the **New Life Camp Ground, Oloola, Soka Area of Ibadan**. This provides our children with a peaceful learning atmosphere, completely separated from the noise and distractions of metropolitan commercial centers.
                </p>
                <p>
                  From a humble starting class of eager learners, NLCC has expanded into a reputable comprehensive center. We offer a dual curriculum that guides children from the foundations of basic technology to highly specialized science, art, and commerce senior secondary certifications.
                </p>
              </div>
            </div>

            <div className="bg-school-blue-bg border border-blue-100 p-6 sm:p-8 rounded-2xl relative space-y-6 shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-school-yellow/5 rounded-full blur-xl" />
              <h3 className="font-display font-bold text-school-blue text-lg flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-school-yellow-dark" />
                Our Educational Philosophy
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                At NLCC, we believe education is not a mechanical system of rote memorization for passing tests. It is the igniting of a flame.
              </p>
              <blockquote className="border-l-4 border-school-yellow pl-4 text-xs italic text-slate-700 leading-relaxed font-medium">
                "We teach students how to formulate logical thoughts, test theories inside our laboratories, paint concepts on art canvases, and defend arguments in public assemblies. Above all, we maintain that knowledge without the fear of God is dangerous."
              </blockquote>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Our curriculum merges national Nigerian Educational Research and Development Council (NERDC) guidelines with active technical workshops, civic responsibility exercises, and robust physical sports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision (Interactive High-contrast grid) */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision Block */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm flex gap-5 items-start">
              <div className="p-4 bg-school-blue/10 text-school-blue rounded-xl flex-shrink-0">
                <Compass className="w-8 h-8" />
              </div>
              <div className="space-y-3">
                <h3 className="font-display font-bold text-slate-800 text-lg sm:text-xl">Our Vision Statement</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  "To be a leading educational citadel that raises globally competitive future leaders who are intellectually sound, morally upright, creative, and spiritually anchored."
                </p>
              </div>
            </div>

            {/* Mission Block */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm flex gap-5 items-start">
              <div className="p-4 bg-school-yellow/20 text-school-yellow-dark rounded-xl flex-shrink-0">
                <Target className="w-8 h-8" />
              </div>
              <div className="space-y-3">
                <h3 className="font-display font-bold text-slate-800 text-lg sm:text-xl">Our Mission Statement</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  "To provide a stimulating learning environment where highly qualified teachers deploy modern technologies to deliver rigorous secondary academic instructions, while molding character through firm moral discipline and divine guidance."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-school-blue">Our Core Values</h2>
            <div className="h-1 w-12 bg-school-yellow mx-auto rounded-full" />
            <p className="text-slate-500 text-xs sm:text-sm">
              These six core pillars define the daily conduct, instructional approaches, and discipline standards at New Life Comprehensive College.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100/80 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 bg-school-yellow/15 text-school-yellow-dark rounded-lg flex items-center justify-center mb-4">
                  {val.icon}
                </div>
                <h3 className="font-display font-bold text-slate-800 text-sm mb-1.5">{val.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal full welcome address */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-10 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 pb-5 gap-4">
              <div>
                <h3 className="font-display font-black text-xl sm:text-2xl text-school-blue">
                  A Message From The Principal
                </h3>
                <p className="text-xs text-slate-500">Deacon Isaiah O. Oladele, School Principal / Proprietor</p>
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-school-yellow bg-slate-100 flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" alt="Principal" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="text-slate-600 text-xs sm:text-sm space-y-4 leading-relaxed">
              <p>
                <strong>Dear Parents, Guardians, and Future Leaders,</strong>
              </p>
              <p>
                I am deeply honored to address you as we reflect on the continuous growth and academic feats of New Life Comprehensive College. Choosing a school is one of the most critical decisions you will make for your child, and I thank you for considering NLCC.
              </p>
              <p>
                The name "New Life" is not a marketing label; it is our covenant. We believe in providing a platform for fresh academic starts, high moral re-alignments, and spiritual growth. We have watched children who struggled with simple arithmetic elsewhere grow to become top mathematical scorers in Oyo State WAEC lists.
              </p>
              <p>
                Our teachers are not just employees; they are educational ministers called to guide. Under their supervision, we ensure that modern science laboratories are utilized weekly for hands-on physics, chemistry, and biology experiments. We have standardized digital literacy in our ICT labs, so our students graduate with coding skills and high analytical minds.
              </p>
              <p>
                As a co-educational, non-boarding institution, we maintain very strict disciplinary audits. We teach our students to be clean, punctual, respectful, and entirely honest. Examination malpractice is strictly outlawed; we prove that through hard work, God’s grace, and expert pedagogy, our children can clear any national examination in flying colors.
              </p>
              <p>
                My door is always open to discuss your child’s educational pathway. I look forward to welcoming you physically to our campus at the New Life Campground, Soka Area of Ibadan.
              </p>
              <p className="pt-4 font-semibold text-slate-800">
                Yours in Excellence,
              </p>
              <div className="font-display font-bold text-school-blue text-xs">
                <p>Deacon Isaiah O. Oladele</p>
                <p className="text-slate-500 font-medium font-sans">Principal, New Life Comprehensive College</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School achievements timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-school-blue">Our Journey & Accomplishments</h2>
            <div className="h-1 w-12 bg-school-yellow mx-auto rounded-full" />
            <p className="text-slate-500 text-xs sm:text-sm">
              Key historical accomplishments of New Life Comprehensive College from foundation to state prominence.
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative pl-6 sm:pl-0">
            {/* Center Line on desktop, left line on mobile */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((mil, idx) => (
                <div key={idx} className="relative flex flex-col sm:flex-row items-start sm:items-center">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-0 sm:left-1/2 w-4 h-4 rounded-full bg-school-yellow border-4 border-school-blue -translate-x-1/2 z-10" />

                  {/* Date Badge */}
                  <div className={`sm:w-1/2 flex pl-8 sm:pl-0 ${idx % 2 === 0 ? 'sm:justify-end sm:pr-8' : 'sm:order-2 sm:pl-8'}`}>
                    <span className="font-display font-extrabold text-2xl text-school-blue-light bg-school-blue-bg border border-blue-100 px-3 py-1 rounded-xl">
                      {mil.year}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div className={`sm:w-1/2 pl-8 sm:pl-0 ${idx % 2 === 0 ? 'sm:order-2 sm:pl-8' : 'sm:pr-8'}`}>
                    <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl shadow-sm space-y-1.5">
                      <h4 className="font-display font-bold text-slate-800 text-sm">{mil.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{mil.description}</p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
