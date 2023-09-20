

import { Typography } from "@mui/material";
import { ITextCustom } from "./types"
import clsx from 'clsx';
import { WithStyles, withStyles } from '@mui/styles';
import styles from './styles';

const TextCustom = (props: ITextCustom) => {
    const {
        className,
        style,
        children,
        color,
        h1,
        h2,
        h3,
        textSM,
        colorLinear,
        sx,
        ...otherProps
    } = props;

    return(
        <Typography
            className={
                clsx(
                    className,
                    'text-custom',
                )
            }
            style={{
                ...style,
                color: color
            }}

            sx={{
                ...styles.textCustom,
                ...h1 && styles.h1,
                ...h2 && styles.h2,
                ...h3 && styles.h3,
                ...textSM && styles.textSM,
                ...colorLinear && styles.colorLinear,
                ...sx
            }}
            {...otherProps}
        >
            {children}
        </Typography>
    )
}

export default TextCustom