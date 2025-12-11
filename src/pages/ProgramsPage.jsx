import React from 'react';
import Layout from '../components/Layout';
import Programs from '../components/Programs';

const ProgramsPage = () => {
  return (
    <Layout>
      <div style={{ paddingTop: '80px' }}>
        <Programs />
      </div>
    </Layout>
  );
};

export default ProgramsPage;