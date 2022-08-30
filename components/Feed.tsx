import { newDrops } from '../gql/queries.js';
import { useQuery } from '@apollo/client';
import { IpfsImage } from 'react-ipfs-image';

import { cardWrapper } from 'styles/styles.css';
import { atoms, Flex, Box } from '@zoralabs/zord';

export function Feed() {
  const { loading, error, data } = useQuery(newDrops);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! ${error.message}</div>;

  console.log(data);

  return (
    <Flex wrap='wrap' gap='x12'>
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
                mx='auto' mt='x24'
              >
                <a
                  href={
                    'https://create.zora.co/editions/' +
                    address
                  }
                  target='_blank'
                  rel='noreferrer'
                >
                  <IpfsImage
                    className={cardWrapper}
                    hash={editionMetadata.imageURI}
                    gatewayUrl='https://zora-dev.mypinata.cloud/ipfs'
                  />
                </a>
              </Box>
            );
        }
      )}
    </Flex>
  );
}
