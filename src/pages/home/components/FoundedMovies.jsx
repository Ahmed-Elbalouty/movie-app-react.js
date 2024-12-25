import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import MovieCard from "./MovieCard";
import { useContext, useEffect } from "react";
import { SearchContext } from "../../../contexts/SearchContext";
import Loader from "../../../components/Loader";
import ErrorMsg from "../../../components/ErrorMsg";
import useFetch from "../../../Hooks/useFetch";

function FoundedMovies() {
  const { searchWord, movieList, setMovieList } = useContext(SearchContext);
  const { isLoading, error, performFetch } = useFetch()

  useEffect(() => {
    if (searchWord) {
      const url = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${searchWord}`
      performFetch(url).then(data => { if (data) { setMovieList(data.Search) } });
    }
    // eslint-disable-next-line
  }, [searchWord]);

  useEffect(() => {
    if (error) {
      setMovieList([])
    }

    // eslint-disable-next-line
  }, [error]);

  return (
    <Box py={3}>
      {error && <ErrorMsg error={error} />}
      {isLoading && <Loader />}
      <Grid
        container
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
          gap: 2,
        }}
      >
        {movieList.map((movie) => (
          <Box key={movie.imdbID}>
            <MovieCard movieObject={movie} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default FoundedMovies;
