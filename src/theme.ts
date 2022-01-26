import {createTheme} from '@mui/material/styles';
import "typeface-roboto";

// A custom theme for this app
export const theme = createTheme({
    palette: {
        mode: 'light'
    },
    typography: {
        fontFamily: [
            'roboto',
            'arial',
            'sans-serif'
        ].join(',')
    }
});