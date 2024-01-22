import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { FeaturedCharacters } from '@/pages/home/components/FeaturedCharacters'
import { Characters } from '@/pages/home/components/Characters'

function HomePage() {
  return (
    <Container>
      <FeaturedCharacters />
      <Grid
        container
        spacing={2}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h3" component="h2" align="center">
            Characters
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Characters />
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomePage
