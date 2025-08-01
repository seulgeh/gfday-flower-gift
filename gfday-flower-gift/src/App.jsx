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
  }, [page]);

  return (
    <div className="min-h-screen bg-[#efebe9] flex flex-col items-center justify-center p-6 text-center font-serif">
      {page === 1 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="bg-[#d7ccc8] p-6 rounded-2xl shadow-xl max-w-lg w-full"
        >
          <motion.div
            whileHover={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 1 }}
            className="mb-4 flex justify-center"
          >
            <Flower className="h-24 w-24 text-[#8d6e63]" />
          </motion.div>
          <h1 className="text-3xl font-bold text-[#5d4037]">Happy GF Day! 🌸</h1>
          <button
            onClick={() => setPage(2)}
            className="mt-6 bg-[#8d6e63] text-white px-6 py-3 rounded-full shadow hover:bg-[#6d4c41] transition"
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
          className="bg-[#d7ccc8] p-8 rounded-2xl shadow-xl max-w-2xl w-full"
        >
          <h2 className="text-2xl font-semibold text-[#4e342e] mb-4">💐 A Message for You 💐</h2>
          <p className="text-[#3e2723] text-lg leading-relaxed">
            Happy GF Day, Kei. I know we’re not officially anything right now, but honestly, you’ve been on my mind a lot lately — especially today. <br /><br />
            I’m not saying this to rush things or make it weird, but just being real with you: I really enjoy every convo, every random moment, and just getting to know you more. <br /><br />
            You’ve got this energy that’s lowkey hard to ignore. So yeah, not saying you’re my girl (yet 👀), but if I had to pick someone to celebrate today with, it’d probably be you.
          </p>

          <motion.div
            className="mt-8 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src="https://media.tenor.com/JqXYk5QYFzYAAAAi/flowers-bouquet.gif"
              alt="Bouquet animation"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-xl shadow"
            />
          </motion.div>
        </motion.div>
      )}

      {page === 3 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="bg-[#d7ccc8] p-10 rounded-2xl shadow-xl max-w-xl w-full"
        >
          <h2 className="text-2xl font-bold text-[#4e342e] mb-4">💖 You’re special to me 💖</h2>
          <p className="text-[#3e2723] text-lg mb-6">
            Thank you for reading my message.<br />
            I hope this little gesture made your day a little brighter 🌞<br />
            I’ll be waiting for your answer... 💌
          </p>

          <motion.div
            className="mt-4 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src="https://media.tenor.com/JqXYk5QYFzYAAAAi/flowers-bouquet.gif"
              alt="Bouquet animation"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-xl shadow"
            />
          </motion.div>

          <motion.div
            className="text-5xl my-6"
            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💖 💗 💞 💕 💓
          </motion.div>

          <button
            onClick={() => setPage(1)}
            className="bg-[#8d6e63] text-white px-6 py-2 rounded-full shadow hover:bg-[#5d4037] transition"
          >
            Back to Start ↩️
          </button>
        </motion.div>
      )}
    </div>
  );
}
