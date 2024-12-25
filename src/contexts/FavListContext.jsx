import { createContext, useState } from "react";

// eslint-disable-next-line
export const FavListContext = createContext();
// eslint-disable-next-line
export const FavListContextProvider = (({ children }) => {
  const [favList, setFavList] = useState([]);
  const [movieObject, setMovieObject] = useState(null);

  const sharedValues = { favList, setFavList, movieObject, setMovieObject };

  return <FavListContext.Provider value={sharedValues}>{children}</FavListContext.Provider>
});