import axiosService from "@/Common/api/AxiosServices";
import { GET_DISCOVER_MOVIE, GET_DISCOVER_TV, GET_LIST_MOVIE_NOW, GET_LIST_POPULAR, GET_LIST_TOP_RATE, GET_TRENDING_ALL_DAY, GET_TRENDING_ALL_WEEK, GET_UP_COMING } from "@/Common/api/apiEndPoints";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: any) {
  const apiEndpoints = [
    GET_LIST_TOP_RATE.url,
    GET_LIST_MOVIE_NOW.url,
    GET_LIST_POPULAR.url,
    GET_UP_COMING.url,
    GET_TRENDING_ALL_DAY.url,
    GET_TRENDING_ALL_WEEK.url,
    GET_DISCOVER_MOVIE.url,
    GET_DISCOVER_TV.url,
  ];

  const apiPromises = apiEndpoints.map(url => axiosService({ url }));

  

  try {

    const responses = await Promise.all(apiPromises);
    const [
      TopRate,
      MovieNow,
      Popular,
      UpComing,
      TrendingDay,
      TrendingWeek,
      DiscoverMovie,
      DiscoverTV,
    ] = responses.map(response => response.results)

    return {
      props: {
        TopRate,
        MovieNow,
        Popular,
        UpComing,
        TrendingDay,
        TrendingWeek,
        DiscoverMovie,
        DiscoverTV,
        ...(await serverSideTranslations(locale, ['common'])),
      },
    };
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error('Đã xảy ra lỗi:', error);
    return {
      props: {
        // Trả về các giá trị mặc định hoặc thông báo lỗi khác nếu cần
      },
    };
  }
}
