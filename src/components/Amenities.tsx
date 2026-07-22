import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const media = [
  { type: 'image', src: 'https://res.cloudinary.com/dky9oxhzt/image/upload/v1784667977/WhatsApp_Image_2026-07-21_at_5.59.51_PM_gjpsry.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dky9oxhzt/image/upload/v1784667977/WhatsApp_Image_2026-07-21_at_5.59.51_PM_1_gfqej0.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dky9oxhzt/image/upload/v1784667966/WhatsApp_Image_2026-07-21_at_5.59.52_PM_cnqupc.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dky9oxhzt/image/upload/v1784667965/WhatsApp_Image_2026-07-21_at_5.59.52_PM_1_vajo0w.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dky9oxhzt/image/upload/v1784667965/WhatsApp_Image_2026-07-21_at_5.59.53_PM_gjylhw.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dky9oxhzt/image/upload/v1784667965/WhatsApp_Image_2026-07-21_at_5.59.52_PM_2_rcvsxr.jpg' },
  { type: 'video', src: 'https://res.cloudinary.com/dky9oxhzt/video/upload/v1784663482/WhatsApp_Video_2026-07-19_at_6.00.59_PM_jaubqz.mp4' },
  { type: 'image', src: 'https://res.cloudinary.com/dky9oxhzt/image/upload/v1784663479/WhatsApp_Image_2026-07-19_at_6.01.16_PM_i2fv0z.jpg' },
  { type: 'video', src: 'https://res.cloudinary.com/dky9oxhzt/video/upload/v1784663490/WhatsApp_Video_2026-07-19_at_6.01.06_PM_sxcnkd.mp4' },
  { type: 'image', src: 'https://res.cloudinary.com/dky9oxhzt/image/upload/v1784663480/WhatsApp_Image_2026-07-19_at_6.00.57_PM_j3eh9p.jpg' },
  { type: 'video', src: 'https://res.cloudinary.com/dky9oxhzt/video/upload/v1784663490/WhatsApp_Video_2026-07-19_at_6.02.04_PM_ahdpre.mp4' },
  { type: 'video', src: 'https://res.cloudinary.com/dky9oxhzt/video/upload/v1784663482/WhatsApp_Video_2026-07-19_at_6.00.59_PM_jaubqz.mp4' },
];

export default function Amenities() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  ]);

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
          
          <div className="overflow-hidden cursor-grab" ref={emblaRef}>
            <div className="flex gap-4">
              {media.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-80 h-96 rounded-lg overflow-hidden shadow-2xl">
                  {item.type === 'image' ? (
                    <img
                      src={item.src}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      alt={`Estrutura ${index + 1}`}
                    />
                  ) : (
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
