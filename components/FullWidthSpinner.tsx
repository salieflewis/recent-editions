import { Box, SpinnerOG } from '@zoralabs/zord'
import React from 'react'

const FullWidthSpinner = () => {
  return (
    <Box width='100%' mt='x5' style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
      <SpinnerOG />
    </Box>
  )
}

export default FullWidthSpinner
