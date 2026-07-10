import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('INÍCIO');

  const menuItems = [
    { name: 'INÍCIO', href: '#início' },
    { name: 'SERVIÇOS', href: '#estrutura' },
    { name: 'CONTATO', href: 'https://wa.me/5582988128379' }
  ];

  return (
    <div className="fixed w-full z-50 bg-white shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 sm:h-32 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.08, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {/* Spinning glowing gradient background effect */}
            <motion.div 
              className="absolute -inset-1 rounded-full bg-gradient-to-tr from-viking-gold/80 via-viking-blue/50 to-viking-gold/80 opacity-75 blur-[2px]"
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
            {/* Highlight overlay border */}
            <div className="absolute inset-0 rounded-full border border-white/40 z-20 pointer-events-none" />
            <img
              src="https://res.cloudinary.com/dky9oxhzt/image/upload/v1783204618/WhatsApp_Image_2026-06-02_at_5.04.19_PM_1_uwli8b.jpg"
              alt="Estrela do Francês Logo"
              className="relative w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full border border-viking-gold/30 shadow-lg bg-white z-10"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="flex flex-col -space-y-1">
            <span className="font-display text-2xl sm:text-3xl font-extrabold text-viking-blue tracking-tighter">Estrela do Francês</span>
            <span className="font-display text-xs sm:text-sm tracking-[0.2em] text-viking-gold font-bold uppercase">Pousada & Hostel</span>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex h-full items-stretch">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveItem(item.name)}
              className={`flex items-center px-6 transition-all font-display font-bold text-sm tracking-widest ${
                activeItem === item.name 
                  ? 'bg-viking-blue text-white' 
                  : 'text-viking-gold hover:bg-gray-50'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-viking-blue p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
        >
          <div className="flex flex-col p-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setIsOpen(false);
                  setActiveItem(item.name);
                }}
                className={`py-4 px-6 rounded-sm font-display font-bold text-sm tracking-widest ${
                  activeItem === item.name 
                    ? 'bg-viking-blue text-white' 
                    : 'text-viking-gold hover:bg-gray-50'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
