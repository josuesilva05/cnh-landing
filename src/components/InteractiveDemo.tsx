import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Upload, CheckCircle, FileImage, Loader2 } from 'lucide-react'

const InteractiveDemo = () => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [dragOver, setDragOver] = useState(false)

  const mockResult = {
    "nome": "JOÃO SILVA SANTOS",
    "numero_cnh": "12345678901",
    "categoria": "AB",
    "data_nascimento": "15/03/1985",
    "data_primeira_habilitacao": "20/05/2010",
    "data_validade": "20/05/2025",
    "numero_registro": "123456789",
    "espelho": false,
    "via": "1ª VIA",
    "observacoes": "NENHUMA",
    "local_nascimento": "SÃO PAULO/SP",
    "nome_pai": "ANTONIO SANTOS",
    "nome_mae": "MARIA SILVA SANTOS",
    "documento_origem": "RG 12.345.678-9 SSP/SP",
    "data_emissao": "20/05/2020",
    "validade_exame_medico": "20/05/2025",
    "codigo_situacao": "REGULAR"
  }

  const handleDemo = async () => {
    setIsProcessing(true)
    setShowResult(false)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsProcessing(false)
    setShowResult(true)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    handleDemo()
  }

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-hero-harmony-soft" />
      <div className="absolute inset-0 bg-gradient-to-bl from-cyan-400/15 via-transparent to-purple-500/15 opacity-60 pointer-events-none" />

      <div className="relative container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-sora font-bold text-white mb-6">
            Veja a Mágica Acontecer.{' '}
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Sem Compromisso.</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Teste nossa API agora mesmo. Faça upload de uma CNH e veja os dados estruturados 
            em tempo real.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          {/* Upload Area */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-sora font-semibold text-white mb-4">
              1. Upload da CNH
            </h3>
            
            <div
              className={`surface-card border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                dragOver 
                  ? 'border-cyan-400 bg-cyan-400/10' 
                  : 'border-cyan-400/40 hover:border-cyan-400/60'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <FileImage className="mx-auto h-12 w-12 text-cyan-400 mb-4" />
              <p className="text-white font-medium mb-2">
                Arraste uma imagem da CNH aqui
              </p>
              <p className="text-slate-300 text-sm mb-4">
                ou clique para fazer upload
              </p>
              <Button 
                onClick={handleDemo}
                className="bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-500 hover:from-cyan-500 hover:via-sky-600 hover:to-purple-600 text-white shadow-lg shadow-cyan-500/30"
                disabled={isProcessing}
              >
                <Upload className="mr-2 h-4 w-4" />
                Escolher Arquivo
              </Button>
            </div>

            <div className="surface-card-light rounded-xl p-4 border border-cyan-400/20 shadow-lg shadow-cyan-500/10">
              <h4 className="text-white font-medium mb-2">Ou teste com exemplo:</h4>
              <Button 
                variant="outline" 
                onClick={handleDemo}
                disabled={isProcessing}
                className="w-full border-cyan-400/40 text-cyan-300 hover:bg-cyan-400 hover:text-slate-900"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processando...
                  </>
                ) : (
                  <>
                    <FileImage className="mr-2 h-4 w-4" />
                    Usar CNH de Exemplo
                  </>
                )}
              </Button>
            </div>
          </motion.div>

          {/* Result Area */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-sora font-semibold text-white mb-4">
              2. Dados Extraídos (JSON)
            </h3>
            
            <div className="surface-card-light rounded-xl p-6 h-96 overflow-auto border border-cyan-400/30 shadow-2xl shadow-cyan-500/10">
              <AnimatePresence mode="wait">
                {!isProcessing && !showResult && (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center h-full text-slate-400"
                  >
                    <div className="text-center">
                      <FileImage className="mx-auto h-12 w-12 mb-4 opacity-50" />
                      <p>Os dados extraídos aparecerão aqui...</p>
                    </div>
                  </motion.div>
                )}

                {isProcessing && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center h-full"
                  >
                    <div className="text-center">
                      <Loader2 className="mx-auto h-12 w-12 text-cyan-400 animate-spin mb-4" />
                      <p className="text-cyan-400 font-medium">Processando com IA...</p>
                      <p className="text-slate-200 text-sm mt-2">Extraindo dados da CNH</p>
                    </div>
                  </motion.div>
                )}

                {showResult && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center mb-4">
                      <CheckCircle className="h-5 w-5 text-purple-300 mr-2" />
                      <span className="text-purple-300 font-medium">Processamento concluído!</span>
                    </div>
                    <pre className="text-sm text-white overflow-auto">
                      <code>{JSON.stringify(mockResult, null, 2)}</code>
                    </pre>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="surface-card rounded-lg p-4 border border-purple-500/30 shadow-lg shadow-purple-500/20"
              >
                <div className="flex items-center text-purple-300 mb-2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span className="font-medium text-sm">Processamento bem-sucedido</span>
                </div>
                <p className="text-slate-200 text-sm">
                  Tempo de resposta: 347ms • Confiança: 99.8%
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveDemo