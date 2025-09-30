import React from 'react';
import './EventsSection.css';

/**
 * EventsSection component displaying the list of debate events
 */
const EventsSection: React.FC = () => {
  const events: string[] = [
    'Policy Debate',
    'Lincoln-Douglas Debate', 
    'Public Forum Debate',
    'Individual Speech Events'
  ];

  return (
    <section className="events-section">
      <p className="events-section__description">
        We compete in various events including:
      </p>
      <ul className="events-section__list">
        {events.map((event: string, index: number) => (
          <li key={index} className="events-section__item">
            {event}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EventsSection;

