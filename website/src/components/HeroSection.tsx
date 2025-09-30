import React from 'react';
import './HeroSection.css';

/**
 * Hero section component displaying the team's mission statement
 */
const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <p className="hero-section__description">
        Our squad is dedicated to fostering critical thinking, public speaking, 
        and argumentation skills through competitive speech and debate activities.
      </p>
    </section>
  );
};

export default HeroSection;

