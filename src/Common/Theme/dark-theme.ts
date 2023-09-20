import { ThemeOptions } from '@mui/material';

const darkThemeOption: ThemeOptions = {
    components: {
        MuiCssBaseline: {
            styleOverrides: {
            }
        }
    },
    palette: {
        primary: {
            main: '#131e2e',

        },
        secondary: {
            main: '#131e2e'
        },
        background: {
            default: '#070b11'
        },
        text: {
            primary: '#e9ecef',
            secondary: '#565c67'
        }

    }
};

export default darkThemeOption;