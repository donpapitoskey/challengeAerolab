import React, {useCallback, useState} from 'react';
import Head from 'next/head';
import {Header, Banner, Card, Modal, Navbar} from 'src/components';
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
  const [currentSort, setCurrentSort] = useState('recent');
  const [productsOrdered, setProductsOrdered] = useState(products);
  const [showModal, setshowModal] = useState(false);

  const handleShowModal = useCallback((show: boolean) => setshowModal(show), []);

  const handleSortingTab = useCallback((nextTarget: string) => setCurrentSort(nextTarget), []);

  const sortItemsByPrice = (descendent: boolean) => {
    const sortedItems = [...productsOrdered].sort((a, b) => (descendent ? a.cost - b.cost : b.cost - a.cost));
    setProductsOrdered(sortedItems);
  };

  const handleOrderItems = useCallback(
    (arangeType: string) => {
      handleSortingTab(arangeType);
      switch (arangeType) {
        case 'recent':
          return setProductsOrdered(products);
        case 'lowest':
          return sortItemsByPrice(true);
        case 'highest':
          return sortItemsByPrice(false);
        default:
          break;
      }
    },
    [productsOrdered],
  );

  const handleIndexChange = useCallback(
    (newTail: number) => {
      const nextTail = tailIndex + newTail;
      if (nextTail <= productsOrdered.length) setTailIndex(tailIndex + newTail);
    },
    [tailIndex, productsOrdered],
  );

  const displayCards = useCallback(() => {
    return productsOrdered.slice(tailIndex - 16, tailIndex).map((product) => {
      return <Card key={product._id} product={product} points={points} handleShowModal={handleShowModal} />;
    });
  }, [tailIndex, productsOrdered]);

  return (
    <>
      <Head>
        <title>Loyalty program | Catalog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CatalogContainer>
        <Header name={name} points={points} handleShowModal={handleShowModal} />
        <Banner />
        <Navbar
          currentSort={currentSort}
          handleOrderItems={handleOrderItems}
          tailIndex={tailIndex}
          handleIndexChange={handleIndexChange}
        />
        <div className="card-container">{displayCards()}</div>
        <Navbar tailIndex={tailIndex} onlyNumbers={true} handleIndexChange={handleIndexChange} />
        {showModal && <Modal handleShowModal={handleShowModal} />}
      </CatalogContainer>
    </>
  );
};

export default HomePage;
