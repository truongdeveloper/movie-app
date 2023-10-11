import { useTranslation } from 'next-i18next';
import Layout from '@/Common/Layout';
import { Box } from '@mui/material';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


function Movie(props: any) {

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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {

        props: {
            ...(await serverSideTranslations(locale!, ['common'])),
        },
    };
};
export async function getStaticPaths() {
    return {
      paths: String,    
      fallback: true
    }
  }
export default Movie;
