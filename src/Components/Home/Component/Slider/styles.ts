import { Theme, createStyles } from "@mui/material";

const styles = (theme: Theme) => createStyles({
    root: {
        '& .swiper-slide': {
            '&:before': {
                content: " ",
                width: '100%',
                height: '30%',
                zIndex: 1,
                display: 'block',
                top: 0,
                position: 'absolute',
                background: 'linear-gradient(0deg,#070b11 0,rgba(7,11,17,0) 0,#000 100%)',
            }
          }
    },

    SliderMovie: {
        
        '& .image-slider': {
            width: '100vw',
            height: '90vh',
            '&::before': {
                content: " ",
                width: '100%',
                height: '30%',
                zIndex: 1,
                display: 'block',
                top: 0,
                position: 'absolute',
                background: 'linear-gradient(0deg,#070b11 0,rgba(7,11,17,0) 0,#000 100%)',
            }
        }
    }
})
export default styles;