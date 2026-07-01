import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Code, Copy, Check, ExternalLink, FileCode, Sparkles, Terminal, Download } from 'lucide-react';

interface VanillaCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VanillaCodeModal({ isOpen, onClose }: VanillaCodeModalProps) {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [copiedTab, setCopiedTab] = useState<string | null>(null);

  if (!isOpen) return null;

  const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Life Comprehensive College (NLCC) - Pure HTML/CSS/JS</title>
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&display=swap" rel="stylesheet">
</head>
<body>
  <!-- Top Announcement Ribbon -->
  <div class="top-bar">
    <div class="container">
      <div><span class="top-bar-badge">Admissions 2026</span> JSS1 & SS1 placement registration is open.</div>
      <div>Call: +234 803 344 5566 | Soka Campground, Ibadan</div>
    </div>
  </div>

  <!-- Site Navigation Header -->
  <header class="site-header">
    <div class="nav-wrapper">
      <a href="index.html" class="brand">
        <div class="brand-icon">N</div>
        <div class="brand-text">
          <h1>New Life College</h1>
          <span>Excellence & Character</span>
        </div>
      </a>
      <nav class="nav-links">
        <a href="#about" class="active">Home</a>
        <a href="#academics">Academics</a>
        <a href="#admissions">Admissions</a>
        <a href="#staff">Faculty</a>
        <a href="#faq">FAQ</a>
      </nav>
      <div>
        <button class="btn btn-yellow" data-open-modal="admission-modal">Apply Now</button>
      </div>
    </div>
  </header>

  <!-- Hero Banner -->
  <section class="hero">
    <div class="container">
      <h2>Building Academic Giants<br>& Godly Character</h2>
      <p>Situated in the distraction-free environment of New Life Campground, Soka, Ibadan.</p>
      <button class="btn btn-yellow" data-open-modal="admission-modal">Begin Registration</button>
    </div>
  </section>

  <!-- Interactive Faculty Filtering -->
  <section id="staff" class="section">
    <div class="container">
      <h3>Certified Faculty Directory</h3>
      <div class="filter-tabs">
        <button class="filter-btn active" data-filter="all">All Faculty</button>
        <button class="filter-btn" data-filter="science">Science & Tech</button>
        <button class="filter-btn" data-filter="arts">Arts & Humanities</button>
      </div>
      <div class="grid-3">
        <div class="card filterable-item" data-category="science">
          <h4>Mr. Babatunde Adeyemi</h4>
          <p>HOD Sciences & Senior Physics</p>
        </div>
        <div class="card filterable-item" data-category="arts">
          <h4>Dr. Folake Balogun</h4>
          <p>Literature & English Head</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Accordion -->
  <section id="faq" class="section section-bg">
    <div class="container">
      <div class="faq-item">
        <button class="faq-question">What is the cost of the admission application form? <span>+</span></button>
        <div class="faq-answer">The non-refundable entrance examination application form fee is ₦5,000 only.</div>
      </div>
    </div>
  </section>

  <script src="app.js"></script>
</body>
</html>`;

  const cssCode = `/* ==========================================================================
   New Life Comprehensive College (NLCC) - Pure Vanilla CSS
   ========================================================================== */
:root {
  --primary-blue: #0A192F;
  --primary-blue-light: #172A45;
  --accent-yellow: #FFC107;
  --accent-yellow-dark: #D9A404;
  --text-dark: #1E293B;
  --text-muted: #64748B;
  --bg-light: #F8FAFC;
  --white: #FFFFFF;
  --border-color: #E2E8F0;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Inter', system-ui, sans-serif; color: var(--text-dark); }

.container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
.site-header { background: var(--primary-blue); color: var(--white); position: sticky; top: 0; }
.nav-wrapper { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; }

.btn { display: inline-flex; align-items: center; padding: 0.6rem 1.25rem; border-radius: 8px; font-weight: 700; cursor: pointer; border: none; }
.btn-yellow { background: var(--accent-yellow); color: var(--primary-blue); }

.hero { background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-light) 100%); color: white; padding: 5rem 0; text-align: center; }
.grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
.card { background: white; border: 1px solid var(--border-color); border-radius: 12px; padding: 1.75rem; }

