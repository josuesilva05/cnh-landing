import { motion } from 'framer-motion'
import { Linkedin, FileText, DollarSign, Shield, Eye } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const links = [
    { name: 'Documentação', icon: FileText, href: '#' },
    { name: 'Preços', icon: DollarSign, href: '#' },
    { name: 'Termos de Serviço', icon: Shield, href: '#' },
    { name: 'Política de Privacidade', icon: Eye, href: '#' }
  ]

  return (
    <footer className="bg-slate-900 border-t border-cyan-400/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-sora font-bold text-white mb-2">
                CNH-Flow API
              </h3>
              <p className="text-slate-300 max-w-md">
                A solução mais avançada de OCR para CNH do Brasil. 
                Transforme documentos em dados estruturados com precisão de 99.7%.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-slate-400 text-sm">Siga-nos:</span>
              <a
                href="#"
                className="p-2 bg-cyan-500/10 hover:bg-cyan-500/20 rounded-lg transition-colors duration-300 group"
              >
                <Linkedin className="h-5 w-5 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300" />
              </a>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Recursos</h4>
            <div className="space-y-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <link.icon className="h-4 w-4 mr-2 group-hover:text-purple-400 transition-colors duration-300" />
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="text-slate-300">
                <strong className="text-white">Email:</strong><br />
                contato@cnhflow.com
              </div>
              <div className="text-slate-300">
                <strong className="text-white">Telefone:</strong><br />
                +55 (11) 99999-9999
              </div>
              <div className="text-slate-300">
                <strong className="text-white">Suporte:</strong><br />
                24/7 via chat e email
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          className="mt-12 pt-8 border-t border-cyan-400/20 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            © {currentYear} CNH-Flow. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center space-x-6 text-xs text-slate-400">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
              <span>Sistema operacional</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-3 w-3 mr-1 text-cyan-400" />
              <span>LGPD Compliant</span>
            </div>
            <div className="flex items-center">
              <span className="text-cyan-400 font-mono">API v2.1</span>
            </div>
          </div>
        </motion.div>

        {/* Additional info */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 text-xs max-w-3xl mx-auto">
            A CNH-Flow API utiliza tecnologia de ponta em Inteligência Artificial e Machine Learning 
            para oferecer a mais alta precisão em reconhecimento óptico de caracteres (OCR) 
            especificamente otimizada para Carteiras Nacionais de Habilitação brasileiras.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer