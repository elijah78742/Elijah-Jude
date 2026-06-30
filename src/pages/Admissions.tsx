import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Download, Calendar, ShieldCheck, Mail, Phone, Clock, ChevronDown, CheckCircle2, DollarSign, HelpCircle, AlertCircle } from 'lucide-react';
import { faqs, schoolInfo } from '../data';

interface AdmissionsProps {
  onOpenAdmission: () => void;
}

export default function Admissions({ onOpenAdmission }: AdmissionsProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const processSteps = [
    { num: '1', title: 'Form Purchase', desc: 'Obtain the admission registration form online by clicking "Apply Online" or physically at the school administrative desk for a non-refundable fee of ₦5,000.' },
    { num: '2', title: 'Document Submission', desc: 'Submit the completed form along with candidate passport photographs, birth certificate, and most recent primary school terminal results.' },
    { num: '3', title: 'Entrance Examination', desc: 'The candidate sits for the comprehensive NLCC Entrance Examination covering Mathematics, English, and General Paper/Logic.' },
    { num: '4', title: 'Parent & Pupil Interview', desc: 'Successful candidates and their parents/guardians are invited for a physical interaction with the Vice Principal and HODs.' },
    { num: '5', title: 'Admission & Registration', desc: 'An official admission offer letter is issued. Tuition fee deposit validates placement before the resumption date.' },
  ];

  const requirements = [
    'Applicant candidate must have completed primary school education (Primary 5 or 6).',
    'Candidate must be at least 10 years of age by September of the admission year.',
    'Two (2) recent passport-sized photographs of the applicant candidate with white background.',
    'Clear photocopy of candidate birth certificate (National Population Commission preferred).',
    'Most recent primary school terminal results/transcript and a recommendation letter/testimonial.',
    'Evidence of registration fee payment (Receipt or Bank transfer slip).'
  ];

  // Simulated fees information
  const feeStructure = [
    { item: 'Tuition Fee (Per Term)', amount: '₦75,000', note: 'Includes classroom instructional materials & exams' },
    { item: 'School Uniform Pack (One-off)', amount: '₦20,000', note: 'Includes 2 sets of school uniforms, 1 sports wear, and cardigan' },
    { item: 'Books & Stationery Bundle (Annual)', amount: '₦25,000', note: 'Includes core text books and school notebook sets' },
    { item: 'Laboratory & ICT Workshop Dues (Per Term)', amount: '₦10,000', note: 'Covers physical experiments & coding materials' },
    { item: 'PTA Development Levy (Per Term)', amount: '₦5,000', note: 'Parent-Teacher Association joint welfare funding' }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleDownloadForm = () => {
    alert('Simulated File Download: The "NLCC-Admission-Application-Form-2026.pdf" has been generated and downloaded to your local device successfully.');
  };

  return (
    <div id="admissions-page">
      {/* Page Hero */}
      <section className="bg-school-blue text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/30" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <span className="text-[10px] font-bold text-school-yellow uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/10">
            Secure Placement
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Admissions Guidelines & Entry
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Everything you need to know about secure entry into New Life Comprehensive College. Join our cohort of excellence.
          </p>
        </div>
      </section>

      {/* Highlights count row */}
      <section className="bg-school-yellow py-6 border-b border-school-yellow-dark/20 text-school-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center font-display">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-wider text-school-blue/70">Application Fee</p>
            <p className="text-xl sm:text-2xl font-black mt-0.5">₦5,000 Only</p>
          </div>
          <div className="border-l border-school-blue/20">
            <p className="text-[10px] uppercase font-bold tracking-wider text-school-blue/70">Next Entrance Exam</p>
            <p className="text-xl sm:text-2xl font-black mt-0.5">July 11, 2026</p>
          </div>
          <div className="border-l border-school-blue/20">
            <p className="text-[10px] uppercase font-bold tracking-wider text-school-blue/70">JSS1 Placement Intake</p>
            <p className="text-xl sm:text-2xl font-black mt-0.5">60 Students Max</p>
          </div>
          <div className="border-l border-school-blue/20">
            <p className="text-[10px] uppercase font-bold tracking-wider text-school-blue/70">Admission Status</p>
            <p className="text-xl sm:text-2xl font-black mt-0.5 uppercase">Actively Open</p>
          </div>
        </div>
      </section>

      {/* Main Grid: Requirements & Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Requirements Column */}
            <div className="space-y-6">
              <h2 className="font-display font-black text-2xl text-school-blue tracking-tight">
                Admission Requirements
              </h2>
              <div className="h-1 w-16 bg-school-yellow rounded-full" />
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Before initiating registrations, please verify that candidate applicants satisfy our standard age and documentation thresholds:
              </p>

              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-600">
                {requirements.map((req, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenAdmission}
                  className="bg-school-blue hover:bg-school-blue-light text-white font-bold text-xs py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer uppercase tracking-wider"
                >
                  Apply Online Now
                </button>
                <button
                  onClick={handleDownloadForm}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-slate-200"
                >
                  <Download className="w-4 h-4 text-school-yellow-dark" />
                  Download Application PDF
                </button>
              </div>
            </div>

            {/* Step-by-Step Process Column */}
            <div className="space-y-6 bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-school-yellow/5 rounded-full blur-xl" />
              
              <h2 className="font-display font-black text-2xl text-school-blue tracking-tight">
                Admissions Process Steps
              </h2>
              <div className="h-1 w-16 bg-school-yellow rounded-full" />
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                We operate a clear, transparent five-step candidate enrollment procedure:
              </p>

              <div className="space-y-5 pt-3">
                {processSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start relative">
                    {/* Number block */}
                    <div className="w-8 h-8 rounded-full bg-school-blue text-school-yellow font-display font-black text-xs flex items-center justify-center flex-shrink-0 z-10 shadow shadow-school-blue/20">
                      {step.num}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display font-bold text-slate-800 text-sm leading-tight">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* School Fees Information Placeholder block */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-school-blue">Tuition & Financial Estimates</h2>
            <div className="h-1 w-12 bg-school-yellow mx-auto rounded-full" />
            <p className="text-slate-500 text-xs sm:text-sm">
              We operate a transparent financial policy. We understand current economic realities and offer structural installment plans.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-150 shadow-xl overflow-hidden">
            <div className="bg-school-blue text-white p-5 flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-school-yellow" />
              <div>
                <h3 className="font-display font-bold text-sm sm:text-base">Third Term Estimated Cost Table (2026/2027)</h3>
                <p className="text-[10px] text-slate-300">Subject to Oyo State standard curriculum specifications</p>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {feeStructure.map((fee, idx) => (
                <div key={idx} className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50 transition-colors">
                  <div className="space-y-0.5">
                    <span className="font-semibold text-xs sm:text-sm text-slate-800 block">{fee.item}</span>
                    <span className="text-[11px] text-slate-400 block">{fee.note}</span>
                  </div>
                  <span className="font-display font-extrabold text-sm sm:text-base text-school-blue-light bg-school-blue-bg border border-blue-50 px-3 py-1 rounded-xl w-fit">
                    {fee.amount}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-5 bg-amber-50 border-t border-amber-100 text-xs text-amber-800 leading-relaxed flex gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-bold">Family Discount & Installment Agreements:</p>
                <p>1. Parents registering three or more children receive a <strong>10% tuition waiver</strong> on the third sibling.</p>
                <p>2. Tuition installment plans allow split deposits: <strong>60% upon resumption</strong>, and 40% before mid-term examinations. Apply at the Accounts Desk, Campground, Soka.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions FAQ section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-school-blue">Admissions FAQ</h2>
            <div className="h-1 w-12 bg-school-yellow mx-auto rounded-full" />
            <p className="text-slate-500 text-xs sm:text-sm">
              Answers to common questions regarding admissions registration, criteria, and entrance protocols at NLCC.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden transition-all duration-200">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left py-4 px-5 flex items-center justify-between gap-4 font-semibold text-slate-800 text-xs sm:text-sm cursor-pointer hover:bg-slate-100/50"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-school-blue flex-shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform flex-shrink-0 duration-200 ${openFaqIndex === idx ? 'transform rotate-180' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {openFaqIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Admissions Desk */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-school-blue rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-school-yellow/10 rounded-full blur-2xl" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <span className="bg-school-yellow text-school-blue font-bold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded">
                  Direct Channel
                </span>
                <h3 className="font-display font-black text-2xl text-white">Contact the Admissions Board</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Have questions about transfers, transcripts or diagnostic examinations? Reach our primary desks directly or schedule a physical tour of the Soka Camp Campground.
                </p>
                <div className="space-y-2 text-xs text-slate-300 pt-1">
                  <div className="flex gap-2.5 items-center">
                    <Clock className="w-4 h-4 text-school-yellow flex-shrink-0" />
                    <span>Office Hours: Monday - Friday (8:00 AM - 4:00 PM)</span>
                  </div>
                  <div className="flex gap-2.5 items-center">
                    <Phone className="w-4 h-4 text-school-yellow flex-shrink-0" />
                    <span>{schoolInfo.phone1}  •  {schoolInfo.phone2}</span>
                  </div>
                  <div className="flex gap-2.5 items-center">
                    <Mail className="w-4 h-4 text-school-yellow flex-shrink-0" />
                    <a href={`mailto:${schoolInfo.email}`} className="hover:text-school-yellow transition-colors">{schoolInfo.email}</a>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                <h4 className="font-display font-bold text-slate-100 text-sm">Need a Callback?</h4>
                <p className="text-[11px] text-slate-300 leading-normal">
                  Enter your number and parent email below. An admissions advisor will dial you within 24 working hours.
                </p>
                <div className="space-y-2 text-xs">
                  <input type="tel" placeholder="Parent phone number (+234)" className="w-full bg-slate-900/40 border border-white/10 px-3.5 py-2 rounded-xl text-white focus:outline-none focus:border-school-yellow" />
                  <input type="email" placeholder="Parent email address" className="w-full bg-slate-900/40 border border-white/10 px-3.5 py-2 rounded-xl text-white focus:outline-none focus:border-school-yellow" />
                  <button onClick={() => alert('Callback registered successfully! An admissions advisor will call you within 24 hours.')} className="w-full bg-school-yellow hover:bg-school-yellow-dark text-school-blue hover:text-white font-bold py-2 px-4 rounded-xl transition-colors cursor-pointer text-xs">
                    Request Admissions Callback
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
