import { createTheme } from "@mui/material";
import { darkShadows, lightShadows } from "./shadows";
import { darkModePalette, lightModePalette } from "./palette";

export const lightTheme = createTheme({
  palette:lightModePalette,
  shadows: darkShadows
});
export const darkTheme =createTheme({
  palette:darkModePalette,
  shadows: lightShadows
});