import React from 'react';
import Layout from '../components/Layout';
import Donate from '../components/Donate';

const DonatePage = () => {
  return (
    <Layout>
      <div style={{ paddingTop: '80px' }}>
        <Donate />
      </div>
    </Layout>
  );
};

export default DonatePage;