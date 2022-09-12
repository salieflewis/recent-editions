import { newDrops } from '../gql/queries.js';
import { useQuery } from '@apollo/client';
import { Flex, Box } from '@zoralabs/zord';
import { NFTCard } from '../components/NFTCard';
import {
  useInView,
  InView,
} from 'react-intersection-observer';
import { atoms } from '@zoralabs/zord';

export function Feed() {
  // const { ref, inView, entry } = useInView({
  //   threshold: 0,
  // });
  const length = 0;
  const { loading, error, data, fetchMore } = useQuery(
    newDrops,
    {
      variables: {
        first: 16,
        skip: 0,
      },
    }
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! ${error.message}</div>;

  return (
    <>
      <Flex
        wrap='wrap'
        // gap='x16'
        mx='x16'
      >
        {data &&
          data.erc721Drops.map(
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
                      publicSalePrice={
                        salesConfig.publicSalePrice
                      }
                    />
                  </Box>
                );
            }
          )}

        <InView
          onChange={async (inView) => {
            if (inView) {
              await fetchMore({
                variables: {
                  first: 4,
                  skip: 0,
                },
              });
              console.log('Hello');
            }
          }}
        />
      </Flex>

      {/* <div>
        <p>{`In  View: ${inView}.`}</p>
      </div> */}
      <div className={atoms({ mt: 'x16' })} />
    </>
  );
}
