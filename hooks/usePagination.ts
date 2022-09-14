import { useState, useCallback, useEffect, SetStateAction, Dispatch } from 'react'

type Pagination = {
  page: number
  limit: number
  skip: number
  setPage: Dispatch<SetStateAction<number>>
  setSkip: Dispatch<SetStateAction<number>>
  setLimit: Dispatch<SetStateAction<number>>
  handleLoadMore: () => void
}

const LIMIT = 24

const usePagination = (initLimit = LIMIT): Pagination => {
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(initLimit)
  const [skip, setSkip] = useState(0) // offset

  // Update the offset 
  useEffect(() => {
    setSkip(page * limit)
  }, [page, limit])


  // Increment the page number
  const handleLoadMore = useCallback(() => {
    setPage(page + 1)
  }, [page])

  return { page, limit, skip, setPage, setLimit, setSkip, handleLoadMore }
}

export default usePagination
