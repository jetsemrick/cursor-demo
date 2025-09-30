import React from 'react';
import './CallToAction.css';

/**
 * CallToAction component displaying a motivational message
 */
const CallToAction: React.FC = () => {
  return (
    <section className="cta-section">
      <p className="cta-section__message">
        Join us in developing your voice and making a difference through the power of words.
      </p>
    </section>
  );
};

export default CallToAction;

