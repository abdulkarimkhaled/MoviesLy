import payload from "./payload"
import { requestAction } from "../actions/Actions"

//     serviceUrl: URLs,
//     requestMethod: "POST" | "GET" | "PUT" | "DELETE",
//     body?: Object, //for post body
//     urlParams?: String, //for get params
//     navigationType?: "replace" | "navigate" | "back" | "reset",
//     navigateTo?: Navigators,
//     setHeader?: true | false,
//     extraData?: JSON,
//     nextAction?: Function,
//     presist?: true | false, //if true will save response in presist
//     reducerVariable: String,  //save reducer
//     page?: Number,  //for pages
//     noToast?: true | false,
//     reducerVariableID?: String,
//     nextActionFailed?: Function

export function searchMovieByName(urlParams) {
    return requestAction(
        payload({
            serviceUrl: 'SEARCH',
            requestMethod: 'GET',
            setHeader: true,
            reducerVariable: 'SearchList',
            urlParams
        }),
    );
}

export function getPopularMovies() {
    return requestAction(
        payload({
            serviceUrl: 'POPULAR',
            requestMethod: 'GET',
            setHeader: true,
            reducerVariable: 'PopularList',
        }),
    );
}

export function getUpcomingMovies() {
    return requestAction(
        payload({
            serviceUrl: 'UPCOMING',
            requestMethod: 'GET',
            setHeader: true,
            reducerVariable: 'UpcomingList',
        }),
    );
}

export function getTopRatedMovies() {
    return requestAction(
        payload({
            serviceUrl: 'TOP_RATED',
            requestMethod: 'GET',
            setHeader: true,
            reducerVariable: 'TopRatedList',
        }),
    );
}

export function getMovieDetails(urlParams) {
    return requestAction(
        payload({
            serviceUrl: 'MOVIE_DETAILS',
            requestMethod: 'GET',
            setHeader: true,
            reducerVariable: 'MovieDetails',
            urlParams
        }),
    );
}

export function saveMoviePresist(body) {
    return requestAction(
        payload({
            serviceUrl: 'SAVE',
            requestMethod: 'GET',
            reducerVariable: 'Favorites',
            body
        }),
    );
}