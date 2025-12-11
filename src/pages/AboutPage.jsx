import React from 'react';
import Layout from '../components/Layout';
import About from '../components/About';

const AboutPage = () => {
  return (
    <Layout>
      <div style={{ paddingTop: '80px' }}>
        <About />
      </div>
    </Layout>
  );
};

export default AboutPage;