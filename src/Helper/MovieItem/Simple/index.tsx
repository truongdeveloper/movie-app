import { withStyles, WithStyles } from "@mui/styles";
import styles from './styles'
import { IMovieItemComponent } from "./types";
import React from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { hightImg } from "@/Common/api/getImg";
import TextCustom from "@/Helper/TextCustom";
import CircleIcon from '@mui/icons-material/Circle';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import Link from "next/link";
import { routerRoot } from "@/Common/routerRoot";
import { isEmpty } from "lodash";


const MovieItemComponent = (props: IMovieItemComponent & WithStyles<typeof styles>) => {
    const {
        classes,
        movieItem,
        tvItem
    } = props;

    return(
        <Box className={classes.root}>
            <Link href={`${routerRoot.movie}/${movieItem?.id || tvItem?.id}`} className="image">
                <Image height={500} width={500}
                style=
                {{
                    overflow: 'hidden',
                    borderRadius: '10px',
                }}
                objectFit="cover"
                src={hightImg(movieItem?.poster_path || tvItem?.poster_path)} 
                alt="Poster" />
                <Box component={'div'}
                    className={'overlay-image'}
                >
                    <PlayArrowRoundedIcon/>
                </Box>
            </Link>

            <Box className="movie-item-info">
                <TextCustom textSM>
                    Movie
                </TextCustom>
                <CircleIcon/>
                <TextCustom textSM>

                {movieItem?.release_date? 
                    movieItem.release_date?.slice(0,4) 
                    :
                    tvItem?.first_air_date?.slice(0,4)
                }
                </TextCustom>
                <CircleIcon/>
                <TextCustom textSM>
                    {movieItem?.vote_average || tvItem?.vote_average}
                </TextCustom>   
            </Box>
            <Link href={`${routerRoot.movie}/${movieItem?.id || tvItem?.id}`}>
                <TextCustom
                    h3
                    style={{
                        height: '2.8rem',
                    }}
                >
                    {movieItem?.title || tvItem?.name}
                </TextCustom>
            </Link>

        </Box>
    )
}

export default withStyles(styles)(MovieItemComponent)