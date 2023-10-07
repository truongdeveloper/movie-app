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
import { isEmpty } from "lodash";


const MovieItemSitebarComponent = (props: IMovieItemSitebarComponent & WithStyles<typeof styles>) => {
    const {
        classes,
        movieItem,
        tvItem
    } = props;
    
    let item: any;

    if(isEmpty(movieItem)){
        item = tvItem;
    }else{
        item = movieItem;
    }

    return(
        <Link href={`${routerRoot.movie}/${item?.id}`} className={classes.root}>
            <Box  className="image">
                <Image height={38} width={38}
                style=
                {{
                    overflow: 'hidden',
                    borderRadius: '8px',
                }} 
                objectFit="cover" src={lowImg(item?.poster_path)} alt="Poster" />
            </Box>
            <Box>
                <Box className="movie-item-info">
                    <TextCustom textSM>
                        Movie
                    </TextCustom>
                    <CircleIcon/>
                    <TextCustom textSM>
                        {/* {item.release_date.slice(0,4)} */}
                        HD
                    </TextCustom>
                    <CircleIcon/>
                    <TextCustom textSM>
                        {item?.vote_average}
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
                    {
                        item?.title || item?.name
                    }
                </TextCustom>
            </Box>
        </Link>
    )
}

export default withStyles(styles)(MovieItemSitebarComponent)