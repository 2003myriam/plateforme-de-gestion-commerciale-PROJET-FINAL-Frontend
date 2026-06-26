import React from "react";
import { FaGoogle, FaSpotify, FaShopify } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";
import "./LogoLoop.css";

function LogoLoop() {
  const icons = [
    <FaGoogle />,
    <RiNotionFill />,
    <FaSpotify />,
    <FaShopify />,
  ];

  return (
    <section className="trusted-section">
      <h3 className="trusted-title">
        Trusted by innovative teams worldwide
      </h3>

      <div className="slider">
        <div className="slide-track">
          {[...icons, ...icons, ...icons, ...icons].map((icon, index) => (
            <div className="slide" key={index}>
              {icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoLoop;