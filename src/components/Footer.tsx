import { Anchor, Instagram, Facebook, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center px-6 sm:px-12 py-8 bg-viking-black text-[10px] font-sans uppercase tracking-[0.2em] text-white/40 z-10 border-t border-viking-gold/20">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-4 md:mb-0">
        <div className="flex items-center gap-4">
           {/* Footer Logo */}
           <motion.div 
             className="relative w-12 h-12 rounded-full cursor-pointer flex items-center justify-center"
             whileHover={{ scale: 1.1, rotate: -5 }}
             whileTap={{ scale: 0.95 }}
           >
             {/* Glow overlay */}
             <div className="absolute -inset-0.5 rounded-full bg-viking-gold opacity-30 blur-[1px] animate-pulse" />
             <div className="relative w-12 h-12 border border-viking-gold/40 rounded-full overflow-hidden bg-white z-10">
               <img
                 src="https://res.cloudinary.com/dky9oxhzt/image/upload/v1783204618/WhatsApp_Image_2026-06-02_at_5.04.19_PM_1_uwli8b.jpg"
                 alt="Estrela do Francês Footer Logo"
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
             </div>
           </motion.div>
           <div className="flex flex-col">
             <div className="flex items-center gap-2">
               <div className="w-2 h-2 bg-viking-gold rotate-45" />
               <span>📍 Loteamento Sonho Verde do Francês, quadra E, Sítio Campo. Marechal Deodoro – AL</span>
             </div>
             <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <Phone size={10} className="text-viking-gold" />
                  <span>(82) 98812 8379</span>
                </div>
                <a href="https://www.instagram.com/pousada.blue.viking?igsh=ajY5bHZjZTN1cnhq" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-viking-gold transition-colors">
                  <Instagram size={10} className="text-viking-gold" />
                  <span>@estreladofrances</span>
                </a>
              </div>
           </div>
        </div>
      </div>
      <div className="flex gap-8">
        <span className="hover:text-viking-gold transition-colors cursor-default">Check-in: 14h</span>
        <span className="hover:text-viking-gold transition-colors cursor-default">Check-out: 12h</span>
      </div>
      <div className="mt-4 md:mt-0 opacity-50">
         © {new Date().getFullYear()} Estrela do Francês
      </div>
    </footer>
  );
}
