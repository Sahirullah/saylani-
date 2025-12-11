import React from 'react';
import Layout from '../components/Layout';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <Layout>
      <div style={{ paddingTop: '80px' }}>
        <Contact />
      </div>
    </Layout>
  );
};

export default ContactPage;