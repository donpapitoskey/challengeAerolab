import React from 'react';
import {NextPage, GetServerSideProps} from 'next';
import {HomePage} from 'src/components';
import {getUser} from 'src/api/GET/user';
import {to} from 'src/api/async';

export const Home: NextPage = () => <HomePage />;

export const getServerSideProps: GetServerSideProps = async () => {
  const [err, data] = await to(getUser());
  if (err) return {notFound: true};
  const profile = JSON.parse(await data.text());
  console.log(profile);
  return {
    props: {
      profile,
    },
  };
};

export default Home;
