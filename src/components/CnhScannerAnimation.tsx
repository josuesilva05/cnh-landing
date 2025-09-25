import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const sampleJsonData = {
  "nome": "NOME SOCIAL TESTE CENTO E DEZ",
  "primeira_habilitacao": "24/05/2022",
  "data_nascimento": "19/09/1981",
  "uf": "SP",
  "data_emissao": "24/05/2022",
  "validade": "23/05/2023",
  "acc": "",
  "cpf": "07676375851",
  "registro": "00002944662",
  "categoria": "B",
  "nacionalidade": "BRASILEIRO",
  "filiacao": {
    "pai": "PAI DO TESTE HCAB DEZ",
    "mae": "MAE DO TESTE HCAB DEZ"
  },
  "local": "ARICANDUVA - SP",
};

const CnhScannerAnimation = () => {
  const cardControls = useAnimation();
  const scannerControls = useAnimation();
  const overlayControls = useAnimation();

  // A função agora representa um ciclo completo da animação
  const startSequence = async () => {
    // ETAPA 1: Resetar a posição do scanner e do overlay (o card já está virado para frente)
    await scannerControls.start({ y: 0, opacity: 0, transition: { duration: 0 } });
    await overlayControls.start({ opacity: 0, transition: { duration: 0 } });
    
    // Pausa antes de iniciar um novo escaneamento
    await new Promise(resolve => setTimeout(resolve, 1200));

    // ETAPA 2: Animação de escaneamento
    await overlayControls.start({ opacity: 1, transition: { duration: 0.3 } });
    await scannerControls.start({ opacity: 1, transition: { duration: 0.2 } });
    await scannerControls.start({
      y: 730,
      transition: {
        duration: 3.2,
        ease: 'linear'
      }
    });
    await Promise.all([
      scannerControls.start({ opacity: 0, transition: { duration: 0.3 } }),
      overlayControls.start({ opacity: 0, transition: { duration: 0.5 } })
    ]);
    
    // Pausa para "processar"
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // ETAPA 3: Virar o card para mostrar o verso com os dados
    await cardControls.start({
      rotateY: 180,
      transition: {
        duration: 0.8,
        ease: 'easeInOut'
      }
    });

    // <<-- NOVA ETAPA 4: Pausar no verso para visualização dos dados
    await new Promise(resolve => setTimeout(resolve, 4500));

    // <<-- NOVA ETAPA 5: Virar o card de volta para a frente suavemente
    await cardControls.start({
      rotateY: 0, // Pode ser 360 também para um giro contínuo
      transition: {
        duration: 0.8,
        ease: 'easeInOut'
      }
    });
    // O ciclo termina aqui, e o loop no useEffect chamará a função novamente.
  };

  useEffect(() => {
    // <<-- LÓGICA DE LOOP APRIMORADA
    const animationLoop = async () => {
      // O loop infinito garante que uma animação só comece após a outra terminar
      while (true) {
        await startSequence();
      }
    };

    animationLoop();

  }, [cardControls, scannerControls, overlayControls]); // Adicionei as dependências por boa prática

  return (
    <div className="w-full max-w-[518px] mx-auto h-[740px] relative overflow-visible" style={{ perspective: '1200px' }}>
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={cardControls}
        initial={{ rotateY: 0 }} // Garante que o estado inicial é com a frente visível
      >
        {/* ===== FRENTE DO CARD (IMAGEM DA CNH) ===== */}
        <div
          className="absolute w-full h-full rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/20 p-4"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src="https://conteudo.imguol.com.br/c/entretenimento/ae/2022/06/03/nova-cnh-2022-1654284075548_v2_3x4.jpg"
            alt="Frente de uma CNH"
            className="w-full h-full object-cover"
          />
          
          <motion.div
            className="absolute inset-0 bg-black/20 pointer-events-none"
            animate={overlayControls}
            initial={{ opacity: 0 }}
          />
          
          <motion.div
            className="absolute top-4 right-4 flex items-center space-x-2 pointer-events-none z-30"
            animate={overlayControls}
            initial={{ opacity: 0 }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-xs font-mono font-semibold bg-black/70 px-2 py-1 rounded">
              ESCANEANDO...
            </span>
          </motion.div>
        </div>

        {/* ===== VERSO DO CARD (JSON EXTRAÍDO) ===== */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 rounded-xl shadow-2xl shadow-purple-500/20 border border-slate-700"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="mb-4 pb-2 border-b border-slate-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <p className="text-2xl font-bold">Dados identificados</p>
            </div>
          </div>
          
          <div className="w-full flex-1 overflow-auto">
            <pre className="text-base text-blue-400 font-mono whitespace-pre-wrap leading-relaxed">
              <code>{JSON.stringify(sampleJsonData, null, 2)}</code>
            </pre>
          </div>
          
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,136,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,136,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          />
        </div>
      </motion.div>

      {/* ===== LINHA DO SCANNER (FORA DO CARD 3D) ===== */}
      <motion.div
        className="absolute left-0 right-0 pointer-events-none z-50"
        style={{
          height: '14px',
          top: 0
        }}
        animate={scannerControls}
        initial={{ y: -25, opacity: 0 }}
      >
        <div
          className="absolute inset-x-0"
          style={{
            top: '0px',
            height: '4px',
            background: 'linear-gradient(90deg, transparent 0%, #00ff88 15%, #ffffff 50%, #00ff88 85%, transparent 100%)',
            boxShadow: `
              0 0 20px #00ff88,
              0 0 40px #00ff88,
              0 0 60px rgba(0, 255, 136, 0.5),
              0 0 80px rgba(0, 255, 136, 0.3)
            `,
            filter: 'blur(0.5px)',
            borderRadius: '2px'
          }}
        />
        
        <div
          className="absolute inset-x-0"
          style={{
            top: '6px',
            height: '3px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.6) 80%, transparent 100%)',
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
            borderRadius: '1.5px'
          }}
        />
        
        <div
          className="absolute inset-x-0"
          style={{
            top: '11px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent 10%, rgba(0,221,255,0.5) 30%, rgba(0,221,255,0.8) 50%, rgba(0,221,255,0.5) 70%, transparent 90%)',
            boxShadow: '0 0 12px rgba(0, 221, 255, 0.6)',
            borderRadius: '1px'
          }}
        />
      </motion.div>
    </div>
  );
};

export default CnhScannerAnimation;