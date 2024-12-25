import { Box, Button, Rating, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import OneDetail from "./OneDetail";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useContext } from "react";
import { FavListContext } from "../../../contexts/FavListContext";

// eslint-disable-next-line
function MovieDetails({ isFav, favFunc }) {
  const { movieObject } = useContext(FavListContext);
  // eslint-disable-next-line
  const { Title, Year, imdbRating, Country, Genre, Language, Plot, Runtime } = movieObject;
  const { shadows } = useTheme();
  return (
    <Box sx={{ marginBottom: "25px" }}>
      <Typography variant="h4" component="h3" color="primary">
        {Title}
      </Typography>
      <Typography variant="h5" component="p" color="primary">
        ({Year})
      </Typography>

      <OneDetail title="Movie produced in" content={`${Country} - (${Language})`} />
      <OneDetail title="Categories" content={Genre} />
      {/* <OneDetail title="Movie is about" content={Plot} /> */}
      <OneDetail title="Movie time" content={Runtime} />
      <OneDetail title="Rating"
        content={
          <Box>
            <Grid
              container
              spacing={1.5}
              alignItems="center"
              justifyContent="flex-start"
              ml={2.5}
            >
              <Box>
                <Typography component="span" variant="h6" >
                  {imdbRating}
                </Typography>
              </Box>
              <Box>
                <Rating
                  name="customized-10"
                  defaultValue={Number(imdbRating)}
                  precision={0.1}
                  max={10}
                  readOnly
                />
              </Box>
            </Grid>
          </Box>
        }
      />
      <Button
        fullWidth
        variant="contained"
        onClick={favFunc}
        color="primary"
        endIcon={isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        sx={{
          boxShadow: "none",
          ":hover": {
            boxShadow: shadows[2]
          }
        }}
      >
        {isFav ? "Remove From Favorite" : "Add To Favorite"}
      </Button>
    </Box>
  )
}

export default MovieDetails
