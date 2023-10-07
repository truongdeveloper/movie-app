export function hightImg(pathImg: string | undefined) {
    return `https://image.tmdb.org/t/p/original${pathImg}`;
}
export function lowImg(pathImg: string | undefined) {
    return `https://image.tmdb.org/t/p/w500${pathImg}`;
}
export function veryLowImg(pathImg: string | undefined) {
    return `https://image.tmdb.org/t/p/w200${pathImg}`;
}