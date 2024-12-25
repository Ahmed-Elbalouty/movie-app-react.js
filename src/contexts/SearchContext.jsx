import { createContext, useState } from "react";
// eslint-disable-next-line
export const SearchContext = createContext();

// eslint-disable-next-line
export const SearchContextProvider = ({ children }) => {
  const [searchWord, setSearchWord] = useState("spider man");
  const [movieList, setMovieList] = useState([]);

  const sharedValues = { searchWord, setSearchWord, movieList, setMovieList };
  return (
    <SearchContext.Provider value={sharedValues}>
      {children}
    </SearchContext.Provider>
  );
};