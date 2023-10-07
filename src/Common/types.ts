export interface ListMovie {
    dates: Dates
    page: number
    results: MovieItem[]
}
  
export interface Dates {
    maximum: string
    minimum: string
}
  
export interface MovieItem {
    adult: boolean
    backdrop_path: string   
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface ListTV {
    page: number
    results: TVItem[]
    total_pages: number
    total_results: number
  }
  
export interface TVItem {
    backdrop_path: string
    first_air_date: string
    genre_ids: number[]
    id: number
    name: string
    origin_country: string[]
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
}
  