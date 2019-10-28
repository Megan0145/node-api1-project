import * as types from './actionTypes';

const initState = {
    users: []
}

export function userReducer(state = initState, action){
    switch(action.type){
        case types.GET_USERS: 
            return {users: action.payload}
        default: 
        return state;
    }
}