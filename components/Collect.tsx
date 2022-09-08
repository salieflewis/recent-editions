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
  Label,
  Icon,
} from '@zoralabs/zord';

import { CustomConnect } from './CustomConnect';

import {
  collectButton,
  connectButtonStyle,
  linkWrapper,
} from 'styles/styles.css';

import { useContractWrite, useAccount } from 'wagmi';

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

  const { isDisconnected } = useAccount();

  function handleWrite() {
    if (isDisconnected)
      return (
        <>
          {console.log('This is working')}
          <Modal open={true}>
            <ModalContent>
              <Paragraph>Hello</Paragraph>
            </ModalContent>
          </Modal>
        </>
      );
  }

  return (
    <Modal
      trigger={
        <Box
          as={Button}
          my='x4'
          className={collectButton}
          variant='ghost'
        >
          <Eyebrow>Collect</Eyebrow>
        </Box>
      }
    >
      <ModalContent title='Collect modal'>
        {isDisconnected ? (
          <Flex mt='x8' mb='x4' justify='center' mx='auto'>
            <CustomConnect
              title={'Go ahead and connect your wallet'}
            />
          </Flex>
        ) : (
          <Box>
            <Flex wrap='wrap'>
              <Eyebrow w='100%' mt='x6'>
                Purchase an edition of ${symbol}
              </Eyebrow>
              <Heading w='100%' mt='x2' size='xs'>
                {pricePerMintinETH} ETH
              </Heading>
              <Button mt='x6' variant='unset'>
                <Flex align='center'>
                  <a
                    href={
                      'https://create.zora.co/editions/' +
                      address
                    }
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Eyebrow className={linkWrapper}>
                      View on create.zora.co
                    </Eyebrow>
                  </a>
                  <Icon
                    size='sm'
                    id='ArrowRightAngle'
                    pl='x2'
                  />
                </Flex>
              </Button>
            </Flex>
            <Button
              onClick={() => handleWrite()}
              w='100%'
              variant='secondary'
              mt='x8'
            >
              <Eyebrow>Collect Edition</Eyebrow>
            </Button>
          </Box>
        )}
      </ModalContent>
    </Modal>
  );
};
