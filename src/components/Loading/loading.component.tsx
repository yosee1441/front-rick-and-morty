import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

function Loading() {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      height={'60vh'}
    >
      <CircularProgress />
    </Box>
  )
}

export default Loading
