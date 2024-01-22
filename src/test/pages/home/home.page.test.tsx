import { render, screen } from '@testing-library/react';
import * as reactRedux from 'react-redux'

import {
  mockFindAllCharacter,
  mockfindAllFeaturedCharacter,
} from '../../mocks/character'
import { HomePage } from '@/pages/home'

const useSelectorMock = reactRedux.useSelector as unknown as jest.Mock
const useDispatchMock = reactRedux.useDispatch as unknown as jest.Mock

describe('Testing in HomePage', () => {
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {})
    useSelectorMock.mockImplementation((selector: any) =>
      selector({
        featuredCharacter: {
          ...mockfindAllFeaturedCharacter,
          loading: false,
        },
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
    jest.clearAllMocks();
  })

  it('should render HomePage', () => {
    render(<HomePage />)

    expect(screen)
  })

  it('should show title characters', () => {
    render(<HomePage />)

    expect(screen.getByText('Characters')).toBeInTheDocument()
  })
})
