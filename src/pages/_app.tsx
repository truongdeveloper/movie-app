
import darkThemeOption from '@/Common/Theme/dark-theme';
import configureStore from '@/Redux/configureStore';
import '@/styles/globals.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const darkTheme = createTheme(darkThemeOption)
const store = configureStore();


function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default appWithTranslation(App)

