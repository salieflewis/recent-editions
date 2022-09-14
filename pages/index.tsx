import type { NextPage } from 'next';
import Script from 'next/script';
import { Header } from '../components/Header';
import Head from 'next/head';
import { Document } from 'components/Document';

const Home: NextPage = () => {
  return (
    <div>
      <Document />
      <Header />
    </div>
  );
};

export default Home;
