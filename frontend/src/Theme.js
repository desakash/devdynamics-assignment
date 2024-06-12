import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Adjust primary color as needed
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #ccc',
        },
      },
      defaultProps: {
        indicatorColor: 'primary',
      },
    },
  },
});

export default theme;
