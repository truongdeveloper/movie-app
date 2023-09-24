import { COLORS } from "@/Constants";
import { Theme, createStyles } from "@mui/material";

const styles = (theme: Theme) => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: COLORS.bgMain2,
        padding: '6px',
        maxHeight: '420px',
        height: '100%',
        border: `1.5px solid ${COLORS.Transparent}`,
        borderRadius: '10px',
        gap: '0.5rem',

        '& img': {
            display: 'initial'
        },
        '& .image': {
            position: 'relative',
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                content: '""',
                width: '100%',
                height: '100%',
                zIndex: 1,
                transition: 'opacity .5s',
                background: 'linear-gradient(0deg,#a4bf43 0,rgba(164,191,67,0) 100%)',
                opacity: 0,
                borderRadius: '10px',
            },  
            '& .overlay-image': {
                position: 'absolute',
                opacity: 0,
                zIndex: 2,
                top: '50%',
                left: '50%',
                marginTop: '-2rem',
                marginLeft: '-2rem',
                transition: 'all 0.5s ease',
                '& svg': {
                    fontSize: '4rem',
                    color: COLORS.textSlogan
                }
            }
        },
        '&:hover': {
            border: `1.5px solid ${COLORS.bgSecond}`,
            '& .image': {

                '&::after': {
                    opacity: 1,
                },
                '& .overlay-image': {
                    opacity: 1,
                }
            }
        },
        '& .movie-item-info': {
            background: COLORS.bgMain,
            display: 'inline-flex',
            width: '100%',
            gap: '0.3rem',
            justifyContent: 'center',
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