import React, { useEffect } from 'react';
import '/bunga-flower/main.css'; // pastikan ini bisa diakses dari public/

const BungaFlower = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/bunga-flower/main.js'; // jalankan JS animasi
    script.type = 'module';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // bersihkan saat unmount
    };
  }, []);

  return (
    <div className="container">
      <div className="night"></div>

      <div className="flowers">
        <div className="flower flower--1">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>
          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
        </div>

        <div className="flower flower--2">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>
          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
        </div>

        <div className="flower flower--3">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>
          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
        </div>

        <div className="grow-ans">
          <div className="growing-grass">
            <div className="grass"></div>
            <div className="grass"></div>
            <div className="grass"></div>
            <div className="grass"></div>
            <div className="grass"></div>
            <div className="grass"></div>
            <div className="grass"></div>
            <div className="grass"></div>
            <div className="grass"></div>
          </div>
        </div>
      </div>

      <canvas id="canvas"></canvas>
    </div>
  );
};

export default BungaFlower;
