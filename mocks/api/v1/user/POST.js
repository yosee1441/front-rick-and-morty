const { makeApiRequest } = require('../utils/util')

const mockUser = {
  id: 1,
  email: 'mauricioft93@gmail.com',
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
}

module.exports = (request, response) => {
  return makeApiRequest().then(() => {
    return response.status(201).json(mockUser)
  })
}
