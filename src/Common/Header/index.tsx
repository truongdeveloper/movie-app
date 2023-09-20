import { withStyles, WithStyles } from "@mui/styles";
import styles from './styles'
import { useEffect, useState } from "react";
import React from "react";
import { AppBar, Avatar, Box, colors, Switch, Toolbar } from "@mui/material";
import { COLORS } from "@/Constants";
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";
import { routerRoot } from "../routerRoot";
import { useTranslation } from "react-i18next";
import ButtonCustom from "@/Helper/ButtonCustom";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useRouter } from "next/router";

const HeaderComponent = (props: IHeaderComponent & WithStyles<typeof styles>) => {
    const {
        classes
    } = props;

    const router = useRouter();
    
    const theme = 'dark';
    const lang = router.locale;

    const { t } = useTranslation();
    return(
        <Box className={classes.root}>
            <AppBar
                position="absolute"
                sx={{
                    background: 'linear-gradient(#000000,#0000002e)',
                    boxShadow: 'none',
                }}
            >
                <Toolbar style={{justifyContent: 'space-between'}}>
                    <Box className="right-content">
                        <MenuIcon/>
                        <Link href={routerRoot.home}>
                            <GitHubIcon/>
                        </Link>
                    </Box>
                    
                    <Box className={classes.Search} sx={{color: 'black'}}>
                        <ButtonCustom
                            btn1
                            style={{color: COLORS.textSecond}}
                            iconStart={<FilterAltIcon/>}
                        >
                            {t('filter')}
                        </ButtonCustom>
                        <input  type="text" placeholder={t('SearchPlaceHolder')} className="bg-transparent" />
                        <SearchIcon style={{color: COLORS.bgSecond}}/>
                        <Box className="result-search">
                        </Box>
                    </Box>
                    <Box className="left-content">
                        <Box className="change-laguage">
                            {lang == 'vi'?
                                <ButtonCustom
                                    btn1
                                >
                                    VI
                                </ButtonCustom>
                                :
                                <ButtonCustom
                                    btn1
                                >
                                    ENG
                                </ButtonCustom>
                            }
                        </Box>
                        <Box className="toggle-theme">
                            {theme=='dark'?
                                <DarkModeIcon/>
                                :
                                <LightModeIcon/>
                            }
                        </Box>
                        
                        <Avatar>VT</Avatar>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>

    )
}

export default withStyles(styles)(HeaderComponent)