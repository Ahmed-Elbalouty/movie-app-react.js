import { Box, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from "react";
import { SearchContext } from "../../../contexts/SearchContext";
import lodash from "lodash";

function SearchBar() {
  const { setSearchWord } = useContext(SearchContext);
  function handleChange(e) {
    setSearchWord(e.target.value);
  }
  const debounce = lodash.debounce(handleChange, 500)
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }} >
      <SearchIcon fontSize="large" sx={{ mr: 2 }} color="primary" />
      <TextField id="standard-basic" label="Search About Movies" variant="standard" fullWidth onChange={debounce} />
    </Box>
  )
}

export default SearchBar
