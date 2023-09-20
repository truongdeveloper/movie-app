import { GET } from "@/Constants/constants";
import { API_KEY, BASE_URL } from "./config";

// ========= GET LIST ======== //
export const GET_LIST_TOP_RATE = {
    key: '/top-rate',
    url: BASE_URL +`/movie/top_rated?${API_KEY}`,
    method: GET,
}

export const GET_LIST_MOVIE_NOW = {
    key: '/top-rate',
    url: BASE_URL + `/movie/now_playing?${API_KEY}`,
    method: GET,
}

export const GET_LIST_POPULAR = {
    key: '/top-rate',
    url: BASE_URL + `/movie/popular?${API_KEY}`,
    method: GET,
}

export const GET_UP_COMING = {
    key: '/top-rate',
    url: BASE_URL + `/movie/upcoming?${API_KEY}`,
    method: GET,
}

// =============== Trending ============//

export const GET_TRENDING_ALL_DAY = {
    key: '/top-rate',
    url: BASE_URL + `/trending/all/day?${API_KEY}`,
    method: GET,
}

export const GET_TRENDING_ALL_WEEK = {
    key: '/top-rate',
    url: BASE_URL + `/trending/all/week?${API_KEY}`,
    method: GET,
}

// ============ DISCOVER ============= //

export const GET_DISCOVER_MOVIE = {
    key: '/top-rate',
    url: BASE_URL + `/discover/movie?${API_KEY}`,
    method: GET,
}

export const GET_DISCOVER_TV = {
    key: '/top-rate',
    url: BASE_URL + `/discover/tv?${API_KEY}`,
    method: GET,
}
