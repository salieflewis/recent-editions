// import { NEW_DROPS } from '../gql/queries.js';
import { useQuery } from '@apollo/client';

import { Flex, Box } from '@zoralabs/zord';

import { NFTCard } from '../components/NFTCard';

export const Feed = ({ query }) => {
  const { loading, error, data } = useQuery(query);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! ${error.message}</div>;

  return (
    <>
      <Flex wrap='wrap' mx='x16'>
        {data.erc721Drops.map(
          ({
            name,
            address,
            owner,
            symbol,
            editionMetadata,
            salesConfig,
          }) => {
            if (editionMetadata != null)
              return (
                <Box
                  key={`${address}`}
                  mx='auto'
                  mt='x24'
                >
                  <NFTCard
                    editionMetadata={editionMetadata}
                    symbol={symbol}
                    name={name}
                    address={address}
                    publicSalePrice={
                      salesConfig.publicSalePrice
                    }
                  />
                </Box>
              );
          }
        )}
      </Flex>
    </>
  );
};
