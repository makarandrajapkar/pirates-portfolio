import { motion } from 'motion/react';
import { Skull, Menu, X, Anchor, Compass, Scroll, Gem } from 'lucide-react';
import { useState } from 'react';

export function PirateNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'The Legend', icon: Skull, href: '#about' },
    { name: 'Treasure', icon: Gem, href: '#skills' },
    { name: 'Voyages', icon: Compass, href: '#projects' },
    { name: 'Parley', icon: Scroll, href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-slate-900/95 to-slate-900/90 backdrop-blur-md border-b-2 border-amber-700/30 shadow-2xl"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Skull className="text-amber-500" size={40} />
            </motion.div>
            <div>
              <h1
                className="text-3xl text-amber-400 leading-none"
                style={{ fontFamily: "'Pirata One', cursive" }}
              >
                RAJAPKAR
              </h1>
              <p className="text-xs text-amber-600 tracking-wider">Digital Buccaneer</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 px-5 py-3 text-amber-100/80 hover:text-amber-300 transition-colors relative"
              >
                {/* Hover background */}
                <div className="absolute inset-0 bg-amber-900/0 group-hover:bg-amber-900/30 transition-colors border-2 border-transparent group-hover:border-amber-700/50"></div>
                
                <item.icon size={18} className="relative z-10 text-amber-600 group-hover:text-amber-400 transition-colors" />
                <span
                  className="relative z-10"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {item.name}
                </span>
              </motion.a>
            ))}

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-800 text-white border-2 border-amber-500 shadow-lg hover:shadow-amber-500/50 transition-all flex items-center gap-2"
            >
              <Anchor size={18} />
              <span style={{ fontFamily: "'Cinzel', serif" }}>Hire Crew</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-amber-400 border-2 border-amber-700/50 hover:bg-amber-900/30 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2 border-t border-amber-700/30">
            {navItems.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                initial={{ x: -50, opacity: 0 }}
                animate={{
                  x: isOpen ? 0 : -50,
                  opacity: isOpen ? 1 : 0
                }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-amber-100/80 hover:text-amber-300 hover:bg-amber-900/30 border-l-4 border-transparent hover:border-amber-500 transition-all"
              >
                <item.icon size={20} className="text-amber-600" />
                <span style={{ fontFamily: "'Cinzel', serif" }}>{item.name}</span>
              </motion.a>
            ))}

            <motion.button
              initial={{ x: -50, opacity: 0 }}
              animate={{
                x: isOpen ? 0 : -50,
                opacity: isOpen ? 1 : 0
              }}
              transition={{ delay: navItems.length * 0.1 }}
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-800 text-white border-2 border-amber-500 shadow-lg flex items-center justify-center gap-2"
            >
              <Anchor size={18} />
              <span style={{ fontFamily: "'Cinzel', serif" }}>Hire Crew</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom decorative border */}
      <div className="h-1 bg-gradient-to-r from-amber-900 via-amber-500 to-amber-900"></div>
    </motion.nav>
  );
}
