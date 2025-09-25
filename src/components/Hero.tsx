// src/components/Hero.jsx

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CnhScannerAnimation from './CnhScannerAnimation'; // Importando nosso novo componente de animação

// Componente de Botão Reutilizável
// Componente de Botão Reutilizável
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  primary?: boolean;
};

const Button = ({ children, primary = false }: ButtonProps) => {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-transform duration-300 ease-in-out transform flex items-center justify-center";
  const primaryClasses = "bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg hover:shadow-cyan-500/50";
  const secondaryClasses = "bg-transparent border-2 border-slate-500 hover:bg-slate-800 text-slate-300 hover:text-white";

  return (
    <motion.button
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Deep Ocean Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(70% 55% at 50% 50%, #2a5d77 0%, #184058 18%, #0f2a43 34%, #0a1b30 50%, #071226 66%, #040d1c 80%, #020814 92%, #01040d 97%, #000309 100%), radial-gradient(160% 130% at 10% 10%, rgba(0,0,0,0) 38%, #000309 76%, #000208 100%), radial-gradient(160% 130% at 90% 90%, rgba(0,0,0,0) 38%, #000309 76%, #000208 100%)"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            className="text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-sora font-bold mb-6 leading-tight text-white"
              variants={itemVariants}
            >
              Transforme documentos em dados com
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text animate-gradient-x">
                {" "}IA de ponta
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed font-inter"
              variants={itemVariants}
            >
              Acelere seus processos de onboarding e validação com nossa solução de OCR que oferece precisão, escalabilidade e integração em minutos.
            </motion.p>
            
            <motion.ul className="space-y-3 mb-10 text-lg text-slate-400 font-inter text-left" variants={itemVariants}>
              <li className="flex items-center"><CheckCircle className="text-cyan-400 mr-3 flex-shrink-0" size={22}/> Precisão de 99.7% para extração de dados.</li>
              <li className="flex items-center"><CheckCircle className="text-cyan-400 mr-3 flex-shrink-0" size={22}/> Integração via API em menos de 10 minutos.</li>
              <li className="flex items-center"><CheckCircle className="text-cyan-400 mr-3 flex-shrink-0" size={22}/> Reduza custos operacionais em até 70%.</li>
            </motion.ul>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start" variants={itemVariants}>
              <Button primary>
                Fale com um especialista
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button>
                Preços e Planos
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </motion.div>
          </motion.div>

          <div className="hidden md:flex items-center justify-center h-full">
            <CnhScannerAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;