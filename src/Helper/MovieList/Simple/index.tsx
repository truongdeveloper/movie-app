import { withStyles, WithStyles } from "@mui/styles";
import styles from './styles'
import { IMovieListComponent } from "./types";
import React from "react";
import { Box, Grid } from "@mui/material";
import { isEmpty, uniqueId } from "lodash";
import { MovieItem, TVItem } from "@/Common/types";
import MovieItemComponent from "@/Helper/MovieItem/Simple"


const MovieListComponent = (props: IMovieListComponent & WithStyles<typeof styles>) => {
    const {
        classes,
        index,
        value,
        listMovie,
        listTV,
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
                columnSpacing={1}   
                rowSpacing={2}
                alignItems={'stretch'}
                columns={{ xs: 4, sm: 8, md: 12 }}
                className={classes.root}>
                    {!isEmpty(listMovie) && listMovie?.map((item: MovieItem) => {
                        return(
                            <Grid
                                item
                                xs={2} sm={2} md={2}
                                key={uniqueId()}
                            >
                                <MovieItemComponent
                                    movieItem={item}
                                />
                            </Grid>
                        )
                    })}
                    {!isEmpty(listTV) && listTV?.map((item: TVItem) => {
                        return(
                            <Grid
                                item
                                xs={2} sm={2} md={2}
                                key={uniqueId()}
                            >
                                <MovieItemComponent
                                    tvItem={item}
                                />
                            </Grid>
                        )
                    })}

            </Grid>
        </Box>
    )
}

export default withStyles(styles)(MovieListComponent)