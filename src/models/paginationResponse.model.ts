export interface PaginationResponse<T> {
  count: number
  pages: number
  next: boolean | null
  prev: boolean | null
  results: T
}
