import { Flex, Eyebrow } from '@zoralabs/zord';

import { headingWrapper, linkWrapper } from 'styles/styles.css';

export function Header() {
  return (
    <Flex className={headingWrapper}>
      <Eyebrow>
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
    </Flex>
  );
}
