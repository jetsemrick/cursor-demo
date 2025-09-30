import React from 'react';
import { 
  Layout, 
  Header, 
  HeroSection, 
  Divider, 
  EventsSection,
  TeamsTable,
  CallToAction 
} from './components';

/**
 * Main App component that renders the Speech and Debate Team website
 */
const App: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Divider />
      <HeroSection />
      <Divider />
      <EventsSection />
      <Divider />
      <TeamsTable />
      <Divider />
      <CallToAction />
    </Layout>
  );
};

export default App;

