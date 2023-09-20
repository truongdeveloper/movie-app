import { withStyles, WithStyles } from "@mui/styles";
import styles from './styles'
import { IMovieListComponent } from "./types";
import React from "react";
import { Box, Grid } from "@mui/material";


const MovieListComponent = (props: IMovieListComponent & WithStyles<typeof styles>) => {
    const {
        classes,
        index,
        value,
        listMovie
    } = props;

    return(
        <Grid
            hidden={value !== index}
            className={classes.root}>


        </Grid>
    )
}

export default withStyles(styles)(MovieListComponent)