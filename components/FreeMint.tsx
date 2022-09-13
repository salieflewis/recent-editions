import { PopUp, Box, Button } from '@zoralabs/zord';
import { useLazyQuery } from '@apollo/client';
import { FREE_DROPS } from 'gql/queries';

export const FreeMint = () => {
  const [loadNfts, { loading, called, data }] =
    useLazyQuery(FREE_DROPS);

  console.log(data)
  return (
    <PopUp>
      <Box>
        <Button onClick={() => loadNfts()} variant='unset'>
          Free mints
        </Button>
      </Box>
    </PopUp>
  );
};
