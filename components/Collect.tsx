import {
  Box,
  Button,
  Eyebrow,
  Modal,
  ModalContent,
  Paragraph,
  Flex,
} from '@zoralabs/zord';

import { collectButton } from 'styles/styles.css';

import { useContractWrite } from 'wagmi';

import { ethers, BigNumber } from 'ethers';

import ERC721Drop from '../abi/ERC721Drop.json';

import { useConnectedBalance } from 'hooks/useConnectedBalance';

export const Collect = ({
  address,
  symbol,
  publicSalePrice,
}) => {
  const pricePerMint = publicSalePrice.toString();

  const pricePerMintinETH = ethers.utils
    .formatUnits(publicSalePrice)
    .toString();

  const { write, error } = useContractWrite({
    mode: 'recklesslyUnprepared',
    addressOrName: address,
    contractInterface: ERC721Drop,
    functionName: 'purchase',
    args: ['1'],
    overrides: {
      value: pricePerMint,
    },
    onError(error) {
      console.log('price:', pricePerMint);
      return (
        <Eyebrow>
          Please make sure you have enough ETH in your
          wallet to complete this transaction
        </Eyebrow>
      );
    },
  });

  return (
    <Modal
      trigger={
        <Button variant='unset'>
          <Eyebrow className={collectButton}>
            Collect
          </Eyebrow>
        </Button>
      }
    >
      <ModalContent title='Collect modal'>
        <Box>
          <Flex wrap='wrap'>
            <Eyebrow w='100%'>
              Purchase an edition of ${symbol}
            </Eyebrow>
            <Paragraph mt='x2' size='xl'>
              {pricePerMintinETH} ETH
            </Paragraph>
          </Flex>
          <Button
            onClick={() => write?.()}
            w='100%'
            variant='secondary'
            mt='x8'
          >
            <Eyebrow>Collect Edition</Eyebrow>
          </Button>
        </Box>
      </ModalContent>
    </Modal>
  );
};
