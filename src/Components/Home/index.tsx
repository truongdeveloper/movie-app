import { withStyles, WithStyles } from "@mui/styles";
import styles from './styles'
import { IHomeComponent } from "./types";
import React, { useState } from "react";
import {Swiper, SwiperSlide } from "swiper/react";
import { Navigation,EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import SliderComponent from "./Component/Slider";
import { Box, Grid } from "@mui/material";
import TextCustom from "@/Helper/TextCustom";
import TabsCustom from "@/Helper/TabsCustom";
import { ListTabs } from "@/Helper/TabsCustom/types";


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
    const listTabs = [
        {
            title: 'Movies',
            value: 1,
            icon: undefined
        },
        {
            title: 'TV Shows',
            value: 2,
            icon: undefined
        },
        {
            title: 'Trending',
            value: 3,
            icon: ''
        }
    ]

    return(
        <Box className={classes.root}>
            <SliderComponent
                Popular={Popular}
            />
            <Grid
                container
            >
                <Grid
                    item
                >
                    <Box className="list-recommened head">
                        <TextCustom colorLinear h2>
                            Recommened
                        </TextCustom>
                        <TabsCustom
                            value={value}
                            setValue={setValue}
                            listTabs={listTabs}
                        />
                    </Box>

                </Grid>
                <Grid
                    item
                >
                    
                </Grid>
            </Grid>
            
        </Box>
    )
}

export default withStyles(styles)(HomeComponent)