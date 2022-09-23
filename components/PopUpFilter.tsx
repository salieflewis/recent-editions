import { PopUp, Button, Stack, Text, Icon, Flex } from '@zoralabs/zord';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { linkWrapper, activeLinkWrapper } from 'styles/styles.css';

export const PopUpFilter = () => {
  const router = useRouter();

  return (
    <PopUp
      padding='x2'
      trigger={
        <Button
          variant='secondary'
          borderRadius='round'
          size='md'
          icon='ChevronDown'
        >
          {router.asPath === '/feed/latest' ? 'Latest' : 'Free'}
        </Button>
      }
    >
      <Stack w='x64'>
        <Link href='/feed/latest'>
          <Button
            variant='ghost'
            w='100%'
            display='flex'
            justify='space-between'
            style={{
              whiteSpace: 'nowrap',
            }}
          >
            <a
              className={
                router.asPath == '/feed/latest'
                  ? activeLinkWrapper
                  : linkWrapper
              }
            >
              Latest
            </a>
          </Button>
        </Link>

        <Link href='/feed/free'>
          <Button
            variant='ghost'
            w='100%'
            display='flex'
            justify='space-between'
            style={{
              whiteSpace: 'nowrap',
            }}
          >
            <a
              className={
                router.asPath == '/feed/free' ? activeLinkWrapper : linkWrapper
              }
            >
              Free
            </a>
          </Button>
        </Link>
      </Stack>
    </PopUp>
  );
};
