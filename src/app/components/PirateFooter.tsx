import { motion } from 'motion/react';
import { Skull, Anchor, Ship, Gem, Github, Linkedin, Twitter } from 'lucide-react';
import woodenPlanks from '@/assets/images/wooden-planks.jpg';

export function PirateFooter() {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-black py-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: `url(${woodenPlanks})` }}
        ></div>
      </div>

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0] }}
              className="flex items-center gap-3 mb-4"
            >
              <Skull className="text-amber-500" size={40} />
              <h3
                className="text-3xl text-amber-400"
                style={{ fontFamily: "'Pirata One', cursive" }}
              >
                CAPTAIN'S MARK
              </h3>
            </motion.div>
            <p className="text-amber-100/70 leading-relaxed">
              Charting digital waters since the dawn of code. 
              Every line written is a step towards legendary treasures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-2xl text-amber-400 mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              {['About the Captain', 'Treasure Hoard', 'Voyages', 'Send Message'].map((item, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="text-amber-100/70 hover:text-amber-300 cursor-pointer transition-colors flex items-center gap-2"
                >
                  <Anchor size={16} className="text-amber-600" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4
              className="text-2xl text-amber-400 mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Signal Flags
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-amber-900/40 border-2 border-amber-700/60 flex items-center justify-center text-amber-400 hover:bg-amber-800/60 hover:border-amber-500 transition-all shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-amber-950/30 border-l-4 border-amber-700">
              <p className="text-amber-300/90 text-sm italic">
                "Not all treasure is silver and gold, mate."
              </p>
            </div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent"></div>
          <Ship className="text-amber-600" size={32} />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent"></div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-amber-100/60">
          <p className="text-sm">
            © 2026 Makarand Rajapkar. All treasures reserved.
          </p>
          
          <div className="flex items-center gap-2">
            <Gem size={16} className="text-amber-600" />
            <p className="text-sm">
              Crafted with rum and code
            </p>
            <Gem size={16} className="text-amber-600" />
          </div>
        </div>

        {/* Floating decorations */}
        <motion.div
          className="absolute bottom-4 left-10 text-amber-900/20"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Anchor size={60} />
        </motion.div>

        <motion.div
          className="absolute top-10 right-10 text-amber-900/20"
          animate={{ 
            rotate: 360
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <Ship size={50} />
        </motion.div>
      </div>
    </footer>
  );
}
