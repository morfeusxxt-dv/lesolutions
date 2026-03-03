import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

export default function Inquire() {
  const { theme } = useTheme();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 lg:px-20 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full max-w-6xl">
        
        {/* Left Column: Form */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase">System_Inquiry</span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-black leading-tight tracking-tighter mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Architecting Digital <span className="text-primary">Superiority</span>
            </h1>
            <p className={`text-lg font-medium leading-relaxed ${theme === 'dark' ? 'text-white/50' : 'text-slate-500'}`}>
              Initiate a secure channel to discuss your enterprise infrastructure. We build systems that scale beyond the competition.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className={`text-xs font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-white/40' : 'text-slate-400'}`}>Identity</label>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className={`w-full p-4 rounded-lg border outline-none focus:border-primary transition-colors ${
                    theme === 'dark' 
                      ? 'bg-dark-card border-white/10 text-white placeholder-white/20' 
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>
              <div className="space-y-2">
                <label className={`text-xs font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-white/40' : 'text-slate-400'}`}>Contact_Point</label>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className={`w-full p-4 rounded-lg border outline-none focus:border-primary transition-colors ${
                    theme === 'dark' 
                      ? 'bg-dark-card border-white/10 text-white placeholder-white/20' 
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className={`text-xs font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-white/40' : 'text-slate-400'}`}>Sector</label>
              <select 
                className={`w-full p-4 rounded-lg border outline-none focus:border-primary transition-colors appearance-none ${
                  theme === 'dark' 
                    ? 'bg-dark-card border-white/10 text-white' 
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              >
                <option>E-commerce Scale-up</option>
                <option>SaaS Platform</option>
                <option>Enterprise Internal Tool</option>
                <option>Data Infrastructure</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className={`text-xs font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-white/40' : 'text-slate-400'}`}>Briefing</label>
              <textarea 
                rows={4}
                placeholder="Describe your system requirements..." 
                className={`w-full p-4 rounded-lg border outline-none focus:border-primary transition-colors resize-none ${
                  theme === 'dark' 
                    ? 'bg-dark-card border-white/10 text-white placeholder-white/20' 
                    : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                }`}
              ></textarea>
            </div>

            <button 
              type="button"
              className="w-full py-5 bg-primary text-white font-black text-lg uppercase tracking-widest rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              Initialize_Project
            </button>
          </form>
        </motion.div>

        {/* Right Column: Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl"></div>
          <div className={`relative rounded-3xl overflow-hidden border shadow-2xl ${theme === 'dark' ? 'border-white/10 bg-dark-card' : 'border-slate-200 bg-white'}`}>
             <div className="aspect-[3/4] relative">
               <div 
                 className="absolute inset-0 bg-cover bg-center"
                 style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAud6jQsB9t4FemDY8tkNxjLyWNtcGIMBl_VIPKAMUwCTKDw22x_ujoXWyca9o21dPvXjZhlP9Fu2DyruWfTLkm2qfqnMQ89LNoOIp44kgrc9GgtEMswvF0HtqkOKq3k7xZYG1pl7QhVgsIC5b1TZha_4LXV5Q6qO2FNGX5-thgD3Iqnl0jlBL87dDsekWHBdGssPOoU8-ZA3uDIdDSPR01qyRW-4X4lmhBTwwa1DI5hGZQDOPK1KR6ervwiueEkyznM8hVlODlmEkv")' }}
               ></div>
               <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-dark-bg via-transparent' : 'from-white via-transparent'} to-transparent opacity-80`}></div>
               
               <div className="absolute bottom-8 left-8 right-8">
                 <div className="flex items-center gap-3 mb-4">
                   <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                     <span className="material-symbols-outlined">support_agent</span>
                   </div>
                   <div>
                     <p className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Priority Support</p>
                     <p className={`text-xs ${theme === 'dark' ? 'text-white/50' : 'text-slate-500'}`}>Direct line to engineering leads</p>
                   </div>
                 </div>
                 <div className={`p-4 rounded-xl border backdrop-blur-md ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white/80 border-slate-200'}`}>
                   <p className={`font-mono text-xs leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-slate-600'}`}>
                     "We don't just build websites; we engineer revenue-generating assets that outperform market standards by 300%."
                   </p>
                 </div>
               </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
