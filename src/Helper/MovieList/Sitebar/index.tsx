import { withStyles, WithStyles } from "@mui/styles";
import styles from './styles'
import { IMovieListSitebarComponent } from "./types";
import React from "react";
import { Box, Grid } from "@mui/material";
import { isEmpty, uniqueId } from "lodash";
import { MovieItem } from "@/Common/types";
import MovieItemSitebarComponent from "@/Helper/MovieItem/Sitebar"


const MovieListSitebarComponent = (props: IMovieListSitebarComponent & WithStyles<typeof styles>) => {
    const {
        classes,
        index,
        value,
        listMovie
    } = props;

    return(
        <Box
            component={'div'}
            hidden={value !== index}
            role="tabpanel"
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            <Grid
                container
                spacing={0.2}
                direction={'column'}
                className={classes.root}>
                    {!isEmpty(listMovie) && listMovie.map((item: MovieItem) => {
                        return(
                            <Grid
                                item
                                key={uniqueId()}
                            >
                                <MovieItemSitebarComponent
                                    movieItem={item}
                                />
                            </Grid>
                        )
                    })}

            </Grid>
        </Box>
    )
}

export default withStyles(styles)(MovieListSitebarComponent)