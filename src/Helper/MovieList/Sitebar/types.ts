import { MovieItem } from "@/Common/types";

export interface IMovieListComponent {
    listMovie: MovieItem[],
    index?: number,
    value?: number,
}