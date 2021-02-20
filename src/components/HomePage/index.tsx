import React from 'react';
import Head from 'next/head';
import {Header, Banner, Navbar} from 'src/components';
import {CatalogContainer} from './styles';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Loyalty program | Catalog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CatalogContainer>
        <Header />
        <Banner />
        <Navbar />
      </CatalogContainer>
      ;
    </>
  );
};

export default HomePage;
