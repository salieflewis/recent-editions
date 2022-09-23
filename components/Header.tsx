import { Flex, Eyebrow } from '@zoralabs/zord';
import { CustomConnect } from './CustomConnect';
import { PopUpFilter } from './PopUpFilter';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  headingWrapper,
  linkWrapper,
  connectButtonStyle,
  activeLinkWrapper,
} from 'styles/styles.css';

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
        <CustomConnect title={'Connect Wallet'} />
      </Flex>
    </Flex>
  );
}
