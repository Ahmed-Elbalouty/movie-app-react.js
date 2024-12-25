import { Card, CardMedia, Fab } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useContext } from "react";
import { FavListContext } from "../../../contexts/FavListContext";

// eslint-disable-next-line
function MoviePoster({ isFav, favFunc }) {
  const { movieObject } = useContext(FavListContext);
  return (
    <Card sx={{ position: "relative", borderRadius: 3 }}>
      <Fab color="primary" onClick={favFunc} aria-label="add" sx={{ position: "absolute", top: "10px", left: "10px" }}>
        {isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </Fab>
      <CardMedia src={movieObject.Poster} component="img" />
    </Card>
  )
}

export default MoviePoster
