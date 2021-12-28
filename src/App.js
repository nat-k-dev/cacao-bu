import Logo from "./components/logo/logo";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';

import './App.css';

function App() {

  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#0971f1',
        darker: '#053e85',
      },
      neutral: {
        main: '#FFC0CB',
        contrastText: '#fff',
      },
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        
        <div className="app__logo">
          <Logo />
        </div>
        <Container 
            sx={{
              width: '100vw',
              height: '100vh',
              backgroundColor: 'pink'
            }}
        >.</Container>
        <Container 
            sx={{
              width: '100vw',
              height: '100vh',
              backgroundColor: 'lightblue'
            }}
        >.</Container>
        <Container 
            sx={{
              width: '100vw',
              height: '100vh',
              backgroundColor: 'pink'
            }}
        >.</Container>
      </div>
    </ThemeProvider>

  );
}

export default App;
