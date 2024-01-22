import { Species } from '@/utils/enums'

import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

interface CardCharacterProps {
  image: string
  name: string
  species: string
  originName: string
}

function CardCharacter({
  image,
  name,
  species,
  originName,
}: CardCharacterProps): JSX.Element {
  return (
    <Card sx={{ position: 'relative' }}>
      <CardMedia component="img" height="220" image={image} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="p">
          {`${name} `}
          <Chip
            label={species === Species.HUMAN ? 'recomendado' : 'no recomendado'}
            color={species === Species.HUMAN ? 'success' : 'primary'}
          />
        </Typography>
        <Typography variant="body2" color="text.secondary" component="p">
          {originName}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardCharacter
