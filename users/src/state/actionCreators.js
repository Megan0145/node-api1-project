import axios from 'axios';
import * as types from './actionTypes';

export const getUsers = () => dispatch => {
    axios.get('http://localhost:5000/api/users')
    .then(res => {
        dispatch({
            type: types.GET_USERS, payload: res.data
        })
    })
    .catch(err => {
        console.log(err)
    })
}

export const deleteUser = (id) => dispatch => {
    axios.delete(`http://localhost:5000/api/users/${id}`)
    .then(res => {
        dispatch({
            type: types.DELETE_USER, payload: res.data.id
        })
    })
    .catch(err => console.log(err))
}