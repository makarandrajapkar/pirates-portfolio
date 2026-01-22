import { Anchor, Skull, Compass, Scroll } from 'lucide-react';
import { motion } from 'motion/react';
import oceanStorm from '@/assets/images/ocean-storm.jpg';
import pirateShip from '@/assets/images/pirate-ship.jpg';

export function PirateHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-amber-950 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${oceanStorm})` }}
        ></div>
      </div>

      {/* Floating decorative icons */}
      <motion.div
        className="absolute top-20 left-10 text-amber-500/30"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Anchor size={64} />
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-20 text-amber-500/30"
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Compass size={72} />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-10 text-red-900/30"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Skull size={56} />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Decorative top border */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
            <Scroll className="text-amber-500" size={32} />
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
          </div>

          {/* Main title */}
          <motion.h1
            className="mb-6 text-7xl md:text-9xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-500 to-amber-900"
            style={{ fontFamily: "'Pirata One', cursive" }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            CAPTAIN'S LOG
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-2xl md:text-4xl mb-8 text-amber-300/90"
            style={{ fontFamily: "'Cinzel', serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Makarand Rajapkar
          </motion.p>

          {/* Description */}
          <motion.p
            className="max-w-3xl mx-auto text-xl md:text-2xl mb-12 text-amber-100/80 leading-relaxed"
            style={{ fontFamily: "'Cinzel', serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Sailing the Seven Seas of Code & Design. 
            A Digital Buccaneer charting courses through uncharted waters of innovation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white overflow-hidden shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 border-2 border-amber-400">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-amber-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <span className="relative z-10 flex items-center gap-2 text-lg font-bold" style={{ fontFamily: "'Cinzel', serif" }}>
                <Skull size={20} />
                View Plunder
              </span>
            </button>

            <button className="group relative px-8 py-4 bg-transparent text-amber-300 border-2 border-amber-500 hover:bg-amber-500/10 transition-all duration-300 shadow-lg hover:shadow-amber-500/30">
              <span className="relative z-10 flex items-center gap-2 text-lg font-bold" style={{ fontFamily: "'Cinzel', serif" }}>
                <Compass size={20} />
                Chart the Course
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Ship illustration */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent blur-3xl"></div>
            <img
              src={pirateShip}
              alt="Pirate Ship"
              className="relative w-full rounded-lg shadow-2xl border-4 border-amber-700/50"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-900 via-amber-500 to-amber-900"></div>
    </section>
  );
}
