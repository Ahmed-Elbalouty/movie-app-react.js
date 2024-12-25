import { Card, CardActionArea, CardContent, CardMedia, Typography, useTheme } from "@mui/material";
import "./movie-card.css"
import { useNavigate } from "react-router-dom";
import wait from "../../../utils/wait";
/* eslint-disable react/prop-types */
function MovieCard({ movieObject }) {
  const { Title, Year, imdbID, Type, Poster } = movieObject
  const { shadows } = useTheme();
  const navigate = useNavigate();

  async function navigateToMovieDetails() {
    await wait(400);
    navigate(`/movie/${imdbID}`);
  }
  return (
    <CardActionArea className="movie-card" onClick={navigateToMovieDetails}>
      <Card sx={{
        height: "400px", position: "relative", borderRadius: "10px", overflow: "hidden",
        ":hover": {
          boxShadow: shadows[4]
        }
      }}>
        <CardMedia component="img" sx={{ width: "100%", objectFit: "cover", height: "100%", borderRadius: "10px" }} src={Poster} alt={Title} />
        <CardContent className="movie-content" sx={{ position: "absolute", bottom: "0", width: "100%", backgroundColor: "background.cardContent" }}>
          <Typography variant="h6" color="text.primary" fontWeight="bold">{Title}</Typography>
          <Typography variant="h6" color="text.primary">{Type}</Typography>
          <Typography variant="h6" color="text.primary"   >{Year}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  )
}
export default MovieCard;