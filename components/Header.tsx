import {
  Box,
  Flex,
  Eyebrow,
  PopUp,
  Label,
  Paragraph,
} from '@zoralabs/zord';

import { CustomConnect } from './CustomConnect';

import { Button } from '@zoralabs/zord';

import {
  headingWrapper,
  linkWrapper,
  connectButtonStyle,
} from 'styles/styles.css';

export function Header() {
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
      <Flex gap='x6' mx='x8' align='center'>
        <CustomConnect title={'Connect Wallet'} />
      </Flex>
    </Flex>
  );
}
