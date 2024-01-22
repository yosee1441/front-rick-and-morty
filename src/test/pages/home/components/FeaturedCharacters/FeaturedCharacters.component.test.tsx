import { render, screen } from '@testing-library/react'
import * as reactRedux from 'react-redux'

import { mockfindAllFeaturedCharacter } from '../../../../mocks/character'
import { FeaturedCharacters } from '@/pages/home/components/FeaturedCharacters'

const useSelectorMock = reactRedux.useSelector as unknown as jest.Mock
const useDispatchMock = reactRedux.useDispatch as unknown as jest.Mock

describe('Testing in FeaturedCharacters', () => {
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {})
    useSelectorMock.mockImplementation((selector: any) =>
      selector({
        featuredCharacter: {
          ...mockfindAllFeaturedCharacter,
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

  it('should render FeaturedCharacters', () => {
    render(<FeaturedCharacters />)

    expect(screen)
  })
})
