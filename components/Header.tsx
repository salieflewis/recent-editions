import { Flex, Eyebrow } from '@zoralabs/zord';
import { CustomConnect } from './CustomConnect';
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

      <Flex gap='x12' mx='x8' align='center'>
        <Link href='/feed/latest'>
          <Eyebrow>
            <a className={router.asPath == '/feed/latest' ? activeLinkWrapper : linkWrapper}>Latest</a>
          </Eyebrow>
        </Link>
        <Link href='/feed/free'>
          <Eyebrow>
            <a className={router.asPath == '/feed/free' ? activeLinkWrapper : linkWrapper}>Free</a>
          </Eyebrow>
        </Link>
        <CustomConnect title={'Connect Wallet'} />
      </Flex>
    </Flex>
  );
}
