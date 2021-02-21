import React from 'react';
import Head from 'next/head';
import {Header, Banner, Navbar} from 'src/components';
import {CatalogContainer} from './styles';
import {Product} from 'src/interfaces/product';
import {User} from 'src/interfaces/user';

interface Props {
  products: Product[];
  profile: User;
}

const HomePage: React.FC<Props> = ({products, profile}) => {
  const {name, points} = profile;
  return (
    <>
      <Head>
        <title>Loyalty program | Catalog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CatalogContainer>
        <Header name={name} points={points} />
        <Banner />
        <Navbar />
      </CatalogContainer>
    </>
  );
};

export default HomePage;
