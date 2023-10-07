import { withStyles, WithStyles } from "@mui/styles";
import styles from './styles'
import { IHomeComponent } from "./types";
import React, { useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import SliderComponent from "./Component/Slider";
import { Box, Grid } from "@mui/material";
import TextCustom from "@/Helper/TextCustom";
import TabsCustom from "@/Helper/TabsCustom";
import MovieListComponent from "@/Helper/MovieList/Simple"
import MovieListSitebarComponent from "@/Helper/MovieList/Sitebar"
import { useTranslation } from "react-i18next";

const HomeComponent = (props: IHomeComponent & WithStyles<typeof styles>) => {
    const {
        classes,
        TopRate,
        MovieNow,
        Popular,
        UpComing,
        TrendingDay,
        TrendingWeek,
        DiscoverMovie,
        DiscoverTV,
    } = props;

    const [value, setValue] = useState<number>(1);
    const [valueSitebar, setValueSitebar] = useState<number>(1);

    const { t } = useTranslation();

    const listTabs = [
        {
            title: t('movies'),
            value: 1,
            icon: undefined
        },
        {
            title: t('tvShows'),
            value: 2,
            icon: undefined
        },
        {
            title: t('trending'),
            value: 3,
            icon: ''
        }
    ]

    const listTabsSitebar = [
        {
            title: t('day'),
            value: 1,
            icon: undefined
        },
        {
            title: t('weeks'),
            value: 2,
            icon: undefined
        },
    ]

    return(
        <Box className={classes.root}>
            <SliderComponent
                Popular={Popular}
            />
            <Grid
                container
                padding={1.5}
                // columns={{ xs: 4, sm: 8 }}
                spacing={3.5}
            >
                <Grid
                    item
                    sm={12}
                    md={9.6}
                >
                    <Box className="list-recommened head">
                        <TextCustom colorLinear h2>
                            {t('recommened')}
                        </TextCustom>
                        <TabsCustom
                            value={value}
                            setValue={setValue}
                            listTabs={listTabs}
                        />
                    </Box>
                    <MovieListComponent
                        value={value}
                        index={1}
                        listMovie={TopRate}
                    />
                    <MovieListComponent
                        value={value}
                        index={2}
                        listMovie={MovieNow}
                    />
                    <MovieListComponent
                        value={value}
                        index={3}
                        listMovie={UpComing}
                    />
                    <Box className="list-discover-movie head">
                        <TextCustom colorLinear h2>
                            {t('discoverMovie')}
                        </TextCustom>
                    </Box>
                    <MovieListComponent
                        listMovie={DiscoverMovie}
                    />
                    <Box className="list-discover-tv head">
                        <TextCustom colorLinear h2>
                            {t('discoverTV')}
                        </TextCustom>
                    </Box>
                    <MovieListComponent
                        listTV={DiscoverTV}
                    />
                </Grid>
                <Grid
                    item
                    sm={0}
                    md={2.4}
                    style={{
                        width: '100%',
                    }}
                >
                    <Box className="list-most-view head">
                        <TextCustom colorLinear h2
                            style={{
                                padding: '0 20px 0 0',
                                minWidth: '170px',
                            }}
                        >
                            {t('mostView')}
                        </TextCustom>
                        <TabsCustom
                            value={valueSitebar}
                            setValue={setValueSitebar}
                            listTabs={listTabsSitebar}
                        />
                    </Box>
                    <MovieListSitebarComponent
                        value={valueSitebar}
                        index={1}
                        listMovie={TrendingDay}
                    />
                    <MovieListSitebarComponent
                        value={valueSitebar}
                        index={2}
                        listMovie={TrendingWeek}
                    />
                </Grid>
            </Grid>
            
        </Box>
    )
}

export default withStyles(styles)(HomeComponent)