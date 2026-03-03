import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

const partners = [
  {
    id: '01',
    name: 'TechCorp Solutions',
    industry: 'Software Empresarial',
    logo: 'cloud',
    description: 'Líder em soluções de infraestrutura em nuvem para empresas Fortune 500.',
    collaboration: 'Desenvolvimento conjunto de arquitetura de microsserviços',
    results: 'Aumento de 300% na escalabilidade do sistema'
  },
  {
    id: '02', 
    name: 'Global Retail Group',
    industry: 'E-commerce',
    logo: 'shopping_bag',
    description: 'Rede de varejo internacional com presença em 45 países.',
    collaboration: 'Transformação digital completa e integração de PDV',
    results: 'Crescimento de 150% nas vendas online'
  },
  {
    id: '03',
    name: 'FinTech Innovations',
    industry: 'Serviços Financeiros',
    logo: 'account_balance',
    description: 'Plataforma bancária de próxima geração com insights financeiros alimentados por IA.',
    collaboration: 'Infraestrutura de segurança e sistemas de conformidade',
    results: 'Zero violações de segurança em 3+ anos'
  },
  {
    id: '04',
    name: 'HealthTech Dynamics',
    industry: 'Saúde',
    logo: 'medical_services',
    description: 'Plataforma de saúde digital conectando pacientes com profissionais de saúde.',
    collaboration: 'Infraestrutura de telemedicina compatível com HIPAA',
    results: '2M+ de consultas de pacientes facilitadas'
  },
  {
    id: '05',
    name: 'EduTech Systems',
    industry: 'Educação',
    logo: 'school',
    description: 'Plataforma de aprendizado online para instituições de ensino K-12 e superior.',
    collaboration: 'Arquitetura LMS escalável e entrega de conteúdo',
    results: '500K+ de estudantes ativos mundialmente'
  },
  {
    id: '06',
    name: 'Logistics Pro',
    industry: 'Cadeia de Suprimentos',
    logo: 'local_shipping',
    description: 'Plataforma de otimização logística e gestão de frota alimentada por IA.',
    collaboration: 'Sistemas de rastreamento em tempo real e otimização de rotas',
    results: 'Redução de 40% nos tempos de entrega'
  }
];

