import { EditionFilterTypes } from "./types"

// FETCH LIMIT
export const LIMIT = 24


// Sort options
export const LATEST = 'Latest'
export const OLDEST = 'Earliest'
export const ALL = 'All'
export const FREE = 'Free'
export const RECENTLY_TRADED = 'Recently traded'
export const DEFAULT_SORTING_OPTIONS = [
  LATEST,
  OLDEST,
]
export const DEFAULT_FILTER_OPTIONS = [
  { label: 'All', value: EditionFilterTypes.ALL },
  { label: 'Free', value: EditionFilterTypes.FREE }
]