import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
    },
  });

export default function Message() {
  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs" >
    
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding:'15px'
         
        }}
      >


    <Card sx={{ minWidth: 350,padding:'20px' }}>
      <CardContent>
        <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
         Thank You
        </Typography>
        <Typography variant="h5" component="div">
Your Details are saved Successfully!        </Typography>
      
      </CardContent>
     
    </Card>
    </Box>
    </Container>
    </ThemeProvider>
  );
}