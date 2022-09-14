// import { useInView } from 'react-intersection-observer'
import { InView } from 'react-intersection-observer';

// Components
import { NFTCard } from './NFTCard';
import { Box, SpinnerOG, Grid } from '@zoralabs/zord';

// Query
import useSWR from 'swr'
import request from 'graphql-request';
import { GET_NEW_DROPS } from '../gql/queries'

// Fetcher
const dropsFetcher = (query, first, skip) => request('https://api.thegraph.com/subgraphs/name/iainnash/zora-editions-mainnet', query, { first, skip })

// Hooks
import { useState, useEffect } from 'react'
import usePagination from 'hooks/usePagination'
import { feedWrapper } from 'styles/styles.css';

export function AllDrops({ filter, sorting }) {
  const [drops, setDrops] = useState([])
  // const { ref, inView } = useInView()

  // GQL Pagination
  const { page, limit, setPage, skip, handleLoadMore } = usePagination()

  // Get drops data
  const first = limit // store limit as `first` for the subgraph
  const { data: dropsData, error: fetchDropsError } = useSWR(
    [GET_NEW_DROPS, first, skip],
    dropsFetcher
  )

  // Set state
  useEffect(() => {
    let _drops = dropsData?.erc721Drops ?? []

    let returnedDrops = []

    // filter out duplicates or repeating items due to mutable nature of list
    returnedDrops = _drops.filter((d) => !drops.includes(d))

    if (page === 0) setDrops(returnedDrops)
    else setDrops([...drops, ...returnedDrops])
  }, [dropsData, page])

  // useEffect(() => {
  //   if (inView) {
  //     loadMore()
  //   }
  // }, [inView])

  // Reset page on new filter or sorting
  useEffect(() => {
    setPage(0)
  }, [filter, sorting])

  const fullWidthSpinner = (
    <Box width='100%' mt='x5' style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
      <SpinnerOG />
    </Box>
  )
  return (
    <>
      {
        !drops.length ? (
          fullWidthSpinner
        ) :
          (
            <Box className={feedWrapper}>
              <Grid
                wrap='wrap'
                px='x16'
                gap='x6'
                columns="repeat(auto-fill, minmax(240px, 1fr))"
              >
                {
                  drops?.map(({ name, address, owner, symbol, editionMetadata, salesConfig }) => {
                    if (editionMetadata !== null)
                      return (
                        <Box
                          key={`${editionMetadata.imageURI}-${name}`}
                        >
                          <NFTCard
                            editionMetadata={editionMetadata}
                            symbol={symbol}
                            name={name}
                            address={address}
                            publicSalePrice={
                              salesConfig.publicSalePrice
                            }
                          />
                        </Box>
                      );
                  })
                }
                <InView
                  onChange={(inView) => {
                    if (inView) {
                      handleLoadMore()
                    }
                  }}
                />
              </Grid>
            </Box>
          )
      }
    </>
  );
}


