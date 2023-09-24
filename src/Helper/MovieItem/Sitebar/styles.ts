import { COLORS } from "@/Constants";
import { Theme, createStyles } from "@mui/material";

const styles = (theme: Theme) => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '6px',
        height: '100%',
        border: `1.5px solid ${COLORS.Transparent}`,
        borderRadius: '10px',
        gap: '0.5rem',

        '& .image': {
            overfow: 'hidden',
            minWidth: '50px',
        },
        '&:hover': {
            background: COLORS.bgMain2,
            border: `1.5px solid ${COLORS.bgSecond}`,
        },

        '& .movie-item-info': {
            display: 'inline-flex',
            width: '100%',
            gap: '0.3rem',
            alignItems: 'center',
            borderRadius: '5px',
            '& svg': {
                fontSize: '5px',
                color: COLORS.textMuted,
            }
        }
    }
})
export default styles;