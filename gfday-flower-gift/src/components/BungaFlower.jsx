import React from "react";
import "./BungaFlower.css";

const BungaFlower = () => {
  return (
    <div className="flower-container">
      <div className="sun" />
      <div className="flower">
        <div className="stem" />
        <div className="petals">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`petal petal-${i}`} />
          ))}
        </div>
        <div className="center" />
        <div className="leaf leaf-left" />
        <div className="leaf leaf-right" />
      </div>
    </div>
  );
};

export default BungaFlower;
