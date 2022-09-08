import {
  Box,
  Button,
  Flex,
  Eyebrow,
  Label,
  Tag,
} from '@zoralabs/zord';
import { IpfsImage } from 'react-ipfs-image';

import {
  cardWrapper,
  imageWrapper,
  cardTitle,
} from 'styles/styles.css';

import { Collect } from './Collect';

export const NFTCard = ({
  editionMetadata,
  symbol,
  name,
  address,
  publicSalePrice,
}) => {
  return (
    <Box className={cardWrapper}>
      <Box>
        <IpfsImage
          className={imageWrapper}
          hash={editionMetadata.imageURI}
          gatewayUrl='https://zora-dev.mypinata.cloud/ipfs'
        />
        {/* <Box mx='x3' mb='x3' maxW='x64'> */}
        <Box mx='x3' my='x2' maxW='x64'>
          <Flex justify='space-between' align='center'>
            <Label size='sm' className={cardTitle}>
              {name}
            </Label>
            <Tag active={true}>${symbol}</Tag>
          </Flex>

          <Collect
            address={address}
            publicSalePrice={publicSalePrice}
            symbol={symbol}
          />
        </Box>
      </Box>
    </Box>
  );
};
