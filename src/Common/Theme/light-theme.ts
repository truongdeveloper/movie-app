import { ThemeOptions, createTheme } from '@mui/material';

const lightThemeOption: ThemeOptions = {
    components: {
        MuiCssBaseline: {
            styleOverrides: {
            }
        }
    },
    palette: {
        mode: 'dark'
    }
};

export default lightThemeOption;