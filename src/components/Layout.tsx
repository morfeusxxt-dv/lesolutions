import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import PortfolioModal from './PortfolioModal';

interface LayoutProps {
  children: ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Layout({ children, currentPage, onNavigate }: LayoutProps) {
  const { theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'founders', label: 'Founders' },
    { id: 'network', label: 'Network' },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-dark-bg text-white' : 'bg-light-bg text-slate-900'}`}>
      {/* Background Grid */}
      <div className={`fixed inset-0 pointer-events-none z-0 ${theme === 'dark' ? 'tech-grid-dark opacity-40' : 'tech-grid-light opacity-60'}`}></div>
      
      {/* Header */}
      <header className={`sticky top-0 z-40 w-full border-b px-6 lg:px-20 py-4 backdrop-blur-xl transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-dark-bg/80 border-white/5' 
          : 'bg-white/80 border-slate-200'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className={`size-8 relative flex items-center justify-center ${theme === 'dark' ? 'glow-border text-primary' : 'text-primary'}`}>
              <span className="material-symbols-outlined text-3xl">polyline</span>
            </div>
            <h2 className={`text-xl font-extrabold leading-tight tracking-tighter uppercase ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              lesolutions
            </h2>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                    currentPage === item.id
                      ? 'text-primary'
                      : theme === 'dark' ? 'text-white/50 hover:text-primary' : 'text-slate-500 hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <button 
              onClick={() => onNavigate('inquire')}
              className={`flex min-w-[120px] items-center justify-center rounded-sm h-10 px-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-lg hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-white text-dark-bg hover:bg-primary hover:text-white shadow-primary/10'
                  : 'bg-slate-900 text-white hover:bg-primary shadow-orange-500/10'
              }`}
            >
              Inquire
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden fixed inset-x-0 top-[73px] z-30 border-b p-6 shadow-2xl ${
              theme === 'dark' ? 'bg-dark-card border-white/10' : 'bg-white border-slate-200'
            }`}
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left text-sm font-bold uppercase tracking-widest py-2 ${
                    currentPage === item.id ? 'text-primary' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => {
                  onNavigate('inquire');
                  setIsMobileMenuOpen(false);
                }}
                className="mt-4 w-full bg-primary text-white h-12 rounded-sm font-bold uppercase tracking-widest"
              >
                Inquire
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 relative z-10 w-full max-w-[1400px] mx-auto">
        {children}
      </main>

      {/* Footer */}
      <footer className={`border-t py-12 px-6 lg:px-20 mt-auto relative z-10 ${
        theme === 'dark' ? 'bg-dark-bg/50 border-white/5' : 'bg-white border-slate-100'
      }`}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">polyline</span>
            <span className={`font-black tracking-tighter uppercase text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              lesolutions
            </span>
          </div>
          <div className={`flex gap-8 text-[10px] font-mono uppercase tracking-widest ${theme === 'dark' ? 'text-white/30' : 'text-slate-400'}`}>
            <a href="#" className="hover:text-primary transition-colors">Privacy_Logs</a>
            <a href="#" className="hover:text-primary transition-colors">Global_Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Contact_Endpoint</a>
          </div>
          <div className="flex gap-4">
            {['monitoring', 'share'].map((icon) => (
              <div 
                key={icon}
                className={`size-9 rounded-sm border flex items-center justify-center transition-all cursor-pointer ${
                  theme === 'dark' 
                    ? 'border-white/5 text-white/30 hover:bg-primary/10 hover:text-primary' 
                    : 'border-slate-200 text-slate-400 hover:bg-primary hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-base">{icon}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className={`text-[9px] font-mono tracking-widest ${theme === 'dark' ? 'text-white/20' : 'text-slate-300'}`}>
            © 2024 SYSTEM_BUILD.03 // ENCRYPTED_CONNECTION_SECURED
          </p>
        </div>
      </footer>

      {/* Portfolio Modal */}
      <PortfolioModal 
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
        project={selectedProject || { title: '', desc: '', img: '' }}
      />
    </div>
  );
}
