import { withStyles, WithStyles } from "@mui/styles";
import React from "react";
import {Swiper, SwiperSlide } from "swiper/react";
import { Navigation,EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Image from "next/image";
import { hightImg } from "@/Common/api/getImg";
import { ISliderComponent } from "./types";
import styles from "./styles";
import { Box } from "@mui/material";
import { isEmpty, uniqueId } from "lodash";
import { MovieItem } from "@/Common/types";


const SliderComponent = (props: ISliderComponent & WithStyles<typeof styles>) => {
    const {
        classes,
        Popular
    } = props;
    return(
        <Box className={classes.root}>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay
                effect={'fade'}
                loop
                speed={500}
                modules={
                    [Navigation,
                    EffectFade]
                }
            >
                {!isEmpty(Popular) && Popular.map((items: MovieItem) => {
                   return(
                        <SwiperSlide key={uniqueId()}>
                            <Box className={classes.SliderMovie}>
                                <Box className="image-slider">
                                    <Image objectFit="cover" fill src={hightImg(items.backdrop_path)} alt="poster"/>
                                </Box>
                                
                            </Box>
                        </SwiperSlide>
                   ) 
                })}
               
            </Swiper>
        </Box>
    )
}

export default withStyles(styles)(SliderComponent)