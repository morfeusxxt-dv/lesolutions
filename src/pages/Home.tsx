import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';
import PortfolioModal from '../components/PortfolioModal';
import LazyImage from '../components/LazyImage';

export default function Home({ onNavigate }: { onNavigate: (page: string) => void }) {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const websites = [
    {
      title: "E-commerce Excellence",
      desc: "Ultra-fast Next.js store for global retail brands with headless CMS integration.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAISb3LmUbQlX1LT0qHiLR3a_eNVDUW7PxqGzFKIVUQO7UNZoCnd3CcU-nQ0XAfGOlUzexi0a_QByDs1k8gOCvHVGFc6YhxNQPfnQvq5UFkV7YHNJ0ILopSwIKBBxP0ccnO_cHFuxbMUDFQX6ilULSfU6rXopA6VA5rtMpvkg9iqBDYDLWPQq1fprquYNtLgdppTRZzb55dHuEZ7hJQ4xloJJQ5moSf-zX-3jJg0mug_rYacF-Sn36w2AsGdIDLqyUrfcSGq_uZzjHx",
      details: "Complete digital transformation for a luxury fashion retailer, featuring real-time inventory management, AI-powered recommendations, and seamless checkout experience.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Stripe API"],
      results: "Achieved 99.9% uptime, 2.3s load time, and 45% increase in conversion rate within 6 months."
    },
    {
      title: "SaaS Innovation",
      desc: "Scalable cloud-native platforms with real-time data synchronization architecture.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjQsZhT2avVWNyX6heoCnA7BAUO6QnI1YdOGguxlgfHXIME5QvBn6zESRBwiXqxl8M_-bxwSCsgkSpfqACi0zz8mTSXKxgla9i7dwCv7F_pMCIPxVkvmastbSOqfO-DZ27e4qrMfABwhZV81ogpn8jZfMbHybZ8LLjPE0TPb-ehPA5xdlFBYr_iN3H7GDkGR2wyy3gop48UlKAeOjqFaEayXmmV8XbHKXJk1WBryPudfNuyF6SKyNEDDIKfg8W-v_TA3pSAL6PDc1Y",
      details: "Enterprise project management platform with real-time collaboration, advanced analytics dashboard, and automated workflow optimization.",
      technologies: ["React", "Node.js", "MongoDB", "WebSocket", "Docker"],
      results: "Scaled to 100K+ daily active users, reduced project completion time by 35%, and achieved 99.95% uptime SLA."
    },
    {
      title: "Corporate Portal",
      desc: "High-security internal systems for enterprise resource planning and reporting.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFKVdpy9ovVagXOt5U5ZHUOqUP3AZYqF5GfCmjDXB0GbD9JPTPVADWXSUJ51jD9CH-S_kN_zA9E2YD3Jj3gH0G7YtAB9qhgpRPDq77ZJaxdq_GnNuHW5Ips8zUJm2mmUAuLlUcenUwBj22qEqF4_wtI-ZWVy2MXz4Ewq_DMsdPaNzXm8pCU_L5CNfRseoI6OoyHZFMmKII_qCeGlzqsvORbYGieO-wqogosQmHiivzAwILNm0xqcX-OBa4bIP_J3jsWlmWkZ7SIx5B",
      details: "Comprehensive ERP solution with multi-tenant architecture, advanced security protocols, and AI-driven business intelligence.",
      technologies: ["Angular", ".NET Core", "SQL Server", "Azure", "Power BI"],
      results: "Streamlined operations for 5000+ employees, reduced processing time by 60%, and ensured zero data breaches for 3+ years."
    }
  ];

  return (
    <div className="px-6 md:px-20 py-12 space-y-24">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full w-fit">
            <span className="material-symbols-outlined text-sm">bolt</span>
            <span className="text-xs font-bold uppercase tracking-wider">Innovative Tech Partner</span>
          </div>
          <h1 className={`text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Interactive Tech <span className="gradient-text text-shadow-glow">Solutions</span> Showcase
          </h1>
          <p className={`text-lg md:text-xl font-light leading-relaxed max-w-xl ${theme === 'dark' ? 'text-white/50' : 'text-slate-600'}`}>
            Elevating your business with premium digital craftsmanship, high-performance web systems, and data-driven growth strategies.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all flex items-center gap-2"
            >
              View Portfolio <span className="material-symbols-outlined">arrow_downward</span>
            </button>
            <button className={`border-2 px-8 py-4 rounded-xl font-bold text-lg transition-all card-hover-lift ${
              theme === 'dark' 
                ? 'bg-dark-card border-white/10 text-white hover:border-primary hover:bg-primary/10' 
                : 'bg-white border-slate-100 text-slate-700 hover:border-primary hover:bg-primary/5'
            }`}>
              Our Stack
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary via-orange-400 to-primary opacity-30 blur-2xl rounded-3xl animate-pulse"></div>
          <div 
            className={`relative aspect-video rounded-2xl shadow-2xl overflow-hidden border bg-cover bg-center card-hover-lift ${
              theme === 'dark' ? 'bg-dark-card border-white/10' : 'bg-white border-slate-100'
            }`}
          >
            <LazyImage 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw12Nvy5UPh344UA1BK4MOXlJbLEOuSOj-Gf7cabXGn7Cr7qy3Sgpvi3GIro1d5qPf_W1J_17RXCFKeb7u4g5VukK--8CRY7mr48aHyCtEo1dnSc8MMumWCj7UDQyW8ThNGc-1kvA3L3E8t78SdWbUG_l0nC6R0edC4LTNNHYfI820VHFVbn3HE25s9AR9GOPZNG0fldWmqzTewRRFRuN_6hXJEAs-xVEEX7NB2lx67wZ27bXxJ2V3Qx6kOoTc4YSfJocvIURKLD9B" 
              alt="Hero showcase"
              className="absolute inset-0 bg-cover bg-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </motion.div>
      </section>

      {/* Websites Section */}
      <section id="portfolio" className="space-y-8">
        <div className="flex items-end justify-between border-b border-primary/20 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-2 h-10 bg-primary rounded-full"></div>
            <h2 className={`text-3xl font-black uppercase tracking-tighter italic ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Websites</h2>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="p-2 rounded-full bg-primary text-white shadow-md shadow-primary/30">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {websites.map((site, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group flex flex-col gap-6 p-1 rounded-2xl border hover:shadow-2xl transition-all ${
                theme === 'dark' ? 'bg-dark-card border-white/5' : 'bg-white border-slate-100'
              }`}
            >
              <div className="aspect-video rounded-xl overflow-hidden relative bg-slate-800">
                <LazyImage 
                  src={site.img} 
                  alt={site.title}
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-5 pb-6">
                <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{site.title}</h3>
                <p className={`text-sm mb-6 ${theme === 'dark' ? 'text-white/50' : 'text-slate-500'}`}>{site.desc}</p>
                <button 
                  onClick={() => {
                    setSelectedProject(site);
                    setIsModalOpen(true);
                  }}
                  className={`w-full py-3 rounded-lg font-bold text-sm border group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all card-hover-lift ${
                    theme === 'dark' 
                      ? 'bg-dark-bg text-white border-white/10' 
                      : 'bg-slate-50 text-slate-900 border-slate-200'
                  }`}
                >
                  View Project Case Study
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Paid Traffic Section */}
      <section className="space-y-8">
        <div className="flex items-end justify-between border-b border-primary/20 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-2 h-10 bg-primary rounded-full"></div>
            <h2 className={`text-3xl font-black uppercase tracking-tighter italic ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Paid Traffic</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Metrics Card */}
          <div className={`p-8 rounded-3xl border shadow-xl overflow-hidden relative ${
            theme === 'dark' ? 'bg-dark-card border-white/5' : 'bg-white border-slate-100'
          }`}>
            <div className="flex items-center justify-between mb-8">
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Growth Metrics</h3>
              <span className="px-4 py-1 bg-green-500/10 text-green-500 rounded-full text-xs font-bold uppercase tracking-widest">+240% ROI</span>
            </div>
            <div className="h-64 flex items-end justify-between gap-4">
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className={`w-full rounded-t-lg h-24 relative overflow-hidden ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'}`}>
                  <div className={`absolute bottom-0 w-full h-1/2 ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-300'}`}></div>
                </div>
                <span className="text-xs font-bold text-slate-500">BEFORE</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-primary/10 rounded-t-lg h-full relative overflow-hidden border-x border-t border-primary/30">
                  <div className="absolute bottom-0 w-full bg-primary h-full"></div>
                </div>
                <span className="text-xs font-bold text-primary italic">WITH LESOLUTIONS</span>
              </div>
            </div>
            <div className={`mt-8 grid grid-cols-3 gap-4 border-t pt-8 ${theme === 'dark' ? 'border-white/5' : 'border-slate-100'}`}>
              {[
                { label: 'CTR', val: '4.8%' },
                { label: 'CPA', val: '$12.40' },
                { label: 'Impressions', val: '1.2M' }
              ].map((stat, i) => (
                <div key={i} className={`text-center ${i === 1 ? (theme === 'dark' ? 'border-x border-white/5' : 'border-x border-slate-100') : ''}`}>
                  <p className="text-slate-500 text-[10px] font-bold uppercase">{stat.label}</p>
                  <p className={`text-lg font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{stat.val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ad Mockups */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-primary p-1 rounded-2xl shadow-lg shadow-primary/20">
              <div className={`rounded-xl overflow-hidden h-full ${theme === 'dark' ? 'bg-dark-card' : 'bg-white'}`}>
                <div className="h-48 bg-cover bg-center">
                  <LazyImage 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUKWV-XPP300pmWmxcJdUijzzRUYQp6dQc_bahz2BvXoRsSZnJ1DEKOZZNkWLo5XRhb5oinCcvcIDufHeoUrxgjx2vqpWfx3w1HrbZtGZi9nFjEWd-8-887IjntYmoVqudFCF_dIG8xs9eiI-Waq_xLYURixkveozoTLTrHmA_VD-biSPkhqsytzDRs2-lMR5fgSxtVqZvMT6kZLQdZCCOGsNxRmnwUn4CXu0_5zutZM2wzhaoM2pRdtXUBQiLT04jHq9GpdUw5947" 
                    alt="Social Ads"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[10px] font-bold text-primary mb-1 uppercase tracking-tighter">Social Ads</p>
                  <p className={`text-sm font-bold leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Retargeting Strategy for High-LTV customers.</p>
                </div>
              </div>
            </div>
            <div className={`p-1 rounded-2xl shadow-lg ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-900'}`}>
              <div className={`rounded-xl overflow-hidden h-full ${theme === 'dark' ? 'bg-dark-card' : 'bg-white'}`}>
                <div className="h-48 bg-cover bg-center">
                  <LazyImage 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZQQSxohu5ps7ZVrRlYe8pPL4Q7Vkh3olW3HJE9ht8Qf64R5t3XRPI5aBG_kDX1znE_fqKyKqcsLbG7QM3eNoHFEwBwkX7U2YU0WFmn-Skh7HcQ2dH_E5-wAMEXsRk4w4qCTLI62Nlpe7N8cq6MiUyVR2LkO7JuZXG7pVG3BEjnpmBcaQQnPV42knzFL3WBf87IxpAVnMI_atJFAVz_O_EAVzkD59AzrURjY6CrxwxJDrSMbl1cayC-a3_m_5ti4L4DjTJyoJbsdaJ" 
                    alt="Search Engine Marketing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-tighter">Search Engine Marketing</p>
                  <p className={`text-sm font-bold leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Dominating high-intent search keywords.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Solutions CTA */}
      <section className={`-mx-6 md:-mx-20 px-6 md:px-20 py-20 ${theme === 'dark' ? 'bg-[#121212]' : 'bg-slate-900'}`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-2 h-10 bg-primary rounded-full"></div>
            <h2 className="text-white text-3xl font-black uppercase tracking-tighter italic">Business Solutions</h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm">Custom internal toolsets, automated workflows, and data ecosystems built for scale.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-10">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
            <div className={`relative p-4 rounded-[2rem] border shadow-2xl ${theme === 'dark' ? 'bg-dark-card border-white/10' : 'bg-slate-800 border-slate-700'}`}>
              <div className={`rounded-2xl aspect-[4/3] overflow-hidden flex flex-col ${theme === 'dark' ? 'bg-dark-bg' : 'bg-white'}`}>
                <div className={`p-3 border-b flex gap-1.5 ${theme === 'dark' ? 'bg-slate-800 border-white/5' : 'bg-slate-100 border-slate-200'}`}>
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 p-6 space-y-4">
                  <div className={`h-8 w-1/3 rounded-lg ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'}`}></div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-24 bg-primary/5 rounded-lg border-2 border-primary/20"></div>
                    <div className={`h-24 rounded-lg ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-50'}`}></div>
                    <div className={`h-24 rounded-lg ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-50'}`}></div>
                  </div>
                  <div className={`h-32 rounded-lg w-full ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-50'}`}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              {[
                { icon: 'settings_suggest', title: 'ERP Optimization', desc: 'Streamlined resource planning for manufacturing and logistics firms.' },
                { icon: 'database', title: 'Data Lakes & BI', desc: 'Centralized intelligence gathering with custom dashboard reporting.' },
                { icon: 'security', title: 'Secure Infrastructure', desc: 'Hardened internal networks with multi-layer auth protocols.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="bg-primary/20 p-3 rounded-xl text-primary">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-white text-xl font-bold">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="bg-primary text-white py-4 px-8 rounded-xl font-bold hover:scale-105 transition-transform w-fit">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`flex flex-col items-center justify-center text-center space-y-8 py-20 border-t ${theme === 'dark' ? 'border-white/5' : 'border-slate-100'}`}>
        <h2 className={`text-4xl md:text-5xl font-black max-w-2xl leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
          Ready to build the future of your business?
        </h2>
        <p className="text-slate-500 text-lg max-w-xl">Join 50+ enterprise partners who have scaled their digital presence with lesolutions.</p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button 
            onClick={() => onNavigate('inquire')}
            className={`px-10 py-5 rounded-2xl font-black text-xl transition-colors ${
              theme === 'dark' ? 'bg-primary text-white hover:bg-primary/90' : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            Start Your Project
          </button>
          <button className="bg-primary/10 text-primary px-10 py-5 rounded-2xl font-black text-xl hover:bg-primary/20 transition-colors">
            Contact Sales
          </button>
        </div>
      </section>

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
