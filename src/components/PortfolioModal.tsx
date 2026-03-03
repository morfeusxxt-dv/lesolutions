import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    desc: string;
    img: string;
    details?: string;
    technologies?: string[];
    results?: string;
  };
}

export default function PortfolioModal({ isOpen, onClose, project }: PortfolioModalProps) {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-strong"
          onClick={onClose}
        />
        
        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className={`relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl ${
            theme === 'dark' ? 'bg-dark-card border-white/10' : 'bg-white border-slate-200'
          }`}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-all ${
              theme === 'dark' 
                ? 'bg-white/10 text-white hover:bg-white/20' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          {/* Image Header */}
          <div className="aspect-video relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url("${project.img}")` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-8 space-y-6 overflow-y-auto max-h-[50vh]">
            <div>
              <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                {project.title}
              </h2>
              <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-slate-600'}`}>
                {project.desc}
              </p>
            </div>

            {project.details && (
              <div>
                <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  Project Overview
                </h3>
                <p className={`leading-relaxed ${theme === 'dark' ? 'text-white/60' : 'text-slate-600'}`}>
                  {project.details}
                </p>
              </div>
            )}

            {project.technologies && (
              <div>
                <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        theme === 'dark' 
                          ? 'bg-primary/20 text-primary border border-primary/30' 
                          : 'bg-primary/10 text-primary border border-primary/20'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.results && (
              <div className={`p-6 rounded-2xl border ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-primary/10 to-orange-400/10 border-primary/20' 
                  : 'bg-gradient-to-r from-primary/5 to-orange-400/5 border-primary/10'
              }`}>
                <h3 className={`text-xl font-bold mb-2 gradient-text`}>Results</h3>
                <p className={`leading-relaxed ${theme === 'dark' ? 'text-white/80' : 'text-slate-700'}`}>
                  {project.results}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button className="flex-1 bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors">
                View Live Project
              </button>
              <button className={`flex-1 py-3 rounded-xl font-bold border transition-colors ${
                theme === 'dark' 
                  ? 'border-white/20 text-white hover:bg-white/10' 
                  : 'border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}>
                Case Study Details
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
