import { MovieItem } from "@/Common/types";

export interface IHomeComponent {
    TopRate: MovieItem[],
    MovieNow: MovieItem[],
    Popular: MovieItem[],
    UpComing: MovieItem[],
    TrendingDay: MovieItem[],
    TrendingWeek: MovieItem[],
    DiscoverMovie: MovieItem[],
    DiscoverTV: MovieItem[],
}