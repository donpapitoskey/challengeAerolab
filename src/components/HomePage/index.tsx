import React, {useCallback, useEffect, useState} from 'react';
import Head from 'next/head';
import {addPoints} from 'src/api/POST/points';
import {redeemPoints} from 'src/api/POST/redeem';
import {to} from 'src/api/async';
import {Header, Banner, Card, Modal, Navbar} from 'src/components';
import {CatalogContainer} from './styles';
import {Product} from 'src/interfaces/product';
import {User} from 'src/interfaces/user';

interface Props {
  history: Product[];
  products: Product[];
  profile: User;
}

const HomePage: React.FC<Props> = ({history, products, profile}) => {
  const {name, points} = profile;
  const [availableCoins, setAvaliableCoins] = useState(points);
  const [tailIndex, setTailIndex] = useState(16);
  const [currentSort, setCurrentSort] = useState('recent');
  const [productsOrdered, setProductsOrdered] = useState(products);
  const [showModal, setShowModal] = useState(false);
  const [showFeedback, setShowFeedback] = useState('');
  const [purchased, setPurchased] = useState(history);
  const [showPurchased, setShowPurchased] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleShowModal(false);
      handleFeedback('');
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [showFeedback]);

  const handleShowModal = useCallback(
    (show: boolean) => {
      setShowModal(show);
      if (showPurchased) setShowPurchased(false);
    },
    [showPurchased],
  );

  const handleFeedback = useCallback((feedback: string) => setShowFeedback(feedback), []);

  const handleSortingTab = useCallback((nextTarget: string) => setCurrentSort(nextTarget), []);

  const sortItemsByPrice = (descendent: boolean) => {
    const sortedItems = [...productsOrdered].sort((a, b) => (descendent ? a.cost - b.cost : b.cost - a.cost));
    setProductsOrdered(sortedItems);
  };

  const handleShowHistory = useCallback(() => {
    setShowPurchased(true);
    setShowModal(true);
  }, []);

  const handleCoinsAcquisition = useCallback(async (quantity: number) => {
    const [err, data] = await to(addPoints(quantity));
    if (err) return;
    const response = JSON.parse(await data.text());
    /* I dont know if intentional, but API object with spaced keys are quiet ugly/unconfortable */
    const {message} = response;
    const newPoints = response['New Points'];
    if (message === 'Points Updated') {
      handleFeedback('added');
      setAvaliableCoins(newPoints);
    }
  }, []);

  useEffect(() => {}, [showFeedback]);

  const handleCoinsRedeem = useCallback(
    async (id: string, price: number, product: Product) => {
      const [err, data] = await to(redeemPoints(id));
      const {message} = JSON.parse(await data.text());
      if (err) return;
      if (message) {
        setAvaliableCoins(availableCoins - price);
        setPurchased([...purchased, product]);
        handleShowModal(true);
        handleFeedback('redeemed');
      }
    },
    [availableCoins],
  );

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
      return (
        <Card
          key={product._id}
          product={product}
          points={availableCoins}
          handleCoinsRedeem={handleCoinsRedeem}
          handleShowModal={handleShowModal}
        />
      );
    });
  }, [tailIndex, productsOrdered, availableCoins]);

  return (
    <>
      <Head>
        <title>Loyalty program | Catalog</title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <CatalogContainer>
        <Header
          handleShowHistory={handleShowHistory}
          name={name}
          points={availableCoins}
          handleShowModal={handleShowModal}
        />
        <Banner />
        <Navbar
          currentSort={currentSort}
          handleOrderItems={handleOrderItems}
          tailIndex={tailIndex}
          handleIndexChange={handleIndexChange}
        />
        <div className="card-container">{displayCards()}</div>
        <Navbar tailIndex={tailIndex} onlyNumbers={true} handleIndexChange={handleIndexChange} />
        {showModal && (
          <Modal
            purchased={purchased}
            coins={availableCoins}
            showFeedback={showFeedback}
            showPurchased={showPurchased}
            handleShowModal={handleShowModal}
            handleCoinsAcquisition={handleCoinsAcquisition}
          />
        )}
      </CatalogContainer>
    </>
  );
};

export default HomePage;
