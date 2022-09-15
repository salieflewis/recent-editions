import request from "graphql-request";
import { SubgraphERC721Drop } from "models/subgraph";
import { useMemo, useCallback } from 'react';
import useSWRInfinite from 'swr/infinite';
import { LIMIT } from "utils/constants";

export type DropList = {
  erc721Drops: SubgraphERC721Drop[]
}

// Fetcher
const dropsFetcher = (query: string, limit: number, offset: number, pageIndex: number) => request('https://api.thegraph.com/subgraphs/name/iainnash/zora-editions-mainnet', query, { limit, offset, pageIndex })

export function useInfiniteScroll<S>(query: string) {
  // A function to get the SWR key of each page,
  // its return value will be accepted by `fetcher`.
  // If `null` is returned, the request of that page won't start.
  const getKey = (pageIndex: number, previousPageData: DropList) => {
    if (query === '') return null;
    if (previousPageData && !previousPageData?.erc721Drops.length) return null // reached the end
    const offset = pageIndex * LIMIT
    return [query, LIMIT, offset, pageIndex]                  // SWR key
  }

  const { data, size, error, setSize, isValidating } = useSWRInfinite<S>(getKey, dropsFetcher);

  const isLoadingInitialData = !data && !error
  const isLoadingMore =
    isLoadingInitialData ||
    (isValidating && size > 1 && data && typeof data[size - 1] === 'undefined');

  // Increment the size number
  const handleLoadMore = useCallback(() => {
    setSize(size + 1)
  }, [size])

  // flatten the pages
  const flat = useMemo(() => {
    if (!isNaN(data as any))
      return [];
    return data?.map(page => page as S[])
      ?.flat(1)
  }, [data])

  return { data: flat, loading: !!isLoadingMore, error, handleLoadMore };
}

