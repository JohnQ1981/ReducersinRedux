import jsonPlaceholder from "../apis/jsonPlaceholder";
export const fetchPosts = async()=>{
    //Bad Approach!!! we need to use middleware.
    const response = await jsonPlaceholder.get('/posts')
    
    return {
        type: 'FETCH_POSTS',
        payload: response
    };
};