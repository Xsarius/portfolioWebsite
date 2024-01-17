import { createTheme } from "@mui/material";

const Theme = createTheme({
    palette: {
      primary: {
        dark: '#17191c',
        main: '#17191c',
        light: '#4d4f53',
      },
      secondary: {
        dark: '#b22727',
        main: '#ff3838',
        light: '#ff5f5f',
      },
      text: {
        primary: '#dfe6e9',
        secondary: '#dfe6e9'
      },
      background: {
        paper: '#212428'
      }
    },
    typography: {
      fontFamily: [
        'Consolas',
        'monospace'
      ].join(",")
    }
  
  });

  export default Theme;