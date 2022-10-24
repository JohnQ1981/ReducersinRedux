import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = ()=>{
    return async  (dispatch)=>{
    //Bad Approach!!! we need to use middleware. use redux-thunk
    const response = await jsonPlaceholder.get('/posts')

    dispatch({type: 'FETCH_POSTS', payload:response})
};
};

