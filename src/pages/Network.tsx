import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

const partners = [
  {
    id: '01',
    name: 'TechCorp Solutions',
    industry: 'Enterprise Software',
    logo: 'cloud',
    description: 'Leading provider of cloud infrastructure solutions for Fortune 500 companies.',
    collaboration: 'Joint development of microservices architecture',
    results: '300% increase in system scalability'
  },
  {
    id: '02', 
    name: 'Global Retail Group',
    industry: 'E-commerce',
    logo: 'shopping_bag',
    description: 'International retail chain with presence in 45 countries.',
    collaboration: 'Complete digital transformation and POS integration',
    results: '150% growth in online sales'
  },
  {
    id: '03',
    name: 'FinTech Innovations',
    industry: 'Financial Services',
    logo: 'account_balance',
    description: 'Next-generation banking platform with AI-powered financial insights.',
    collaboration: 'Security infrastructure and compliance systems',
    results: 'Zero security breaches in 3+ years'
  },
  {
    id: '04',
    name: 'HealthTech Dynamics',
    industry: 'Healthcare',
    logo: 'medical_services',
    description: 'Digital health platform connecting patients with healthcare providers.',
    collaboration: 'HIPAA-compliant telemedicine infrastructure',
    results: '2M+ patient consultations facilitated'
  },
  {
    id: '05',
    name: 'EduTech Systems',
    industry: 'Education',
    logo: 'school',
    description: 'Online learning platform for K-12 and higher education institutions.',
    collaboration: 'Scalable LMS architecture and content delivery',
    results: '500K+ active students worldwide'
  },
  {
    id: '06',
    name: 'Logistics Pro',
    industry: 'Supply Chain',
    logo: 'local_shipping',
    description: 'AI-powered logistics optimization and fleet management platform.',
    collaboration: 'Real-time tracking and route optimization systems',
    results: '40% reduction in delivery times'
  }
];

export default function Network() {
  const { theme } = useTheme();
  const [selectedPartner, setSelectedPartner] = useState<number | null>(null);

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
          <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase">Network_Ecosystem</span>
        </div>
        <h1 className={`text-4xl md:text-6xl font-black leading-tight tracking-tighter mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
          Strategic <span className="gradient-text">Partnerships</span>
        </h1>
        <p className={`text-lg font-medium max-w-2xl ${theme === 'dark' ? 'text-white/50' : 'text-slate-500'}`}>
          Building lasting relationships with industry leaders. Our network spans across multiple sectors, 
          delivering transformative solutions at scale.
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
          { label: 'Partners', value: '50+', icon: 'handshake' },
          { label: 'Industries', value: '12', icon: 'category' },
          { label: 'Countries', value: '45', icon: 'public' },
          { label: 'Projects', value: '200+', icon: 'rocket_launch' }
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
                      Collaboration
                    </h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-slate-600'}`}>
                      {partner.collaboration}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 text-primary`}>
                      Results
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
                {selectedPartner === index ? 'Show Less' : 'View Details'}
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
          Ready to Join Our Network?
        </h2>
        <p className={`text-lg mb-8 max-w-2xl mx-auto ${
          theme === 'dark' ? 'text-white/60' : 'text-slate-600'
        }`}>
          Partner with us to accelerate your digital transformation journey. 
          Let's build something extraordinary together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors">
            Become a Partner
          </button>
          <button className={`px-8 py-4 rounded-xl font-bold border transition-colors ${
            theme === 'dark' 
              ? 'border-white/20 text-white hover:bg-white/10' 
              : 'border-slate-300 text-slate-700 hover:bg-slate-50'
          }`}>
            Schedule Consultation
          </button>
        </div>
      </motion.div>
    </div>
  );
}
