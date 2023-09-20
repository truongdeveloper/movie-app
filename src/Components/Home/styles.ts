import { Theme, createStyles } from "@mui/material";

const styles = (theme: Theme) => createStyles({
    root: {

        '& .head': {
            display: 'inline-flex',
            alignItems: 'center',
        }
    }
})
export default styles;