.faq-item { border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 1rem; }
.faq-question { width: 100%; background: var(--bg-light); padding: 1rem; text-align: left; border: none; font-weight: 700; cursor: pointer; }
.faq-answer { padding: 1rem; display: none; }
.faq-item.active .faq-answer { display: block; }`;

  const jsCode = `/* ==========================================================================
   New Life Comprehensive College (NLCC) - Pure Vanilla JavaScript Engine
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordion Logic
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.parentElement.classList.toggle('active');
    });
  });

  // 2. Staff & Gallery Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const filterCards = document.querySelectorAll('.filterable-item');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');

      filterCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Modal Popup Handlers
  const openModalBtns = document.querySelectorAll('[data-open-modal]');
  openModalBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = document.getElementById(btn.getAttribute('data-open-modal'));
      if (modal) modal.style.display = 'flex';
    });
  });

  document.querySelectorAll('.modal-close').forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.closest('.modal-overlay').style.display = 'none';
    });
  });
});`;

  const handleCopyCode = (content: string, type: string) => {
    navigator.clipboard.writeText(content);
    setCopiedTab(type);
    setTimeout(() => setCopiedTab(null), 2500);
  };

  const currentCode = activeTab === 'html' ? htmlCode : activeTab === 'css' ? cssCode : jsCode;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl text-slate-100"
        >
          {/* Modal Header */}
          <div className="bg-slate-950 p-5 border-b border-slate-800 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-school-yellow text-school-blue flex items-center justify-center font-bold">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-black text-lg text-white flex items-center gap-2">
                  Pure HTML, CSS & JavaScript Source Studio
                </h3>
                <p className="text-xs text-slate-400">
                  Zero build tools, zero dependencies. Complete vanilla source files generated in <code className="text-school-yellow font-mono">/public/vanilla/</code>.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/vanilla/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-school-blue hover:bg-school-blue-light text-white border border-blue-500/30 text-xs font-bold py-2 px-4 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
              >
                <ExternalLink className="w-3.5 h-3.5 text-school-yellow" />
                Open Live Vanilla HTML Page
              </a>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Tab Selector Bar */}
          <div className="bg-slate-900/90 px-6 pt-3 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('html')}
                className={`px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === 'html'
                    ? 'bg-slate-800 text-school-yellow border-t-2 border-school-yellow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <FileCode className="w-4 h-4" />
                index.html (Structure)
              </button>
              <button
                onClick={() => setActiveTab('css')}
                className={`px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === 'css'
                    ? 'bg-slate-800 text-sky-400 border-t-2 border-sky-400'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                styles.css (Styling)
              </button>
              <button
                onClick={() => setActiveTab('js')}
                className={`px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === 'js'
                    ? 'bg-slate-800 text-amber-400 border-t-2 border-amber-400'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Terminal className="w-4 h-4" />
                app.js (Interactivity)
              </button>
            </div>

            <button
              onClick={() => handleCopyCode(currentCode, activeTab)}
              className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold py-1.5 px-3.5 rounded-lg flex items-center gap-1.5 transition-colors mb-2 cursor-pointer border border-slate-700"
            >
              {copiedTab === activeTab ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied {activeTab.toUpperCase()}!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  Copy {activeTab.toUpperCase()} Code
                </>
              )}
            </button>
          </div>

          {/* Code Viewport */}
          <div className="flex-1 overflow-y-auto p-6 bg-slate-950 font-mono text-xs leading-relaxed selection:bg-school-yellow selection:text-school-blue">
            <pre className="text-slate-300 overflow-x-auto">
              <code>{currentCode}</code>
            </pre>
          </div>

          {/* Footer note */}
          <div className="bg-slate-900 p-4 px-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 flex-wrap gap-2">
            <span>
              💡 All 3 files have been compiled and saved to <code className="text-white font-mono bg-slate-800 px-1.5 py-0.5 rounded">/public/vanilla/</code> for direct static hosting.
            </span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              ✓ Ready for standard browser & static web server execution
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
