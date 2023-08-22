import { withStyles, WithStyles } from "@mui/styles";
import styles from './styles'
import  Head from "next/head";
import { useTranslation } from 'next-i18next';



const Layout = (props: ILayout & WithStyles<typeof styles>) => {
    const {
        titlePage
    } = props;

    const {t} = useTranslation()

    return(
        <Head>
                <title>{t(titlePage || 'titlePage')}</title>
                <meta name="description"
                    content="Movie-app - Quality genuine movie site" />
                <meta name="viewport"
                    content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="Content-Security-Policy"
                    content="upgrade-insecure-requests"/> 
                <link rel="icon"
                    href="/favicon.ico" />
        </Head>
    )
}

export default withStyles(styles)(Layout)