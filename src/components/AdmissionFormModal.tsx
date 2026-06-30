import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Users, GraduationCap, MapPin, Phone, Mail, FileText, ChevronRight, CheckCircle2, AlertCircle, Download, ArrowLeft } from 'lucide-react';
import { schoolInfo } from '../data';

interface AdmissionFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdmissionFormModal({ isOpen, onClose }: AdmissionFormModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Candidate Details
    candidateFirstName: '',
    candidateLastName: '',
    candidateDOB: '',
    candidateGender: '',
    proposedClass: 'JSS1',
    
    // Parent Details
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    parentAddress: '',
    parentOccupation: '',

    // Academic History
    previousSchool: '',
    lastClassCompleted: '',
    talentsOrAwards: '',
    declarationChecked: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [appCode, setAppCode] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateStep = () => {
    if (step === 1) {
      return (
        formData.candidateFirstName &&
        formData.candidateLastName &&
        formData.candidateDOB &&
        formData.candidateGender &&
        formData.proposedClass
      );
    }
    if (step === 2) {
      return (
        formData.parentName &&
        formData.parentPhone &&
        formData.parentEmail &&
        formData.parentAddress
      );
    }
    if (step === 3) {
      return formData.previousSchool && formData.lastClassCompleted && formData.declarationChecked;
    }
    return false;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    } else {
      alert('Please fill in all required fields marked with an asterisk (*).');
    }
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) {
      alert('Please agree to the school declarations and fill in all fields.');
      return;
    }

    setIsLoading(true);

    // Simulate submission to server
    setTimeout(() => {
      setIsLoading(false);
      // Generate unique application tracking code
      const uniqueCode = `NLCC-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setAppCode(uniqueCode);
      setIsSubmitted(true);
    }, 1800);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden relative z-10 border border-slate-100 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="bg-school-blue text-white px-6 py-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-school-yellow" />
              <div>
                <h3 className="font-display font-semibold text-lg leading-tight">
                  Online Admission Application
                </h3>
                <p className="text-xs text-white/70">
                  2026/2027 Academic Session Application
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Steps Indicator */}
          {!isSubmitted && (
            <div className="bg-slate-50 border-b border-slate-100 px-6 py-3 flex justify-between items-center text-xs font-semibold text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-school-blue text-white' : 'bg-slate-200'}`}>1</span>
                <span className={step === 1 ? 'text-school-blue font-bold' : ''}>Candidate</span>
              </div>
              <div className="w-8 h-0.5 bg-slate-200" />
              <div className="flex items-center gap-1.5">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-school-blue text-white' : 'bg-slate-200'}`}>2</span>
                <span className={step === 2 ? 'text-school-blue font-bold' : ''}>Parent/Guardian</span>
              </div>
              <div className="w-8 h-0.5 bg-slate-200" />
              <div className="flex items-center gap-1.5">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? 'bg-school-blue text-white' : 'bg-slate-200'}`}>3</span>
                <span className={step === 3 ? 'text-school-blue font-bold' : ''}>Academic Background</span>
              </div>
            </div>
          )}

          {/* Form Content */}
          <div className="p-6 overflow-y-auto flex-1">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <h4 className="font-display font-bold text-slate-800 text-sm flex items-center gap-2 mb-1">
                      <User className="w-4 h-4 text-school-blue" />
                      Candidate's Personal Details
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-500 mb-1">First Name *</label>
                        <input
                          type="text"
                          name="candidateFirstName"
                          value={formData.candidateFirstName}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-school-blue text-slate-800"
                          placeholder="e.g. Adeoluwa"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Last Name / Surname *</label>
                        <input
                          type="text"
                          name="candidateLastName"
                          value={formData.candidateLastName}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-school-blue text-slate-800"
                          placeholder="e.g. Balogun"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Date of Birth *</label>
                        <input
                          type="date"
                          name="candidateDOB"
                          value={formData.candidateDOB}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-school-blue text-slate-800"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Gender *</label>
                        <select
                          name="candidateGender"
                          value={formData.candidateGender}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-school-blue text-slate-800 bg-white"
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Proposed Admission Class *</label>
                      <select
                        name="proposedClass"
                        value={formData.proposedClass}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-school-blue text-slate-800 bg-white"
                        required
                      >
                        <option value="JSS1">Junior Secondary School 1 (JSS1)</option>
                        <option value="JSS2">Junior Secondary School 2 (JSS2)</option>
                        <option value="SS1">Senior Secondary School 1 (SS1) - Science</option>
                        <option value="SS1-Art">Senior Secondary School 1 (SS1) - Arts</option>
                        <option value="SS1-Comm">Senior Secondary School 1 (SS1) - Commercial</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <h4 className="font-display font-bold text-slate-800 text-sm flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-school-blue" />
                      Parent / Guardian Information
                    </h4>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Full Name of Parent / Guardian *</label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-school-blue text-slate-800"
                        placeholder="e.g. Alhaji Abdul-Lateef Balogun"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Active Contact Number *</label>
                        <input
                          type="tel"
                          name="parentPhone"
                          value={formData.parentPhone}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-school-blue text-slate-800"
                          placeholder="e.g. +234 803 123 4567"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Parent's Email Address *</label>
                        <input
                          type="email"
                          name="parentEmail"
                          value={formData.parentEmail}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-school-blue text-slate-800"
                          placeholder="e.g. parent@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Occupation</label>
                      <input
                        type="text"
                        name="parentOccupation"
                        value={formData.parentOccupation}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-school-blue text-slate-800"
                        placeholder="e.g. Public Servant / Merchant"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Residential Address *</label>
                      <textarea
                        name="parentAddress"
                        value={formData.parentAddress}
                        onChange={handleInputChange}
                        rows={2}
                        className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-school-blue text-slate-800 bg-white"
                        placeholder="e.g. Block C, Plot 14, Soka Estate, Ibadan"
                        required
                      />
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <h4 className="font-display font-bold text-slate-800 text-sm flex items-center gap-2 mb-1">
                      <GraduationCap className="w-4 h-4 text-school-blue" />
                      Academic Background & Declaration
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Last School Attended *</label>
                        <input
                          type="text"
                          name="previousSchool"
                          value={formData.previousSchool}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-school-blue text-slate-800"
                          placeholder="e.g. Soka Primary School, Ibadan"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Last Class Completed *</label>
                        <input
                          type="text"
                          name="lastClassCompleted"
                          value={formData.lastClassCompleted}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-school-blue text-slate-800"
                          placeholder="e.g. Primary 6 / JSS3"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Candidate's Talents, Hobbies or Awards (Optional)</label>
                      <textarea
                        name="talentsOrAwards"
                        value={formData.talentsOrAwards}
                        onChange={handleInputChange}
                        rows={2}
                        className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-school-blue text-slate-800"
                        placeholder="e.g. Excellent public speaker, plays football, gold medalist in primary mathematics quiz"
                      />
                    </div>

                    <div className="bg-amber-50 border border-amber-100 p-3.5 rounded-xl flex gap-3 text-xs text-amber-800 leading-relaxed">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Oath of Accuracy & Discipline:</strong> By submitting, I declare that all declarations entered are accurate. I agree that admission is conditional on passing the NLCC Entrance Exam and an interview audit of certificates.
                      </div>
                    </div>

                    <label className="flex items-start gap-2.5 text-xs text-slate-600 select-none cursor-pointer pt-1">
                      <input
                        type="checkbox"
                        name="declarationChecked"
                        checked={formData.declarationChecked}
                        onChange={handleInputChange}
                        className="rounded text-school-blue focus:ring-school-blue border-slate-300 mt-0.5"
                        required
                      />
                      <span>I agree to the declaration above as parent/guardian of the applicant candidate. *</span>
                    </label>
                  </motion.div>
                )}

                {/* Nav buttons */}
                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-school-blue hover:bg-school-blue-light text-white font-bold py-2 px-5 rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-sm shadow-school-blue/10 cursor-pointer"
                    >
                      Continue
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="bg-school-yellow hover:bg-school-yellow-dark text-school-blue hover:text-white font-bold py-2.5 px-6 rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-md shadow-school-yellow/15 cursor-pointer disabled:opacity-50"
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-school-blue" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Submitting Registration...
                        </>
                      ) : (
                        'Submit Application Form'
                      )}
                    </button>
                  )}
                </div>
              </form>
            ) : (
              /* Success Screen */
              <div className="text-center py-6 space-y-5">
                <div className="mx-auto w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center text-emerald-500 mb-2">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-slate-800 text-lg">
                    Application Submitted Successfully!
                  </h4>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    We are thrilled that you have chosen {schoolInfo.name} for your child's academic and character development.
                  </p>
                </div>

                <div className="max-w-md mx-auto bg-slate-50 border border-slate-100 rounded-xl p-4 space-y-2.5 text-left text-xs text-slate-600">
                  <div className="flex justify-between border-b border-slate-200/50 pb-2">
                    <span className="text-slate-400">Application Number</span>
                    <strong className="text-school-blue font-mono">{appCode}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/50 pb-2">
                    <span className="text-slate-400">Applicant</span>
                    <strong className="text-slate-800">{formData.candidateFirstName} {formData.candidateLastName}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/50 pb-2">
                    <span className="text-slate-400">Proposed Class</span>
                    <strong className="text-slate-800">{formData.proposedClass}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Entrance Examination</span>
                    <strong className="text-emerald-700 font-bold text-right">Saturday, July 11, 2026 (9:00 AM)</strong>
                  </div>
                </div>

                <div className="max-w-md mx-auto text-left text-xs leading-relaxed bg-school-blue-bg border-l-4 border-school-blue p-3.5 rounded-r-xl space-y-1.5 text-slate-700">
                  <h5 className="font-bold text-school-blue">Next Action Steps:</h5>
                  <p>1. A confirmation copy has been sent to <strong className="text-slate-800">{formData.parentEmail}</strong>.</p>
                  <p>2. Report with the applicant at {schoolInfo.location} on the exam date above.</p>
                  <p>3. Please bring two passport photographs, a pencil, and the applicant's primary school terminal results or testimonial transcripts.</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                  <button
                    onClick={() => {
                      alert('Simulated Download: Your application confirmation PDF (NLCC-Admission-Receipt.pdf) has been generated successfully.');
                    }}
                    className="w-full sm:w-auto bg-school-blue hover:bg-school-blue-light text-white font-bold py-2.5 px-5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all shadow shadow-school-blue/10 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF Slip
                  </button>
                  <button
                    onClick={onClose}
                    className="w-full sm:w-auto px-5 py-2.5 border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 rounded-xl text-xs transition-colors cursor-pointer"
                  >
                    Close Application
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
