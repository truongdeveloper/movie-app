import { COLORS } from "@/Constants";

const styles = {
    buttonCustom: {
        backgroundColor: COLORS.bgSecond,
        borderRadius: '6px',
        textTransform: 'none',
        fontFamily: 'inherit',
        minWidth: 'fit-content',
        '&:hover':{
            backgroundColor: COLORS.bgHover,
            
        }
    },
    btn1: {
        '& .MuiSvgIcon-root': {
            fontSize: '16px',
        },
        padding: '5px 8px',
        fontSize: '10px',
    },

    btn2: {
        '& .MuiSvgIcon-root': {
            fontSize: '20px',
        },
        padding: '10px',
        fontSize: '20px',
    }
}
export default styles;