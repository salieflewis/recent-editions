import { newDrops } from '../gql/queries.js';
import { useQuery } from '@apollo/client';
import { IpfsImage } from 'react-ipfs-image';

import { atoms, Flex } from '@zoralabs/zord';

export function Feed() {
  const { loading, error, data } = useQuery(newDrops);

  if (loading) return <div>'Loading...'</div>;
  if (error) return <div>`Error! ${error.message}`</div>;

  console.log(data);

  return (
    <div>
      <Flex wrap='wrap' gap='x4'>
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
                <div
                  key={`${editionMetadata.imageURI}-${name}`}
                  className='mx-auto my-16'
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
                      className={atoms({
                        size: ['x64', 'x64'],
                        borderRadius: 'curved',
                      })}
                      //   className='transform object-contain hover:transition duration-500 hover:scale-105 m-10 p-4 h-72 w-72 md:h-96 w-96'
                      hash={editionMetadata.imageURI}
                      gatewayUrl='https://zora-dev.mypinata.cloud/ipfs'
                    />
                  </a>
                </div>
              );
          }
        )}
      </Flex>
    </div>
  );
}
