import { MovieItem } from "@/Common/types";

export interface IMovieListSitebarComponent {
    listMovie: MovieItem[],
    index?: number,
    value?: number,
}