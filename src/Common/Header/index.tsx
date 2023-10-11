import { withStyles, WithStyles } from "@mui/styles";
import styles from './styles'
import { useEffect, useState } from "react";
import React from "react";
import { AppBar, Avatar, Backdrop, Box, colors, Divider, Fade, Modal, Slide, Switch, Toolbar } from "@mui/material";
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
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../api/config";
import { toast } from "react-toastify";
import { loginAction } from "@/Redux/actions";
import { getUserInfo } from "../stograte";

const HeaderComponent = (props: IHeaderComponent & WithStyles<typeof styles>) => {
    const {
        classes,    
    } = props;

    const router = useRouter();
    const dispatch = useDispatch()
    
    const theme = 'dark';
    const lang = router.locale;
    const login = useSelector((state: any) => state.login )
    // console.log(login)
    const handleLoginGoogle = () => {
        dispatch(loginAction.fetchLoginAccount({}))
        handleClose()
    }
    const userInfo = getUserInfo();
    // console.log(userInfo)

    const handleChangeLanguage = () => {
        const { pathname, asPath, query, locale, locales } = router;        
        router.push(
            { pathname, query },
            asPath,
            { locale: locales?.find(o => o!== locale) }
        );
    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                        <Link href={routerRoot.filter}>
                            <ButtonCustom
                                btn1
                                style={{color: COLORS.textSecond}}
                                iconStart={<FilterAltIcon/>}
                            >
                                {t('filter')}
                            </ButtonCustom>
                        </Link>
                        <input  type="text" placeholder={t('SearchPlaceHolder')} className="bg-transparent" />
                        <SearchIcon style={{color: COLORS.bgSecond}}/>
                        <Box className="result-search">
                            
                        </Box>
                    </Box>
                    <Box className="left-content">
                        <Box className="change-laguage"
                            sx={{
                                minWidth: '40px',
                            }}
                        >
                            {lang == 'vi'?
                                <ButtonCustom
                                    btn1
                                    onClick={handleChangeLanguage}
                                >
                                    VI
                                </ButtonCustom>
                                :
                                <ButtonCustom
                                    btn1
                                    onClick={handleChangeLanguage}
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
                        {login.isSuccess? 
                            <Avatar src={userInfo?.Photo}/>
                            :
                            <ButtonCustom
                                btn2
                                iconStart={
                                    <PersonIcon/>
                                }
                                onClick={handleOpen}
                            >
                                Login
                            </ButtonCustom>
                        }
                        
                    </Box>
                </Toolbar>
            </AppBar>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                disableScrollLock
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box className={classes.Modal}
                        sx={{
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <ButtonCustom btn2 style={{
                            width: '100%'
                        }}
                            onClick={handleLoginGoogle}
                        >
                            Đăng nhập bằng Google
                        </ButtonCustom>
                        <Divider />
                        <ButtonCustom btn2
                        style={{
                            width: '100%'
                        }}
                        disabled
                        >
                            Đăng nhập bằng Facebook
                        </ButtonCustom>
                        <Divider />
                        <ButtonCustom btn2 style={{
                            width: '100%'
                        }}
                        disabled>
                            Đăng nhập bằng Github
                        </ButtonCustom>
                    </Box>
                </Fade>
            </Modal>
        </Box>

    )
}

export default withStyles(styles)(HeaderComponent)