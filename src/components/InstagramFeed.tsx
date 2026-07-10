import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Instagram } from 'lucide-react';

const instagramReels = [
  "https://www.instagram.com/reel/DaFsRw-R5uh/",
  "https://www.instagram.com/reel/DaF1Y-4Aj0G/",
  "https://www.instagram.com/reel/DR0W0CQEYzR/"
];

function ReelSlide({ url }: { url: string; key?: React.Key }) {
  // Extract ID from URL for embed
  const reelId = url.split('/reel/')[1].split('/')[0];
  const embedUrl = `https://www.instagram.com/reel/${reelId}/embed`;

  return (
    <div className="flex-[0_0_80%] sm:flex-[0_0_40%] md:flex-[0_0_30%] lg:flex-[0_0_22%] min-w-0 mr-4 relative rounded-xl overflow-hidden shadow-2xl border border-viking-gold/20 aspect-[9/16] bg-black group">
      <iframe
        src={`${embedUrl}/?muted=1`}
        className="w-full h-full"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Instagram Reel"
      />
      <div className="absolute top-4 left-4 z-20 text-white/50 group-hover:text-viking-gold transition-colors">
        <Instagram size={20} />
      </div>
    </div>
  );
}

export default function InstagramFeed() {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true, 
    dragFree: true,
    align: 'start'
  }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);

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
            href="https://www.instagram.com/pousada.blue.viking?igsh=ajY5bHZjZTN1cnhq"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-viking-blue text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-viking-gold transition-all shadow-md"
          >
            <Instagram size={20} />
            <span>Seguir no Instagram</span>
          </motion.a>
        </div>

        <div className="relative">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex">
              {instagramReels.map((url, index) => (
                <ReelSlide key={index} url={url} />
              ))}
            </div>
          </div>
          
          <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>

      </div>
    </section>
  );
}
