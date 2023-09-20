import { useTranslation } from 'next-i18next';
import Layout from '@/Common/Layout';
import { Box } from '@mui/material';
import { MovieItem } from '@/Common/types';
import { getStaticProps } from '@/libs/query/home';
import HomeComponent from '../Components/Home';


export {getStaticProps}

function NotFound(props: any) {

    const {
    } = props;

    const {t} = useTranslation();
  return (
    <Layout>

    </Layout>
   
  )
}

export default NotFound;
