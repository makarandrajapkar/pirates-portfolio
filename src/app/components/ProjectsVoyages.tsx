import { motion } from 'motion/react';
import { Telescope, ExternalLink, Anchor } from 'lucide-react';
import pirateShip from '@/assets/images/pirate-ship.jpg';
import compass from '@/assets/images/compass.jpg';
import oceanStorm from '@/assets/images/ocean-storm.jpg';

const voyages = [
  {
    name: "The Black Pearl",
    subtitle: "E-Commerce Armada",
    description: "A legendary marketplace that sails through millions of transactions. Built with React cannons and Node.js sails, defended by MongoDB treasure vaults.",
    image: pirateShip,
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    name: "The Flying Dutchman",
    subtitle: "Phantom Analytics",
    description: "A ghostly dashboard that reveals the secrets of data oceans. Powered by Next.js winds and PostgreSQL depths, charting real-time insights.",
    image: compass,
    tags: ["Next.js", "PostgreSQL", "D3.js"]
  },
  {
    name: "Port Royal",
    subtitle: "Social Harbor",
    description: "Where digital pirates gather! A bustling social platform built with Vue.js rigging and GraphQL navigation, hosting thousands of crew members.",
    image: oceanStorm,
    tags: ["Vue.js", "GraphQL", "Redis"]
  }
];

export function ProjectsVoyages() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-amber-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background waves */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="waves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q 25 30, 50 50 T 100 50" fill="none" stroke="#f59e0b" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <Telescope className="text-amber-500" size={60} />
          </motion.div>

          <h2
            className="text-5xl md:text-7xl text-amber-400 mb-4"
            style={{ fontFamily: "'Pirata One', cursive" }}
          >
            LEGENDARY VOYAGES
          </h2>
          <p
            className="text-xl text-amber-200/80 max-w-2xl mx-auto"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Chronicles of conquered seas and plundered treasures
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16 max-w-6xl mx-auto">
          {voyages.map((voyage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center group`}
            >
              {/* Image */}
              <div className="flex-1 relative">
                <div className="relative overflow-hidden border-4 border-amber-700/60 shadow-2xl">
                  {/* Decorative corners */}
                  <div className="absolute -top-2 -left-2 w-16 h-16 border-t-4 border-l-4 border-amber-500 z-10"></div>
                  <div className="absolute -top-2 -right-2 w-16 h-16 border-t-4 border-r-4 border-amber-500 z-10"></div>
                  <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-4 border-l-4 border-amber-500 z-10"></div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-4 border-r-4 border-amber-500 z-10"></div>

                  <img
                    src={voyage.image}
                    alt={voyage.name}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-700 sepia-[0.2]"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>

                  {/* Floating anchor */}
                  <motion.div
                    className="absolute bottom-4 right-4 text-amber-500"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 10, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Anchor size={40} className="drop-shadow-lg" />
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="bg-gradient-to-br from-amber-950/80 to-slate-900/80 p-8 border-2 border-amber-700/40 shadow-2xl backdrop-blur-sm">
                  <motion.h3
                    className="text-4xl md:text-5xl text-amber-400 mb-2"
                    style={{ fontFamily: "'Pirata One', cursive" }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {voyage.name}
                  </motion.h3>

                  <p
                    className="text-xl text-amber-300/80 mb-4"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {voyage.subtitle}
                  </p>

                  <div className="h-px w-full bg-gradient-to-r from-amber-500 via-amber-700 to-transparent mb-6"></div>

                  <p className="text-lg text-amber-100/90 leading-relaxed mb-6">
                    {voyage.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {voyage.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-amber-900/50 border border-amber-600/50 text-amber-300 text-sm backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group/btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-800 text-white border-2 border-amber-500 shadow-lg hover:shadow-amber-500/50 transition-all"
                  >
                    <span style={{ fontFamily: "'Cinzel', serif" }}>Set Sail</span>
                    <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p
            className="text-2xl text-amber-300 mb-6"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            More treasures await in the archives...
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-8 py-4 bg-transparent border-2 border-amber-500 text-amber-300 text-lg hover:bg-amber-500/20 transition-all shadow-lg"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            View All Conquests
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
