import { motion } from 'motion/react';
import { 
  Clock, 
  Coffee, 
  Info
} from 'lucide-react';

export default function GuestGuidelines() {
  const schedules = [
    { label: "Check-in", time: "14h", icon: Clock },
    { label: "Check-out", time: "12h", icon: Clock },
    { label: "Café da Manhã", time: "07:30 às 09:30", icon: Coffee },
  ];

  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
             <div className="w-12 h-12 border border-viking-gold flex items-center justify-center rotate-45">
                <Info className="-rotate-45 text-viking-gold w-5 h-5" />
             </div>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl text-viking-blue uppercase mb-4">
            GUIA DO <span className="text-viking-gold">HÓSPEDE</span>
          </h2>
          <p className="font-sans text-gray-500 italic text-lg">
            Regras simples para uma boa convivência
          </p>
        </div>

        <div className="flex justify-center">
          
          {/* Schedules Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-viking-blue p-8 sm:p-12 shadow-xl relative overflow-hidden w-full max-w-2xl"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 text-white">
              <Clock size={120} />
            </div>
            
            <h3 className="font-heading text-3xl text-white uppercase mb-8 border-b border-white/20 pb-4">
              🕒 Horários
            </h3>
            
            <div className="space-y-8">
              {schedules.map((item, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center">
                    <item.icon className="text-viking-gold" size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold mb-1">{item.label}</span>
                    <span className="text-white font-heading text-2xl">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
