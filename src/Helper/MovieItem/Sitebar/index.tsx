import { withStyles, WithStyles } from "@mui/styles";
import styles from './styles'
import { IMovieItemSitebarComponent } from "./types";
import React from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { hightImg, lowImg } from "@/Common/api/getImg";
import TextCustom from "@/Helper/TextCustom";
import CircleIcon from '@mui/icons-material/Circle';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import Link from "next/link";
import { routerRoot } from "@/Common/routerRoot";


const MovieItemSitebarComponent = (props: IMovieItemSitebarComponent & WithStyles<typeof styles>) => {
    const {
        classes,
        movieItem,
    } = props;

    return(
        <Link href={`${routerRoot.movie}/${movieItem.id}`} className={classes.root}>
            <Box  className="image">
                <Image height={38} width={38}
                style=
                {{
                    overflow: 'hidden',
                    borderRadius: '8px',
                }} 
                objectFit="cover" src={lowImg(movieItem.poster_path)} alt="Poster" />
            </Box>
            <Box>
                <Box className="movie-item-info">
                    <TextCustom textSM>
                        Movie
                    </TextCustom>
                    <CircleIcon/>
                    <TextCustom textSM>
                        {/* {movieItem.release_date.slice(0,4)} */}
                        HD
                    </TextCustom>
                    <CircleIcon/>
                    <TextCustom textSM>
                        {movieItem.vote_average}
                    </TextCustom>   
                </Box>
                <TextCustom
                    h3
                    style={{
                        height: '2rem',
                        textAlign: 'start',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        minWidth: '0px',
                        maxWidth: '170px',

                    }}
                >
                    {movieItem.title}
                </TextCustom>
            </Box>
        </Link>
    )
}

export default withStyles(styles)(MovieItemSitebarComponent)