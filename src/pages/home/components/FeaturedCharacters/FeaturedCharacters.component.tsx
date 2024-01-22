import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppThunkDispatch, RootState } from '@/redux/reducers/root.reducer'

import { findAllFeaturedCharacters } from '@/redux/actions/featuredCharacter.action'
import { Character } from '@/pages/home/models/character.model'

import Carousel from 'react-alice-carousel'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Loading } from '@/components/Loading'
import { CardCharacter } from '@/components/CardCharacter'

function FeaturedCharacters() {
  const featuredCharacterLoading = useSelector<RootState, boolean>(
    (state) => state.featuredCharacter.loading,
  )
  const featuredCharacter = useSelector<RootState, Character[] | null>(
    (state) => state.featuredCharacter.results,
  )

  const dispatch = useDispatch<AppThunkDispatch>()

  useEffect(() => {
    dispatch(findAllFeaturedCharacters())
  }, [])

  return (
    <Grid
      container
      spacing={2}
      justifyContent={'center'}
      alignItems={'center'}
      paddingY={4}
    >
      {featuredCharacterLoading && (
        <Grid item xs={12} sm={12} md={12}>
          <Loading />
        </Grid>
      )}
      {!featuredCharacterLoading && (
        <>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h3" component="h2" align="center">
              Featured Characters
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Carousel
              mouseTracking
              disableButtonsControls={true}
              items={featuredCharacter?.map((character) => (
                <Box component="section" key={character.id} paddingX={1}>
                  <CardCharacter
                    image={character.jsonbRickAndMorty.image}
                    name={character.jsonbRickAndMorty.name}
                    species={character.jsonbRickAndMorty.species}
                    originName={character.jsonbRickAndMorty.origin.name}
                  />
                </Box>
              ))}
              responsive={{
                0: { items: 1 },
                568: { items: 2 },
                1024: { items: 3 },
              }}
            ></Carousel>
          </Grid>
        </>
      )}
    </Grid>
  )
}

export default FeaturedCharacters
