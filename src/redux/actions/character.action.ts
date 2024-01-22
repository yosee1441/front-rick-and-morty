import { createAsyncThunk } from '@reduxjs/toolkit'

import CharacterHttpService from '@/pages/home/services/characterHttp.service'
import { PaginationDto } from '@/dtos/pagination.dto'

export const findAllCharacters = createAsyncThunk(
  'character/findAllCharacters',
  async (dto: PaginationDto) => {
    const characterHttpService = new CharacterHttpService()
    const response = await characterHttpService.findAllCharacters(dto)
    return response
  },
)
