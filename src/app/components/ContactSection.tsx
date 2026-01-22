import { motion } from 'motion/react';
import { Mail, MapPin, Scroll, Send, Anchor } from 'lucide-react';
import { useState } from 'react';
import treasureMap from '@/assets/images/treasure-map.jpg';
import compass from '@/assets/images/compass.jpg';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-amber-950 to-slate-900 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${treasureMap})` }}
        ></div>
      </div>

      {/* Floating anchors */}
      <motion.div
        className="absolute top-20 left-10 text-amber-900/20"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Anchor size={100} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 text-amber-900/20"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Anchor size={120} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ 
              rotate: [0, -5, 5, 0],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <Scroll className="text-amber-500" size={60} />
          </motion.div>

          <h2
            className="text-5xl md:text-7xl text-amber-400 mb-4"
            style={{ fontFamily: "'Pirata One', cursive" }}
          >
            SEND A MESSAGE
          </h2>
          <p
            className="text-xl text-amber-200/80 max-w-2xl mx-auto"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Drop a bottle in the digital sea, and I shall respond from my ship
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-amber-950/80 to-slate-900/80 p-8 border-4 border-amber-700/60 shadow-2xl backdrop-blur-sm">
              {/* Decorative corners */}
              <div className="absolute -top-2 -left-2 w-12 h-12 border-t-4 border-l-4 border-amber-500"></div>
              <div className="absolute -top-2 -right-2 w-12 h-12 border-t-4 border-r-4 border-amber-500"></div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-4 border-l-4 border-amber-500"></div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-4 border-r-4 border-amber-500"></div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    className="block text-amber-300 mb-2 text-lg"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Your Name, Sailor
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/60 border-2 border-amber-700/50 text-amber-100 placeholder-amber-700/50 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="Captain Jack..."
                    required
                  />
                </div>

                <div>
                  <label
                    className="block text-amber-300 mb-2 text-lg"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Message in a Bottle
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/60 border-2 border-amber-700/50 text-amber-100 placeholder-amber-700/50 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="captain@blackpearl.sea"
                    required
                  />
                </div>

                <div>
                  <label
                    className="block text-amber-300 mb-2 text-lg"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Your Tale
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900/60 border-2 border-amber-700/50 text-amber-100 placeholder-amber-700/50 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                    placeholder="Whisper your quest..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: status === 'sending' ? 1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white border-2 border-amber-500 shadow-lg hover:shadow-amber-500/50 transition-all flex items-center justify-center gap-3 text-lg disabled:opacity-50"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  <Send size={20} />
                  {status === 'sending' ? 'Sending...' : 'Cast the Bottle'}
                </motion.button>

                {status === 'success' && (
                  <p className="text-green-400 text-center mt-4">Message sent successfully! ⚓</p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-center mt-4">Failed to send. Please try again.</p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Info Card */}
            <div className="bg-gradient-to-br from-amber-950/80 to-slate-900/80 p-8 border-2 border-amber-700/40 shadow-2xl backdrop-blur-sm">
              <h3
                className="text-3xl text-amber-400 mb-6"
                style={{ fontFamily: "'Pirata One', cursive" }}
              >
                COORDINATES
              </h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <Mail className="text-amber-500 mt-1 group-hover:text-amber-400 transition-colors" size={28} />
                  <div>
                    <p className="text-amber-300 text-lg mb-1" style={{ fontFamily: "'Cinzel', serif" }}>
                      Parley via Courier
                    </p>
                    <p className="text-amber-100/80">captain@treasure.quest</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <MapPin className="text-amber-500 mt-1 group-hover:text-amber-400 transition-colors" size={28} />
                  <div>
                    <p className="text-amber-300 text-lg mb-1" style={{ fontFamily: "'Cinzel', serif" }}>
                      Port of Anchorage
                    </p>
                    <p className="text-amber-100/80">The Seven Digital Seas</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <Scroll className="text-amber-500 mt-1 group-hover:text-amber-400 transition-colors" size={28} />
                  <div>
                    <p className="text-amber-300 text-lg mb-1" style={{ fontFamily: "'Cinzel', serif" }}>
                      Signal Flags
                    </p>
                    <p className="text-amber-100/80">Available for new voyages</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="bg-gradient-to-br from-amber-900/40 to-slate-900/40 p-8 border-l-4 border-amber-500 shadow-xl backdrop-blur-sm">
              <p
                className="text-2xl text-amber-300/90 italic leading-relaxed"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                "The problem is not the problem. The problem is your attitude about the problem."
              </p>
              <p className="text-amber-500 mt-4 text-right">— Captain Jack Sparrow</p>
            </div>

            {/* Compass decoration */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex justify-center"
            >
              <img
                src={compass}
                alt="Compass"
                className="w-48 h-48 object-cover rounded-full border-4 border-amber-700/60 shadow-2xl opacity-60"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
