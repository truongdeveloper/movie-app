import { MovieItem, TVItem } from "@/Common/types";

export interface IMovieListComponent {
    listMovie?: MovieItem[],
    listTV?: TVItem[],
    index?: number,
    value?: number,
}