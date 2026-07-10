import { motion } from 'motion/react';
import { Anchor, Navigation, Shield } from 'lucide-react';

export default function History() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 text-viking-gold">
            <Navigation size={48} />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-viking-blue uppercase mb-2">
            O Legado da <span className="text-viking-gold">Estrela do Francês</span>
          </h2>
          <p className="font-sans text-viking-dark/60 uppercase tracking-[0.2em] font-bold text-xs">
            Um refúgio para quem busca experiências autênticas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-8 font-sans">
            <p className="text-lg text-gray-600 leading-relaxed text-left border-l-4 border-viking-gold pl-6 py-2">
              A história da <strong className="text-viking-blue font-bold">Estrela do Francês</strong> nasce da paixão por receber bem e oferecer um refúgio autêntico na Praia do Francês. Nosso propósito é unir a tranquilidade de uma pousada com a energia vibrante de um hostel.
            </p>

            <div className="space-y-4">
              <h4 className="font-heading text-2xl text-viking-blue uppercase">Nossa Missão</h4>
              <p className="text-gray-500 leading-relaxed text-justify">
                Criar o ponto de encontro perfeito na Praia do Francês. Acreditamos que viajar é sobre criar conexões — seja com o lugar, com as pessoas ou consigo mesmo. A Estrela do Francês é onde você encontra o seu ritmo.
              </p>
            </div>
          </div>

          <div className="space-y-8 font-sans">
            <div className="space-y-4">
              <h4 className="font-heading text-2xl text-viking-blue uppercase">O Refúgio Ideal</h4>
              <p className="text-gray-500 leading-relaxed text-justify">
                Localizada estrategicamente no coração da Praia do Francês, nossa estrutura foi pensada para quem busca custo-benefício, localização privilegiada e uma atmosfera acolhedora.
              </p>
            </div>

            <div className="p-8 bg-white border border-gray-100 shadow-sm rounded-sm">
              <h4 className="font-heading text-xl text-viking-blue uppercase mb-6">O Que Você Encontra</h4>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <Anchor size={20} className="text-viking-gold shrink-0" />
                  <span className="text-gray-600 text-sm">Elementos que remetem à navegação e ao design escandinavo, adaptados ao frescor do nosso litoral.</span>
                </li>
                <li className="flex gap-4">
                  <Shield size={20} className="text-viking-gold shrink-0" />
                  <span className="text-gray-600 text-sm">Um ambiente planejado para quem valoriza a exclusividade, a paz e a conexão com o mar.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
