import { useTranslation } from 'next-i18next';
import Layout from '@/Common/Layout';
import { Box } from '@mui/material';
import { MovieItem } from '@/Common/types';
import { getStaticProps } from '@/libs/query/home';
import HomeComponent from '../Components/Home';


export {getStaticProps}

function Home(props: any) {

    const {
        TopRate,
        MovieNow,
        Popular,
        UpComing,
        TrendingDay,
        TrendingWeek,
        DiscoverMovie,
        DiscoverTV,
    } = props;

    const {t} = useTranslation();
  return (
    <Layout>
        <HomeComponent
            TopRate={TopRate}
            MovieNow={MovieNow}
            Popular={Popular}
            UpComing={UpComing}
            TrendingDay={TrendingDay}
            TrendingWeek={TrendingWeek}
            DiscoverMovie={DiscoverMovie}
            DiscoverTV={DiscoverTV}
        
        />
    </Layout>
   
  )
}

export default Home;
