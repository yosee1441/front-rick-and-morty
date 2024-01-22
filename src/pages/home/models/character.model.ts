export interface Character {
  id: number
  jsonbRickAndMorty: JsonbRickAndMorty
  createdAt: string
  updatedAt: string
  deletedAt?: string | null
  favoriteCharacters: FavoriteCharacter[]
}

export interface FavoriteCharacter {
  id: number
  isFavorite: boolean
  createdAt: string
  updatedAt: string
  deletedAt?: string | null
}

interface JsonbRickAndMortyOrigin {
  url: string
  name: string
}

interface JsonbRickAndMorty {
  id: number
  url: string
  name: string
  type: string
  image: string
  gender: string
  origin: JsonbRickAndMortyOrigin
  status: string
  created: string
  episode: string[]
  species: string
  location: JsonbRickAndMortyOrigin
}
