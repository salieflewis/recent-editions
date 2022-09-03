import {
  Box,
  Button,
  Flex,
  Eyebrow,
  Paragraph,
} from '@zoralabs/zord';
import { IpfsImage } from 'react-ipfs-image';

import {
  cardWrapper,
  imageWrapper,
} from 'styles/styles.css';

import { Collect } from './Collect'


export const NFTCard = ({
  editionMetadata,
  symbol,
  name,
  address,
  publicSalePrice,
}) => {
  return (
    <Box className={cardWrapper}>
      <Box p='x2'>
        <IpfsImage
          className={imageWrapper}
          hash={editionMetadata.imageURI}
          gatewayUrl='https://zora-dev.mypinata.cloud/ipfs'
        />
        <Box maxW='x64'>
          <Flex justify='space-between'>
            <Eyebrow>${symbol}</Eyebrow>
            <Collect
              address={address}
              publicSalePrice={publicSalePrice}
              symbol={symbol}
            />
          </Flex>
          <Paragraph mt='x2' size='lg'>
            {name}
          </Paragraph>
        </Box>
      </Box>
    </Box>
  );
};
