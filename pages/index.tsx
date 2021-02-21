import React from 'react';
import {NextPage, GetServerSideProps, InferGetServerSidePropsType} from 'next';
import {HomePage} from 'src/components';
import {getUser} from 'src/api/GET/user';
import {getProducts} from 'src/api/GET/products';
import {to} from 'src/api/async';
import {Product} from 'src/interfaces/product';
import {User} from 'src/interfaces/user';

export const Home: NextPage = ({
  profile,
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <HomePage products={products} profile={profile} />
);

export const getServerSideProps: GetServerSideProps = async () => {
  const [err, data] = await to(getUser());
  if (err) return {notFound: true};
  const profile: User = JSON.parse(await data.text());
  const [error, dataProducts] = await to(getProducts());
  if (error) return {notFound: true};
  const products: Product[] = JSON.parse(await dataProducts.text());
  return {
    props: {
      profile,
      products,
    },
  };
};

export default Home;
