import axios from 'axios';
import * as types from './actionTypes';

export const getUsers = () => dispatch => {
    axios.get('http://localhost:5000/api/users')
    .then(res => {
        console.log(res)
        dispatch({
            type: types.GET_USERS, payload: res.data
        })
    })
    .catch(err => {
        console.log(err)
    })
}