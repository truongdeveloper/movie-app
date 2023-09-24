import { COLORS } from "@/Constants";

const styles = {
    TabsCustom: {
        borderRadius: '4px',
        fontSize: '0.85rem',
        textTransform: 'none',
        marginBottom: '1px',
        fontWeight: '400',
        minWidth: 'fit-content',
        minHeight: 'fit-content', 
        padding: '5px',
        border: `1px solid #00000000`,
        fontFamily: 'inherit',
        justifyContent: 'flex-start',

        '&:hover': {
            border: `1px solid ${COLORS.bgPrimary}`,
        }

    },

    TabCustom: {
        alignItems: 'center',

        '& .MuiTabs-flexContainer': {
            gap: '0.3rem',
        },
        '& 	.MuiTabs-indicator': {
            display: 'none',
        },

        '& .Mui-selected': {
            color: `${COLORS.white} !important`,
            backgroundColor: COLORS.bgPrimary,
            border: `1px solid ${COLORS.bgPrimary}`,
        }
    }
}
export default styles;