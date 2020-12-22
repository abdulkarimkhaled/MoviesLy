/* App config for apis
 */

export type URLs =
    "BASE_URL" | "SEARCH" | "POPULAR" | "UPCOMING" | "TOP_RATED" | "MOVIE_DETAILS" | ""

const ApiConstants = {
    BASE_URL: 'https://api.themoviedb.org/3/',
    SEARCH: 'search/movie?query=',
    POPULAR: 'movie/popular',
    UPCOMING: 'movie/upcoming',
    TOP_RATED: 'movie/top_rated',
    MOVIE_DETAILS: 'movie/',
    SAVE: ''
};

export default ApiConstants;
