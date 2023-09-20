import { COLORS } from "@/Constants";
import { Theme, createStyles } from "@mui/material";

const styles = (theme: Theme) => createStyles({
    root: {

        '& .right-content': {
            display: 'inline-flex',
            gap: '2rem'
        },

        '& .left-content': {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            '& .MuiSwitch-colorPrimary': {
                color: COLORS.bgPrimary
            },
        }
    },


    Search: {
        display: 'inline-flex',
        alignItems: 'center',
        border: `1px solid ${COLORS.textSecond}`,
        borderRadius: '10px',
        padding: '4px',
        width: '480px',
        '& input': {
            width: '100%',
            textAlign: 'center',
            color: COLORS.textSlogan,
            '&:focus': {
                outline: 'none',
            },

            '&::placeholder': {
                textAlign: 'center',
                color: COLORS.textMuted,
                fontSize: '13px'
            }
        }
    }
})
export default styles;