import { Flex, Eyebrow } from '@zoralabs/zord';
import { PopUpFilter } from './PopUpFilter';
import { ConnectKitButton } from 'connectkit';
import { useRouter } from 'next/router';
import { headingWrapper, linkWrapper } from 'styles/styles.css';

export function Header() {
  const router = useRouter();

  return (
    <Flex className={headingWrapper}>
      <Flex align='center' gap='x4'>
        <Eyebrow mx='x8'>
          Recent Editions from{' '}
          <a
            href='http://create.zora.co/'
            target='_blank'
            rel='noreferrer'
            className={linkWrapper}
          >
            create.zora.co
          </a>
        </Eyebrow>
        <PopUpFilter />
      </Flex>

      <Flex gap='x32' mx='x8' align='center'>
        <ConnectKitButton />
      </Flex>
    </Flex>
  );
}
