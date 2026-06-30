import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Lock, User, Key, CheckCircle, GraduationCap, Users, BookOpen, Clock, Calendar, ShieldCheck, CreditCard, Award } from 'lucide-react';
import { schoolInfo } from '../data';

interface PortalsModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'student' | 'parent';
}

export default function PortalsModal({ isOpen, onClose, defaultTab = 'student' }: PortalsModalProps) {
  const [activeTab, setActiveTab] = useState<'student' | 'parent'>(defaultTab);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!id || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setIsLoading(true);

    // Simulate network delay
    setTimeout(() => {
      setIsLoading(false);
      // Let any entry succeed for demonstration purposes, with a default name based on ID or tab
      setIsLoggedIn(true);
    }, 1200);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setId('');
    setPassword('');
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
          <div className="bg-school-blue text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-school-yellow" />
              <div>
                <h3 className="font-display font-semibold text-lg leading-tight">
                  NLCC Digital Portal
                </h3>
                <p className="text-xs text-white/70">
                  {isLoggedIn ? 'Access Secure Area' : 'Student & Parent Access'}
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

          <div className="p-6 overflow-y-auto flex-1">
            {!isLoggedIn ? (
              <div>
                {/* Tabs */}
                <div className="flex bg-slate-100 p-1 rounded-xl mb-6">
                  <button
                    onClick={() => {
                      setActiveTab('student');
                      setError('');
                    }}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      activeTab === 'student'
                        ? 'bg-white text-school-blue shadow'
                        : 'text-slate-600 hover:text-school-blue'
                    }`}
                  >
                    <GraduationCap className="w-4 h-4" />
                    Student Portal
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('parent');
                      setError('');
                    }}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      activeTab === 'parent'
                        ? 'bg-white text-school-blue shadow'
                        : 'text-slate-600 hover:text-school-blue'
                    }`}
                  >
                    <Users className="w-4 h-4" />
                    Parent Portal
                  </button>
                </div>

                {/* Info Note */}
                <div className="bg-school-blue-bg border-l-4 border-school-yellow p-3 rounded-r-lg mb-6 text-xs text-slate-700 leading-relaxed flex gap-3">
                  <ShieldCheck className="w-5 h-5 text-school-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-school-blue">Simulated Access:</span> Enter any Student ID (e.g., <code className="bg-slate-200 px-1 py-0.5 rounded text-rose-600">NLCC/2024/048</code>) or Parent Registration Email and any password to explore the active dashboard.
                  </div>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="space-y-4">
                  {error && (
                    <div className="text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 p-2.5 rounded-lg">
                      {error}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5 tracking-wider">
                      {activeTab === 'student' ? 'Student ID Number' : 'Registered Email Address'}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        {activeTab === 'student' ? <GraduationCap className="w-4 h-4" /> : <User className="w-4 h-4" />}
                      </div>
                      <input
                        type={activeTab === 'student' ? 'text' : 'email'}
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder={activeTab === 'student' ? 'e.g. NLCC/2024/048' : 'e.g. parent@example.com'}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-school-blue focus:bg-white transition-all text-slate-800"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5 tracking-wider">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Key className="w-4 h-4" />
                      </div>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-school-blue focus:bg-white transition-all text-slate-800"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <label className="flex items-center gap-1.5 text-slate-500 cursor-pointer select-none">
                      <input type="checkbox" className="rounded text-school-blue focus:ring-school-blue border-slate-300" />
                      Remember me
                    </label>
                    <a href="#" className="font-semibold text-school-blue hover:underline">
                      Forgot Password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-school-blue hover:bg-school-blue-light text-white font-semibold py-2.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-md shadow-school-blue/10 disabled:opacity-50 mt-4 cursor-pointer"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Authenticating Securely...
                      </span>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 text-school-yellow" />
                        Log In to Secure Portal
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              /* Simulated Dashboard */
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-school-blue/10 text-school-blue rounded-lg">
                      {activeTab === 'student' ? <GraduationCap className="w-6 h-6" /> : <Users className="w-6 h-6" />}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-slate-800 text-base">
                        {activeTab === 'student' ? 'Adeoluwa Samuel Balogun' : 'Alhaji Abdul-Lateef Balogun'}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {activeTab === 'student' ? 'ID: NLCC/2024/048  •  Class: SS3 Science' : 'Parent Account  •  Children: 2 Enrolled'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Sign Out
                  </button>
                </div>

                {/* Dashboard Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-center">
                    <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Attendance</p>
                    <p className="font-display font-bold text-lg text-emerald-700">96.8%</p>
                    <p className="text-[10px] text-emerald-600">Present this Term</p>
                  </div>
                  <div className="p-3 bg-school-blue-bg border border-blue-100 rounded-xl text-center">
                    <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Academic Avg</p>
                    <p className="font-display font-bold text-lg text-school-blue-light">84.5%</p>
                    <p className="text-[10px] text-school-blue">Grade A equivalent</p>
                  </div>
                  <div className="col-span-2 sm:col-span-1 p-3 bg-amber-50 border border-amber-100 rounded-xl text-center">
                    <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Financial Status</p>
                    <p className="font-display font-bold text-lg text-amber-700">Fully Paid</p>
                    <p className="text-[10px] text-amber-600">No outstanding balance</p>
                  </div>
                </div>

                {/* Quick Academic Progress */}
                <div className="space-y-3">
                  <h5 className="font-display font-semibold text-slate-800 text-sm flex items-center gap-1.5 border-b border-slate-100 pb-1.5">
                    <BookOpen className="w-4 h-4 text-school-blue" />
                    Continuous Assessment (CA) Report — Third Term
                  </h5>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <span className="font-semibold text-slate-700">Mathematics (SS3)</span>
                      <div className="flex gap-4">
                        <span>Test: <strong className="text-slate-800">28/30</strong></span>
                        <span>Assignment: <strong className="text-slate-800">10/10</strong></span>
                        <span>Status: <strong className="text-emerald-600">Excellent</strong></span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <span className="font-semibold text-slate-700">Physics (SS3)</span>
                      <div className="flex gap-4">
                        <span>Test: <strong className="text-slate-800">25/30</strong></span>
                        <span>Assignment: <strong className="text-slate-800">9/10</strong></span>
                        <span>Status: <strong className="text-emerald-600">Excellent</strong></span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <span className="font-semibold text-slate-700">Chemistry (SS3)</span>
                      <div className="flex gap-4">
                        <span>Test: <strong className="text-slate-800">22/30</strong></span>
                        <span>Assignment: <strong className="text-slate-800">10/10</strong></span>
                        <span>Status: <strong className="text-school-blue-light">Very Good</strong></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Logs / Messages */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-xs text-slate-600 leading-relaxed">
                  <span className="font-bold text-slate-700 block mb-2 uppercase tracking-wider text-[10px]">
                    Announcements from Administration Office
                  </span>
                  <ul className="space-y-2.5">
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-school-yellow rounded-full mt-1.5 flex-shrink-0" />
                      <div>
                        <strong>Extension of WAEC Mock classes:</strong> Revision lessons continue this Friday until 4:00 PM. High attendance is expected.
                      </div>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-school-blue-light rounded-full mt-1.5 flex-shrink-0" />
                      <div>
                        <strong>Upcoming Terminal Exams:</strong> Examination timetables are available for download at the Administrative desk. Exams commence on July 13, 2026.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <span>© {new Date().getFullYear()} {schoolInfo.name}</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-school-blue transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-school-blue transition-colors">Technical Support</a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
