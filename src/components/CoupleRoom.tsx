import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const images = [
  "https://res.cloudinary.com/dky9oxhzt/image/upload/v1783645339/WhatsApp_Image_2026-07-09_at_6.18.51_PM_3_jujmlh.jpg",
  "https://res.cloudinary.com/dky9oxhzt/image/upload/v1783644734/WhatsApp_Image_2026-07-09_at_6.18.51_PM_2_ek3dmy.jpg",
  "https://res.cloudinary.com/dky9oxhzt/image/upload/v1783645339/WhatsApp_Image_2026-07-09_at_6.18.52_PM_3_tkgf0e.jpg",
  "https://res.cloudinary.com/dky9oxhzt/image/upload/v1783644733/WhatsApp_Image_2026-07-09_at_6.18.52_PM_2_b554sy.jpg",
  "https://res.cloudinary.com/dky9oxhzt/image/upload/v1783644733/WhatsApp_Image_2026-07-09_at_6.18.52_PM_f8ej5f.jpg"
];

export default function CoupleRoom() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-viking-blue uppercase">
            Quarto de <span className="text-viking-gold">Casal</span>
          </h2>
          <div className="h-[2px] w-24 bg-viking-gold mx-auto mt-4" />
          <p className="mt-6 text-2xl font-bold text-viking-dark">R$ 140,00</p>
        </div>

        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-12">
          <AnimatePresence mode='wait'>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Quarto de Casal ${currentIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
        </div>

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
