import { withStyles, WithStyles } from "@mui/styles";
import styles from './styles'


const HeaderComponent = (props: IHeaderComponent & WithStyles<typeof styles>) => {
    const {

    } = props;

    return(
        <>
            Header
        </>
    )
}

export default withStyles(styles)(HeaderComponent)