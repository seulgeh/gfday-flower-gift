import React, { useEffect } from 'react';
import './main.css';

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
    <>
      <div className="container">
        <div className="night"></div>
        <div className="flowers">
          {/* Flower 1 */}
          <div className="flower flower--1">
            <div className="flower__leafs flower__leafs--1">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={`flower__leaf flower__leaf--${i}`}></div>
              ))}
              <div className="flower__white-circle"></div>
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
              ))}
            </div>
            <div className="flower__line">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className={`flower__line__leaf flower__line__leaf--${i}`}></div>
              ))}
            </div>
          </div>

          {/* Flower 2 */}
          <div className="flower flower--2">
            <div className="flower__leafs flower__leafs--2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={`flower__leaf flower__leaf--${i}`}></div>
              ))}
              <div className="flower__white-circle"></div>
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
              ))}
            </div>
            <div className="flower__line">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={`flower__line__leaf flower__line__leaf--${i}`}></div>
              ))}
            </div>
          </div>

          {/* Flower 3 */}
          <div className="flower flower--3">
            <div className="flower__leafs flower__leafs--3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={`flower__leaf flower__leaf--${i}`}></div>
              ))}
              <div className="flower__white-circle"></div>
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
              ))}
            </div>
            <div className="flower__line">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={`flower__line__leaf flower__line__leaf--${i}`}></div>
              ))}
            </div>
          </div>

          {/* Tambahkan bagian bunga dan daun lainnya secara langsung sesuai kebutuhan */}
        </div>
        <canvas id="canvas"></canvas>
      </div>
    </>
  );
};

export default BungaFlower;

