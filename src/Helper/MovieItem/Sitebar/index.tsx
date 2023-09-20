import { withStyles, WithStyles } from "@mui/styles";
import styles from './styles'
import { IMovieListComponent } from "./types";
import React from "react";
import { Box, Grid } from "@mui/material";


const MovieListSitebarComponent = (props: IMovieListComponent & WithStyles<typeof styles>) => {
    const {
        classes,
        movieItem,
    } = props;

    return(
        <Box className={classes.root}>

        </Box>
    )
}

export default withStyles(styles)(MovieListSitebarComponent)