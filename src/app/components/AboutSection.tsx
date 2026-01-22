import { motion } from "motion/react";
import { Swords, Ship, MapPin, Anchor } from "lucide-react";
import captainImage from "@/assets/b900372e97fcbf8e08306cda0fec019942389150.png";
import woodenPlanks from "@/assets/images/wooden-planks.jpg";

export function AboutSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 to-amber-950 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: `url(${woodenPlanks})` }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Swords className="text-amber-500" size={40} />
            <h2
              className="text-5xl md:text-7xl text-amber-400"
              style={{ fontFamily: "'Pirata One', cursive" }}
            >
              THE LEGEND
            </h2>
            <Swords className="text-amber-500" size={40} />
          </div>
          <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Image with decorative frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative p-4 border-8 border-amber-800/60 bg-gradient-to-br from-amber-950 to-slate-900 shadow-2xl">
              {/* Corner decorations */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-amber-500"></div>
              <div className="absolute -top-3 -right-3 w-12 h-12 border-t-4 border-r-4 border-amber-500"></div>
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-4 border-l-4 border-amber-500"></div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-amber-500"></div>

              <img
                src={captainImage}
                alt="Captain at Work"
                className="w-full aspect-square object-cover"
              />
            </div>

            {/* Floating anchor decoration */}
            <motion.div
              className="absolute -bottom-6 -right-6 text-amber-600"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Anchor size={80} className="drop-shadow-2xl" />
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-amber-950/60 to-slate-900/60 p-8 border-2 border-amber-700/40 shadow-2xl backdrop-blur-sm">
              <p
                className="text-xl md:text-2xl text-amber-100 leading-relaxed mb-6"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                <span
                  className="text-4xl text-amber-500 float-left mr-3 leading-none"
                  style={{
                    fontFamily: "'UnifrakturMaguntia', cursive",
                  }}
                >
                  A
                </span>
                seasoned navigator of the digital realm, I've
                weathered countless storms in the treacherous
                waters of code and creativity. From the
                Caribbean depths of backend development to the
                windswept peaks of frontend mastery.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 group">
                  <Ship
                    className="text-amber-500 mt-1 group-hover:text-amber-400 transition-colors"
                    size={28}
                  />
                  <div>
                    <h3
                      className="text-xl text-amber-300 mb-1"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Flagship Expertise
                    </h3>
                    <p className="text-amber-100/80">
                      Captain of Full-Stack vessels, commanding
                      React, Node.js, and the finest
                      technologies
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <MapPin
                    className="text-amber-500 mt-1 group-hover:text-amber-400 transition-colors"
                    size={28}
                  />
                  <div>
                    <h3
                      className="text-xl text-amber-300 mb-1"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Ports of Call
                    </h3>
                    <p className="text-amber-100/80">
                      Sailed from Tortuga's design harbors to
                      Port Royal's enterprise solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <Swords
                    className="text-amber-500 mt-1 group-hover:text-amber-400 transition-colors"
                    size={28}
                  />
                  <div>
                    <h3
                      className="text-xl text-amber-300 mb-1"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Battle Scars
                    </h3>
                    <p className="text-amber-100/80">
                      Survived 100+ project skirmishes, emerging
                      victorious with treasure-laden solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}