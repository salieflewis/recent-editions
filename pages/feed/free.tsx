import { NextPage } from 'next';
import { Header } from 'components/Header';
import { Feed } from 'components/Feed';
import { FREE_DROPS } from 'gql/queries';
import { Document } from 'components/Document';

const Free: NextPage = () => {
  return (
    <>
      <Document />
      <Header />
      <Feed query={FREE_DROPS} />
    </>
  );
};

export default Free;
