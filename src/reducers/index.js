import { combineReducers } from 'redux';

const usersReducer = (users=[],action) => {
    if(action.type === 'GET_USERS'){
        return action.payload;
    }
    return users;
};

const postsReducer = (posts=[],action) => {
    if(action.type === 'GET_POSTS'){
        return action.payload;
    }
    return posts;
};

export default combineReducers({
    users:usersReducer,
    posts:postsReducer
});