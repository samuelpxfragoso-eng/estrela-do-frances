import { motion } from 'motion/react';

export default function Amenities() {
  return (
    <section className="bg-white py-32 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pool Section */}
        <div id="oásis" className="grid lg:grid-cols-2 gap-24 items-center mb-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <span className="text-viking-gold font-sans text-xs uppercase tracking-[0.3em] font-bold block mb-4">Lazer e Conforto</span>
              <h2 className="font-heading text-5xl md:text-7xl text-viking-blue uppercase leading-[0.85]">
                NOSSA <span className="text-viking-gold">ESTRUTURA</span>
              </h2>
            </div>
            <div className="h-[2px] w-24 bg-viking-gold" />
            <p className="font-sans text-lg text-gray-500 leading-relaxed">
              Descubra um ambiente pensado para o seu descanso e diversão. Cada espaço foi desenhado para proporcionar o melhor da Praia do Francês.
            </p>
            <div className="grid grid-cols-2 gap-12 pt-6">
              <div className="space-y-2">
                <span className="block font-sans text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Privacidade</span>
                <span className="text-viking-blue text-xl font-heading uppercase">Uso reservado</span>
              </div>
              <div className="space-y-2">
                <span className="block font-sans text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Estado de Espírito</span>
                <span className="text-viking-blue text-xl font-heading uppercase">Paz absoluta</span>
              </div>
            </div>
          </motion.div>
          
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <video
              src="https://res.cloudinary.com/dky9oxhzt/video/upload/v1783634190/WhatsApp_Video_2026-07-09_at_6.53.06_PM_qa3nvf.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

      </div>
    </section>
  );
}
