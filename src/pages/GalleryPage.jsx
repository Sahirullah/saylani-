import React from 'react';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const GalleryPage = () => {
  return (
    <Layout>
      <div style={{ paddingTop: '80px' }}>
        <Gallery />
      </div>
    </Layout>
  );
};

export default GalleryPage;