import { useTranslation } from 'next-i18next';
import Layout from '@/Common/Layout';
import { GetStaticProps } from 'next/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


function NotFound(props: any) {

    const {
    } = props;

    const {t} = useTranslation();
  return (
    <Layout>

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

export default NotFound;
