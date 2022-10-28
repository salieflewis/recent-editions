import { Flex, Eyebrow, Heading } from '@zoralabs/zord';
import { PopUpFilter } from './PopUpFilter';
import { ConnectKitButton } from 'connectkit';
import { useRouter } from 'next/router';
import { headingWrapper, linkWrapper } from 'styles/styles.css';

export function Header() {
  const router = useRouter();

  return (
    <Flex className={headingWrapper}>
      <Flex mx='x8' align='center'>
        <PopUpFilter />
      </Flex>

      <Flex mx='x8' align='center'>
        <ConnectKitButton />
      </Flex>
    </Flex>
  );
}
