import { newDrops } from '../gql/queries.js';
import { useQuery } from '@apollo/client';

import { Flex, Box } from '@zoralabs/zord';

import { NFTCard } from '../components/NFTCard';

import { useState } from 'react';

export function Feed() {
  const { loading, error, data } = useQuery(newDrops);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! ${error.message}</div>;

  return (
    <>
      <Flex wrap='wrap' gap='x8' mx='x8'>
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
                  key={`${editionMetadata.imageURI}-${name}`}
                  mx='auto'
                  mt='x24'
                >
                  <NFTCard
                    editionMetadata={editionMetadata}
                    symbol={symbol}
                    name={name}
                    address={address}
                    publicSalePrice={salesConfig.publicSalePrice}
                  />
                </Box>
              );
          }
        )}
      </Flex>
    </>
  );
}
