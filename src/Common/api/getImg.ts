export function hightImg(pathImg: string) {
    return `https://image.tmdb.org/t/p/original${pathImg}`;
}
export function lowImg(pathImg: string) {
    return `https://image.tmdb.org/t/p/w500${pathImg}`;
}
export function veryLowImg(pathImg: string) {
    return `https://image.tmdb.org/t/p/w200${pathImg}`;
}