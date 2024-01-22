import { createSlice, isAnyOf } from '@reduxjs/toolkit'

import { PaginationResponse } from '@/models/paginationResponse.model'
import { Character } from '@/pages/home/models/character.model'
import { findAllCharacters } from '@/redux/actions/character.action'

export interface CharacterEmptyState extends PaginationResponse<Character[]> {
  loading: boolean
}

export const CharacterEmptyState: CharacterEmptyState = {
  count: 0,
  pages: 0,
  next: null,
  prev: null,
  results: [],
  loading: false,
}

export const characterSlice = createSlice({
  name: 'character',
  initialState: CharacterEmptyState,
  reducers: {
    resetCharacters: () => CharacterEmptyState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(findAllCharacters.pending), (state) => {
        return {
          ...state,
          info: {
            ...state.info,
          },
          results: [],
          loading: true,
        }
      })
      .addMatcher(isAnyOf(findAllCharacters.fulfilled), (state, action) => {
        return {
          ...state,
          count: action.payload.count,
          pages: action.payload.pages,
          next: action.payload.next,
          prev: action.payload.prev,
          results: action.payload.results,
          loading: false,
        }
      })
  },
})

export const { resetCharacters } = characterSlice.actions

export default characterSlice.reducer
