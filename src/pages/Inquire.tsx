import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import { useState, FormEvent, ChangeEvent } from 'react';

export default function Inquire() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sector: '',
    briefing: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Enviar para email ou serviço de backend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Mensagem enviada com sucesso! Entraremos em contato em até 24h.');
        setFormData({ name: '', email: '', sector: '', briefing: '' });
      } else {
        setSubmitMessage('Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.');
      }
    } catch (error) {
      // Fallback: enviar por email client-side
      const mailtoLink = `mailto:contato@lesolutions.com?subject=Novo Projeto - ${formData.sector}&body=Nome: ${formData.name}%0AEmail: ${formData.email}%0ASetor: ${formData.sector}%0A%0ABriefing:%0A${formData.briefing}`;
      window.location.href = mailtoLink;
      setSubmitMessage('Abrindo seu cliente de email...');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase">Sistema_de_Consulta</span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-black leading-tight tracking-tighter mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Projetando <span className="text-primary">Superioridade</span> Digital
            </h1>
            <p className={`text-lg font-medium leading-relaxed ${theme === 'dark' ? 'text-white/50' : 'text-slate-500'}`}>
              Inicie um canal seguro para discutir sua infraestrutura empresarial. Construímos sistemas que escalam além da concorrência.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className={`text-xs font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-white/40' : 'text-slate-400'}`}>Identidade</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nome Completo" 
                  className={`w-full p-4 rounded-lg border outline-none focus:border-primary transition-colors ${
                    theme === 'dark' 
                      ? 'bg-dark-card border-white/10 text-white placeholder-white/20' 
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>
              <div className="space-y-2">
                <label className={`text-xs font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-white/40' : 'text-slate-400'}`}>Ponto_de_Contato</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Endereço de Email" 
                  className={`w-full p-4 rounded-lg border outline-none focus:border-primary transition-colors ${
                    theme === 'dark' 
                      ? 'bg-dark-card border-white/10 text-white placeholder-white/20' 
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className={`text-xs font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-white/40' : 'text-slate-400'}`}>Setor</label>
              <select 
                name="sector"
                value={formData.sector}
                onChange={handleChange}
                className={`w-full p-4 rounded-lg border outline-none focus:border-primary transition-colors appearance-none ${
                  theme === 'dark' 
                    ? 'bg-dark-card border-white/10 text-white' 
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              >
                <option>E-commerce em Escala</option>
                <option>Plataforma SaaS</option>
                <option>Ferramenta Interna Empresarial</option>
                <option>Infraestrutura de Dados</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className={`text-xs font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-white/40' : 'text-slate-400'}`}>Briefing</label>
              <textarea 
                rows={4}
                name="briefing"
                value={formData.briefing}
                onChange={handleChange}
                placeholder="Descreva seus requisitos de sistema..." 
                className={`w-full p-4 rounded-lg border outline-none focus:border-primary transition-colors resize-none ${
                  theme === 'dark' 
                    ? 'bg-dark-card border-white/10 text-white placeholder-white/20' 
                    : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                }`}
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-primary text-white font-black text-lg uppercase tracking-widest rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Iniciar_Projeto'}
            </button>
            
            {submitMessage && (
              <div className={`p-4 rounded-lg text-sm font-medium ${
                submitMessage.includes('sucesso') 
                  ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
                  : 'bg-red-500/10 text-red-500 border border-red-500/20'
              }`}>
                {submitMessage}
              </div>
            )}
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
                 style={{ backgroundImage: 'url("/contact-hero.svg")' }}
               ></div>
               <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-dark-bg via-transparent' : 'from-white via-transparent'} to-transparent opacity-80`}></div>
               
               <div className="absolute bottom-8 left-8 right-8">
                 <div className="flex items-center gap-3 mb-4">
                   <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                     <span className="material-symbols-outlined">support_agent</span>
                   </div>
                   <div>
                     <p className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Suporte Prioritário</p>
                     <p className={`text-xs ${theme === 'dark' ? 'text-white/50' : 'text-slate-500'}`}>Linha direta com líderes de engenharia</p>
                   </div>
                 </div>
                 <div className={`p-4 rounded-xl border backdrop-blur-md ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white/80 border-slate-200'}`}>
                   <p className={`font-mono text-xs leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-slate-600'}`}>
                     "Não apenas construímos sites; projetamos ativos geradores de receita que superam os padrões de mercado em 300%."
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
