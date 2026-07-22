import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const media = [
  { type: 'video', src: 'https://res.cloudinary.com/dky9oxhzt/video/upload/v1784663490/WhatsApp_Video_2026-07-19_at_6.02.04_PM_ahdpre.mp4' },
  { type: 'image', src: 'https://res.cloudinary.com/dky9oxhzt/image/upload/v1784663480/WhatsApp_Image_2026-07-19_at_6.00.57_PM_j3eh9p.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dky9oxhzt/image/upload/v1784663479/WhatsApp_Image_2026-07-19_at_6.02.10_PM_u2rdaf.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dky9oxhzt/image/upload/v1784663478/WhatsApp_Image_2026-07-19_at_6.02.12_PM_br2npm.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dky9oxhzt/image/upload/v1784663478/WhatsApp_Image_2026-07-19_at_6.02.12_PM_1_q7ytbc.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dky9oxhzt/image/upload/v1784663478/WhatsApp_Image_2026-07-19_at_6.02.11_PM_mgwmy3.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dky9oxhzt/image/upload/v1784663478/WhatsApp_Image_2026-07-19_at_6.02.14_PM_1_elkw3d.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dky9oxhzt/image/upload/v1784663478/WhatsApp_Image_2026-07-19_at_6.02.14_PM_zasji6.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dky9oxhzt/image/upload/v1784663478/WhatsApp_Image_2026-07-19_at_6.02.11_PM_1_zycgwu.jpg' },
];

export default function UniqueRoom() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  ]);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-viking-blue uppercase">
            Quarto <span className="text-viking-gold">Único</span>
          </h2>
          <div className="h-[2px] w-24 bg-viking-gold mx-auto mt-4" />
          <p className="mt-6 text-2xl font-bold text-viking-dark">R$ 80,00</p>
          <p className="mt-4 text-lg text-gray-600">Prático e confortável, perfeito para viajantes individuais que buscam um descanso tranquilo.</p>
        </div>

        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-12 cursor-grab" ref={emblaRef}>
          <div className="flex h-full">
            {media.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-full h-full relative">
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={`Quarto Único ${index + 1}`}
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
