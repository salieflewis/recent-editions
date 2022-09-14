import type { NextPage } from 'next';
import { AllDrops } from '../components/AllDrops';
import Layout from 'components/Layout';
import React from 'react'
import { useState } from 'react';
import { Box, Button } from '@zoralabs/zord';
import FreeDrops from '../components/FreeDrops';

export enum EditionFilterTypes {
  ALL = 'ALL',
  FREE = 'FREE',
}

export enum SortTypes {
  LATEST = 'Latest',
  OLDEST = 'Earliest',
}

const Home: NextPage = () => {
  const [filter, setFilter] = useState<EditionFilterTypes>(EditionFilterTypes.ALL)
  const [sorting, setSorting] = useState<SortTypes>(SortTypes.LATEST)
  return (
    <Layout>
      <Box pt='x20'>
        <Button onClick={() => setFilter(EditionFilterTypes.ALL)}>All</Button>
        <Button onClick={() => setFilter(EditionFilterTypes.FREE)}>Free</Button>
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
