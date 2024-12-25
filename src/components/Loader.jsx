import Grid from '@mui/material/Grid2';
import CircularProgress from '@mui/material/CircularProgress';
function Loader() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <CircularProgress />
    </Grid>
  )
}

export default Loader
