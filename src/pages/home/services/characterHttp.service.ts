import HttpClient from '@/services/httpClient.service'

import { PaginationResponse } from '@/models/paginationResponse.model'
import { PaginationDto } from '@/dtos/pagination.dto'
import { Character } from '@/pages/home/models/character.model'

class CharacterHttpService {
  private http: HttpClient

  constructor() {
    this.http = new HttpClient()
  }

  async findAllFeaturedCharacters(): Promise<Character[]> {
    const response =
      await this.http.get<Character[]>('character/featured')
    return response
  }

  async findAllCharacters(dto: PaginationDto): Promise<PaginationResponse<Character[]>> {
    const response =
      await this.http.get<PaginationResponse<Character[]>>(`character?page=${dto.page}&limit=${dto.limit}`)
    return response
  }
}

export default CharacterHttpService
