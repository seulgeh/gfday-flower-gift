import { useState } from 'react';
import { motion } from 'framer-motion';
import { Flower } from 'lucide-react';

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-6 text-center">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }}
        className="bg-white p-6 rounded-2xl shadow-xl max-w-lg">
        <motion.div whileHover={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 1 }}
          className="mb-4 flex justify-center">
          <Flower className="h-24 w-24 text-pink-500" />
        </motion.div>
        <h1 className="text-2xl font-bold text-pink-600">Happy GF Day! 🌸</h1>
        {show ? (
          <p className="text-gray-700 mt-4">
            I know I might not mean much to you yet... <br />
            But I’d really love to be the reason behind your smile today —
            and maybe even every day from now on. <br />
            So if you’d let me, could I be someone more than just a friend?
          </p>
        ) : (
          <button onClick={() => setShow(true)}
            className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-full shadow hover:bg-pink-600">
            Tap to open your message 🌹
          </button>
        )}
      </motion.div>
    </div>
  );
}
