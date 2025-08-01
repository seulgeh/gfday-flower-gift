import React, { useEffect } from 'react';

const BungaFlower = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/bunga-flower/main.js';
    script.type = 'module';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Konten dari bunga-flower/index.html bisa diletakkan di sini */}
      <canvas id="canvas"></canvas>
    </div>
  );
};

export default BungaFlower;
