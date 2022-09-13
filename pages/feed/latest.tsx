import { NextPage } from 'next';
import { Header } from 'components/Header';
import { Feed } from 'components/Feed';
import { NEW_DROPS } from 'gql/queries';

const Latest: NextPage = () => {
  return (
    <>
      <Header />
      <Feed query={NEW_DROPS} />
    </>
  );
};

export default Latest;
