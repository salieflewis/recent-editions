import { NextPage } from 'next';
import { Header } from 'components/Header';
import { Feed } from 'components/Feed';
import { NEW_DROPS } from 'gql/queries';
import { Document } from 'components/Document';

const Latest: NextPage = () => {
  return (
    <>
      <Document />
      <Header />
      <Feed query={NEW_DROPS} />
    </>
  );
};

export default Latest;
