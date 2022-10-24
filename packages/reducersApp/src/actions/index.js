import jsonPlaceholder from "../apis/jsonPlaceholder";
export const fetchPosts = ()=>{
    //Bad Approach!!! we need to use middleware.
    const promise =  jsonPlaceholder.get('/posts')

    return {
        type: 'FETCH_POSTS',
        payload: promise
    };
};