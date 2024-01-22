import '@testing-library/jest-dom'

jest.mock('../../env/env', () => ({
  apiUrl: 'http://localhost:3002/',
}))

jest.mock('../../proxy.ts', () => ({}))

jest.mock('axios')

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}))

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}))
