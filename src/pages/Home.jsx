import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import SuccessStories from '../components/SuccessStories';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Programs />
      <SuccessStories />
    </Layout>
  );
};

export default Home;