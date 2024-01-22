import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppThunkDispatch, RootState } from '@/redux/reducers/root.reducer'

import { findAllCharacters } from '@/redux/actions/character.action'
import { Character } from '@/pages/home/models/character.model'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination'
import { Loading } from '@/components/Loading'
import { CardCharacter } from '@/components/CardCharacter'

function Characters() {
  const [page, setPage] = useState<number>(1)

  const characterLoading = useSelector<RootState, boolean>(
    (state) => state.character.loading,
  )
  const character = useSelector<RootState, Character[] | null>(
    (state) => state.character.results,
  )
  const characterPaginationPages = useSelector<RootState, number>(
    (state) => state.character.pages,
  )

  const dispatch = useDispatch<AppThunkDispatch>()

  useEffect(() => {
    dispatch(findAllCharacters({ page, limit: 20 }))
  }, [page])

  return (
    <Grid container spacing={2} alignItems={'center'}>
      {characterLoading && (
        <Grid item xs={12} sm={12} md={12}>
          <Loading />
        </Grid>
      )}
      {!characterLoading && (
        <>
          {character?.map((character) => (
            <Grid item xs={12} sm={12} md={4} key={character.id}>
              <CardCharacter
                image={character.jsonbRickAndMorty.image}
                name={character.jsonbRickAndMorty.name}
                species={character.jsonbRickAndMorty.species}
                originName={character.jsonbRickAndMorty.origin.name}
              />
            </Grid>
          ))}
          <Grid item xs={12} sm={12} md={12}>
            <Box
              display={'flex'}
              justifyContent={'center'}
              paddingTop={4}
              paddingBottom={6}
            >
              <Pagination
                count={characterPaginationPages}
                page={page}
                onChange={(event: ChangeEvent<unknown>, value: number) =>
                  setPage(value)
                }
              />
            </Box>
          </Grid>
        </>
      )}
    </Grid>
  )
}

export default Characters
