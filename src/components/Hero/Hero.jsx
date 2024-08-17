import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="hero-left">Left section</div>
        <div className="hero-right flexCenter">
          <div className="image-container">
            <img src="./hero-image.png" alt="building-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
