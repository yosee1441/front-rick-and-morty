const { makeApiRequest } = require('../utils/util')

const mockFavorite = {
  id: 1,
  userId: 1,
  characterId: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
}

module.exports = (request, response) => {
  return makeApiRequest().then(() => {
    return response.status(201).json(mockFavorite)
  })
}
