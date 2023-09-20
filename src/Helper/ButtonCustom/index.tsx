

import { Button } from "@mui/material";
import { IButtonCustom } from "./types"
import clsx from 'clsx';
import { WithStyles, withStyles } from '@mui/styles';
import styles from './styles';

const ButtonCustom = (props: IButtonCustom) => {
    const {
        className,
        style,
        children,
        iconStart,
        outline,
        btn1,
        btn2,
        iconEnd,
        onClick,
        sx,
        ...otherProps
    } = props;

    return(
        <Button
            className={
                clsx(
                    className,
                    'button-custom',
                )
            }
            style={{
                ...style,
            }}

            sx={{
                ...styles.buttonCustom,
                ...btn1 && styles.btn1,
                ...btn2 && styles.btn2,
                ...outline && styles.outline,
                ...sx
              
            }}
            onClick={onClick}
            {...otherProps}
        >
            {iconStart}
            {children}
            {iconEnd}
        </Button>
    )
}

export default ButtonCustom