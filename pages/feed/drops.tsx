import type { NextPage } from 'next';
import { Header } from 'components/Header';
import {
  useDropsArray,
  DropsContractProvider,
  DropsContextProvider,
  DropsComponents,
  useDropsContextProvider,
  useDropsContractProvider,
} from '@public-assembly/zora-drops-utils';

const Drops: NextPage = () => {
  const { contractAddresses } = useDropsContextProvider();
  const { collectionData } = useDropsContractProvider();
  //   console.log(typeof contractAddresses);
  console.log(collectionData);
  return (
    <>
      <Header />
      <DropsContractProvider collectionAddress='' networkId='1' />
    </>
  );
};

export default Drops;