export default function Network() {
  const { theme } = useTheme();
  const [selectedPartner, setSelectedPartner] = useState<number | null>(null);

  const handleBecomePartner = () => {
    // Abrir formulário de contato com assunto específico
    const mailtoLink = `mailto:contato@lesolutions.com?subject=Proposta de Parceria - Network&body=Nome da Empresa:%0ASetor:%0AWebsite:%0A%0ADescreva sua proposta de parceria:`;
    window.location.href = mailtoLink;
  };

  const handleScheduleConsultation = () => {
    // Abrir formulário de consultoria
    const mailtoLink = `mailto:contato@lesolutions.com?subject=Solicitação de Consultoria&body=Nome:%0AEmpresa:%0ATelefone:%0A%0AServiços de interesse:%0A- Desenvolvimento Web%0A- Tráfego Pago%0A- Consultoria Técnica%0A- Outros%0A%0ABriefing do projeto:`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="px-6 lg:px-20 py-12 min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase">Ecossistema_de_Rede</span>
        </div>
        <h1 className={`text-4xl md:text-6xl font-black leading-tight tracking-tighter mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
          Parcerias <span className="gradient-text">Estratégicas</span>
        </h1>
        <p className={`text-lg font-medium max-w-2xl ${theme === 'dark' ? 'text-white/50' : 'text-slate-500'}`}>
          Construindo relacionamentos duradouros com líderes do setor. Nossa rede abrange múltiplos setores,
          entregando soluções transformadoras em escala.
        </p>
      </motion.div>

      {/* Network Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16`}
      >
        {[
          { label: 'Parceiros', value: '50+', icon: 'handshake' },
          { label: 'Setores', value: '12', icon: 'category' },
          { label: 'Países', value: '45', icon: 'public' },
          { label: 'Projetos', value: '200+', icon: 'rocket_launch' }
        ].map((stat, i) => (
          <div
            key={i}
            className={`p-6 rounded-2xl border text-center ${
              theme === 'dark' ? 'bg-dark-card border-white/10' : 'bg-white border-slate-200'
            }`}
          >
            <div className={`p-3 rounded-lg inline-flex mb-4 ${
              theme === 'dark' ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary'
            }`}>
              <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
            </div>
            <div className={`text-3xl font-black mb-2 gradient-text`}>{stat.value}</div>
            <div className={`text-xs font-bold uppercase tracking-wider ${
              theme === 'dark' ? 'text-white/50' : 'text-slate-500'
            }`}>
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onClick={() => setSelectedPartner(selectedPartner === index ? null : index)}
            className={`group cursor-pointer rounded-2xl border overflow-hidden transition-all duration-300 card-hover-lift ${
              theme === 'dark' 
                ? 'bg-dark-card border-white/10 hover:border-primary/50' 
                : 'bg-white border-slate-200 hover:border-primary/50'
            }`}
          >
            {/* Partner Header */}
            <div className={`p-6 border-b ${
              theme === 'dark' ? 'border-white/10' : 'border-slate-100'
            }`}>
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${
                  theme === 'dark' ? 'bg-white/5 text-primary' : 'bg-primary/10 text-primary'
                }`}>
                  <span className="material-symbols-outlined text-2xl">{partner.logo}</span>
                </div>
                <span className={`font-mono text-xs font-bold opacity-30 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  PT.{partner.id}
                </span>
              </div>
              
              <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                {partner.name}
              </h3>
              
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${
                theme === 'dark' 
                  ? 'bg-white/10 text-white/70' 
                  : 'bg-slate-100 text-slate-600'
              }`}>
                <span className="material-symbols-outlined text-sm">business</span>
                {partner.industry}
              </div>
            </div>

            {/* Partner Details */}
            <div className="p-6">
              <p className={`text-sm leading-relaxed mb-4 ${
                theme === 'dark' ? 'text-white/60' : 'text-slate-600'
              }`}>
                {partner.description}
              </p>

              {/* Expandable Details */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: selectedPartner === index ? 'auto' : 0,
                  opacity: selectedPartner === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-4 pt-4 border-t">
                  <div>
                    <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 text-primary`}>
                      Colaboração
                    </h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-slate-600'}`}>
                      {partner.collaboration}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 text-primary`}>
                      Resultados
                    </h4>
                    <p className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {partner.results}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* View More Button */}
              <button className={`w-full mt-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                theme === 'dark' 
                  ? 'text-primary hover:bg-white/5' 
                  : 'text-primary hover:bg-primary/5'
              }`}>
                {selectedPartner === index ? 'Mostrar Menos' : 'Ver Detalhes'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className={`mt-20 p-12 rounded-3xl border text-center ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-primary/10 to-orange-400/10 border-primary/20' 
            : 'bg-gradient-to-r from-primary/5 to-orange-400/5 border-primary/10'
        }`}
      >
        <h2 className={`text-3xl font-black mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
          Pronto para Entrar em Nossa Rede?
        </h2>
        <p className={`text-lg mb-8 max-w-2xl mx-auto ${
          theme === 'dark' ? 'text-white/60' : 'text-slate-600'
        }`}>
          Parceie conosco para acelerar sua jornada de transformação digital.
          Vamos construir algo extraordinário juntos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleBecomePartner}
            className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors"
          >
            Tornar-se Parceiro
          </button>
          <button 
            onClick={handleScheduleConsultation}
            className={`px-8 py-4 rounded-xl font-bold border transition-colors ${
              theme === 'dark' 
                ? 'border-white/20 text-white hover:bg-white/10' 
                : 'border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            Agendar Consultoria
          </button>
        </div>
      </motion.div>
    </div>
  );
}
