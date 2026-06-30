import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, X, ChevronRight, Megaphone, Trophy } from 'lucide-react';
import { announcements } from '../data';

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible || announcements.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  const current = announcements[currentIndex];

  const getIcon = (type: string) => {
    switch (type) {
      case 'urgent':
        return <Bell className="w-4 h-4 text-rose-500 animate-pulse" />;
      case 'success':
        return <Trophy className="w-4 h-4 text-emerald-400" />;
      default:
        return <Megaphone className="w-4 h-4 text-sky-400" />;
    }
  };

  const getBadgeClass = (type: string) => {
    switch (type) {
      case 'urgent':
        return 'bg-rose-500/10 text-rose-400 border border-rose-500/30';
      case 'success':
        return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30';
      default:
        return 'bg-sky-500/10 text-sky-400 border border-sky-500/30';
    }
  };

  return (
    <div id="announcement-bar" className="bg-school-blue border-b border-white/10 text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8 flex items-center justify-between text-xs sm:text-sm">
        <div className="flex items-center gap-3 overflow-hidden flex-1">
          <div className="hidden md:flex items-center gap-1.5 font-bold uppercase tracking-wider text-school-yellow text-[10px] bg-white/10 px-2 py-0.5 rounded">
            Announcements
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 truncate"
            >
              <span className="flex-shrink-0">{getIcon(current.type)}</span>
              <span className={`text-[10px] sm:text-xs px-1.5 py-0.5 rounded uppercase font-semibold ${getBadgeClass(current.type)}`}>
                {current.type === 'urgent' ? 'Important' : current.type === 'success' ? 'Achievement' : 'Notice'}
              </span>
              <span className="truncate font-medium hover:text-school-yellow transition-colors duration-200">
                {current.text}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-3 pl-4 flex-shrink-0">
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % announcements.length)}
            className="text-white/60 hover:text-white p-0.5 rounded transition-colors hidden sm:inline-flex"
            aria-label="Next Announcement"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/60 hover:text-white hover:bg-white/10 p-0.5 rounded transition-all"
            aria-label="Dismiss Announcement"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
