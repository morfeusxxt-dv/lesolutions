import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

export default function Founders() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center py-20 lg:py-32 px-6">
      <div className="flex flex-col items-center text-center gap-6 mb-24 relative">
        <div className="inline-flex items-center gap-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
          <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>
          <span className="text-primary font-mono font-bold tracking-[0.4em] uppercase text-[9px]">Protocol: Founders_v3.0</span>
        </div>
        <h1 className={`text-5xl lg:text-7xl font-black leading-tight tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
          Perfis <span className="text-primary">Técnicos</span> dos Fundadores
        </h1>
        <p className={`text-lg font-medium max-w-2xl leading-relaxed ${theme === 'dark' ? 'text-white/50' : 'text-slate-500'}`}>
          Orquestrando arquitetura digital de alta ponta através da sinergia entre liderança estratégica e maestria técnica.
        </p>
      </div>

      <div className="relative w-full max-w-5xl">
        {/* Connection Line */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] pointer-events-none z-0">
          <svg className="w-full h-full opacity-30" fill="none" viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg">
            <path d="M150 150 H650" stroke="#F97316" strokeDasharray="4 4" strokeWidth="1"></path>
            <circle cx="400" cy="150" fill="#F97316" r="4"></circle>
            <path d="M400 50 V150" opacity="0.5" stroke="#F97316" strokeWidth="1"></path>
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 relative z-10">
          {/* Founder 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center group"
          >
            <div className="relative mb-12">
              <div className={`w-64 h-72 md:w-80 md:h-96 relative hexagon-clip p-[2px] transition-transform duration-700 group-hover:scale-[1.03] ${
                theme === 'dark' ? 'bg-primary/20 glow-border' : 'bg-slate-200'
              }`}>
                <div className={`w-full h-full hexagon-clip relative overflow-hidden ${theme === 'dark' ? 'bg-dark-bg' : 'bg-white'}`}>
                  <div 
                    className="absolute inset-0 bg-center bg-cover transition-all duration-700 opacity-80 group-hover:grayscale-0 grayscale"
                    style={{ backgroundImage: 'url("/founders/lian.png")' }}
                  ></div>
                  <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-dark-bg' : 'from-white'} via-transparent to-transparent`}></div>
                  <div className="absolute top-8 left-4 font-mono text-[9px] text-primary/60 tracking-tighter">
                    [NODE_ID: LM_001]
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 size-24 border-t-2 border-r-2 border-primary/40 rounded-tr-3xl"></div>
              <div className="absolute -bottom-4 -left-4 px-3 py-1 bg-primary text-dark-bg font-mono text-[10px] font-bold skew-x-[-12deg]">
                LEAD_DEV
              </div>
            </div>
            <div className="text-center">
              <h3 className={`text-4xl font-black tracking-tighter mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Lian Mendes</h3>
              <div className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-6 flex items-center justify-center gap-2">
                <span className="h-px w-4 bg-primary/30"></span>
                Lead Developer & System Architect
                <span className="h-px w-4 bg-primary/30"></span>
              </div>
              <p className={`text-sm leading-relaxed max-w-xs mx-auto mb-8 font-medium ${theme === 'dark' ? 'text-white/40' : 'text-slate-500'}`}>
                Building robust back-end systems and scalable architectures for high-performance digital solutions.
              </p>
              <div className="flex justify-center gap-4">
                {['code_blocks', 'terminal'].map((icon) => (
                  <div key={icon} className={`size-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                    theme === 'dark' 
                      ? 'border-white/10 text-white/40 hover:border-primary hover:text-primary bg-white/5' 
                      : 'border-slate-200 text-slate-400 hover:border-primary hover:text-primary bg-white'
                  }`}>
                    <span className="material-symbols-outlined text-lg">{icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Founder 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center group"
          >
            <div className="relative mb-12">
              <div className={`w-64 h-72 md:w-80 md:h-96 relative hexagon-clip p-[2px] transition-transform duration-700 group-hover:scale-[1.03] ${
                theme === 'dark' ? 'bg-primary/20 glow-border' : 'bg-slate-200'
              }`}>
                <div className={`w-full h-full hexagon-clip relative overflow-hidden ${theme === 'dark' ? 'bg-dark-bg' : 'bg-white'}`}>
                  <div 
                    className="absolute inset-0 bg-center bg-cover transition-all duration-700 opacity-80 group-hover:grayscale-0 grayscale"
                    style={{ backgroundImage: 'url("/founders/eric.png")' }}
                  ></div>
                  <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-dark-bg' : 'from-white'} via-transparent to-transparent`}></div>
                  <div className="absolute top-8 right-4 font-mono text-[9px] text-primary/60 tracking-tighter text-right">
                    [NODE_ID: EC_099]
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 size-24 border-t-2 border-l-2 border-primary/40 rounded-tl-3xl"></div>
              <div className="absolute -bottom-4 -right-4 px-3 py-1 bg-primary text-dark-bg font-mono text-[10px] font-bold skew-x-[12deg]">
                CREATIVE_DIR
              </div>
            </div>
            <div className="text-center">
              <h3 className={`text-4xl font-black tracking-tighter mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Eric Costa</h3>
              <div className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-6 flex items-center justify-center gap-2">
                <span className="h-px w-4 bg-primary/30"></span>
                Creative Director & Photographer
                <span className="h-px w-4 bg-primary/30"></span>
              </div>
              <p className={`text-sm leading-relaxed max-w-xs mx-auto mb-8 font-medium ${theme === 'dark' ? 'text-white/40' : 'text-slate-500'}`}>
                Crafting stunning visual identities and capturing compelling stories through photography and design.
              </p>
              <div className="flex justify-center gap-4">
                {['palette', 'photo_camera'].map((icon) => (
                  <div key={icon} className={`size-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                    theme === 'dark' 
                      ? 'border-white/10 text-white/40 hover:border-primary hover:text-primary bg-white/5' 
                      : 'border-slate-200 text-slate-400 hover:border-primary hover:text-primary bg-white'
                  }`}>
                    <span className="material-symbols-outlined text-lg">{icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Log */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 relative group"
        >
          <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className={`relative border backdrop-blur-md p-8 lg:p-16 rounded-sm overflow-hidden ${
            theme === 'dark' ? 'border-white/10 bg-dark-card/50' : 'border-slate-200 bg-white/80'
          }`}>
            <div className={`absolute top-0 right-0 p-4 font-mono text-[8px] ${theme === 'dark' ? 'text-white/10' : 'text-slate-300'}`}>CORE_ENGINE_V3.0.4</div>
            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="lg:w-1/3">
                <div className="text-primary font-mono text-[10px] mb-4 tracking-widest">&gt;&gt; REGISTRO_DE_MISSÃO</div>
                <h2 className={`text-3xl font-black tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Protocolo Unificado de Entrega de Sistemas</h2>
              </div>
              <div className={`lg:w-2/3 lg:border-l lg:pl-12 ${theme === 'dark' ? 'border-white/5' : 'border-slate-200'}`}>
                <p className={`text-base leading-relaxed mb-6 font-medium ${theme === 'dark' ? 'text-white/50' : 'text-slate-500'}`}>
                  Nossa sinergia é definida pela convergência perfeita entre <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>visão estratégica</span> e <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>precisão técnica</span>. Projetamos ambientes digitais que transcendem escalabilidade convencional, garantindo que cada linha de código fonte se traduza em desempenho mensurável.
                </p>
                <div className="flex gap-8 items-center">
                  <div className="flex flex-col">
                    <span className="text-primary font-black text-xl">99.9%</span>
                    <span className={`text-[9px] uppercase font-bold tracking-widest ${theme === 'dark' ? 'text-white/30' : 'text-slate-400'}`}>Compromisso_Uptime</span>
                  </div>
                  <div className={`w-px h-8 ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-200'}`}></div>
                  <div className="flex flex-col">
                    <span className="text-primary font-black text-xl">120ms</span>
                    <span className={`text-[9px] uppercase font-bold tracking-widest ${theme === 'dark' ? 'text-white/30' : 'text-slate-400'}`}>Latência_Média</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
