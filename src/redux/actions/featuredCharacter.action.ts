import { createAsyncThunk } from '@reduxjs/toolkit'

import CharacterHttpService from '@/pages/home/services/characterHttp.service'

export const findAllFeaturedCharacters = createAsyncThunk(
  'featuredCharacter/findAllFeaturedCharacters',
  async () => {
    const characterHttpService = new CharacterHttpService()
    const response = await characterHttpService.findAllFeaturedCharacters()
    return response
  },
)
