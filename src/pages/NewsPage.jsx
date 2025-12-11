import React from 'react';
import Layout from '../components/Layout';
import NewsEvents from '../components/NewsEvents';

const NewsPage = () => {
  return (
    <Layout>
      <div style={{ paddingTop: '80px' }}>
        <NewsEvents />
      </div>
    </Layout>
  );
};

export default NewsPage;