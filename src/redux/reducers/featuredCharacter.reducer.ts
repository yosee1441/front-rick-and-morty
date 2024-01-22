import { createSlice, isAnyOf } from '@reduxjs/toolkit'

import { Character } from '@/pages/home/models/character.model'
import { findAllFeaturedCharacters } from '@/redux/actions/featuredCharacter.action'

export const FeatureCharacterEmptyState = {
  results: [] as Character[],
  loading: false,
}

export const featuredCharacterSlice = createSlice({
  name: 'featuredCharacter',
  initialState: FeatureCharacterEmptyState,
  reducers: {
    resetFeaturedCharacters: () => FeatureCharacterEmptyState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(findAllFeaturedCharacters.pending), (state) => {
        return {
          ...state,
          results: [],
          loading: true,
        }
      })
      .addMatcher(isAnyOf(findAllFeaturedCharacters.fulfilled), (state, action) => {
        return {
          ...state,
          results: action.payload,
          loading: false,
        }
      })
  },
})

export const { resetFeaturedCharacters } = featuredCharacterSlice.actions

export default featuredCharacterSlice.reducer
