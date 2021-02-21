import React, {useCallback, useState} from 'react';
import Head from 'next/head';
import {Header, Banner, Card, Navbar} from 'src/components';
import {CatalogContainer} from './styles';
import {Product} from 'src/interfaces/product';
import {User} from 'src/interfaces/user';

interface Props {
  products: Product[];
  profile: User;
}

const HomePage: React.FC<Props> = ({products, profile}) => {
  const {name, points} = profile;
  const [tailIndex, setTailIndex] = useState(16);
  const [productsOrdered, setProductsOrdered] = useState(products);

  const handleOrderItems = useCallback((arangeType: string) => {
    switch (arangeType) {
      case 'recent':
        console.log('pressed most recent');
        break;
      case 'lowest':
        console.log('pressed lowest price');
        break;
      case 'highest':
        console.log('pressed highest price');
        break;
      default:
        break;
    }
  }, []);

  const handleIndexChange = useCallback(
    (newTail: number) => {
      const nextTail = tailIndex + newTail;
      if (nextTail <= productsOrdered.length) setTailIndex(tailIndex + newTail);
    },
    [tailIndex],
  );

  const displayCards = useCallback(() => {
    return productsOrdered.slice(tailIndex - 16, tailIndex).map((product) => {
      return <Card key={product._id} product={product} />;
    });
  }, [tailIndex]);

  return (
    <>
      <Head>
        <title>Loyalty program | Catalog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CatalogContainer>
        <Header name={name} points={points} />
        <Banner />
        <Navbar
          handleOrderItems={handleOrderItems}
          tailIndex={tailIndex}
          handleIndexChange={handleIndexChange}
        />
        <div className="card-container">{displayCards()}</div>
        <Navbar tailIndex={tailIndex} onlyNumbers={true} handleIndexChange={handleIndexChange} />
      </CatalogContainer>
    </>
  );
};

export default HomePage;
