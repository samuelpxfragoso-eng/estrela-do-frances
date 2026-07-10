import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Info } from 'lucide-react';


const faqs = [
  {
    question: "A Estrela do Francês é uma pousada ou um hostel?",
    answer: "Somos os dois! Temos uma estrutura híbrida que separa perfeitamente a ala das suítes privativas (para quem quer sossego) da ala dos quartos compartilhados (para quem busca a vibe e o preço de hostel). Você escolhe como quer viver o Francês."
  },
  {
    question: "A localização é segura e movimentada?",
    answer: "Sim! Estamos em uma das áreas mais nobres e movimentadas da Praia do Francês, cercados por comércio, ótimos restaurantes e iluminação, ideal para caminhar e curtir o bairro de dia ou de noite."
  },
  {
    question: "O que tem para fazer perto da hospedagem?",
    answer: "Além da praia (famosa pelo surf e pelas piscinas naturais), você estará a poucos minutos de polos gastronômicos, lojas de surf, bares com música ao vivo e passeios turísticos locais."
  },
  {
    question: "Como funciona o Café da Manhã?",
    answer: "Servimos um delicioso café da manhã com o melhor da culinária regional, perfeito para energizar seu dia de praia."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white border-t border-viking-gold/30 text-viking-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
             <div className="w-12 h-12 border border-viking-gold flex items-center justify-center rotate-45">
                <Info className="-rotate-45 text-viking-gold w-5 h-5" />
             </div>
          </div>
          <h2 className="font-heading text-5xl md:text-7xl text-viking-dark uppercase drop-shadow-sm mb-4">
            PERGUNTAS <span className="text-viking-gold">FREQUENTES</span>
          </h2>
          <p className="font-serif text-viking-dark/50 italic text-xl">
            "Tudo o que você precisa saber para sua estadia."
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-viking-gold/20 bg-viking-gold/5 rounded-none overflow-hidden hover:border-viking-gold transition-colors duration-500"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-8 text-left flex justify-between items-center group"
              >
                <span className="font-heading text-xl text-viking-dark group-hover:text-viking-gold transition-colors uppercase tracking-tight">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-viking-gold transition-transform duration-500 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                  >
                    <div className="px-8 pb-8 text-viking-dark/60 font-serif text-lg italic leading-relaxed border-t border-viking-gold/10 pt-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-20 border border-viking-gold/20 bg-viking-gold/5 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-heading text-3xl text-viking-gold uppercase mb-6 tracking-tight">
                LOCALIZAÇÃO <span className="text-viking-dark">ESTRATÉGICA</span>
              </h3>
              
              <div className="space-y-6 text-viking-dark/70 font-serif italic text-lg leading-relaxed">
                <p>
                  📍 <span className="text-viking-dark not-italic font-sans font-bold text-sm tracking-widest uppercase">Endereço:</span><br/>
                  Loteamento Sonho Verde do Francês, quadra E, Sítio Campo (Referência: Esquina do Ponto Frio),<br/>
                  Marechal Deodoro – AL, Brasil
                </p>
                
                <ul className="space-y-3 border-t border-viking-gold/10 pt-6">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-viking-gold rotate-45 shrink-0" />
                    <span>750 metros da praia (10 min andando)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-viking-gold rotate-45 shrink-0" />
                    <span>20 km do centro de Maceió</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-viking-gold rotate-45 shrink-0" />
                    <span>40 km do Aeroporto Zumbi dos Palmares</span>
                  </li>
                </ul>

                <p className="border-t border-viking-gold/10 pt-6 text-sm font-sans not-italic uppercase tracking-wider opacity-60">
                  🧭 Bairro tranquilo com acesso fácil a pé a restaurantes, mercados e o centrinho vibrante do Francês.
                </p>
              </div>
            </div>

            <div id="map-container" className="aspect-square md:aspect-auto w-full transition-all duration-700 overflow-hidden border-l border-viking-gold/20 relative group">
              <a href="https://www.google.com/travel/search?q=estrela%20do%20frances%20pousada&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C73064764%2C121738282%2C121762713%2C121773895&hl=pt-BR&gl=br&cs=1&ssta=1&ts=CAESCgoCCAMKAggDEAAaHBIaEhQKBwjqDxAIGAoSBwjqDxAIGAsYATICEAAqBwoFOgNCUkw&qs=CAEyFENnc0k5TDc5MHFpUHItYkNBUkFCOAhCCRG0gOpATtUgs0IJEYI9kgBfVe_K&ap=KigKEgkP8qgg24sjwBGhP34K1-1BwBISCdLzg5qfhCPAEaE_fjbZ7EHAugEIb3ZlcnZpZXc&ictx=111&ved=0CAAQ5JsGahcKEwjQxJa978aVAxUAAAAAHQAAAAAQBw" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <img
                  src="https://res.cloudinary.com/dky9oxhzt/image/upload/v1783644078/Captura_de_tela_2026-07-09_214014_moqbjt.png"
                  alt="Localização da Pousada"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Animated Shine Effect */}
                <motion.div
                   animate={{ 
                     left: ['-100%', '200%'],
                     opacity: [0, 0.4, 0]
                   }}
                   transition={{ 
                     duration: 2.5, 
                     repeat: Infinity, 
                     repeatDelay: 4,
                     ease: "linear" 
                   }}
                   className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 pointer-events-none"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
