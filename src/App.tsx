import './App.css'
import ExampleGrid from './components/ExampleGrid'
import Header from './components/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from 'react';
import useLocalizeDocumentAttributes from "../public/i18n/useLocalizeDocumentAttributes";



function App() {

  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  useLocalizeDocumentAttributes();

  const theme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light', //handle the dark mode state on toggle 
      primary: {
        main: '#90caf9'
      },
      secondary: {
        main: '#131052'
      }
    }
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Header toggleColorModeChange={toggleDarkTheme} />
        <ExampleGrid />
      </ThemeProvider>

    </>
  )
}

export default App
