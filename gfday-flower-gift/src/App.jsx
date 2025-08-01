import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flower } from 'lucide-react';
import BungaFlower from './components/BungaFlower';

export default function App() {
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page === 2) {
      const timer = setTimeout(() => setPage(3), 6000); // pindah otomatis ke page 3
      return () => clearTimeout(timer);
    }
  }, [page]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#efebe9] font-serif">
      {page === 1 && (
        <motion.div
          initial={{ scale: 0, rotate: 10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="bg-[#d7ccc8] p-6 rounded-2xl shadow-xl w-full max-w-lg text-center"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
            }}
            whileHover={{ scale: 1.2, rotate: [0, 15, -15, 0] }}
            className="mb-4 flex justify-center"
          >
            <Flower className="h-24 w-24 text-[#8d6e63]" />
          </motion.div>
          <motion.h1
            whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
            className="text-3xl text-[#5d4037] font-bold"
          >
            Happy GF Day! 🌸
          </motion.h1>
          <motion.button
            onClick={() => setPage(2)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-[#8d6e63] text-white px-6 py-3 rounded-full"
          >
            Tap to open your message 🌹
          </motion.button>
        </motion.div>
      )}

      {page === 2 && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-[#d7ccc8] p-8 rounded-2xl shadow-xl w-full max-w-2xl text-center"
        >
          <motion.h2
            whileHover={{ scale: 1.05, color: '#f06292' }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-2xl font-semibold text-[#4e342e] mb-4"
          >
            💐 A Message for You 💐
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-[#3e2723] text-lg leading-relaxed"
          >
            <motion.p whileHover={{ scale: 1.02 }} variants={textVariants}>
              Happy GF Day, Kei. I know we’re not officially anything right now, but honestly,
              you’ve been on my mind a lot lately — especially today. <br /><br />
            </motion.p>
            <motion.p whileHover={{ scale: 1.02 }} variants={textVariants}>
              I’m not saying this to rush things or make it weird, but just being real with you:
              I really enjoy every convo, every random moment, and just getting to know you more. <br /><br />
            </motion.p>
            <motion.p whileHover={{ scale: 1.02 }} variants={textVariants}>
              You’ve got this energy that’s lowkey hard to ignore. So yeah, not saying you’re my girl (yet 👀),
              but if I had to pick someone to celebrate today with, it’d probably be you.
            </motion.p>
          </motion.div>
        </motion.div>
      )}

      {page === 3 && <BungaFlower setPage={setPage} />}
    </div>
  );
}
