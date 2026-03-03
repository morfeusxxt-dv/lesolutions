import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';
import LazyImage from '../components/LazyImage';

const services = [
  {
    id: '01',
    title: 'Web Systems',
    icon: 'dns',
    description: 'Custom high-performance web applications engineered for scale. We build the backbone of your digital presence using cutting-edge frameworks.',
    features: ['React/Next.js Architecture', 'Server-Side Rendering', 'Global CDN Deployment', '99.9% Uptime SLA']
  },
  {
    id: '02',
    title: 'Data Analytics',
    icon: 'analytics',
    description: 'Transform raw data into actionable intelligence. Our dashboards provide real-time visibility into your business metrics.',
    features: ['Real-time Visualization', 'Predictive Modeling', 'Custom Reporting Pipelines', 'Data Warehousing']
  },
  {
    id: '03',
    title: 'Growth Engineering',
    icon: 'rocket_launch',
    description: 'Scientific approach to user acquisition. We optimize every touchpoint to maximize conversion rates and ROI.',
    features: ['A/B Testing Frameworks', 'Conversion Rate Optimization', 'Paid Traffic Management', 'Funnel Architecture']
  },
  {
    id: '04',
    title: 'UI/UX Architecture',
    icon: 'layers',
    description: 'User-centric design systems that ensure consistency and usability across all your digital products.',
    features: ['Design Systems', 'Interactive Prototyping', 'User Research', 'Accessibility Compliance']
  },
  {
    id: '05',
    title: 'Mobile Development',
    icon: 'smartphone',
    description: 'Native-quality mobile experiences built with cross-platform technologies to reach users on any device.',
    features: ['iOS & Android', 'React Native', 'Offline-First Architecture', 'App Store Optimization']
  },
  {
    id: '06',
    title: 'Automation',
    icon: 'smart_toy',
    description: 'Streamline operations with custom internal tools and workflow automation that reduce manual overhead.',
    features: ['Workflow Automation', 'API Integrations', 'Bot Development', 'Legacy System Migration']
  }
];

export default function Services() {
  const { theme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="px-6 lg:px-20 py-12 min-h-screen">
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase">System_Modules</span>
          </div>
          <h1 className={`text-4xl md:text-6xl font-black leading-tight tracking-tighter mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Core <span className="text-primary">Capabilities</span>
          </h1>
          <p className={`text-lg font-medium max-w-2xl ${theme === 'dark' ? 'text-white/50' : 'text-slate-500'}`}>
            Deploying enterprise-grade solutions across the digital spectrum. Select a module to inspect capabilities.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`group relative p-8 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden min-h-[320px] flex flex-col justify-between ${
              theme === 'dark' 
                ? 'bg-dark-card border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]' 
                : 'bg-white border-slate-200 hover:border-primary/50 hover:shadow-xl'
            }`}
          >
            {/* Background Grid Effect on Hover */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none ${
              theme === 'dark' 
                ? 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent' 
                : 'bg-slate-100'
            }`}></div>

            {/* Header */}
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-white/5 text-primary' : 'bg-primary/10 text-primary'}`}>
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <span className={`font-mono text-xs font-bold opacity-30 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  SYS.{service.id}
                </span>
              </div>
              
              <h3 className={`text-2xl font-bold mb-3 gradient-text`}>
                {service.title}
              </h3>
              
              <p className={`text-sm leading-relaxed mb-6 ${theme === 'dark' ? 'text-white/60' : 'text-slate-500'}`}>
                {service.description}
              </p>
            </div>

            {/* Interactive "Window" Content - Features List */}
            <motion.div 
              className="relative z-10"
              initial={{ opacity: 0.6, y: 10 }}
              animate={{ 
                opacity: hoveredIndex === index ? 1 : 0.6,
                y: hoveredIndex === index ? 0 : 10
              }}
            >
              <div className={`h-px w-full mb-4 ${theme === 'dark' ? 'bg-white/10' : 'bg-slate-100'}`}></div>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className={`text-[10px] ${hoveredIndex === index ? 'text-primary' : 'text-gray-400'}`}>
                      {'>'}
                    </span>
                    <span className={`text-xs font-mono uppercase tracking-wider transition-colors ${
                      theme === 'dark' 
                        ? (hoveredIndex === index ? 'text-white' : 'text-white/40')
                        : (hoveredIndex === index ? 'text-slate-900' : 'text-slate-400')
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Corner Accents for "Window" feel */}
            <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l transition-colors duration-300 ${
              hoveredIndex === index ? 'border-primary' : (theme === 'dark' ? 'border-white/10' : 'border-slate-200')
            }`}></div>
            <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r transition-colors duration-300 ${
              hoveredIndex === index ? 'border-primary' : (theme === 'dark' ? 'border-white/10' : 'border-slate-200')
            }`}></div>
            <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l transition-colors duration-300 ${
              hoveredIndex === index ? 'border-primary' : (theme === 'dark' ? 'border-white/10' : 'border-slate-200')
            }`}></div>
            <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r transition-colors duration-300 ${
              hoveredIndex === index ? 'border-primary' : (theme === 'dark' ? 'border-white/10' : 'border-slate-200')
            }`}></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
