import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';
import PortfolioModal from '../components/PortfolioModal';
import LazyImage from '../components/LazyImage';

export default function Home({ onNavigate }: { onNavigate: (page: string) => void }) {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScheduleDemo = () => {
    const mailtoLink = `mailto:contato@lesolutions.com?subject=Solicitação de Demonstração&body=Nome:%0AEmpresa:%0ATelefone:%0A%0ASoluções de interesse:%0A- Soluções Empresariais%0A- Otimização ERP%0A- Lagos de Dados & BI%0A- Infraestrutura Segura%0A%0AMelhor data/hora para demo:`;
    window.location.href = mailtoLink;
  };

  const handleSalesContact = () => {
    const mailtoLink = `mailto:contato@lesolutions.com?subject=Contato com Vendas&body=Nome:%0AEmpresa:%0ACargo:%0ATelefone:%0A%0AComo podemos ajudar seu negócio:%0A- Novo projeto%0A- Otimização existente%0A- Consultoria estratégica%0A- Outros%0A%0ABudget aproximado:`;
    window.location.href = mailtoLink;
  };

  const websites = [
    {
      title: "Excelência em E-commerce",
      desc: "Loja Next.js ultra-rápida para marcas de varejo globais com integração de headless CMS.",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
      details: "Transformação digital completa para varejo de luxo, com gerenciamento de inventário em tempo real, recomendações alimentadas por IA e experiência de checkout perfeita.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Stripe API"],
      results: "Alcançou 99.9% de uptime, tempo de carregamento de 2.3s e aumento de 45% na taxa de conversão em 6 meses."
    },
    {
      title: "Inovação SaaS",
      desc: "Plataformas cloud nativas escaláveis com arquitetura de sincronização de dados em tempo real.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      details: "Plataforma de gerenciamento de projetos empresarial com colaboração em tempo real, dashboard analítico avançado e otimização de fluxos de trabalho automatizados.",
      technologies: ["React", "Node.js", "MongoDB", "WebSocket", "Docker"],
      results: "Escalado para 100K+ usuários ativos diários, reduziu tempo de conclusão de projetos em 35% e alcançou 99.95% de uptime SLA."
    },
    {
      title: "Portal Corporativo",
      desc: "Sistemas internos de alta segurança para planejamento de recursos empresariais e relatórios.",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center",
      details: "Solução ERP abrangente com arquitetura multi-tenant, protocolos de segurança avançados e inteligência de negócios alimentada por IA.",
      technologies: ["Angular", ".NET Core", "SQL Server", "Azure", "Power BI"],
      results: "Otimizou operações para 5000+ funcionários, reduziu tempo de processamento em 60% e garantiu zero violações de dados por 3+ anos."
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
            <span className="text-xs font-bold uppercase tracking-wider">Parceiro Tecnológico Inovador</span>
          </div>
          <h1 className={`text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Soluções Tecnológicas <span className="gradient-text text-shadow-glow">Interativas</span>
          </h1>
          <p className={`text-lg md:text-xl font-light leading-relaxed max-w-xl ${theme === 'dark' ? 'text-white/50' : 'text-slate-600'}`}>
            Elevando seu negócio com artesanato digital premium, sistemas web de alto desempenho e estratégias de crescimento baseadas em dados.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all flex items-center gap-2"
            >
              Ver Portfólio <span className="material-symbols-outlined">arrow_downward</span>
            </button>
            <button 
              onClick={() => onNavigate('services')}
              className={`border-2 px-8 py-4 rounded-xl font-bold text-lg transition-all card-hover-lift ${
                theme === 'dark' 
                  ? 'bg-dark-card border-white/10 text-white hover:border-primary hover:bg-primary/10' 
                  : 'bg-white border-slate-100 text-slate-700 hover:border-primary hover:bg-primary/5'
              }`}
            >
              Nossa Stack
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
            <div className={`relative aspect-video rounded-2xl shadow-2xl overflow-hidden border card-hover-lift ${
              theme === 'dark' ? 'bg-dark-card border-white/10' : 'bg-white border-slate-100'
            }`}>
            <LazyImage 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw12Nvy5UPh344UA1BK4MOXlJbLEOuSOj-Gf7cabXGn7Cr7qy3Sgpvi3GIro1d5qPf_W1J_17RXCFKeb7u4g5VukK--8CRY7mr48aHyCtEo1dnSc8MMumWCj7UDQyW8ThNGc-1kvA3L3E8t78SdWbUG_l0nC6R0edC4LTNNHYfI820VHFVbn3HE25s9AR9GOPZNG0fldWmqzTewRRFRuN_6hXJEAs-xVEEX7NB2lx67wZ27bXxJ2V3Qx6kOoTc4YSfJocvIURKLD9B" 
              alt="Hero showcase"
              className="absolute inset-0"
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
            <h2 className={`text-3xl font-black uppercase tracking-tighter italic ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Sites</h2>
          </div>
          <div className="flex gap-1">
            <button className="p-1.5 rounded-lg border border-primary/20 text-primary/60 hover:border-primary hover:text-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed" disabled>
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            <button className="p-1.5 rounded-lg border border-primary/20 text-primary/60 hover:border-primary hover:text-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed" disabled>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
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
              <div className="aspect-video rounded-xl overflow-hidden relative bg-slate-800 group">
                <LazyImage 
                  src={site.img} 
                  alt={site.title}
                  className="absolute inset-0"
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
                  Ver Estudo de Caso
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
            <h2 className={`text-3xl font-black uppercase tracking-tighter italic ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Tráfego Pago</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Metrics Card */}
          <div className={`p-8 rounded-3xl border shadow-xl overflow-hidden relative ${
            theme === 'dark' ? 'bg-dark-card border-white/5' : 'bg-white border-slate-100'
          }`}>
            <div className="flex items-center justify-between mb-8">
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Métricas de Crescimento</h3>
              <span className="px-4 py-1 bg-green-500/10 text-green-500 rounded-full text-xs font-bold uppercase tracking-widest">+240% ROI</span>
            </div>
            <div className="h-64 flex items-end justify-between gap-4 p-4">
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className={`w-full rounded-t-lg h-16 relative overflow-hidden ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'}`}>
                  <div className={`absolute bottom-0 w-full h-1/2 ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-300'} transition-all duration-1000`}></div>
                  <div className="absolute top-2 left-2 text-xs font-bold text-slate-500">100%</div>
                  <div className="absolute bottom-2 right-2 text-xs text-slate-400">Base</div>
                </div>
                <span className="text-xs font-bold text-slate-500">ANTES</span>
                <div className="text-xs text-slate-400 text-center">Sem otimização</div>
              </div>
              
              {/* Setas de crescimento */}
              <div className="flex flex-col items-center justify-center">
                <div className="text-primary animate-pulse">
                  <span className="material-symbols-outlined text-2xl">trending_up</span>
                </div>
                <div className="text-xs font-bold text-primary mt-1">+240%</div>
              </div>
              
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-primary/10 rounded-t-lg h-32 relative overflow-hidden border-x border-t border-primary/30">
                  <div className="absolute bottom-0 w-full bg-primary h-full transition-all duration-1000 animate-pulse"></div>
                  <div className="absolute top-2 left-2 text-xs font-bold text-white">340%</div>
                  <div className="absolute bottom-2 right-2 text-xs text-white/80">Máximo</div>
                  {/* Animação de brilho */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 animate-pulse"></div>
                </div>
                <span className="text-xs font-bold text-primary italic">COM LESOLUTIONS</span>
                <div className="text-xs text-primary text-center font-medium">Otimizado</div>
              </div>
            </div>
            <div className={`mt-8 grid grid-cols-3 gap-4 border-t pt-8 ${theme === 'dark' ? 'border-white/5' : 'border-slate-100'}`}>
              {[
                { label: 'CTR', val: '4.8%', desc: 'Taxa de Cliques', trend: 'up', color: 'green' },
                { label: 'CPA', val: 'R$12,40', desc: 'Custo por Aquisição', trend: 'down', color: 'blue' },
                { label: 'Impressões', val: '1.2M', desc: 'Visualizações', trend: 'up', color: 'purple' }
              ].map((stat, i) => (
                <div key={i} className={`text-center p-3 rounded-xl transition-all hover:scale-105 ${
                  i === 1 ? (theme === 'dark' ? 'border-x border-white/5' : 'border-x border-slate-100') : ''
                } ${theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-slate-50'}`}>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <p className="text-slate-500 text-[10px] font-bold uppercase">{stat.label}</p>
                    {stat.trend === 'up' && (
                      <span className="text-green-500">
                        <span className="material-symbols-outlined text-xs">arrow_upward</span>
                      </span>
                    )}
                    {stat.trend === 'down' && (
                      <span className="text-blue-500">
                        <span className="material-symbols-outlined text-xs">arrow_downward</span>
                      </span>
                    )}
                  </div>
                  <p className={`text-lg font-black mb-1 ${
                    stat.color === 'green' ? 'text-green-500' : 
                    stat.color === 'blue' ? 'text-blue-500' : 
                    'text-purple-500'
                  }`}>{stat.val}</p>
                  <p className={`text-xs ${theme === 'dark' ? 'text-white/40' : 'text-slate-400'}`}>{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ad Mockups */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-primary p-1 rounded-2xl shadow-lg shadow-primary/20">
              <div className={`rounded-xl overflow-hidden h-full ${theme === 'dark' ? 'bg-dark-card' : 'bg-white'}`}>
                <div className="h-48 bg-cover bg-center group relative">
                  <LazyImage 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUKWV-XPP300pmWmxcJdUijzzRUYQp6dQc_bahz2BvXoRsSZnJ1DEKOZZNkWLo5XRhb5oinCcvcIDufHeoUrxgjx2vqpWfx3w1HrbZtGZi9nFjEWd-8-887IjntYmoVqudFCF_dIG8xs9eiI-Waq_xLYURixkveozoTLTrHmA_VD-biSPkhqsytzDRs2-lMR5fgSxtVqZvMT6kZLQdZCCOGsNxRmnwUn4CXu0_5zutZM2wzhaoM2pRdtXUBQiLT04jHq9GpdUw5947" 
                    alt="Social Ads"
                    className="absolute inset-0"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[10px] font-bold text-primary mb-1 uppercase tracking-tighter">Anúncios Sociais</p>
                  <p className={`text-sm font-bold leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Estratégia de retargeting para clientes de alto LTV.</p>
                </div>
              </div>
            </div>
            <div className={`p-1 rounded-2xl shadow-lg ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-900'}`}>
              <div className={`rounded-xl overflow-hidden h-full ${theme === 'dark' ? 'bg-dark-card' : 'bg-white'}`}>
                <div className="h-48 bg-cover bg-center group relative">
                  <LazyImage 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZQQSxohu5ps7ZVrRlYe8pPL4Q7Vkh3olW3HJE9ht8Qf64R5t3XRPI5aBG_kDX1znE_fqKyKqcsLbG7QM3eNoHFEwBwkX7U2YU0WFmn-Skh7HcQ2dH_E5-wAMEXsRk4w4qCTLI62Nlpe7N8cq6MiUyVR2LkO7JuZXG7pVG3BEjnpmBcaQQnPV42knzFL3WBf87IxpAVnMI_atJFAVz_O_EAVzkD59AzrURjY6CrxwxJDrSMbl1cayC-a3_m_5ti4L4DjTJyoJbsdaJ" 
                    alt="Search Engine Marketing"
                    className="absolute inset-0"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-tighter">Marketing em Mecanismos de Busca</p>
                  <p className={`text-sm font-bold leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Dominando palavras-chave de busca de alta intenção.</p>
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
            <h2 className="text-white text-3xl font-black uppercase tracking-tighter italic">Soluções Empresariais</h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm">Ferramentas internas personalizadas, fluxos de trabalho automatizados e ecossistemas de dados construídos para escalabilidade.</p>
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
                { icon: 'settings_suggest', title: 'Otimização ERP', desc: 'Planejamento de recursos simplificado para empresas de manufatura e logística.' },
                { icon: 'database', title: 'Lagos de Dados & BI', desc: 'Coleta de inteligência centralizada com relatórios de dashboard personalizados.' },
                { icon: 'security', title: 'Infraestrutura Segura', desc: 'Redes internas protegidas com protocolos de autenticação multicamadas.' }
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
            <button 
              onClick={handleScheduleDemo}
              className="bg-primary text-white py-4 px-8 rounded-xl font-bold hover:scale-105 transition-transform w-fit"
            >
              Agendar Demonstração
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`flex flex-col items-center justify-center text-center space-y-8 py-20 border-t ${theme === 'dark' ? 'border-white/5' : 'border-slate-100'}`}>
        <h2 className={`text-4xl md:text-5xl font-black max-w-2xl leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
          Pronto para construir o futuro do seu negócio?
        </h2>
        <p className="text-slate-500 text-lg max-w-xl">Junte-se a 50+ parceiros empresariais que escalaram sua presença digital com a LESOLUTIONS.</p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button 
            onClick={() => onNavigate('inquire')}
            className={`px-10 py-5 rounded-2xl font-black text-xl transition-colors ${
              theme === 'dark' ? 'bg-primary text-white hover:bg-primary/90' : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            Iniciar Seu Projeto
          </button>
          <button 
            onClick={handleSalesContact}
            className="bg-primary/10 text-primary px-10 py-5 rounded-2xl font-black text-xl hover:bg-primary/20 transition-colors"
          >
            Contato com Vendas
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
