import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import StyledEngineProvider from '@mui/material/StyledEngineProvider';

const theme = createTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#7a7a7a',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: "#00aec9",
        },
        text: {
            primary: "#919191",
            secondary: "#b5bea4",
        },
        background: {
            default: "#111111",
            paper: "#1e1e1e"
        }
    }
});

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <StyledEngineProvider injectFirst>
           <App />
          </StyledEngineProvider>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
