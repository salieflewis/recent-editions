import type { NextPage } from 'next';
import { Header, Document } from '../components';

const Home: NextPage = () => {
  return (
    <div>
      <Document />
      <Header />
    </div>
  );
};

export default Home;
