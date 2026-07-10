import { motion } from 'motion/react';
import { Calendar, User2, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="início" className="relative pt-[128px] sm:pt-[160px]">
      {/* Main Hero Image */}
      <div className="relative h-[500px] sm:h-[800px] overflow-hidden group">
        <img
          src="https://res.cloudinary.com/dky9oxhzt/image/upload/v1783205316/WhatsApp_Image_2026-07-04_at_7.47.39_PM_yt5tyc.jpg"
          alt="Pousada Estrela do Francês"
          className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        {/* Animated Shine Effect */}
        <motion.div
           animate={{ 
             left: ['-100%', '200%'],
             opacity: [0, 0.4, 0]
           }}
           transition={{ 
             duration: 3, 
             repeat: Infinity, 
             repeatDelay: 5,
             ease: "linear" 
           }}
           className="absolute top-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Booking Bar Removed per request */}
      <div className="max-w-7xl mx-auto px-4 -mt-12 sm:-mt-16 relative z-10 flex justify-center">
        {/* Button removed */}
      </div>

      {/* Intro Text Section */}
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="space-y-8"
        >
          <div className="space-y-2">
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-viking-blue tracking-tighter">
              A sua constelação de momentos inesquecíveis.
            </h1>
            <h2 className="font-display text-2xl font-bold text-viking-gold tracking-tight">
              A sua pousada e hostel na Praia do Francês.
            </h2>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              O equilíbrio perfeito entre o conforto de uma pousada e a vibe conectada de um hostel. Viva a Praia do Francês com o melhor custo-benefício, cercado por alta gastronomia, comércio vibrante e a poucos passos de um mar paradisíaco.
            </p>
            <p>
              Na <strong>Estrela do Francês</strong>, criamos um refúgio para quem quer vivenciar Alagoas por inteiro. Seja para relaxar no seu próprio espaço ou para conectar-se com viajantes do mundo todo, nossa estrutura foi desenhada para ser o seu ponto de partida.
            </p>
          </div>
        
        </motion.div>
      </div>
    </section>
  );
}
