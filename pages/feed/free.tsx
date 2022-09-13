import { NextPage } from 'next';
import { Header } from 'components/Header';
import { Feed } from 'components/Feed';
import { FREE_DROPS } from 'gql/queries';

const Free: NextPage = () => {
  return (

      <>
        <Header />
        <Feed query={FREE_DROPS} />
      </>
    
  );
};

export default Free;
