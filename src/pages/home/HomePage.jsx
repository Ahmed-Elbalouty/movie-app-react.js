import { Box } from "@mui/material"
import SearchBar from "./components/SearchBar"
import FoundedMovies from "./components/FoundedMovies"

function HomePage() {
  return (
    <>
      <Box>
        <SearchBar />
        <FoundedMovies />
      </Box>
    </>
  )
}

export default HomePage
