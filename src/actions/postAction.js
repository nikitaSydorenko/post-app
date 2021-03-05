import {POSTS_FETCH_SUCCESS} from "../types/types";


export const  postFetchSuccess = (posts) => {
    return {
        type: POSTS_FETCH_SUCCESS,
        payload: posts
    }
}

export const postFetch = (urlApiGetUsers) => {
    return (dispatch) => {
        fetch(urlApiGetUsers)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(response => response)
            .then(posts => dispatch(postFetchSuccess(posts)))
    }
}