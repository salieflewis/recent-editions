
// Components
import { NFTCard } from '../components/NFTCard';
import FullWidthSpinner from './FullWidthSpinner';
import { InView } from 'react-intersection-observer';
import { Box, Grid } from '@zoralabs/zord';

// Query
import { GET_NEW_DROPS } from '../gql/queries'

// Utils
import { feedWrapper } from 'styles/styles.css';
// import { getOrderBy } from 'utils/subgraph';

// Hooks
import { DropList, useInfiniteScroll } from '../hooks/useInfiniteScroll';

const AllDrops = ({ filter, sorting }) => {

  const { data, error, handleLoadMore } = useInfiniteScroll<DropList>(GET_NEW_DROPS)
  return (
    <>
      {
        !data ? (
          <FullWidthSpinner />
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
                  data.map((page) => {
                    //  data is an array of each page's api response
                    return page.erc721Drops.map(({ name, address, owner, symbol, editionMetadata, salesConfig }) => {
                      if (editionMetadata != null)
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
                  })
                }
                <InView
                  onChange={(inView) => {
                    if (inView) handleLoadMore()
                  }}
                />
              </Grid>
            </Box>
          )
      }
    </>
  );
}

export default AllDrops