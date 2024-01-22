import { render, screen } from '@testing-library/react'
import * as reactRedux from 'react-redux'

import { mockFindAllCharacter } from '../../../../mocks/character'
import { Characters } from '@/pages/home/components/Characters'

const useSelectorMock = reactRedux.useSelector as unknown as jest.Mock
const useDispatchMock = reactRedux.useDispatch as unknown as jest.Mock

describe('Testing in Characters', () => {
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {})
    useSelectorMock.mockImplementation((selector: any) =>
      selector({
        character: {
          ...mockFindAllCharacter,
          loading: false,
        },
      }),
    )
  })

  afterEach(() => {
    useDispatchMock.mockClear()
    useSelectorMock.mockClear()
    jest.clearAllMocks()
  })

  it('should render Characters', () => {
    render(<Characters />)

    expect(screen)
  })

  it('should show name character Rick Sanchez', async () => {
    render(<Characters />)
    const name = screen.getByText(/Rick Sanchez/i)
    expect(name).toBeInTheDocument()
  })
})
