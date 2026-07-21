import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const videoSrc = "https://res.cloudinary.com/dky9oxhzt/video/upload/v1784668971/WhatsApp_Video_2026-07-21_at_6.22.12_PM_j9calx.mp4";

export default function InstagramFeed() {
  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8 text-center md:text-left">
          <div>
            <span className="text-viking-gold font-sans text-xs uppercase tracking-[0.3em] font-bold block mb-2">Explore nossa Rotina</span>
            <h2 className="font-heading text-4xl md:text-5xl text-viking-blue uppercase">
              EXPERIÊNCIA <span className="text-viking-gold">INSTAGRAM</span>
            </h2>
          </div>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.instagram.com/estreladofrancess?igsh=ZWU0YWd0c3BnZmdw&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-viking-blue text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-viking-gold transition-all shadow-md"
          >
            <Instagram size={20} />
            <span>Seguir no Instagram</span>
          </motion.a>
        </div>

        <div className="relative">
          <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <video
              src={videoSrc}
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
