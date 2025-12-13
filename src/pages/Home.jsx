import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import SuccessStories from '../components/SuccessStories';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <SuccessStories />
    </>
  );
};

export default Home;