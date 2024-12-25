import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import SwitchTheme from './components/SwitchTheme'
import { Box, Container, ThemeProvider } from '@mui/material'
import { darkTheme, lightTheme } from './theme/theme'
import { useState } from 'react'
import { SearchContextProvider } from "./contexts/SearchContext";
import { FavListContextProvider } from './contexts/FavListContext'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Box bgcolor={"background.body"} minHeight="100vh">
        <Header />
        <Container>
          <SwitchTheme value={isDarkMode} setValue={setIsDarkMode} />
          <SearchContextProvider>
            <FavListContextProvider>
              <Outlet />
            </FavListContextProvider>
          </SearchContextProvider>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
