import { useTranslation } from 'next-i18next';
import Layout from '@/Common/Layout';
import { Box } from '@mui/material';


function NotFound(props: any) {

    const {
    } = props;

    const {t} = useTranslation();
  return (
    <Layout>
        <Box>
            Movie
        </Box>
    </Layout>
   
  )
}

export default NotFound;
