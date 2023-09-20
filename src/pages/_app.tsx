
import darkThemeOption from '@/Common/Theme/dark-theme';
import '@/styles/globals.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const darkTheme = createTheme(darkThemeOption)

function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={darkTheme}>
        <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={true}
            closeOnClick
            pauseOnHover
            theme="light"
            limit={1}
            newestOnTop={false}
            rtl={false}
            pauseOnFocusLoss={false}
        />
        <CssBaseline/>
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(App)

