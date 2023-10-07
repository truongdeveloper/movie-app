import { MovieItem, TVItem } from "@/Common/types";

export interface IMovieListSitebarComponent {
    listMovie?: MovieItem[],
    listTV?: TVItem[],
    index?: number,
    value?: number,
}