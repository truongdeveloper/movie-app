import { withStyles, WithStyles } from "@mui/styles";
import styles from './styles'


const FooterComponent = (props: IFooterComponent & WithStyles<typeof styles>) => {
    const {

    } = props;

    return(
        <>
            Footer
        </>
    )
}

export default withStyles(styles)(FooterComponent)