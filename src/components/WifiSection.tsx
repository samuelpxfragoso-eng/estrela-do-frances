import { motion } from 'motion/react';
import { Wifi } from 'lucide-react';

export default function WifiSection() {
  return (
    <section id="wifi" className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-viking-blue uppercase mb-4">
            WI-FI <span className="text-viking-gold">GRÁTIS</span>
          </h2>
          <p className="font-sans text-gray-500 max-w-2xl mx-auto text-lg">
            Fique conectado em nossas áreas comuns. O acesso é liberado para todos os nossos hóspedes curtirem e compartilharem seus momentos!
          </p>
        </div>
        
        <div className="mt-12 text-center text-gray-400 text-sm italic">
          * Disponível nas áreas compartilhadas (jardim e piscina)
        </div>
      </div>
    </section>
  );
}
