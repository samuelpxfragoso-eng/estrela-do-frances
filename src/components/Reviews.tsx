import { motion } from 'motion/react';
import { Star, MessageSquare } from 'lucide-react';

const reviews = [
  {
    name: "Regivana Dias",
    text: "Passei alguns dias em Maceió e me hospedei na pousada, lugar limpo e bem organizado, com excelente atendimento. Recomendo custo e benefício justo.",
    rating: 5,
    date: "Há 2 dias"
  },
  {
    name: "Wellita Farias",
    text: "Tive uma experiência maravilhosa! O quarto era extremamente limpo, confortável e bem tranquilo, A equipe foi super...",
    rating: 5,
    date: "Há 2 dias"
  },
  {
    name: "Paulo Moreira",
    text: "Lugar simples e acolhedor, uma delícia, parabéns",
    rating: 5,
    date: "Há 2 dias"
  },
  {
    name: "AIRTON JÚNIOR",
    text: "Atendimento muito especial,lugar simples porém aconchegante, tudo muito limpo e organizado. Recomendo principalmente pelo baixo custo , parabéns",
    rating: 5,
    date: "Há 2 dias"
  },
  {
    name: "Jose Junior",
    text: "Local aconchegante e receptividade nota mil. Tranquilidade a beira-mar.",
    rating: 5,
    date: "Há 2 dias"
  },
  {
    name: "Sidney Sebastian",
    text: "Pesquisei bastante antes de escolher e encontrei um lugar com ótimo custo-benefício. O ambiente é muito organizado, o...",
    rating: 5,
    date: "Há 2 dias"
  },
  {
    name: "Juliana Padilha",
    text: "Lugar ótimo, muito acessível, limpo e charmoso! Voltaremos com certeza!",
    rating: 5,
    date: "Há 3 dias"
  },
  {
    name: "Marlos Gapski",
    text: "A Estrela do Francês – Hostel & Pousada é uma excelente opção para quem busca simplicidade, conforto e ótimo...",
    rating: 5,
    date: "Há 3 dias"
  },
  {
    name: "Eu Ricardo",
    text: "O ambiente é muito limpo, organizado e acolhedor. A pousada é simples, mas extremamente aconchegante, proporcionando uma...",
    rating: 5,
    date: "Há 3 dias"
  },
  {
    name: "Esparta",
    text: "Minha experiência foi bastante confortável, fui bem recebido e bem atendido, os funcionários trabalham bem, são atenciosos, a localização é bem simples e próxima a praia, e gostei da experiência.",
    rating: 5,
    date: "Há 3 dias"
  },
  {
    name: "Elder Luciano",
    text: "Ambiente com aquela simplicidade, porém muito bem acolhedor! Anfitriões educados e ambiente limpo e organizado! Show de bola!",
    rating: 5,
    date: "Há 3 dias"
  },
  {
    name: "Vanessa K. Lima",
    text: "Amei a receptividade. Local bastante aconchegante, excelente para quem procura um ambiente de tranquilo e próximo a praia. Voltarei com certeza.",
    rating: 5,
    date: "Há 3 dias"
  }
];

export default function Reviews() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 px-4">
          <div className="flex justify-center gap-1 mb-4 select-none">
            <span className="text-[#4285F4] font-black text-3xl">G</span>
            <span className="text-[#EA4335] font-black text-3xl">o</span>
            <span className="text-[#FBBC05] font-black text-3xl">o</span>
            <span className="text-[#4285F4] font-black text-3xl">g</span>
            <span className="text-[#34A853] font-black text-3xl">l</span>
            <span className="text-[#EA4335] font-black text-3xl">e</span>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl text-viking-dark uppercase mb-4 tracking-tighter">
            O QUE DIZEM NOSSOS <span className="text-viking-gold">CONQUISTADORES</span>
          </h2>
          <p className="font-serif text-viking-dark/60 text-lg sm:text-xl italic max-w-2xl mx-auto">
            "A experiência real de quem já navegou por nossas águas."
          </p>
          
          <div className="flex justify-center items-center gap-1 mt-6">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <Star key={i} className="fill-[#FBBC05] text-[#FBBC05]" size={24} />
            ))}
            <span className="ml-2 font-accent font-bold text-viking-dark text-lg select-none">5.0/5</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-visible">
          <motion.div 
            className="flex gap-6 pb-12 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear"
            }}
            whileHover={{ animationPlayState: 'paused' }}
          >
            {/* Double the reviews for absolute infinite loop */}
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="w-[300px] sm:w-[450px] bg-viking-gold/5 border border-viking-gold/20 p-8 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} className="fill-[#FBBC05] text-[#FBBC05]" size={14} />
                    ))}
                  </div>
                  <p className="text-viking-dark/80 font-serif italic text-lg leading-relaxed mb-6">
                    "{review.text}"
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-viking-gold/10 pt-6 mt-auto">
                  <div>
                    <span className="block font-sans font-bold text-viking-dark text-sm uppercase tracking-wider">{review.name}</span>
                    <span className="text-xs text-viking-dark/40 uppercase tracking-widest">{review.date} • Google</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#4285F4] flex items-center justify-center text-white font-bold text-sm shadow-md uppercase">
                    {review.name.charAt(0)}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          {/* Fading edges for aesthetic */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>

        <div className="mt-12 text-center">
            <motion.a
                href="https://g.page/r/CXRfX4p6vMzCEAE/review"
                target="_blank"
                rel="noreferrer"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-viking-dark text-white px-10 py-5 rounded-full font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-viking-gold transition-all shadow-xl group"
            >
                <MessageSquare className="group-hover:rotate-12 transition-transform" size={18} />
                <span>Avaliar no Google com 5 Estrelas</span>
            </motion.a>
            <p className="mt-6 text-[10px] uppercase tracking-widest text-viking-dark/30 font-bold">
               Sua opinião é o nosso maior tesouro
            </p>
        </div>
      </div>
    </section>
  );
}
