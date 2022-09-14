// import { useInView } from 'react-intersection-observer'
import { InView } from 'react-intersection-observer';

// Components
import { NFTCard } from '../components/NFTCard';
import { Flex, Box, SpinnerOG } from '@zoralabs/zord';

// Query
import useSWR from 'swr'
import request from 'graphql-request';
import { GET_FREE_DROPS } from '../gql/queries'
// Fetcher
const dropsFetcher = (query, first, skip) => request('https://api.thegraph.com/subgraphs/name/iainnash/zora-editions-mainnet', query, { first, skip })

// Utils
import { getOrderBy } from 'utils/subgraph';

// Hooks
import { useState, useEffect, useMemo } from 'react'
import usePagination from 'hooks/usePagination'

const FreeDrops = ({ filter, sorting }) => {
  const [drops, setDrops] = useState([])
  const orderBy = useMemo(() => getOrderBy('editions', sorting), [sorting])
  // const { ref, inView } = useInView()

  // GQL Pagination
  const { page, limit, setPage, skip, handleLoadMore } = usePagination()

  // Get drops data
  const first = limit // store limit as `first` for the subgraph
  const { data: dropsData, error: fetchDropsError } = useSWR(
    [GET_FREE_DROPS, first, skip],
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
    <Box width='100%' mt='x5' justifySelf='center'>
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
            <Flex
              wrap='wrap'
              mx='x16'
            >
              {
                drops?.map(({ name, address, owner, symbol, editionMetadata, salesConfig }) => {
                  if (editionMetadata != null)
                    return (
                      <Box
                        key={`${editionMetadata.imageURI}-${name}`}
                        mx='auto'
                        mt='x24'
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
            </Flex>

          )
      }
    </>
  );
}

export default FreeDrops