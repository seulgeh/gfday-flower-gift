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
      }, 5000); // Redirect ke /bunga-flower setelah 5 detik
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
        <div className="w-full h-screen overflow-hidden bg-black">
          <iframe
            src="/bunga-flower/index.html"
            title="Bunga Flower"
            className="w-full h-full border-none"
          />
        </div>
      )}
    </div>
  );
}
