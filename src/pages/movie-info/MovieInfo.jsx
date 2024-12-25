import { Box } from "@mui/material"
import Grid from "@mui/material/Grid2"
import MovieDetails from "./components/MovieDetails"
import MoviePoster from "./components/MoviePoster"
import useFetch from "../../Hooks/useFetch"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../../components/Loader"
import ErrorMsg from "../../components/ErrorMsg"
import { FavListContext } from "../../contexts/FavListContext"

function MovieInfo() {
  const { isLoading, error, performFetch } = useFetch();
  const { favList, setFavList, movieObject, setMovieObject } = useContext(FavListContext);
  const [isFav, setIsFav] = useState(false);

  function removeAddToFavList() {
    const IsMovieInFavList = favList.some(movie => movie.imdbID === movieId);
    if (IsMovieInFavList) {
      setIsFav(false);
      setFavList(prev => prev.filter(movie => movie.imdbID !== movieId));
    } else {
      setIsFav(true);
      setFavList(prev => [...prev, movieObject]);
    }
  }

  const { movieId } = useParams();
  useEffect(() => {
    const url = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&i=${movieId}`;
    performFetch(url).then(data => setMovieObject(data));
    const IsMovieInFavList = favList.some(movie => movie.imdbID === movieId);
    if (IsMovieInFavList) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }

    return () => setMovieObject(null);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMsg error={error} />}
      {movieObject &&
        <Box mt={3}>
          <Grid container spacing={3} justifyContent="center">
            <Box md={5}><MoviePoster isFav={isFav} favFunc={removeAddToFavList} image={movieObject.Poster} /></Box>
            <Box md={7}><MovieDetails isFav={isFav} favFunc={removeAddToFavList} details={movieObject} /> </Box>
          </Grid>
        </Box>
      }
    </>
  )
}

export default MovieInfo
