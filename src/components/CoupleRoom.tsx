import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const media = [
  { type: 'video', src: 'https://res.cloudinary.com/dky9oxhzt/video/upload/v1784663490/WhatsApp_Video_2026-07-19_at_6.01.06_PM_sxcnkd.mp4' },
  { type: 'image', src: 'https://res.cloudinary.com/dky9oxhzt/image/upload/v1784663480/WhatsApp_Image_2026-07-19_at_6.01.14_PM_gau0eh.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dky9oxhzt/image/upload/v1784663479/WhatsApp_Image_2026-07-19_at_6.01.16_PM_i2fv0z.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dky9oxhzt/image/upload/v1784663479/WhatsApp_Image_2026-07-19_at_6.01.19_PM_2_umbtoa.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dky9oxhzt/image/upload/v1784663479/WhatsApp_Image_2026-07-19_at_6.01.19_PM_vaksrz.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dky9oxhzt/image/upload/v1784663479/WhatsApp_Image_2026-07-19_at_6.01.19_PM_1_kpnhi1.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dky9oxhzt/image/upload/v1784663478/WhatsApp_Image_2026-07-19_at_6.02.11_PM_mgwmy3.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dky9oxhzt/image/upload/v1784663478/WhatsApp_Image_2026-07-19_at_6.02.11_PM_1_zycgwu.jpg' },
];

export default function CoupleRoom() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  ]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-viking-blue uppercase">
            Quarto de <span className="text-viking-gold">Casal</span>
          </h2>
          <div className="h-[2px] w-24 bg-viking-gold mx-auto mt-4" />
          <p className="mt-6 text-2xl font-bold text-viking-dark">R$ 140,00</p>
          <p className="mt-4 text-lg text-gray-600">Aconchegante, ideal para casais, com cama confortável e ambiente tranquilo para relaxar.</p>
        </div>

        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-12 cursor-grab" ref={emblaRef}>
          <div className="flex h-full">
            {media.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-full h-full relative">
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={`Quarto de Casal ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="absolute inset-0 w-full h-full object-cover"
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
        <p className="text-center text-sm text-gray-500 mb-8">* Café da manhã regional disponível por mais R$ 20,00.</p>

        <div className="text-center">
          <a
            href="https://wa.me/5544999274647?text=Olá!%20Como%20faço%20para%20me%20hospedar%20na%20pousada%3F"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-viking-blue text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-viking-gold transition-colors"
          >
            Reservar Agora
          </a>
        </div>
      </div>
    </section>
  );
}
