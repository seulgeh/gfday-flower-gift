import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flower } from 'lucide-react';

export default function App() {
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page === 2) {
      const timer = setTimeout(() => setPage(3), 3000);
      return () => clearTimeout(timer);
    }

    if (page === 3) {
      const redirectTimer = setTimeout(() => {
        window.location.href = '/bunga-flower/';
      }, 5000); // ⏱️ 5 detik sebelum redirect

      return () => clearTimeout(redirectTimer);
    }
  }, [page]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#efebe9] font-serif">
      {page === 1 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="bg-[#d7ccc8] p-6 rounded-2xl shadow-xl w-full max-w-lg text-center"
        >
          <motion.div
            whileHover={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 1 }}
            className="mb-4 flex justify-center"
          >
            <Flower className="h-24 w-24 text-[#8d6e63]" />
          </motion.div>
          <h1 className="text-3xl text-[#5d4037] font-bold">Happy GF Day! 🌸</h1>
          <button
            onClick={() => setPage(2)}
            className="mt-6 bg-[#8d6e63] text-white px-6 py-3 rounded-full"
          >
            Tap to open your message 🌹
          </button>
        </motion.div>
      )}

      {page === 2 && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-[#d7ccc8] p-8 rounded-2xl shadow-xl w-full max-w-2xl text-center"
        >
          <h2 className="text-2xl font-semibold text-[#4e342e] mb-4">💐 A Message for You 💐</h2>
          <p className="text-[#3e2723] text-lg leading-relaxed">
            Happy GF Day, Kei. I know we’re not officially anything right now, but honestly, you’ve been on my mind a lot lately — especially today. <br /><br />
            I’m not saying this to rush things or make it weird, but just being real with you: I really enjoy every convo, every random moment, and just getting to know you more. <br /><br />
            You’ve got this energy that’s lowkey hard to ignore. So yeah, not saying you’re my girl (yet 👀), but if I had to pick someone to celebrate today with, it’d probably be you.
          </p>
        </motion.div>
      )}

      {page === 3 && (
        <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-pink-300 opacity-70"
              style={{
                width: `${Math.random() * 6 + 4}px`,
                height: `${Math.random() * 6 + 4}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: "blur(1px)"
              }}
              animate={{
                y: [0, -20],
                opacity: [0.7, 0.3, 0.7]
              }}
              transition={{
                duration: Math.random() * 3 + 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          ))}

          {/* Bouquet */}
          <motion.div
            className="relative w-64 h-96 z-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <motion.div
              className="absolute bottom-0 left-1/2 w-2 h-64 bg-green-700 -translate-x-1/2 rounded-full"
              initial={{ height: 0 }}
              animate={{ height: "16rem" }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />

            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-16 h-16 bg-pink-400 rounded-full"
                style={{
                  transform: `rotate(${i * 60}deg)`
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  x: 60 * Math.cos((i * 60 * Math.PI) / 180),
                  y: 60 * Math.sin((i * 60 * Math.PI) / 180)
                }}
                transition={{
                  delay: 0.5 + i * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
              />
            ))}

            <motion.div
              className="absolute top-1/2 left-1/2 w-12 h-12 bg-yellow-400 rounded-full -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.8, type: "spring", stiffness: 120 }}
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}
