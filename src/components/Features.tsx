import { motion } from 'framer-motion'
import { Target, Rocket, Shield, Cloud, Code, Fingerprint } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Precisão Inigualável",
      description: "Nosso modelo de IA é treinado com milhões de documentos para garantir uma taxa de acerto de 99.7%."
    },
    {
      icon: Rocket,
      title: "Velocidade Extrema",
      description: "Respostas da API em menos de 500ms. Processe milhares de documentos por minuto."
    },
    {
      icon: Shield,
      title: "Segurança de Ponta a Ponta",
      description: "Criptografia AES-256 e conformidade total com a LGPD."
    },
    {
      icon: Cloud,
      title: "Escalabilidade Elástica",
      description: "Infraestrutura serverless na AWS que escala automaticamente para qualquer demanda."
    },
    {
      icon: Code,
      title: "Integração Simples",
      description: "Documentação clara e SDKs para você integrar em horas, não semanas."
    },
    {
      icon: Fingerprint,
      title: "Redução de Fraude",
      description: "Validações cruzadas e detecção de anomalias para identificar documentos suspeitos."
    }
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-hero-harmony-soft" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-40 pointer-events-none" />

      <div className="relative container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-sora font-bold text-white mb-6">
            Um sistema construído para{' '}
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
              Performance e Segurança
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Modelos treinados com os melhores frameworks de machine learning da indústria, nossa solução oferece 
            recursos avançados desde o primeiro dia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group surface-card rounded-xl p-8 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 surface-pill rounded-lg border border-cyan-400/30 group-hover:border-purple-400/50 transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-cyan-300 group-hover:text-purple-300 transition-colors duration-300" />
                </div>
              </div>
              
              <h3 className="text-xl font-sora font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-slate-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                {feature.description}
              </p>

              {/* Decorative gradient line */}
              <div className="mt-6 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-400/40 to-purple-500/0 rounded-full group-hover:via-purple-400/70 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features