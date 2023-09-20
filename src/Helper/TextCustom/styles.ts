import { COLORS } from "@/Constants";

const styles = {
    textCustom: {
        fontFamily: 'inherit',
        lineHeight: '1.2rem',
    },
    h1: {
        fontWeight: 600,
        fontSize: '2rem',
        marginRight: '1rem'
    },

    h2: {
        fontWeight: 600,
        fontSize: '1.5rem',
        marginRight: '1rem'
    },

    h3: {
        fontWeight: 400,
        fontSize: '1rem',
        marginRight: '1rem'
    },

    textSM: {
        fontWeight: 400,
        fontSize: '0.875rem',
    },

    colorLinear: {
        background : COLORS.textLinear,
        backgroundClip: 'text',
        textFillColor: 'transparent',
    },

}
export default styles;