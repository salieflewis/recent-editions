import {
  Box,
  Button,
  Eyebrow,
  Modal,
  ModalContent,
  Heading,
  Flex,
  Icon,
} from '@zoralabs/zord';
import { ConnectKitButton } from 'connectkit';
import { mintButton, linkWrapper } from 'styles/styles.css';
import { usePrepareContractWrite, useContractWrite, useAccount } from 'wagmi';
import { BigNumber, ethers } from 'ethers';
import { ERC721Drop } from '../abi/ERC721Drop';

type CollectProps = {
  address: string;
  symbol: string;
  publicSalePrice: number;
};

export const Collect = ({ address, symbol, publicSalePrice }: CollectProps) => {
  const pricePerMintinETH = ethers.utils.formatUnits(publicSalePrice);
  const totalPurchasePrice = BigNumber.from(publicSalePrice);
  const mintQuantity = BigNumber.from('1');

  const { config, error } = usePrepareContractWrite({
    addressOrName: address,
    contractInterface: ERC721Drop,
    functionName: 'purchase',
    args: [mintQuantity],
    overrides: {
      value: totalPurchasePrice,
    },
  });

  const { write } = useContractWrite(config);

  const { isDisconnected } = useAccount();

  return (
    <Modal
      trigger={
        <Box my='x4' className={mintButton}>
          <Eyebrow>Mint</Eyebrow>
        </Box>
      }
    >
      <ModalContent title='Mint modal'>
        {isDisconnected ? (
          <Flex mt='x8' mb='x4' justify='center' mx='auto'>
            <ConnectKitButton />
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
                    href={'https://create.zora.co/editions/' + address}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Eyebrow className={linkWrapper}>
                      View on create.zora.co
                    </Eyebrow>
                  </a>
                  <Icon size='sm' id='ArrowRightAngle' pl='x2' />
                </Flex>
              </Button>
            </Flex>
            <Button
              onClick={() => write?.()}
              w='100%'
              variant='secondary'
              mt='x8'
            >
              <Eyebrow>Mint Edition</Eyebrow>
            </Button>
          </Box>
        )}
      </ModalContent>
    </Modal>
  );
};
