import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import logo from '../../logo.png';


const Logo = () => {
  const theme = createTheme({
    typography: {
        fontFamily: [
            'Montserrat',
            'Tahoma',
            'sans-serif'
        ].join(',')
        
    }
  });

  return (
      <Box 
        sx={{ 
            display: 'flex',
            alignItems: 'center',
            gap: 3,
            p: 1,
            width: 'max-content'
        }}
      >
        <ThemeProvider theme={theme}>
            <Box
                component="img"
                sx={{
                    maxHeight: { 
                        lg: 92,
                        sm: 80,
                        xs: 40
                    },
                    maxWidth: { 
                        lg: 92,
                        sm: 80,
                        xs: 40
                    }
                }}
                alt="logo"
                src={logo}
            />
            
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ 
                    fontSize: {
                        lg: 30,
                        sm: 25,
                        xs: 20
                    }
                 }}
            >
                cacao•bu
            </Typography>
            
        </ThemeProvider>
      </Box>
  );
};
export default Logo;