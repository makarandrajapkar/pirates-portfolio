import { motion } from 'motion/react';
import { Gem, Coins, Crown, Sparkles } from 'lucide-react';
import treasureChest from '@/assets/images/treasure-chest.jpg';

const treasures = [
  {
    icon: Crown,
    title: "Royal Code",
    skills: ["React", "TypeScript", "Next.js", "Vue.js"],
    color: "from-yellow-500 to-amber-600"
  },
  {
    icon: Gem,
    title: "Precious Gems",
    skills: ["Node.js", "Python", "GraphQL", "REST APIs"],
    color: "from-emerald-500 to-green-600"
  },
  {
    icon: Coins,
    title: "Gold Doubloons",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
    color: "from-orange-500 to-red-600"
  },
  {
    icon: Sparkles,
    title: "Mystical Artifacts",
    skills: ["Docker", "AWS", "CI/CD", "Kubernetes"],
    color: "from-purple-500 to-pink-600"
  }
];

export function SkillsTreasure() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-amber-950 via-slate-900 to-amber-950 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${treasureChest})` }}
        ></div>
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
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <Gem className="text-amber-500 mx-auto" size={60} />
          </motion.div>

          <h2
            className="text-5xl md:text-7xl text-amber-400 mb-4"
            style={{ fontFamily: "'Pirata One', cursive" }}
          >
            TREASURE HOARD
          </h2>
          <p
            className="text-xl text-amber-200/80 max-w-2xl mx-auto"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Spoils of countless voyages across the digital seas
          </p>
        </motion.div>

        {/* Treasure Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {treasures.map((treasure, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -180 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-amber-950 to-slate-900 p-6 border-4 border-amber-700/60 shadow-2xl overflow-hidden">
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${treasure.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-500"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-500"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-500"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-500"></div>

                {/* Icon */}
                <motion.div
                  className={`mb-6 inline-flex p-4 bg-gradient-to-br ${treasure.color} rounded-full shadow-lg`}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                >
                  <treasure.icon className="text-white" size={40} />
                </motion.div>

                {/* Title */}
                <h3
                  className="text-2xl text-amber-400 mb-4"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {treasure.title}
                </h3>

                {/* Skills */}
                <div className="space-y-2">
                  {treasure.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + idx * 0.1 }}
                      className="flex items-center gap-2 text-amber-100/90"
                    >
                      <div className="w-2 h-2 bg-amber-500 rotate-45"></div>
                      <span className="text-lg">{skill}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              {/* Floating particles */}
              <motion.div
                className="absolute -top-2 -right-2 text-amber-500"
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                <Sparkles size={20} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-amber-900/40 to-amber-950/40 border-2 border-amber-600/50 backdrop-blur-sm">
            <Coins className="text-amber-500" size={32} />
            <p
              className="text-xl text-amber-300"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              And many more treasures aboard...
            </p>
            <Coins className="text-amber-500" size={32} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
