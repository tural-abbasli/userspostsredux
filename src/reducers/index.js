import { combineReducers } from 'redux';
import axios from 'axios';

const usersReducer = async (users=[]) => {
    return await axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        return users = res.data;
    });
};

const postsReducer = async (posts=[]) => {
    return await axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        return posts = res.data;
    });
};

export default combineReducers({
    users:usersReducer,
    posts:postsReducer
});