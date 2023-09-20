import { withStyles, WithStyles } from "@mui/styles";
import styles from './styles'
import  Head from "next/head";
import { useTranslation } from 'next-i18next';
import Loading from "@/Helper/Loading";
import { Box } from "@mui/material";
import React from "react";
import HeaderComponent from "../Header"
import Footer from "../Footer";
import { Poppins } from "@next/font/google"
import { NextFont } from "@next/font";
import clsx from "clsx";

const poppins: NextFont = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const Layout = (props: ILayout & WithStyles<typeof styles>) => {
    const {
        classes,
        children,
        titlePage
    } = props;

    const {t} = useTranslation()

    return(
        <React.Fragment>
            <Head>
                    <title>{t(titlePage || 'titlePage')}</title>
                    <meta name="description"
                        content="Movie-app - Quality genuine movie site" />
                    <meta name="viewport"
                        content="width=device-width, initial-scale=1.0" />
                    <meta httpEquiv="Content-Security-Policy"
                        content="upgrade-insecure-requests"/> 
            </Head>
            <Loading>
                <main className={clsx(poppins.className, classes.root)}>
                    <HeaderComponent
                    />
                    
                    {children}
                    <Footer
                    />
                </main>
            </Loading>
        </React.Fragment>
    )
}

export default withStyles(styles)(Layout)