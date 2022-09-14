import type { NextPage } from 'next';
import { AllDrops } from '../components/AllDrops';
import Layout from 'components/Layout';
import React, { useCallback, useRef } from 'react'
import { useState } from 'react';
import { Box, Button, Flex, Icon, PopUp, Stack, Text } from '@zoralabs/zord';
import FreeDrops from '../components/FreeDrops';
import { filters } from 'styles/styles.css';
// import { useKeyPress } from '@shared';
import { DEFAULT_FILTER_OPTIONS } from '../utils/constants';
import { filterWrapper } from '../styles/styles.css';

export enum EditionFilterTypes {
  ALL = 'ALL',
  FREE = 'FREE',
}

export enum SortTypes {
  LATEST = 'Latest',
  OLDEST = 'Earliest',
}

const Home: NextPage = () => {
  const dropdownRef = useRef(null)
  const [open, setOpen] = useState<boolean>(false)
  const [dropdownEnabled, setDropdownEnabled] = useState<boolean>(true)
  const [filter, setFilter] = useState<EditionFilterTypes>(EditionFilterTypes.ALL)
  const [sorting, setSorting] = useState<SortTypes>(SortTypes.LATEST)

  const openDropdown = useCallback(
    () => dropdownEnabled && setOpen(true),
    [dropdownEnabled]
  )

  return (
    <Layout>
      <Box className={filterWrapper}>
        <PopUp padding='x2'
          trigger={<Button
            variant="secondary"
            borderRadius='phat'
            size="sm"
            icon="ChevronDown"
            offsetY={40}
            onClick={() => setOpen(true)}
            className={['sort-dropdown', filters]}

          >
            {filter}
          </Button>}>
          <Stack aria-label="Sort Dropdown" w="x64">
            {DEFAULT_FILTER_OPTIONS.map((option) => (
              <Button
                variant="ghost"
                w="100%"
                display="flex"
                justify="space-between"
                style={{
                  whiteSpace: 'nowrap',
                }}
                key={option.value}
                onClick={() => setFilter(option.value)}
              >
                <Text as="span" pr="x10">
                  {option.label}
                </Text>
                {option.value === filter && <Icon id="Plus" size="sm" />}
              </Button>
            ))}
          </Stack>
        </PopUp>
      </Box>
      {
        filter === EditionFilterTypes.FREE ?
          <FreeDrops filter={filter} sorting={sorting} /> :
          <AllDrops filter={filter} sorting={sorting} />
      }
    </Layout>
  );
};

export default Home;
