import { Box, Flex, Eyebrow, atoms } from '@zoralabs/zord';

import { ConnectKitButton } from 'connectkit';

import {
  headingWrapper,
  linkWrapper,
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
      <Box mx='x8'>
        <ConnectKitButton />
      </Box>
    </Flex>
  );
}
