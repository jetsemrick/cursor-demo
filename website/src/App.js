import React from 'react';
import { 
  Layout, 
  Header, 
  HeroSection, 
  Divider, 
  EventsSection, 
  CallToAction 
} from './components';

function App() {
  return (
    <Layout>
      <Header />
      <Divider />
      <HeroSection />
      <Divider />
      <EventsSection />
      <Divider />
      <CallToAction />
    </Layout>
  );
}

export default App;
