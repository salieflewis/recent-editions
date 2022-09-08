import {
  Box,
  Button,
  Eyebrow,
  Modal,
  ModalContent,
  Paragraph,
  Heading,
  Flex,
  Tag,
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
        <Box
          as={Button}
          my='x4'
          variant='outline'
          className={collectButton}
        >
          <Eyebrow>Collect</Eyebrow>
        </Box>
      }
    >
      <ModalContent title='Collect modal'>
        <Box>
          <Flex wrap='wrap'>
            <Eyebrow w='100%' mt='x6'>
              Purchase an edition of ${symbol}
            </Eyebrow>
            <Heading mt='x2' size='xs'>
              {pricePerMintinETH} ETH
            </Heading>
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
