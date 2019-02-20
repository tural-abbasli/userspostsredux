export const getUsers = users =>{
    return {
        type:'GET_USERS',
        payload:users
    };
};

export const getPosts = posts =>{
    return{
        type:'GET_POSTS',
        payload: posts
    };
};