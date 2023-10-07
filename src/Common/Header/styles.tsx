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
    },

    Modal: {
        position: 'absolute',
        top: '30%',
        left: '50%',
        width: 400,
        backgroundColor: COLORS.white,
        boxShadow: 24,
        borderRadius: 10,
        padding: '20px 25px',
        gap: '2rem',
    }
})
export default styles;