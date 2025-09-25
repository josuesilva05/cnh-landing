import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CreditCard, Car, Shield, ChevronRight } from 'lucide-react'

const UseCases = () => {
  const [activeTab, setActiveTab] = useState(0)

  const useCases = [
    {
      name: "Fintechs",
      icon: CreditCard,
      title: "Acelere o Onboarding Digital",
      description: "Automatize o processo de KYC (Know Your Customer) e onboarding de novos usuários.",
      features: [
        "Validação automática de identidade",
        "Redução de 80% no tempo de abertura de conta",
        "Compliance automático com regulações",
        "Integração com sistemas de score de crédito"
      ],
      metrics: {
        reduction: "80%",
        metric: "Tempo de onboarding"
      }
    },
    {
      name: "Locadoras de Veículos",
      icon: Car,
      title: "Validação Instantânea no Balcão",
      description: "Valide CNHs no balcão em segundos, reduzindo filas e prevenindo fraudes.",
      features: [
        "Verificação em tempo real da validade",
        "Detecção de documentos falsos",
        "Histórico completo de validações",
        "Integração com sistema de reservas"
      ],
      metrics: {
        reduction: "70%",
        metric: "Tempo de atendimento"
      }
    },
    {
      name: "Seguradoras",
      icon: Shield,
      title: "Agilize Sinistros e Apólices",
      description: "Agilize a abertura de sinistros e a emissão de apólices.",
      features: [
        "Processamento automático de documentos",
        "Validação cruzada de dados",
        "Redução de fraudes em sinistros",
        "Automatização de processos manuais"
      ],
      metrics: {
        reduction: "60%",
        metric: "Tempo de processamento"
      }
    }
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-hero-harmony-soft-dark-top" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-500/10 opacity-60 pointer-events-none" />

      <div className="relative container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-sora font-bold text-white mb-6">
            Impulsionando a Inovação em{' '}
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
              Diversos Setores
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Nossa tecnologia busca transformar processos em múltiplas indústrias, 
            oferecendo eficiência e segurança incomparáveis.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center mb-12 surface-card rounded-xl p-2 border border-cyan-400/20 shadow-xl shadow-cyan-500/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {useCases.map((useCase, index) => (
              <button
                key={useCase.name}
                onClick={() => setActiveTab(index)}
                className={`flex-1 flex items-center justify-center px-6 py-4 rounded-lg transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-500 text-white shadow-lg shadow-cyan-500/30'
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                <useCase.icon className="h-5 w-5 mr-2" />
                <span className="font-medium">{useCase.name}</span>
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="surface-card-light rounded-2xl p-8 md:p-12 border border-cyan-400/30 shadow-2xl shadow-cyan-500/10"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="p-3 surface-pill rounded-lg border border-cyan-400/30 mr-4">
                      {React.createElement(useCases[activeTab].icon, {
                        className: "h-8 w-8 text-cyan-300"
                      })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-sora font-bold text-white">
                        {useCases[activeTab].title}
                      </h3>
                      <p className="text-slate-300 mt-1">{useCases[activeTab].name}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                    {useCases[activeTab].description}
                  </p>

                  <div className="space-y-4">
                    {useCases[activeTab].features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <ChevronRight className="h-5 w-5 text-purple-300 mr-3 flex-shrink-0" />
                        <span className="text-white/90">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  {/* Metric Card */}
                  <motion.div
                    className="surface-card rounded-xl p-8 border border-purple-500/20 text-center shadow-xl shadow-purple-500/20"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="text-5xl font-bold text-cyan-300 mb-4">
                      {useCases[activeTab].metrics.reduction}
                    </div>
                    <div className="text-white font-medium">
                      Redução no
                    </div>
                    <div className="text-slate-200">
                      {useCases[activeTab].metrics.metric}
                    </div>
                  </motion.div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl opacity-70"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl opacity-70"></div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Success Stories */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-sora font-semibold text-white mb-8">
            Resultados que Falam por Si
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center surface-card rounded-xl py-6 border border-purple-500/20 shadow-lg shadow-purple-500/20">
              <div className="text-3xl font-bold text-purple-300 mb-2">500+</div>
              <div className="text-slate-200">Empresas usando</div>
            </div>
            <div className="text-center surface-card rounded-xl py-6 border border-cyan-400/20 shadow-lg shadow-cyan-500/20">
              <div className="text-3xl font-bold text-cyan-300 mb-2">10M+</div>
              <div className="text-slate-200">Documentos processados</div>
            </div>
            <div className="text-center surface-card rounded-xl py-6 border border-purple-500/20 shadow-lg shadow-purple-500/20">
              <div className="text-3xl font-bold text-purple-300 mb-2">R$ 50M+</div>
              <div className="text-slate-200">Em economia gerada</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default UseCases