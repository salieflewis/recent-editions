import { useQuery } from '@apollo/client';
import { Flex, Box } from '@zoralabs/zord';
import { NFTCard, DropProps } from '../components/NFTCard';

export const Feed = ({ query }: { query: any }) => {
  const { loading, error, data } = useQuery(query);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! ${error.message}</div>;

  return (
    <>
      <Flex wrap='wrap' mx='x16'>
        {data.erc721Drops.map(
          ({
            editionMetadata,
            symbol,
            name,
            address,
            salesConfig,
          }: DropProps) => {
            if (editionMetadata != null)
              return (
                <Box key={`${address}`} mx='auto' mt='x24'>
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
};
